import { useParams } from "react-router-dom";
import logs from "../../../Data/logowane.json";
import users from "../../../Data/uzytkownicy.json";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Container, Row, Col, Button } from "react-bootstrap";

const GetData = (userId) => {
  const result = logs
    .filter((l) => l.id == userId)
    .map((l) => {
      const hour = new Date(l.data).getHours();
      console.log(hour);
      return hour;
    })
    .sort((a, b) => a - b);
  // sort generalnie dziala na stringach
  // wiec trzeba zrobic takie porownanie
  const activity = result.reduce((acc, hour) => {
    acc[hour] = (acc[hour] || 0) + 1;
    return acc;
  }, {});

  const user_login_hours = Object.entries(activity).map((a) => {
    return { hour: a[0], num_of_logs: a[1] };
  });

  const json_result = JSON.stringify(user_login_hours);

  return user_login_hours;
};

const GetUserName = (userId) => {
  const userName = users
    .filter((u) => u.id == userId)
    .map((u) => `${u.name} ${u.last_name}`);
  return userName;
};

function UserLoginHours() {
  const { userId } = useParams();
  return (
    <>
      <Container>
        <Row>
          <Col sm={3}>
            <h1>{GetUserName(userId)}</h1>
            <h3>Liczba wszystkich logowań w danych godzinach</h3>
          </Col>
          <Col sm={9}>
            <ResponsiveContainer
              aspect={1.618}
              style={{ maxWidth: 1000, margin: "auto" }}
            >
              <LineChart data={GetData(userId)}>
                <CartesianGrid
                  fill="#EAEFEF"
                  stroke="#BFC9D1"
                  strokeDasharray="5 5"
                />
                <XAxis dataKey="hour" stroke="#F5F2F2" />
                <YAxis stroke={"#F5F2F2"} />

                <Tooltip
                  cursor={{
                    stroke: "dodgerblue",
                  }}
                  contentStyle={{
                    backgroundColor: "#696969",
                    borderColor: "#696969",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="num_of_logs"
                  stroke={"#b30000"}
                  dot={{ fill: "#b30000" }}
                  activeDot={{ stroke: "#8b0000" }}
                />
              </LineChart>
              <Legend />
              <Legend />
            </ResponsiveContainer>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <Button variant="primary" href="/">
              Back to Admin
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserLoginHours;
