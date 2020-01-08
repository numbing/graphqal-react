import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePageComponent from "./pages/homePage/HomePgaeComponent";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInSingUp from "./pages/signInSingUp/SignInSingUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePageComponent} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSingUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
