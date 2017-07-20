import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const headerBackground = styled.div`
  background: url('https://pixabay.com/get/eb3db40a20f31c22d9584518a33219c8b66ae3d019b1144393f4c97e/wellness-285587_1920.jpg')

`;
class Home extends Component {

  // background: https://pixabay.com/get/eb3db40a20f31c22d9584518a33219c8b66ae3d019b1144393f4c97e/wellness-285587_1920.jpg

  render() {
    return(
      <Segment as={headerBackground}>
      <Header as='h1' textAlign='center'>Welcome To Blue Koi</Header>
      </Segment>
    );
  }
}

export default Home;