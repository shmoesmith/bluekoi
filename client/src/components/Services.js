import React from 'react';
import { Segment, Header, Grid, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
const Services = () => (
  <Segment>
    <Header textAlign='center' as='h2'>
      Specials
    </Header>
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
        <Segment>
          <Header textAlign='center' as='h3'>
            Rates and Fees
          </Header> 
            <List>
              <List.Item> 60 minutes $60 </List.Item>
              <List.Item> 90 minutes $90 </List.Item>
              <List.Item> 2 hours $120 </List.Item>
            </List>
        <br />
        Depending on special requests additional fees may apply.  Please discuss all requests when scheduling your appointment.
        Please be aware that we currently only send therapists to verified residential and business addresses.  
        </Segment>
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
              <List.Item as='a'><Link to='/accupressure'>Accupressure</Link></List.Item>
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

export default Services;