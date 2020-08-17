import React from 'react';
import './reset.css';
// import Auth from './Components/Auth'
// import Dashboard from './Components/Dashboard'
// import Form from './Components/Form'
// import Nav from './Components/Nav'
// import Post from './Components/Post'
import './index.css'
import routes from './Components/routes'

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
