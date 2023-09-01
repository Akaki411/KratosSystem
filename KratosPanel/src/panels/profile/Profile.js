import React, {Component} from 'react';
import NavHeader from "../../components/NavHeader";
import {View} from '@vkontakte/vkui';

import { Icon28BookSpreadOutline } from '@vkontakte/icons';
import { Icon28GridLayoutOutline } from '@vkontakte/icons';
import { Icon28CubeBoxOutline } from '@vkontakte/icons';
import { Icon28UsersOutline } from '@vkontakte/icons';

import Account from "./Account";
import Inventory from "./Inventory";
import Crafts from "./Crafts";
import Additional from "./Additional";

class Profile extends Component
{
    constructor(props)
    {
        super(props)
    }

    items = {
        person: {icon: <Icon28BookSpreadOutline/>, title: "Информация"},
        inventory: {icon: <Icon28GridLayoutOutline/>, title: "Инвентарь"},
        crafts: {icon: <Icon28CubeBoxOutline/>, title: "Крафты"},
        additional: {icon: <Icon28UsersOutline/>, title: "Другое"},
    }

    state = {
        activePanel: "person"
    }

    ChangePanel = (key) =>
    {
        this.setState({activePanel: key})
    }

    render()
    {
        return (
            <div className="content">
                <NavHeader items={this.items} onChoice={this.ChangePanel}/>
                <View activePanel={this.state.activePanel}>
                    <Account id="person"/>
                    <Inventory id="inventory"/>
                    <Crafts id="crafts"/>
                    <Additional id="additional"/>
                </View>
            </div>
        )
    }
}

export default Profile;