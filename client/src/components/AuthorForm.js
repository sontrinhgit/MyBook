import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { useMutation } from "@apollo/client";
import { getAuthor } from "../graphql-client/queries";

import { addSingleAuthor } from "../graphql-client/mutation";

export default function AuthorForm() {
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    age: "",
  });

  const { name, age } = newAuthor;

  const inputChange = (event) => {
    setNewAuthor({
      ...newAuthor,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //variables as in BookDetails
    //variables as in Forms
    addAuthor({
      variables: { name, age: parseInt(age) },
      refetchQueries: [{ query: getAuthor }],
    });
    //delete the file and set again the object
    setNewAuthor({ name: "", age: "" });
  };

  //GraphQL operations

  const [addAuthor, dataMutation] = useMutation(addSingleAuthor);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="invisible">
        <Form.Control></Form.Control>
      </Form.Group>
      <hr />
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Author name"
          name="name"
          onChange={inputChange}
          value={name}
        />
      </Form.Group>
      <hr />
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Author age"
          name="age"
          onChange={inputChange}
          value={age}
        />
      </Form.Group>

      <hr />
      <Button className="float-right" variant="info" type="submit">
        Add author
      </Button>
    </Form>
  );
}
