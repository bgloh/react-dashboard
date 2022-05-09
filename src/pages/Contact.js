
// Semanti ui
import { Button,Divider,Header ,Grid} from 'semantic-ui-react';
import {useNavigate} from 'react-router-dom';


function Contact(){
    const navigate = useNavigate();
    return (
            <div>
                    <h1>Contact</h1>
                    <Button secondary onClick={()=>{navigate(-1);}}>Go Back</Button>
            </div>
    )
}

export default Contact;