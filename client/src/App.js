import React  from 'react';
import Header from './components/header'
import Home from './components/pages/home'
import About from  './components/pages/about'
import confirmed from  './components/confirmed'
import Social from './components/social'
import Store from './components/pages/store'
import Climping from './components/pages/climpingSim'
import Chat from './components/chat'
import { BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css'
import LoginRegister from './components/pages/login'
import store from './store'
import {Provider} from 'react-redux'
import {loadUser} from './actions/authActions'


class App extends React.Component {
    
  componentDidMount(){
    store.dispatch(loadUser())
  }
 

   
  
  render(){
  



  return (
     
    <Provider store={store}>
    <div className="App">
 
      <Router>
      <Header/>
  
     <Route exact path='/devstudy' component={Home}/>
      <Route  path="/about" component={About}/>
      <Route path="/store" component={Store}/>
      <Route path = '/climpingSim' component={Climping}/>
      <Route path= '/loginOrRegister' component={LoginRegister}/>
      <Route path='/social' component={Social}/>
      <Route path='/confirmed' component={confirmed}/>
      </Router>
       
       
       <Chat/>

      
    </div>
    </Provider>
  );
  }
}



export default App;