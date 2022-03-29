import moment from 'moment';
import 'moment/locale/pt-br';

function ChatMessage(props) {
	moment.locale('pt-br');
	const { text, uid, photoURL, createdAt } = props.message;

	const messageClass = uid === props.auth.currentUser.uid ? 'sent' : 'received';
	// alert(props.id);
	return (
		<div className={`message ${messageClass}`} >
			<img src={photoURL} alt="Foto de perfil" />
			<p>{text}</p>
			<small>{ moment(createdAt.toDate()).calendar() }</small>
		</div>
	)
}

export default ChatMessage;