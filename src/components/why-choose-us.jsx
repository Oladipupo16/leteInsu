import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import part from '../assets/images/partner.jpg'

export default function AppChoose() {
    return (
        <section id='why-choose-us'>
            <Container className='choose'>
                <Row>
                    <Col  sm={12} lg={6} className='choose1'>
                        <img src={part} />
                    </Col>


                    <Col sm={12} lg={6} className='choose2'>
                        <h3>Why choose Letes insurance?</h3>
                        <ul>
                            <li><strong>Personalized Service: </strong>We prioritize your needs by offering tailored insurance solutions. Our dedicated team takes the time to understand your unique requirements and provides personalized advice.</li>
                            <li><strong>Exceptional Support: </strong>Our customer service team is always ready to assist you, ensuring a seamless and stress-free experience from policy selection to claims processing.</li>
                            <li><strong>Diverse Offerings: </strong>We provide a wide range of insurance products, including auto, home, life, health, and business insurance. Each policy is designed to offer comprehensive coverage and peace of mind.</li>
                            <li><strong>Customizable Plans:</strong> Our insurance plans are flexible and can be customized to suit your specific needs and budget, ensuring you get the best protection possible.</li>
                            <li><strong>Transparency:</strong> We uphold the highest standards of honesty and transparency in all our dealings. You can trust us to provide clear, straightforward information without hidden fees or surprises.</li>
                        </ul>
                        <p>Choosing Letes Insurance means choosing a partner who genuinely cares about your well-being. Experience the difference with Letes Insurance and enjoy the peace of mind that comes with knowing you are protected by a trusted and dependable insurance provider.</p>

                    </Col>
                </Row>
            </Container>
        </section>

    )
}