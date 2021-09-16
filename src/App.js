// Global CSS file
import './App.css'
import './AppResponsive.css'

// Npm modules
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

// Component's
import Header from './components/comon/Header';
import Home from './components/Home';
import Footer from './components/comon/Footer';
function App() {
  return (
    <Router>
      <>
      
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />  
        </Switch> 
        <Footer/>
      
      </>
    </Router>
  );
}

export default App;
