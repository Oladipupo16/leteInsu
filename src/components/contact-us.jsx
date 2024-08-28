import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';



export default function AppContact() {
    return (
        <section id='contact'>
            <Container fluid className='cont'>
                <div className='title'>
                    <h3>Contact Us</h3>
                    <p>Get in touch to get insured</p>
                </div>
                <Form className='contact'>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Form.Control type='text' placeholder="Enter your full name" />
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Form.Control type='email' placeholder="Enter your email" />
                        </Col>
                        <Col sm={12} lg={4}>
                            <Form.Control type='tel' placeholder="Enter your phone number" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control as='textarea' rows={3} placeholder="Enter your message" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <button type='submit'>Submit</button>
                        </Col>
                    </Row>
                </Form>
            </Container>
<div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126813.57120273914!2d3.3146803779467517!3d6.656329396369217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b97a4ef27935d%3A0x981ed21351f05f48!2sAtibyan%20Tech%20Ng!5e0!3m2!1sen!2sng!4v1719231786922!5m2!1sen!2sng"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>

    <div className='info'>
        <Row>
            <Col sm={12} md={4}  >
            <i class="fa-solid fa-envelope"></i>
            <p>info@letesinsurance.com</p>
            </Col>
            <Col  sm={12} md={4}>
            <i class="fa-solid fa-location-dot"></i>
            <p>7 Olayonu Lawal St, Ifako-Ijaiye,Lagos</p>
            </Col>
            <Col  sm={12} md={4}><i class="fa-solid fa-phone"></i>
            <p>+234 8052 787 663</p>
            </Col>
        </Row>
    </div>
        </section>
    )
}