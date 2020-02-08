import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Routes
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About"

class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <div>
                        <Route exact path='/' component={Home}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/about' component={About}/>
                    </div>
                </Router>
            </>
        )
    }
}

export default App;
