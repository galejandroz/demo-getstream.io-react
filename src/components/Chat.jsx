import React from 'react';

import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';
const chatClient = new StreamChat('8u7mf8f4rhpj');//key
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZ2FsZWphbmRyb3oiLCJuYW1lIjoiRmxhdCB3aW5kIn0.9cibMxng-JfQpSfU5JS9LBZKYReAaQSWUYpo_dihY2w';
chatClient.setUser(
    {
        id: 'galejandroz',
        name: 'Flat wind',
        image: 'https://getstream.imgix.net/images/random_svg/GZ.png',
    },
    userToken
);

/**
 Como generar el JWT manual
 
https://jwt.io/

usar esta config
  
{
    "alg": "HS256",
    "typ": "JWT"
}

En el payload usar un obj como este ejemplo
 
{
    "user_id": "galejandroz",
    "name": "Flat wind"
}

usar la palabra secreta en el VERIFY SIGNATURE y NO seleccionar secret base64 encoded
 
 */

const channel = chatClient.channel('messaging', 'godevs', {
    image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
    name: 'Talk about Go',
});

const ChatApp = () => {
    return (
        <Chat client={chatClient} theme={'messaging light'}>
            <Channel channel={channel}>
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput />
                </Window>
                <Thread />
            </Channel>
        </Chat>
    );
};

export default ChatApp;
