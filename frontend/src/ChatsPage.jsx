import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = () => {
 
    return (
    <div style={{ height: '100vh'}}>
        <PrettyChatWindow 
            projectId='ffcd7622-47c4-4ce9-bef8-66eab4681f4f'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
    </div>
)
}
  export default ChatsPage;