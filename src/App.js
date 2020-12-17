import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page.component'
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    };

    this.authSub = null;
  }

  componentDidMount() {
    this.authUnsub = auth.onAuthStateChanged(async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          this.setState({ currentUser: {
            id: snapShot.id,
            ...snapShot.data(),
          } });
        });
      } else {
        this.setState({ currentUser: user });
      }
    })
  }

  componentWillUnmount() {
    this.authUnsub();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
