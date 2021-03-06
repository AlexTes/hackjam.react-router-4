import React, {Component} from 'react';
import axios from 'axios';

export class BookDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {
        id: 0,
        title: '',
        category: '',
      },
    };
  }

  componentDidMount() {
    this.fetchBook(this.props.match.params.bookId);
  }

  fetchBook = (id) => {
    axios.get(`http://localhost:5000/books/${id}`).then((response) => {
      this.setState({
        book: response.data,
        bookTitle: response.data.title,
      });
    });
  };

  update = (event) =>
    this.setState({
      book: {
        ...this.state.book,
        title: event.target.value
      }
    });

  save = () => {
    const {id, category, title} = this.state.book;
    axios.put(`http://localhost:5000/books/${id}`, {
      id, category, title,
    }).then(() => {
      this.fetchBook(this.props.match.params.bookId);
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const {book} = this.state;
    return (
      book ?
        <div className="row">
          <h2>{book.title} details!</h2>
          <div>
            <label>id: </label>{book.id}</div>
          <div>
            <label>Title: </label>
            <input value={this.state.book.title} onChange={this.update} placeholder="title"/>
          </div>
          <button className="btn" onClick={this.goBack}>Back</button>
          <button className="btn" onClick={this.save}>Save</button>
        </div>
        :
        <div />
    );
  }
}
