import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import { addSpecial } from '../actions/specialActions';

class SpecialForm extends Component {
  state ={ ad_title: '', ad_text: '', special_number: 0 }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const special = this.state;
    dispatch(addSpecial(special));
    this.setState({ ad_title: '', ad_text: '' })
  };

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  };
  
  render() {

    const { ad_title, ad_text} = this.state;

    return(
      <Segment>
        <Header as='h1' textAlign='center'>Add a Special to your list</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Ad Title</label>
            <input
              required
              id='ad_title'
              value={ad_title}
              placeholder='title'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Ad Text</label>
            <input
              required
              id='ad_text'
              value={ad_text}
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
