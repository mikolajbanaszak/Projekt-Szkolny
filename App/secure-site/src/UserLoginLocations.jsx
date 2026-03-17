import logs from "../../../Data/logowane.json";
import users from "../../../Data/uzytkownicy.json";

import {
  ResponsiveContainer,
  BarChart,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function GetData(userId) {
  const city = users
    .filter((u) => u.id == userId)
    .map((u) => u.miejsce_zamieszkania);

  console.log(city);
  const suspicous_logins = logs
    .filter((l) => l.id == userId && l.lokalizacja != city)
    .map((l) => l.data);

  console.log(suspicous_logins);
  const user_logins = logs.map((l) => {
    const obj = suspicous_logins.includes(l.data)
      ? {
          date: new Date(l.data).toLocaleString(),
          sus: 100,
          not: 0,
        }
      : { date: new Date(l.data).toLocaleString(), sus: 0, not: 50 };
    return obj;
  });
  console.log(user_logins);
  const json_result = JSON.stringify(user_logins);
  const first_hundred = user_logins.slice(0, 100);
  return first_hundred;
}

const GetUserName = (userId) => {
  const userName = users
    .filter((u) => u.id == userId)
    .map((u) => `${u.name} ${u.last_name}`);
  return userName;
};

function UserLoginLocations() {
  const { userId } = useParams();
  return (
    <>
      {/* <h1>{GetData(userId)}</h1> */}

      <Container>
        <Row>
          <Col sm={2}>
            <h1>{GetUserName(userId)}</h1>
            <h3>Logowania w godzinach</h3>
          </Col>
          <Col sm={10}>
            <ResponsiveContainer
              aspect={1.618}
              height={"80%"}
              width={"80%"}
              style={{ maxWidth: 2400, maxHeight: 1200, margin: "auto" }}
            >
              <BarChart
                data={GetData(userId)}
                margin={{
                  top: 50,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  fill="#EAEFEF"
                  stroke="#BFC9D1"
                />
                <Tooltip
                  cursor={{
                    stroke: "#00ffff",
                  }}
                  contentStyle={{
                    backgroundColor: "#37529c",
                    borderColor: "#37529c",
                  }}
                />
                <XAxis dataKey="date" stroke="red" />
                <YAxis width="auto" stroke="blue" />
                <Legend />
                <Bar dataKey="sus" barSize={10} fill="red" />
                <Bar dataKey="not" barSize={10} fill="blue" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserLoginLocations;
