import { useState } from "react";

// react bootstrap
import { Button, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Table } from "react-bootstrap";
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

// dane
import users from "../../../Data/uzytkownicy.json";
import logs from "../../../Data/logowane.json";

function App() {
  const [count, setCount] = useState(0);
  const GetData = () => {
    const dane = logs.map((d) => ({
      id: d.id,
      data: new Date(d.data).getDate(),
    }));

    // const suspicious = logs.map((d) => {
    //   //const hour = new Date(d.data).getHours();
    //   return d.lokalizacja == "Teheran"
    //     ? { data: new Date(d.data).getDate() }
    //     : null;
    // });
    const suspicious = logs
      .filter((d) => d.lokalizacja == "Teheran")
      .map((d) => ({ id: d.id, data: new Date(d.data).getDate() }));

    const counts = suspicious.reduce((acc, item) => {
      acc[item.data] = (acc[item.data] || 0) + 1;
      return acc;
    }, {});

    const result = Object.entries(counts).map(([data, count]) => ({
      data: Number(data),
      count,
    }));

    //return JSON.stringify(result);
    console.log(dane);
    return result;
  };

  return (
    <>
      <Container
        style={{ maxWidth: "100%" } /*Domyślnie bootstrap ustawia na 50% */}
      >
        <Row>
          <Col sm={6}>
            <Table striped>
              <thead>
                <tr>
                  <th>id</th>
                  <th>imię</th>
                  <th>nazwisko</th>
                  <th>miejsce zamieszkania</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => {
                  console.log(u.name);
                  return (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.name}</td>
                      <td>{u.last_name}</td>
                      <td>{u.miejsce_zamieszkania}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col>
            <ResponsiveContainer
              aspect={1.618}
              style={{ maxWidth: 1200, margin: "auto" }}
            >
              <LineChart data={GetData()}>
                <CartesianGrid
                  fill="#EAEFEF"
                  stroke="#BFC9D1"
                  strokeDasharray="5 5"
                />
                <XAxis dataKey="data" stroke="#25343F" />
                <YAxis stroke={"#25343F"} />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke={"#FF9B51"}
                  dot={{ fill: "#FF9B51" }}
                  activeDot={{ stroke: "#ff6f00" }}
                />
              </LineChart>
              <Legend />
            </ResponsiveContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
