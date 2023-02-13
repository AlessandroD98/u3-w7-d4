import { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";

class Booklist extends Component {
  state = {
    NameOfBook: "",
    AsinTopass: null,
  };

  setTheAsin = (value) => {
    this.setState({ AsinTopass: value });
  };

  filterBookList(e) {
    this.setState({ NameOfBook: e.target.value });
  }
  render() {
    return (
      <Container>
        <Row>
          <h2>Search for a book</h2>
          <input type="text" onChange={(event) => this.filterBookList(event)} className="my-4" />
          <Col lg={9}>
            <Row>
              {this.props.books
                .filter((book) => {
                  return book.title.toLowerCase().includes(this.state.NameOfBook.toLowerCase());
                })
                .map((book) => (
                  <SingleBook key={book.asin} booktopass={book} setTheAsin={this.setTheAsin} />
                ))}
            </Row>
          </Col>
          <Col lg={3} className="CommentArea">
            <h2>Comments Area</h2>
            <CommentArea AsinTopass={this.state.AsinTopass} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Booklist;
