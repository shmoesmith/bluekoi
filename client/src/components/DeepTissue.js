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

const DeepTissue = () => (
  <Segment style={styles.mainBackground}>
    <Header as='h1'>Deep Tissue</Header>
    <Container text>
      Deep Tissue Massage is a form of bodywork that aims to relieve tension in the deeper 
      layers of tissue in the body. Deep Tissue Massage is a highly effective method for 
      releasing chronic stress areas due to misalignment, repetitive motions, and past 
      lingering injuries. Due to the nature of the deep tissue work, open communication 
      during the session is crucial to make sure you don't get too uncomfortable. Keep in 
      mind that soreness is pretty common after the treatment, and that plenty of water should be ingested 
      to aid with the flushing and removal of toxins that will have been released from the deep tissue during the session.
    </Container>
  </Segment>

);

export default DeepTissue;