import { Col, Row, Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className="p-3">
      <section>
        <Row>
          <Col
            sm={12}
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <img src="/campos.png" alt="Campos dos Goytacazes" />
          </Col>
          <Col
            sm={12}
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            2
          </Col>
          <Col
            sm={12}
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            3
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Home;
