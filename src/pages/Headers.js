// ui-semantic
import 'semantic-ui-css/semantic.min.css'
import { Header , Image, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import patrickImg from './images/patrick.png';

export function HeaderImage({linkTo, caption, img}){
    return(              
    <div class="ui center aligned container">
        <Header as ='h2'>
            {/* <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png'/> */}
            <Image circular src={img}/>
            <br/>
            <Link to={linkTo}>{caption}</Link>
        </Header> 
    </div>
                        
    )  
}

export const HeaderIcon = ({linkTo, caption,icon}) => (
    <div class="ui center aligned container">
        <Header as='h2'>
        <Icon name={icon} />
        <Header.Content>
        <Link to={linkTo}>{caption}</Link>
            {/* <Header.Subheader>Manage your topics</Header.Subheader> */}
        </Header.Content>
        </Header>
    </div>
  )

export function GridHeader(){
    return(
        <div class="ui grid" style={{background:'lightgray'}}>
            <div class="five wide column">{<HeaderImage linkTo={'/topics'} caption={'topics'} img={patrickImg}/>}</div>
            <div class="five wide column">{<HeaderImage linkTo={'/contact'} caption={'contact'} img={patrickImg}/>}</div>
            <div class="five wide column">{<HeaderImage linkTo={'/address/home'} caption={'address'} img={patrickImg} />} </div>
        </div>
    
    )
}