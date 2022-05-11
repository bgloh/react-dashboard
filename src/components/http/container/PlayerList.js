import React from 'react'
import { Button, Item } from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../httpDucks";

const PlayerLoad = () => {//DB에 저장된 플레이어 목록을 받아 표시
    const player = useSelector((state) => state.http.playerList)
    const dispatch = useDispatch();
    const playerList = player.map((name, index) => <Item>  {/*각 플레이어마다 Item 생성*/}
        <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <Item.Content verticalAlign='middle'>
            <Item.Header>{name}</Item.Header>
            <Item.Extra>
                <Button floated='right' onClick={() => dispatch(getUser(name))}>Action</Button>
            </Item.Extra>
        </Item.Content>
    </Item>)

    return playerList
}

const ItemExampleFloated = () => (
    <Item.Group relaxed>
        <PlayerLoad/>
    </Item.Group>
)

export default ItemExampleFloated
