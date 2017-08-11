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

const Structural = () => (
  <Segment style={styles.mainBackground}>
    <Header as='h1'>Structural Integration</Header>
    <Container text>
      Structural integration employs soft tissue manipulation with the goal of 
      realigning the body in relationship to the force of gravity. The theory underlying 
      structural integration asserts that often the body's connective tissue is "bound up," 
      thus restricting opposing muscles from working independently of one another. Thus, we 
      aim to loosen the restricted connective tissue by using a practice very similar to deep 
      tissue massage. Practitioners typically prescribe a specific sequence of ten sessions 
      lasting between 75 and 90 minutes in order to "unlock" the whole body.<br/> <br/>

      Here at Blue Koi Massage LLC we anticipate a session lasting anywhere from 
      90 minutes to two hours, thus the flat rate. We ask that you bring viewing clothes, 
      consisting of a one piece bathing suit or gym shorts for men (speedo's preferable); and a 
      two piece bikini for women (sports bra and shorts or a one piece are acceptable). This allows 
      us to not only view where your tissue is "bound up", but also to better aid the work.
    </Container>
  </Segment>

);

export default Structural;