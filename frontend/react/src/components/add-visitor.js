import React, { Component } from 'react';
import axios from 'axios';

export default class addVisitor extends Component {
  constructor(props) {
    super(props);
    this.onChangephone = this.onChangephone.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      phone: '',
    };
  }
  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangephone(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const visitor = {
      name: this.state.name,
      phone: this.state.phone,
    };
    console.log(visitor);
    axios
      .put(`http://localhost:4000/add/${visitor.name}/${visitor.phone}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          name: '',
          phone: '',
        });
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <label for='inputEnamemail4'>Name</label>
              <input
                type='name'
                class='form-control'
                id='name'
                value={this.state.name}
                onChange={this.onChangename}
              />
            </div>
            <div class='form-group col-md-6'>
              <label for='phone'>Phone</label>
              <input
                type='phone'
                class='form-control'
                id='phone'
                value={this.state.phone}
                onChange={this.onChangephone}
              />
            </div>
          </div>

          <button type='submit' class='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
