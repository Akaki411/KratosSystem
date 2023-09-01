import {Component} from 'react'

import { Icon24UserOutline } from '@vkontakte/icons'; // профиль
import { Icon24HomeOutline } from '@vkontakte/icons'; // имущество
import { Icon24PlaceOutline } from '@vkontakte/icons'; // карта
import { Icon24CrownOutline } from '@vkontakte/icons'; // город/гос-во
import { Icon24KeyboardBotsOutline } from '@vkontakte/icons'; // админка

class Navbar extends Component
{
	constructor(props)
	{
		super(props)
	}

	state = {
		profile: {isActive: true, visible: true},
		property: {isActive: false, visible: true},
		map: {isActive: false, visible: true},
		governance: {isActive: false, visible: true},
		admin: {isActive: false, visible: true}
	}

	buttons = {
		profile: {icon: <Icon24UserOutline width={30} height={30}/>, text: "Профиль"},
		property: {icon: <Icon24HomeOutline width={30} height={30}/>, text: "Имущество"},
		map: {icon: <Icon24PlaceOutline width={30} height={30}/>, text: "Карта"},
		governance: {icon: <Icon24CrownOutline width={30} height={30}/>, text: "Управление"},
		admin: {icon: <Icon24KeyboardBotsOutline width={30} height={30}/>, text: "Админка"}
	}

	OnButtonClick(key)
	{
		let obj = this.state
		Object.keys(obj).forEach(i => {
			obj[i].isActive = i === key
		})
		this.setState(obj)
		this.props.OnChange(key)
	}

	render()
	{
		return (
			<div className="navbar">
				{Object.keys(this.buttons).filter(key => {return this.state[key].visible}).map(key => {
					return (
						<Cell name={key} icon={this.buttons[key].icon} text={this.buttons[key].text} isActive={this.state[key].isActive} onClick={key => this.OnButtonClick(key)}/>
					)
				})}
			</div>
		)
	}
}

const Cell = (props) => {
	return (
		<div className={props.isActive ? "navbar-block navbar-block_active-dark" : "navbar-block"} onClick={() => props.onClick(props.name)}>
			<div>{props.icon}</div>
			<div>{props.text}</div>
		</div>
	)
}

export default Navbar;
