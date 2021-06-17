import {Route, Switch } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import HomePage from './components/pages/HomePage'
import Courses from './components/pages/courses/Courses'
import ContactUs from "./components/pages/contactus/ContactUs";
import Registration from './components/pages/registration/Registration'
function App() {
  return (
    <div className="App">
      <Navigation />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
