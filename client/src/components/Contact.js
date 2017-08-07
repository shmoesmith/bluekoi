import React from 'react';
import { Header, Segment, Grid, Container, Image} from 'semantic-ui-react';
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
    backgroundColor: 'rgba(255, 255, 255, .5)',
    margin: '10vh 15vw',
    
  },

  phoneNumber: { 
    whiteSpace: 'noWrap',
  },
  iconSize: {
    height: '48px',
    width: '48px',
  }
};

const Contact = () => (
  <Segment style={styles.background}>
    <Grid> 
      <Grid.Row > 
        <Grid.Column style={styles.textBox}>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as='h1'textAlign='center'>
                      Contact Us
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column style={styles.iconSize}>
                <Image  src={phone} />
              </Grid.Column>
              <Grid.Column style={styles.phoneNumber}>
                <a href="tel:+13854480408">(385)448-0408</a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column style={styles.iconSize}>
                 <Image src={email} />
              </Grid.Column>
              <Grid.Column>
                 <a href='mailto:bluekoimassage@gmail.com'>bluekoimassage@gmail.com</a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column style={styles.iconSize}>
                <Image src={facebook} />
              </Grid.Column>
              <Grid.Column>
                <a href="https:fb.com/bluekoimassage">fb.com/bluekoimassage</a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column style={styles.iconSize}>
                <Image src={instagram} />
              </Grid.Column>
              <Grid.Column>
                @blue_koi_massage_llc
              </Grid.Column>
            </Grid.Row>
            </Grid>
          </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Contact;