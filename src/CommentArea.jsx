import { Component } from "react";
// import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    FullComment: [],
  };
  fetchHandle = async () => {
    console.log("id", this.props.AsinTopass);
    const IdToFetch = this.props.AsinTopass;
    const UrlToFetch = "https://striveschool-api.herokuapp.com/api/comments/" + IdToFetch;
    try {
      const data = await fetch(UrlToFetch, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MGI4MWEyNDc4ZDAwMTNhMDU4MzAiLCJpYXQiOjE2NzU5NTUwNzMsImV4cCI6MTY3NzE2NDY3M30.9i7Z6TP-t6qUDiiGgmrSCgc06XPX0Li5RrhGQTG8oZU",
        },
      });
      if (data.ok) {
        const SingleComment = await data.json();
        console.log("SingleComment", SingleComment);
        this.setState({
          FullComment: SingleComment,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchHandle();
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.AsinTopass !== this.props.AsinTopass) {
      this.fetchHandle();
    }
  }
  render() {
    console.log("redner CommentArea");
    return (
      <>
        {this.state.FullComment.length > 0 ? (
          <div className="CommentContainer">
            {this.state.FullComment.map((person, i) => (
              <div key={person._id}>
                <p>Author: {person.author}</p>
                <p>Comment: {person.comment}</p>
                <p>Rate: {person.rate}</p>
              </div>
            ))}
          </div>
        ) : (
          <h6>select a book to read comments</h6>
        )}
      </>
    );
  }
}

export default CommentArea;
