import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }
        history.push('/rooms/new');
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="illustration symbolizing questions and answers" />
                <strong>Create live rooms of Q&amp;A </strong>
                <p>Answer questions from audiences in real time</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="google icon" />
                        Create room with google
                    </button>
                    <div className="separator">or enter an existing room</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Room Id"
                        />
                        <Button type="submit">
                            Enter room
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}