// import SubTopic1 from "./subTopic1";
// import SubTopic2 from "./subTopic2";
// Semanti ui
import { Button,Divider,Header ,Grid} from 'semantic-ui-react';
// router
import { Outlet, Link } from 'react-router-dom';

function Topics(){
    return(
            <div>
                <h1>Topics</h1>
                <Divider/>
                    <Link to="subTopic1" style={{marginRight:16}}>subTopic1</Link>
                    <Link to="subTopic2">subTopic2</Link>
                <Outlet/>
            </div>
    )
}

export default Topics;