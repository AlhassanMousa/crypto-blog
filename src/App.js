import { Route, Switch, Router} from "react-router";
import "./style/App.scss";
import NavBar from "./components/NavBar";
import PostBody from "./PostBody";
import LoginHome from "./admin/LoginHome";


import HomePage from './components/HomePage'

function App() {

  return (
    <div className="App">
 <Switch>
        <Route exact path="/" >
         <NavBar/>
        <HomePage />
        </Route>
  
        <Route path="/Post/:id">
          <PostBody />

        </Route>
        <LoginHome />

        </Switch>
        
    </div>
  );

}

export default App;

