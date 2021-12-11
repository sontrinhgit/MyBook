import React from "react";
import { Row, Col } from "react-bootstrap";

import BookForm from "./BookForm";
import AuthorForm from "./AuthorForm";

export const Forms = () => {
  return (
    <Row>
      <Col>
        <BookForm />
      </Col>
      <Col>
        <AuthorForm />
      </Col>
    </Row>
  );
};
