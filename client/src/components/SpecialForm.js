import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

class SpecialForm extends Component {
  state ={ adTitle: '', adText: '' }

  handleSubmit = (e) {

  };

  handleChange = (e) {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  };
  
  render() {

    const { adTitle, adText } = this.state;

    return(
      <Segment>
        <Header as='h1' textAlign='center'>Add a Special to your list</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Ad Title</label>
            <input
              required
              id='adTitle'
              value={adTitle}
              placeholder='title'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Ad Text</label>
            <input
              required
              id='adText'
              value={adText}
              placeholder='text'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button primary type='submit'>Add Advertisement</Button>
        </Form>
      </Segment>
    )
  }
};

export default connect()(SpecialForm);
