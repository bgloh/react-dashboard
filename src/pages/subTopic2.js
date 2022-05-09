import {useNavigate} from 'react-router-dom';
// Semanti ui
import { Button,Divider,Header ,Grid} from 'semantic-ui-react';

function SubTopic2(){
    const navigate = useNavigate();
    return (
        <div>
            <p>This is sub topic 2.</p>
            <Button primary onClick={()=>{
                navigate("/address");
            }}>go to address </Button>
        </div>
    )
}

export default SubTopic2;