import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// importing the Hello class, making it available to use
import Hello from './components/hello';

// Creating a new instance of the Hello component (i.e creating a new instance
// the class) with the prop 'name' and the element that it should be inserted
// into (i.e. the 'root' element) and passing both to the render method
ReactDOM.render(<Hello name="Rob"/>, document.getElementById('root'));
registerServiceWorker();
