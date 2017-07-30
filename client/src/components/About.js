import React from 'react';
import { Header, Segment, Grid, Image} from 'semantic-ui-react';
import styled from 'styled-components';
import '../styles/fonts.css'
import house from '../assets/house.jpg'
import hotelRoom from '../assets/hotelRoom.jpg'
import resort from '../assets/resort.jpg'
import oils from '../assets/oils.jpg'


const sectionHeader = styled.h3`
  font-family: 'Kaushan Script', cursive !important;
  color: 'white' !important;
`;

const aboutTextBackground = styled.div`
  background: url('${oils}') no-repeat center center fixed !important;
  background-size: cover !important;
`;

const aboutText = styled.div`
  background-color: rgba(255, 255, 255, 0.45) !important;
  `;

const About = () => (
 <div>
  <Grid >
    <Grid.Row>
      <Grid.Column>
        <Segment >
          <Header as={sectionHeader}>Home, Hotel, Or Your Favorite Local Resort, Blue Koi Comes To You!</Header>
        </Segment>
      </Grid.Column>
     </Grid.Row>    
  </Grid>
  <Grid container columns={3}>
      <Grid.Column>
          <Image src={house} size='medium'/>
      </Grid.Column>
       <Grid.Column>
         <Image src={hotelRoom} size='medium' />
       </Grid.Column>
       <Grid.Column>
         <Image src={resort} size='medium'/>
       </Grid.Column>
  </Grid>
  <Grid>
     <Grid.Row>
       <Grid.Column>
         <Segment as={aboutTextBackground}>
           <Segment as={aboutText}>
             <p>We are a family owned and operated outcall massage service based out of Utah County offering both relaxation and structural 
      massage.  We have both traditional therapists as well as a master body worker to handle more specialized situations such as 
      injury or rehabilitation.<br /><br />

      We are happy to customize your massage experience, so please let us know if you have any preferences such as massage oil types or 
      gender of therapist.  In addition, please let us know of any medical conditions that you have prior to scheduling a massage.
    
    <br /><br />
    why named blue koi:
    we named ourselves blue koi to go with the legend of the Koi fish which swims upstream and transforms into a dragon.  like the koi,
    We want  to transform customers to be a better version of themselves. they wanted to capture the essence of body transformation
             </p>
           </Segment>
         </Segment>
       </Grid.Column>
      </Grid.Row>
      </Grid>
  </div>
)

export default About;