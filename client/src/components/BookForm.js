import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import { useQuery, useMutation } from "@apollo/client";
import { getAuthor } from "../graphql-client/queries";
import { getBooks } from "../graphql-client/queries";
import { addSingleBook } from "../graphql-client/mutation";

export default function BookForm() {
  const [newBook, setNewBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const { name, genre, authorId } = newBook;

  const inputChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //variables as in BookDetails
    //variables as in Forms
    addBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooks }],
    });
    //delete the file and set again the object
    setNewBook({ name: "", genre: "", authorId: "" });
  };

  //GraphQL operations
  const { loading, error, data } = useQuery(getAuthor);

  const [addBook, dataMutation] = useMutation(addSingleBook);

  console.log(dataMutation, "dataMutation");
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Book name"
          name="name"
          onChange={inputChange}
          value={newBook.name}
        />
      </Form.Group>
      <hr />
      <Form.Group>
        <Form.Control
          type="text"
          name="genre"
          placeholder="Book genre"
          onChange={inputChange}
          value={newBook.genre}
        />
      </Form.Group>
      <hr />
      <Form.Group>
        {loading ? (
          <p>Loading authors ...</p>
        ) : (
          <Form.Control
            as="select"
            name="authorId"
            onChange={inputChange}
            value={newBook.authorId}
          >
            <option value="" disabled>
              Select author
            </option>
            {data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </Form.Control>
        )}
      </Form.Group>
      <hr />
      <Button className="float-right" variant="info" type="submit">
        Add book
      </Button>
    </Form>
  );
}
