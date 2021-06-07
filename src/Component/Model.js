import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { movieData } from "./MovieData";

const Model = ({ MovieData, setMovies }) => {
  const [imgurl, setImgurl] = useState("");
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addmovie = () => {
    const newmovie = {
      imgUrl: imgurl,
      Title: title,
      Rate: Number(rate),
      Description: description,
    };
    setMovies([...movieData, newmovie]);
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="text"
              placeholder="url"
              onChange={(e) => {
                setImgurl(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="text"
              placeholder="rate"
              onChange={(e) => {
                setRate(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addmovie}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Model;
