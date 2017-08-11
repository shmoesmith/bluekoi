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

const Russian = () => (
  <Segment style={styles.mainBackground}>
    <Header as='h1'>Russian Massage</Header>
    <Container text>
      Developed in the former Soviet Union, Russian Massage is considered to be one of the 
      most non-invasive and relaxing forms of massage therapy. Combining aspects of both 
      therapeutic and sports massage, it uses a variety of specific techniques to release 
      stress and enhance circulation. As with all forms of massage therapy, open communication 
      during the session is encouraged to make sure you are enjoying the experience as much as possible.
    </Container>
  </Segment>

);

export default Russian;