import React from "react";
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { Cockie } from 'universal-cookie';

import { ChannelContainer,  ChannelListContainer} from './components';
import './App.css';

const apiKey = '4xzwsvybe5f5';
const client = StreamChat.getInstance(apiKey);

const App = () => {
	<div className="app_wrapper">
		<Chat client={client} theme='team light'>
			<ChannelListContainer />
			<ChannelContainer />
		</Chat>
	</div>
}

export default App;