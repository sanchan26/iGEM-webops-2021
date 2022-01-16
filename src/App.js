
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Collab from './pages/Collaboration';
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
    <div>
      <ChakraProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Team' component={Team} />
          <Route path='/Gallery' component={Gallery} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Collab' component={Collab} />
        </Switch>
      </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
