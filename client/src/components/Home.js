import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import homepageHeaderBackground from '../assets/homepageHeaderBackground.jpg'
import '../styles/fonts.css'

const headerBackground = styled.div`
  background: url('${homepageHeaderBackground}') no-repeat center center fixed !important;
  height: 500px;
  background-size: cover !important;
`;

const topHeader = styled.h1`
font-family: 'Kaushan Script', cursive !important;
color: 'white' !important;
`;

class Home extends Component {

  // background: https://pixabay.com/get/eb3db40a20f31c22d9584518a33219c8b66ae3d019b1144393f4c97e/wellness-285587_1920.jpg

  render() {
    return(
      <Segment as={headerBackground}>
      <Header as={topHeader} textAlign='center'>Blue Koi Massage</Header>
      </Segment>
    );
  }
}

export default Home;