import React, {useState, useEffect, useContext} from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './css/app.css'

import MainFrame from "./MainFrame";
import Navbar from './panels/navbar/Navbar';
import Profile from './panels/profile/Profile'
import Property from './panels/property/Property'
import Map from './panels/map/Map'
import Governance from './panels/governance/Governance'
import Admin from './panels/admin/Admin'
import {Context} from "./index";

const App = () => {
	const [activePanel, setActivePanel] = useState('profile');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const {user} = useContext(Context)

	useEffect(async () => {
		const user = await bridge.send('VKWebAppGetUserInfo')
		setUser(user)
		setPopout(null)
	}, []);

	const changePanel = (key) => setActivePanel(key)

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<MainFrame>
						<View activePanel={activePanel} popout={popout}>
							<Profile id="profile"/>
							<Property id="property"/>
							<Map id="map"/>
							<Governance id="governance"/>
							<Admin id="admin"/>
						</View>
						<Navbar OnChange={key => {changePanel(key)}}/>
					</MainFrame>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
