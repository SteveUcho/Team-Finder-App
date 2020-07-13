import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LinkListPage from './LinkListPage'
import CreateLink from './CreateLink'
import logo from '../logo.svg'
import Header from './Header'
import '../styles/App.css'

class App extends Component {
    render() {
        return (
            <div className='center w85'>
                <Header />
                <div className='ph3 pv1 background-gray'>
                    <Switch>
                        <Route exact path='/' component={LinkListPage}/>
                        <Route exact path='/create' component={CreateLink}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
