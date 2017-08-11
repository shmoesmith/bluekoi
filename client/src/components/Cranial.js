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

const Cranial = () => (
  <Segment style={styles.mainBackground}>
    <Header as='h1'>Cranial Sacral</Header>
    <Container text>
      Cranial Sacral Therapy is a gentle yet powerful technique that is effective in releasing 
      neck pain, back pain, and mental stress (among other things). It does this by optimizing 
      the movement of cerebrospinal fluid through the spine and around the skull. 
      Adapted from Craniosacral Therapy, developed by physician William Sutherland, 
      this therapy provides a very soothing and relaxing healing experience.
    </Container>
  </Segment>

);

export default Cranial;