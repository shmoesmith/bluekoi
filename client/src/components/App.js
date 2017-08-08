import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './FetchUser';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Swedish from './Swedish';
import Cranial from './Cranial';
import Shiatsu from './Shiatsu';
import Accupressure from './Accupressure';
import Reflexology from './Reflexology';
import DeepTissue from './DeepTissue';
import Sports from './Sports';
import Structural from './Structural';
import Trigger from './Trigger';
import Russian from './Russian';
import SpecialForm from './SpecialForm';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/portal' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/swedish' component={Swedish} />
            <Route exact path='/cranial' component={Cranial} />
            <Route exact path='/shiatsu' component={Shiatsu} />
            <Route exact path='/accupressure' component={Accupressure} />
            <Route exact path='/reflexology' component={Reflexology} />
            <Route exact path='/deeptissue' component={DeepTissue} />
            <Route exact path='/sportsmassage' component={Sports} />
            <Route exact path='/structural' component={Structural} />
            <Route exact path='/triggerpoint' component={Trigger} />
            <Route exact path='/russian' component={Russian} />
            <Route exact path='/specialform' component={SpecialForm} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
