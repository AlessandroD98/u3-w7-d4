import { Component } from "react";
import { Row, Container } from "react-bootstrap";
import SingleBook from "./SingleBook";

class Booklist extends Component {
  state = {
    NameOfBook: "",
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
          {this.props.books
            .filter((book) => {
              return book.title.toLowerCase().includes(this.state.NameOfBook.toLowerCase());
            })
            .map((book) => (
              <SingleBook key={book.asin} booktopass={book} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default Booklist;
