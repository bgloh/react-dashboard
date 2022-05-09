import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Topics  from './Topics';
import Contact from './Contact';
import Address from './Address';
import SubTopic1 from './subTopic1';
import SubTopic2 from './subTopic2';

// ui-semantic
import 'semantic-ui-css/semantic.min.css'
import { Divider} from 'semantic-ui-react';
import { GridHeader } from './Headers';
import {Http} from "../components/http/Http";
import {DashBoard} from "../components/http/DashBoard";
import {Home} from "../components/http/Home";
import {Option} from "../components/http/Option";


function Controller(){
    return(
            <div>
                    <div>
                        <h2>navigation</h2>
                        <Divider/>

                    </div>
                    <Router>     
                        <Navigator/>
                        <Routes>                       
                            <Route path="/topics" element={<Topics />} >
                               <Route path="subTopic1" element={<SubTopic1/>} />
                               <Route path="subTopic2" element={<SubTopic2/>} />
                            </Route>
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/address" element={<Http/>} >
                                <Route path="home" element={<Home/>} />
                                <Route path="dashboard" element={<DashBoard/>} />
                                <Route path="option" element={<Option/>} />
                            </Route>
                        </Routes>
                    </Router>
                    
            </div>
    )
}

export default Controller;

function Navigator(){
    return(
        <div>
                  <GridHeader  />
                  <br/>
        </div>
      
    )
}



