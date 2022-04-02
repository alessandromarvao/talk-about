
import { React, useRef, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, query, orderBy, limit, serverTimestamp, addDoc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import ChatMessage from './chatMessage';

function ChatRoom(props) {
	const dummy = useRef();
	const auth = getAuth();

	const messagesRef = collection(props.firestore, 'mensagens'); // Referencia a coleção `mensagens`
	const q = query(messagesRef, orderBy('createdAt'), limit(25)); // Cria a query da consulta ao firestore
	const [messages] = useCollection(q, { idField: 'id' });

	const [formValue, setFormValue] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault();

		const { uid, photoURL, displayName, email } = auth.currentUser;

		// cria um novo documento no firestore
		await addDoc(messagesRef, {
			text: formValue,
			createdAt: serverTimestamp(),
			uid,
			photoURL,
			displayName,
			email
		})

		setFormValue('');

		dummy.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div>
			<main>
				{messages && messages.docs.map(msg => <ul key={msg.id}> <ChatMessage message={msg.data()} auth={ auth }  /> </ul>)}
				<span ref={dummy}></span>
			</main>

			<form onSubmit={sendMessage}>
				<input value={formValue} onChange={(e) => setFormValue(e.target.value) /* liga o valor recebido no input no setFormValue */} placeholder="Diga algo legal" />

				<button type="submit" disabled={!formValue} >✔️</button>
			</form>
		</div>
	)
}

export default ChatRoom;