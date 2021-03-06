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

const Swedish = () => (
  <Segment style={styles.mainBackground}>
    <Header as='h1'>Swedish Massage</Header>
    <Container text>
      Swedish Massage is a very relaxing and therapeutic style of bodywork. It combines oils 
      or lotion with an array of strokes such as rolling, kneading, and percussion to help 
      the body improve its circulation. The benefits of this type of bodywork are wide-ranging 
      and include relief from aches and pains, decreased stress levels in the body, enhanced mental clarity, 
      improved appearance, and greater flexibility.
    </Container>
  </Segment>

);

export default Swedish;