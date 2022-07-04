import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Topics from './Topics';
import Contact from './Contact';
import SubTopic1 from './subTopic1';
import SubTopic2 from './subTopic2';

// ui-semantic
import 'semantic-ui-css/semantic.min.css'
import {Button, Divider} from 'semantic-ui-react';
import {GridHeader} from './Headers';

import {Http} from "../components/http/Http";
import {DashBoard} from "../components/http/DashBoard";
import {Home} from "../components/http/Home";
import {Option} from "../components/http/Option";

// redux
import {useDispatch, useSelector} from "react-redux";

// aws-cognito
import Amplify from '@aws-amplify/core';
import awsmobile from '../aws-exports';
import {signOut} from "../components/authRouter/authRouterDucks";
import {AuthRouter} from "../components/authRouter/AuthRouter"; // aws amplify credentials

Amplify.configure({Auth: awsmobile});

function ControlRouter(){
    const loginState = useSelector((state) => state.auth.loginState)
   
    return (loginState === true)? <MainRouter /> : <AuthRouter/>

}

export default ControlRouter;


function MainRouter(){
    const loginID = useSelector((state) => state.auth.loginUserID);
    const isLoading = useSelector((state) => state.auth.loadingState);
    const dispatch = useDispatch();
    return(
        <div>
        <div style={{textAlign : 'right'}}>
            {loginID}님 환영합니다.
            <Button onClick={() => dispatch(signOut())} loading={isLoading}>logout</Button>
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


function Navigator(){
    return(
        <div>
                  <GridHeader  />
                  <br/>
        </div>
      
    )
}



