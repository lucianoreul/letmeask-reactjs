import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom() {
    const { user } = useAuth();

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
                    <h2>Create new room</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Room name"
                        />
                        <Button type="submit">
                            Create room
                        </Button>
                    </form>
                    <p>
                        Do you want to join an existing room? <Link to="/">click here</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}