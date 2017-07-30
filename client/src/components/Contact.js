import React from 'react';
import { Header, Segment, Grid, Image} from 'semantic-ui-react';
import contactUs from '../assets/contactUs.jpeg'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

const styles= { 
  background: {
    background: `url(${contactUs}) no-repeat center center fixed`,
    height: '500px',
    backgroundSize: 'cover',
  },
  textBox: {
    backgroundColor: 'rgba(255, 255, 255, .45)',
    width: '50vw',
    marginLeft: '25vw'
  },
};

const Contact = () => (
  <Segment style={styles.background}>
    <Segment style={styles.textBox} >
    <Header as='h1'textAlign='center'>
       Contact Us
    </Header>
      <Grid verticalAlign='middle'> 
        <Grid.Row> 
          <Grid.Column>
            <Image src={phone} />
          </Grid.Column>
          <Grid.Column>
            (385)-448-0408   
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
          <Image src={email} />
          </Grid.Column>
          <Grid.Column>
            <a href='email mailto:bluekoimassage@gmail.com'>bluekoimassage@gmail.com</a>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image src={facebook} />
          </Grid.Column>
          <Grid.Column>
            <a href='fb.com/bluekoimassage'>fb.com/bluekoimassage</a>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image src={instagram} />
          </Grid.Column>
          <Grid.Column>
            @blue_koi_massage_llc
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Segment>
  //todo insert contact form to send an message without it being an email
)

export default Contact;