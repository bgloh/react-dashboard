import {useSelector} from "react-redux";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./Login"
import {Signup} from "./Signup"
import {FindPassWord} from "./FindPassWord";


export function AuthRouter() {
    const curState = useSelector((state) => state.auth.curState);
    if (curState === 'login')
        return (<LoginRouter/>)
    else if (curState === 'signup')
        return (<SignupRouter/>)
    else if (curState === 'find')
        return (<FindPasswordRouter/>)
}

function LoginRouter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
        </div>
    )
}

function SignupRouter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Signup/>}/>
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
        </div>
    )
}

function FindPasswordRouter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<FindPassWord/>}/>
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
        </div>
    )
}