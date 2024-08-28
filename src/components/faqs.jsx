import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const FaqsData = [
    {
        id: 1,
        question: "What types of insurance does Letes Insurance offer?",
        answer: `Letes Insurance offers a variety of insurance products, including auto, home, life, health, and business insurance. Each policy is tailored to meet the unique needs of our clients.

        `,

    },
    {
        id: 2,
        question: "How can I get a quote for an insurance policy?",
        answer: 'You can easily get a quote by visiting our website and filling out the online quote form, or by contacting our customer service team at 1-800-LETES-INS. ',

    },
    {
        id: 3,
        question: "What should I do if I need to file a claim?",
        answer: `To file a claim, you can call our claims department at 1-800-LETES-CLAIM or visit our website and use the online claims form. Our team will guide you through the process and assist you every step of the way.

        `,

    },
    {
        id: 4,
        question: "What is covered under an auto insurance policy?",
        answer: `Our auto insurance policies typically cover liability, collision, comprehensive, personal injury protection, and uninsured/underinsured motorist coverage. Specific coverages may vary based on your policy.

        `,

    },
    {
        id: 5,
        question: "How can I lower my auto insurance premiums?",
        answer: 'You can lower your premiums by maintaining a good driving record, taking advantage of discounts, bundling your policies, and choosing a higher deductible. ',

    },
]
const FaqsData2 = [
    
    {
    
        id: 6,
        question: "What does a home insurance policy cover?",
        answer: ' Home insurance policies generally cover damage to your home and personal property due to events like fire, theft, and natural disasters. They also provide liability coverage for accidents that occur on your property. ',

    },
    {
        id: 7,
        question: `Do I need additional coverage for natural disasters?
        `,
        answer: ` Standard home insurance policies may not cover certain natural disasters like floods or earthquakes. We offer additional coverage options to protect against these specific risks.

        `,

    },
    {
        id: 8,
        question: "What types of life insurance are available?",
        answer: 'Letes Insurance offers term life, whole life, and universal life insurance policies. Each type of policy has different features and benefits, allowing you to choose the one that best fits your needs. ',

    },
    {
        id: 9,
        question: " What is included in a health insurance policy?",
        answer: `Our health insurance policies typically cover doctor visits, hospital stays, prescription medications, preventive care, and various treatments. Coverage details may vary based on your chosen plan.`,

    },
    {
        id: 10,
        question: `What types of business insurance does Letes Insurance offer?
        `,
        answer: `We offer a range of business insurance products, including general liability, property, workers' compensation, professional liability, and business interruption insurance.`,

    },
]

export default function AppFaqs() {
    return (
        <section className='faq'  id='faqs'>
            <div className='title'>
                <h3>Frequently Asked Question</h3>
                <p className='faqq'>We take pride in the trust our clients place in us. Hear from individuals and businesses who have experienced the peace of mind that comes with Letes Insurance. Their stories reflect our commitment to providing exceptional coverage and outstanding customer service.</p>
            </div>
            <container>
            <Row>
        <Col md={6}>{FaqsData.map(faqs => {
                        return (
                            <Accordion key={faqs.id}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{faqs.question}</Accordion.Header>
                                    <Accordion.Body>
                                        {faqs.answer}
                                    </Accordion.Body>
                                </Accordion.Item>


                            </Accordion>
                        )
                    })}</Col>
        <Col md={6}>{FaqsData2.map(faqs2 => {
                        return (
                            <Accordion key={faqs2.id}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{faqs2.question}</Accordion.Header>
                                    <Accordion.Body>
                                        {faqs2.answer}
                                    </Accordion.Body>
                                </Accordion.Item>


                            </Accordion>
                        )
                    })}</Col>
      </Row>
                
            </container>


        </section>
    )
}
