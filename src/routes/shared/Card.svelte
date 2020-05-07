<script>
  import {
    Button, Card, CardBody, CardFooter, CardHeader,
    CardImg, CardSubtitle, CardText, CardTitle,
    Col, Container, Row
  } from "sveltestrap";
  export let list
</script>

<Card class="mb-3">
  <CardHeader>
    <CardTitle>{list.first_name} {list.last_name}</CardTitle>
  </CardHeader>
  <CardBody>
    <Row>
        <Col md="2"><img src={list.avatar} alt=""></Col>
        <Col>
            <p>First Name : {list.first_name}</p>
            <p>Last Name : {list.last_name}</p>
            <p>Email : {list.email}</p>
        </Col>
    </Row>
  </CardBody>
</Card>