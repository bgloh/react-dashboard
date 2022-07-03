import {Route, Routes, Navigate, BrowserRouter as Router} from 'react-router-dom';
import Topics  from './Topics';
import Contact from './Contact';
import Address from './Address';
import SubTopic1 from './subTopic1';
import SubTopic2 from './subTopic2';

// ui-semantic
import 'semantic-ui-css/semantic.min.css'
import { Divider, Button} from 'semantic-ui-react';
import { GridHeader } from './Headers';

import {Http} from "../components/http/Http";
import {DashBoard} from "../components/http/DashBoard";
import {Home} from "../components/http/Home";
import {Option} from "../components/http/Option";
import {Login} from "../components/login/Login"

// redux
import {useDispatch, useSelector} from "react-redux";

// aws-cognito
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import awsmobile from '../aws-exports';
import {signOut} from "./controllerDucks";
import {Signup} from "../components/login/Signup";
import {FindPassWord} from "../components/login/FindPassWord"; // aws amplify credentials

Amplify.configure({Auth: awsmobile});

function Controller(){
    const loginState = useSelector((state) => state.controller.loginState)
    const loginID = useSelector((state) => state.controller.loginUserID)
    const curState = useSelector((state) => state.controller.curState)
    const dispatch = useDispatch();
    if (loginState === true)
    return(
            <div>
                    <div style={{textAlign : 'right'}}>
                        {loginID}님 환영합니다.
                        <Button onClick={() => dispatch(signOut())}>logout</Button>
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
    else
    {
        if(curState === 'login')
            return(
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/*" element={<Navigate to="/" />}/>
                    </Routes>
                </Router>
            </div>
            )
        else if(curState === 'signup')
            return(
                <div>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Signup/>}/>
                            <Route path="/*" element={<Navigate to="/" />}/>
                        </Routes>
                    </Router>
                </div>
            )

        else if(curState === 'find')
            return(
                <div>
                    <Router>
                        <Routes>
                            <Route path="/" element={<FindPassWord/>}/>
                            <Route path="/*" element={<Navigate to="/" />}/>
                        </Routes>
                    </Router>
                </div>
            )
    }

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



