import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine'
const ChatsPage = () => {
    const chatProps = useMultiChatLogic(
        'ffcd7622-47c4-4ce9-bef8-66eab4681f4f', 
        props.user.username, 
        props.user.secret
    );
    return <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
  export default ChatsPage;