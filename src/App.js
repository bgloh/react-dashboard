import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import Quote from './components/quote/Quote';
import User from './components/user/User';
import { Provider } from 'react-redux';
import store from './store';
// Semanti ui
import { Visibility, Segment, Container, Button,Divider,Header ,Grid} from 'semantic-ui-react';
// Amplify
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Auth from "@aws-amplify/auth";

import { AmplifyAuthenticator, AmplifySignIn, withAuthenticator} from '@aws-amplify/ui-react';

//Router
import ControlRouter from './pages/ControlRouter';

// amplify cognito
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const App = () => (

<div >

        <Provider store = {store}>
                   {/*<Counter />  */}
                   {/* <Quote />   */}
                   {/* <User/>  */}
       
                <ControlRouter />
         </Provider>
</div>

);


// export default withAuthenticator(App);
export default App;


// router test


// export function Topics(){
//         return(
//                 <div>
//                         <h1>Topics</h1>
//                         Topics...
//                 </div>
//         )
// }

// function Contact(){
//         return (
//                 <div>
//                         <h1>Contact</h1>
//                         contact....
//                 </div>
//         )
// }

// export function Home(){
//         return(
//                 <div>
//                         <h1>HOME</h1>
//                         <ul>
//                                 <li> <a href="/topics">TOPICS</a></li>
//                                 <li><a href="/contact">CONTACT</a></li>
//                                 <li><a href="/address">ADDRESS</a></li>
//                                 <li><a href="/">HOME</a></li>
//                         </ul>
                       
                        
//                         <Router>
//                           <Routes>
//                                 <Route path="/" component={<App />} />
//                                 <Route path="/topics" element={<Topics />} />
//                                 <Route path="/contact" element={<Contact />} />
//                                 <Route path="/address" element={<Address/>} />
//                           </Routes>
//                         </Router>
                        
//                 </div>
//         )
// }