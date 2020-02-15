import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Routes
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog"

// Components
import Headerbar from "./components/Headerbar";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Headerbar/>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/about' component={About}/>
                    <Route path='/blog' component={Blog}/>
                </div>
            </Router>
        )
    }
}

export default App;
