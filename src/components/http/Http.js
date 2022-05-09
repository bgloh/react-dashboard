import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Outlet, Link } from 'react-router-dom';
import {DashBoard} from "./DashBoard";
import {useSelector} from "react-redux";

export function Http(){
    const color = useSelector((state) => state.http.backGroundColor)
return(
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='push'
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'
            >
                <Link to="home">
                    <Menu.Item as='a'>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                </Link>
                <Link to="dashboard">
                    <Menu.Item as='a'>
                        <Icon name='dashboard' />
                        Dashboard
                    </Menu.Item>
                </Link>
                <Link to="option">
                    <Menu.Item as='a'>
                        <Icon name='options' />
                        options
                    </Menu.Item>
                </Link>
            </Sidebar>

            <Sidebar.Pusher>
                <div style={{backgroundColor:color}}>
                <Outlet/>
                </div>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
}