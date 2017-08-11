import React from 'react';
import { Header, Segment, Container } from 'semantic-ui-react';
import paper from '../assets/paper.jpg'

const styles = {
    mainBackground: {
    backgroundImage: `url(${paper})`,
    backgroundRepeat: `no-repeat`,
    backgroundPostiion: `center center`,
    backgroundSize: 'cover'
  }, 
}


const Acupressure = () => (
  <Segment style={styles.mainBackground}>
    <Header as='h1'>Acupressure</Header>
    <Container text>
     Acupressure is the application of pressure (as with the thumbs or fingertips) to the 
     same discrete points on the body stimulated in acupuncture that is used for its therapeutic 
     effects (as the relief of tension or pain)
    </Container>
  </Segment>

);

export default Acupressure;