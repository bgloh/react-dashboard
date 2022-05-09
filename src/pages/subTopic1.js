import {useNavigate} from 'react-router-dom';
// Semanti ui
//import 'semantic-ui-css/semantic.min.css'
import { Button,Divider,Header ,Grid} from 'semantic-ui-react';

function SubTopic1(){
    const navigate = useNavigate();
    return (
        <div>
            <p>This is sub topic 1.</p>
            <Button primary onClick={()=>{
                navigate("/contact");
            }}>go to contact </Button>
        </div>
    )
}

export default SubTopic1;