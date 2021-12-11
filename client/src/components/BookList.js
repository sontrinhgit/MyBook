import React, {  useState } from "react";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { BookDetails } from "./BookDetails";

import { useQuery } from "@apollo/client";
import { getBooks } from "../graphql-client/queries";

const BookList = () => {

    const [bookSelected, setBookSelected] = useState(null)

  const { loading, error, data } = useQuery(getBooks);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error ...</p>;

  console.log(data);

  return (
    <Row>
      <Col sm={8}>
        <CardGroup>
          <Card border="info" text="info" className="text-center shadow">
            <Card.Body>Ky nghe lay tay</Card.Body>
          </Card>
          {data.books.map((book) => (
            <Card border="info" text="info" className="text-center shadow" key={book.id} onClick={setBookSelected.bind(this, book.id)}>
              <Card.Body >{book.name}</Card.Body>
            </Card>
          ))}
        </CardGroup>
      </Col>
      <Col>
        <BookDetails bookSelected={bookSelected} />
      </Col>
    </Row>
  );
};

export default BookList;
