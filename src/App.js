import {Route, Switch } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import HomePage from './components/pages/HomePage'
import Courses from './components/pages/courses/Courses'
import ContactUs from "./components/pages/contactus/ContactUs";
function App() {
  return (
    <div className="App">
      <Navigation />
    
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
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
