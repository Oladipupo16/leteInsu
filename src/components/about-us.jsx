import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../assets/images/About-us.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function AppAbout() {
    const now = 100;
    const latter =80;
    return (
        <section className='about' id='about-us'>
            <Container>
                <div className='title'>
                    <h3> About Letes insurance</h3>
                    <p>Your Trusted Partner In Comprehensive and Affordable Insurance Solutions.</p>
                </div>
                <Row>

                    <Col sm={6}>
                        <img src={about} className='about-fig' />
                    </Col>
                    <Col sm={6}>
                        <p>Welcome to Letes Insurance, where your peace of mind is our top priority. Established with a commitment to providing exceptional insurance solutions, Letes Insurance has become a trusted name in the industry, dedicated to protecting what matters most to you.</p>

                        <p>Letes Insurance offers a wide range of insurance products designed to provide you with the protection you need. Our services include auto, home, life, health, and business insurance. Each product is crafted to ensure comprehensive coverage, tailored to meet the unique needs of our clients.</p>

                        <p>At Letes Insurance, we believe in the values of integrity, customer focus, innovation, excellence, and community. We uphold the highest standards of honesty and transparency, ensuring our clients feel valued and supported. We continuously seek new ways to serve our clients better, leveraging technology and industry best practices to deliver superior service.</p>
                        
                        <div>
                            <h4>
                                Our Progress</h4>
                            <p>To provide transparency and illustrate our growth and commitment to our clients, we've introduced a progressive bar highlighting our milestones:</p>
                            
                            <aside>
                                <h5>Client Satisfaction</h5>
    
                                <ProgressBar now={now} label={`${now}%`} />
                            </aside>
                            <aside>
                                <h5>Claims Processed</h5>
    
                                <ProgressBar now={now} label={`${now}%`} />
                            </aside>
                            <aside>
                                <h5>New Policies Issued</h5>
    
                                <ProgressBar now={latter} label={`${latter}%`} />
                            </aside>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );




}