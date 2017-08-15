import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Grid, List, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import paper from '../assets/paper.jpg'
import SpecialForm from './SpecialForm';
import { getSpecials } from '../actions/specialActions'
const styles = {
    mainBackground: {
    backgroundImage: `url(${paper})`,
    backgroundRepeat: `no-repeat`,
    backgroundPostiion: `center center`,
    backgroundSize: 'cover'
  }, 
}


class Services extends Component {

  state ={ oldSpecialOne: '', oldSpecialTwo: '', oldSpecialThree: '', special_number: '' }  
  
  componentDidMount() {
    this.props.dispatch(getSpecials());
  }

  handleChange = (e) => {

  }

  handleSubmit = (e) => {

  }

  isSiteOwner = () => {
    const { user } = this.props;
    if(user.id){
      return(
        <SpecialForm />

      )
    } else {
      {}
    }

}

  specialDropdown = (specialNumber) => {
    const { user } = this.props;
    if(user.id){
      return(
        
          <Form onSubmit={this.handleSubmit}>
            <label>
              Choose a Special:
              <select value={this.state.special_number} onChange={this.handleChange}>
                <option disabled>Choose a Special</option>
                return(
                  {this.props.specials.map( (special) => (
                  <option key={special.id} value={special.id}>{special.ad_title}, {special.ad_text}</option>
                  ))}
                );
              </select>
            </label>
            <Form.Button content="Update site with special" type="submit" value="Submit" />
          </Form>
        
      )
  } else {
    {}
  }
  }

  render() {
    return (
      <Segment style={styles.mainBackground}>
        <Header textAlign='center' as='h2'>
          Specials
        </Header>
        { this.isSiteOwner() }
        
        <Grid>
          <Grid.Row  columns={3}>
            <Grid.Column>
              special 1 (wed specials)
            </Grid.Column>
            <Grid.Column>
              special 2 (morning specials 7am -12 ish)
            </Grid.Column>
            <Grid.Column>
              special 3 (weekend warrior special)
            </Grid.Column>     
          </Grid.Row>
          <Grid.Row>
            <Header textAlign='center' as='h3'>
                Rates and Fees
            </Header> 
          </Grid.Row>
          <Grid.Row>
            <List>
              <List.Item> 60 minutes $60 </List.Item>
              <List.Item> 90 minutes $90 </List.Item>
              <List.Item> 2 hours $120 </List.Item>
            </List>
            <br />
            </Grid.Row>
            <Grid.Row>
            Depending on special requests additional fees may apply.  Please discuss all requests when scheduling your appointment.
            Please be aware that we currently only send therapists to verified residential and business addresses.  
            
          </Grid.Row>
          <Grid.Row textAlign='center' divided columns={2}>
            <Grid.Column>
              <Header as='h3'>
                Relaxation:
              </Header>
                <List>
                  <List.Item as='a'><Link to='/swedish'>Swedish</Link></List.Item>
                  <List.Item as='a'><Link to='/cranial'>Cranial Sacral</Link></List.Item>
                  <List.Item as='a'><Link to='/shiatsu'>Shiatsu</Link></List.Item>
                  <List.Item as='a'><Link to='/acupressure'>Acupressure</Link></List.Item>
                  <List.Item as='a'><Link to='/reflexology'>Reflexology</Link></List.Item>
                  <List.Item as='a'><Link to='/deeptissue'>Deep Tissue</Link></List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
              <Header as='h3'>
              Rehabilitative:
              </Header>
                <List>
                <List.Item as='a'><Link to='/sportsmassage'>Sports Massage</Link></List.Item>
                <List.Item as='a'><Link to='/structural'>Structural Integration</Link></List.Item>
                <List.Item as='a'><Link to='/triggerpoint'>Trigger Point Therapy</Link></List.Item>
                <List.Item as='a'><Link to='/russian'>Russian</Link></List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Segment> 
    )
   
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    specials: state.specials,
  }
}

export default connect(mapStateToProps)(Services);