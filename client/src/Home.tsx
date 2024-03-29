import { Container } from 'react-bootstrap';
import './Home.css';
import FileSeparator from './components/FileSeparator';

function Home() {
    return (
        <>
            <Container fluid className='px-0 home-image'></Container>
            <Container className='seperator-container'>
                <FileSeparator/>
            </Container>
        </>
    )
}

export default Home;