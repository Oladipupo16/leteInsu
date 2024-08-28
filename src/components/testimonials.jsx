
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

const TestmonialData = [
    {
        id: 1,
        description: "Letes Insurance provided me with excellent coverage for my home. The process was seamless, and their team was incredibly helpful. I feel secure knowing my home is protected by a reliable company.",
        Name: 'John D. ',
        profession: "Real Estate Agent",
    },
    {
        id: 2,
        description: "Switching to Letes Insurance was the best decision I made for my family’s health coverage. The plans are affordable, and the customer service is outstanding. They truly care about their clients.",
        Name: 'Sarah M. ',
        profession: `Teacher
        `,
    },
    {
        id: 3,
        description: "I’ve had auto insurance with Letes Insurance for the past three years, and I couldn't be happier. They offer great rates and their claims process is hassle-free. Highly recommend!",
        Name: 'Michael P. ',
        profession: "Software Engineer",
    },
    {
        id: 4,
        description: "Letes Insurance made getting life insurance easy and stress-free. Their team explained everything in detail and helped me choose the right plan for my needs. I now have peace of mind knowing my family is taken care of.",
        Name: 'Emily R.',
        profession: "Financial Advisor",
    },
    {
        id: 5,
        description: "As a small business owner, finding the right insurance is crucial. Letes Insurance provided comprehensive coverage at a reasonable price. Their support has been exceptional, and I trust them completely.",
        Name: 'David L. ',
        profession: "Small Business Owner",
    },
    {
        id: 6,
        description: "Letes Insurance made the process of getting car insurance incredibly easy. Their team was helpful, knowledgeable, and always available to answer my questions. I feel secure knowing I'm covered by Letes.",
        Name: 'Jane Doe',
        profession: `Graphic Designer
        `,
    },


]
export default function AppTest() {
    return (
        <section className='test' id='testimonials'>
            <Container fluid>
                <div className='title'>
                    <h3>Clients Testimonials</h3>
                    <p className='tea'>We take pride in the trust our clients place in us. Hear from individuals and businesses who have experienced the peace of mind that comes with Letes Insurance. Their stories reflect our commitment to providing exceptional coverage and outstanding customer service.</p>
                </div>
                <Carousel controls ={false}>
                    {
                        TestmonialData.map(testimony => {
                            return (
                                <Carousel.Item>
                                    <blockquote>
                                        <p>{testimony.description}</p>

                                        <cite>
                                            <span>{testimony.Name}</span>
                                            <span>{testimony.profession}</span>
                                        </cite>



                                    </blockquote>

                                </Carousel.Item>


                            )
                        })}

                </Carousel>

            </Container>






        </section>
    )
}