import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const insurancePlans = [
    {
        id: 1,
        title: 'Basic Auto Insurance',
        description: 'Affordable coverage for essential auto insurance needs. Includes liability and collision coverage.',
        price: '₦25,000/month',
        features: [
            'Liability Coverage',
            'Collision Coverage',
            '24/7 Roadside Assistance',
        ],
        buttonLabel: 'Get Started',
        buttonLink: '#contact-us',
    },
    {
        id: 2,
        title: 'Premium Home Insurance',
        description: 'Comprehensive coverage for your home including protection against natural disasters and theft.',
        price: '₦40,000/month',
        features: [
            'Full Property Coverage',
            'Natural Disaster Protection',
            'Theft Protection',
        ],
        buttonLabel: 'Get Quote',
        buttonLink: '#contact-us',
    },
    {
        id: 3,
        title: 'Family Life Insurance',
        description: 'Secure your family’s future with our life insurance plan that offers financial protection and peace of mind.',
        price: '₦50,000/month',
        features: [
            'Term Life Coverage',
            'Accidental Death Benefit',
            'Critical Illness Cover',
        ],
        buttonLabel: 'Learn More',
        buttonLink: '#contact-us',
    },
];

export default function InsurancePlans() {
    return (
        <section id="insurance-plans" className="services my-5">
            <Container fluid>
                <div className="title text-center">
                    <h3>Our Insurance Plans</h3>
                    <p>Explore our range of insurance plans designed to protect what matters most to you. Whether it's your vehicle, home, or family, we have a plan to fit your needs.</p>
                </div>
                <Row className="ice">
                    {insurancePlans.map(plan => (
                        <Col sm={6} lg={4} key={plan.id} className="mb-4">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <h3 className="card-title">{plan.title}</h3>
                                    <p className="card-text">{plan.description}</p>
                                    <p className="price h4">{plan.price}</p>
                                    <ul className="list-unstyled">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="mb-2">{feature}</li>
                                        ))}
                                    </ul>
                                    <a href={plan.buttonLink} className="btn btn-primary">{plan.buttonLabel}</a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}