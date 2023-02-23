import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Pricing from './components/pages/Pricing';
import More from './components/pages/More';
import Docs from './components/pages/Docs';
import SignUp from './components/pages/SignUp';
import Signin from './components/pages/Signin';
import Solutions from './components/pages/Solutions';
import Footer from './components/Footer';
import Content from './components/pages/Content';
import AfterSignin from './components/pages/AfterSignin';

function App() {
  return (
  <div className='page-container'>
    <div className='content-warp'>
<Router>
  <Header />
    <Switch>
      <Route path='/docs' exact component={Docs}/>
      <Route path='/pricing' exact component={Pricing}/>
      <Route path='/more' exact component={More}/>
      <Route path='/sign-up' exact component={SignUp}/>
      <Route path='/sign-in' exact component={Signin}/>
      <Route path='/solution' exact component={Solutions}/>
      <Route path='/aftersign-in' exact component={AfterSignin}/>
    </Switch>
</Router>
</div>

<Content/>
<Footer/>
</div>
  );
}

export default App;
