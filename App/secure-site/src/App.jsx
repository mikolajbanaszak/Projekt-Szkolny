import { useState } from "react";

// react bootstrap
import { Button, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Table } from "react-bootstrap";

// dane
import users from "../../../Data/uzytkownicy.json";
import logs from "../../../Data/logowane.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container
        style={{ maxWidth: "100%" } /*Domyślnie bootstrap ustawia na 50% */}
      >
        <Row>
          <Col sm={4}>
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
          <Col sm={8}>
            {/* miejsce na wykresy itp. */}
            <img
              src="https://cdn.hinative.com/attached_images/646616/56ac8602dfaf7f9161106d97aba57a86d18e1e21/large.jpg?1598107797"
              alt="r"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
