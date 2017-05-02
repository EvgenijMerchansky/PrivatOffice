import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styles from './scss/style.scss';
// router -
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//end router -

import store from './store';
import Home from './app/containers/homeContainer.jsx'
import App2 from './app/containers/firstContainer.jsx';
import NewApp from '../src/app/containers/nextContainer.jsx';
import SecondContainer from '../src/app/containers/secondContainer.jsx';

function Inheritance(props){
      return(
          <div>Hi! from custom router</div>
      )
    }

// class PageNew extends React.Component {
//   constructor(props) {
//     super(props);
//
//   }
//   render(){
//     console.log(this);
//     return(
//       <div className="app-cont">
//         <br />
//           <h1 className="carousel">Carousel</h1>
//         <br />
//         <img className="previous-image" src='https://sc.mogicons.com/share/poker-face-24.jpg'/><br /><br /><br /><br />
//         <Link className="return-link" to="/">Return to HOME</Link>
//         <br /><br />
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render(){
//     return(
//       <Router>
//         <div>
//           <ul className="list-style">
//             <li className="li-item"><Link to="/">Home</Link></li>
//             <li className="li-item"><Link to="/realtimeRender">Real Time Render component</Link></li>
//             <li className="li-item"><Link to="/inheritance">Inheritance component</Link></li>
//             <li className="li-item"><Link to="/yaoming">Show me Yao!</Link></li>
//             <li className="li-item"><Link to="/second-timer">Go to timer</Link></li>
//           </ul>
//           {/* <App2 /> */}
//           <Route exact path='/' component={Home}/>
//           <Route path='/realtimeRender' component={App2}/>
//           <Route path='/inheritance' component={NewApp}/>
//           {/* <Route path='/custom2' component={NewApp}/> */}
//           <Route path='/yaoming' component={PageNew}/>
//           <Route path='/second-timer' component={SecondContainer}/>
//         </div>
//       </Router>
//     )
//   }
// }
//() => setInterval(){this.props.buttonStart(),1000}
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,document.getElementById('content')
);
