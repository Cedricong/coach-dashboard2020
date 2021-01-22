import logo from './logo.svg';
import Header from'./components/Header.js';
import Footer from'./components/Footer.js';
import Main from'./components/Main.js';
import Add from'./components/Add.js';
import Gym from'./components/Gym.js';
import Coach from'./components/Coach.js';
import Client from'./components/Client.js';
import CoachesDetail from'./components/CoachesDetail.js';
import Login from'./components/Login.js';


import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/add">
            <Add/>
          </Route>
          <Route path="/gym">
            <Gym/>
          </Route>
          <Route path="/coach">
            <Coach/>
          </Route>
          <Route path="/client">
            <Client/>
          </Route>
          <Route path="/coaches/:id">
            <CoachesDetail/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/main">
            <main/>
          </Route>
          <Route path ="/">
            <Main/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
