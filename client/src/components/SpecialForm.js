import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

class Special extends Component {
  state ={ title: '', ß}

  handleSubmit = (e) {

  };

  handleChange = (e) {

  };
  
  render() {
    return(
      <Segment>
        <Header as='h1' textAlign='center'>Add a Special to your list</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <input
              required
              id='title'
              value={title}
              placeholder='title'
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      </Segment>
    )
  }
};

export default connect()(Special);
