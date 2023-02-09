import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    NewComment: null,
  };
  render() {
    return (
      <Form>
        <Form.Group className="my-3">
          <Form.Label>Add a comment</Form.Label>
          <Form.Control type="text" placeholder="Comment" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    );
  }
}

export default AddComment;
