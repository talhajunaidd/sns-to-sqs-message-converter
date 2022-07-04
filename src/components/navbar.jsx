import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Image} from "react-bootstrap";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div>
                    <Image className="m-4" src={process.env.PUBLIC_URL + '/logo.png'}></Image>
                    <Navbar.Brand href="#">SNS to SQS Message Converter</Navbar.Brand>
                    <a href="https://github.com/talhajunaidd/sns-to-sqs-message-converter">(Github)</a>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavBar;
