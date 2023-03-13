import { useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from "@/firebase";
import AuthPage from './AuthPage'
import ChatsPage from './ChatsPage'

export default function Home() {
  const [user, setUser] = useState<undefined | User>();
  auth.onAuthStateChanged((user) => setUser(user));

  if (user === undefined) {
    return <Loading />;
  } else if (user === null) {
    return <AuthPage />;
  } else {
    return <ChatPage user={user} />;
  }
  
}
