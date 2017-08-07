import React, { Component } from 'react';
import { Header, Segment, Grid, Container} from 'semantic-ui-react';
import styled from 'styled-components';
import homepageHeaderBackground from '../assets/homepageHeaderBackground.jpg'
import paper from '../assets/paper.jpg'
import '../styles/fonts.css'


const styles = {
  headerBackground: {
    backgroundImage: `url(${homepageHeaderBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '400px',
    backgroundSize: 'cover'   
  },
  goalBackground: {
    backgroundImage: `url(${paper})`,
    backgroundRepeat: `no-repeat`,
    backgroundPostiion: `center center`,
    backgroundSize: 'cover'
  }
}

// const headerBackground = styled.div`
//   background: url('${homepageHeaderBackground}') no-repeat center center fixed !important;
//   height: 500px;
//   background-size: cover !important;
// `;

const topHeader = styled.h1`
font-family: 'Kaushan Script', cursive !important;
color: rgb(45, 97, 181) !important;
font-size: 50px !important;
padding-top 50px !important;
`;

const goal = styled.p`
font-size: 25px !important;
font-family: 'Kaushan Script', cursive !important;
`;

const reviewHeader = styled.h3`
font-family: 'Kaushan Script', cursive !important;
color: 'white' !important;
`;
class Home extends Component {
  render() {
    return(
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column style={styles.headerBackground}>
              <Header as={topHeader} textAlign='center'>Blue Koi Massage</Header>
          </Grid.Column>
        </Grid.Row>      
        <Grid.Row>
          <Grid.Column style={styles.goalBackground}>   
              <Container as={goal}>
                Like the koi that swam upstream and was tranformed into a flying dragon, Blue Koi's
                goal is to guide you through complete body transformation.
                </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Header as={reviewHeader}>Hear what our clients are saying!</Header>
                <p> " -I got the best massage just after my double mastectomy. Andrea was so careful but helped to make me feel better and helped me heal quicker! I highly recommend her to everyone looking for a masseuse who is professional and kind."
                </p>
                <p> "- Had a good experience w/ blue koi.  I've had some shoulder injuries from bad swimming form and they were able to 
                  not only help with the pain, but were able to give me some great info on what I should be doing to rehabilitate the shoulder
                  and prevent future injury."
                </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;