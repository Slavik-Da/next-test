import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: null,

    };
  }
  myChangeHandler = (event) => {
    let ttl = event.target.title;
    let bd = event.target.body;

    this.setState({[ttl]: bd});
  }

  render() {
    return (
      <form>
        <h1>Hello {this.state.title} {this.state.body}</h1>
        <p>Enter post name:</p>
        <input
          type='text'
          name='title'
          onChange={this.myChangeHandler}
        />
        <p>Enter post text:</p>
        <input
          type='text'
          name='body'
          onChange={this.myChangeHandler}
        />
      </form>
    );
  }
}
