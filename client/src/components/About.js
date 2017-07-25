import React from 'react';
import { Header, Segment, Grid} from 'semantic-ui-react';
import styled from 'styled-components';
import '../styles/fonts.css'
import house from '../assets/house.jpg'
import hotelRoom from '../assets/hotelRoom.jpg'
import resort from '../assets/resort.jpg'


const sectionHeader = styled.h3`
font-family: 'Kaushan Script', cursive !important;
color: 'white' !important;
`;

const suburb = styled.div`
  background: url('${house}') no-repeat center center fixed !important;
  height: 300px;
  background-size: 100% !important;
`;

const convention = styled.div`
  background: url('${hotelRoom}') no-repeat center center fixed !important;
  height: 300px;
  background-size: cover !important;
`;

const mountainResort = styled.div`
  background: url('${resort}') no-repeat center center fixed !important;
  height: 300px;
  background-size: cover !important;
`;

const About = () => (
 
  <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column>
        <Segment >
          <Header as={sectionHeader}>At home, at your convention, or at a local resort, Blue Koi comes to you!</Header>
        </Segment>
      </Grid.Column>
     </Grid.Row>      
     <Grid.Row>
       <Grid.Column>
         <Segment as={suburb}></Segment>
       </Grid.Column>
       <Grid.Column>
         <Segment as={convention}></Segment>
       </Grid.Column>
       <Grid.Column>
         <Segment as={mountainResort}></Segment>
       </Grid.Column>
     </Grid.Row>
     <Grid.Row>
       <Grid.Column>
         <Segment>
           We are a family owned and operated outcall massage service based out of Utah County offering both relaxation and structural 
      massage.  We have both traditional therapists as well as a master body worker to handle more specialized situations such as 
      injury or rehabilitation.

      We are happy to customize your massage experience, so please let us know if you have any preferences such as massage oil types or 
      gender of therapist.  In addition, please let us know of any medical conditions that you have prior to scheduling a massage.
    
    
    why named blue koi:
    we named ourselves blue koi to go with the legend of the Koi fish which swims upstream and transforms into a dragon.  like the koi,
    We want  to transform customers to be a better version of themselves. they wanted to capture the essence of body transformation
         </Segment>
       </Grid.Column>
      </Grid.Row>
      </Grid>
)

export default About;