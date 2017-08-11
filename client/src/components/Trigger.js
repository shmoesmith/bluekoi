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

const Trigger = () => (
  <Segment style={styles.mainBackground}>
    <Header as='h1'>Trigger Point Therapy</Header>
    <Container text>
    Trigger Point Therapy is a style of bodywork that focuses on stimulating and 
    releasing "trigger points" in your body. Trigger points are tender areas of tension 
    similar to acupressure points, except they occur in the belly of the muscle rather 
    than along the energy pathways of the body. These "knots" are built up throughout a 
    person's life due to physical, mental, and/or emotional stress. During a session, 
    focused pressure is applied through a variety of techniques order to release 
    your trigger points. This process can be quite painful at times, yet the effects 
    are lasting and profoundly transformative.
    </Container>
  </Segment>

);

export default Trigger;