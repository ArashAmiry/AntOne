import { Container } from 'react-bootstrap';
import './Home.css';
import MusicInput from './components/FileSeparator';

function Home() {
    return (
        <>
            <Container fluid className='px-0 home-image'></Container>
            <Container className='seperator-container'>
                <MusicInput/>
            </Container>
        </>
    )
}

export default Home;