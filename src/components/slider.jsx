import Carousel from 'react-bootstrap/Carousel';
import insure1 from '../assets/images/insure1.jpg';
import insure2 from '../assets/images/insure2.jpg';
import insure3 from '../assets/images/insure3.jpg';


var sliderData = [
    {
        id: 1,
        image:insure1,
        title: 'Comprehensive Coverage',
        description: "Our comprehensive insurance plans provide extensive coverage to protect you and your family. Whether it's health, life, or property insurance, we have tailored solutions to meet all your needs. Enjoy peace of mind knowing that you're fully covered against unforeseen events."
  
    },
    {
        id: 2,
        image:insure2,
        title: 'Affordable Premiums',
        description: "At Letes Insurance, we believe in making quality insurance accessible to everyone. Our competitive premiums ensure that you get the best value for your money without compromising on coverage. Explore our affordable plans and find the perfect fit for your budget."

    },
    {
        id: 3,
        image:insure3,
        title: 'Exceptional Customer Service',
        description: ' Our dedicated team of insurance experts is here to assist you every step of the way. From selecting the right plan to filing claims, we are committed to providing exceptional customer service. Experience personalized support and guidance whenever you need it.'

    }
]


export default function AppSlider() {
    return (
        <section className='slider' id='welcome'>
        <Carousel>
            {
                sliderData.map(slider => {
                    return(
                        <Carousel.Item key={slider.id}>
                            <div className='oval'>
                        <img src={slider.image} alt={slider.title} style={{height: '500px', objectFit:'cover', objectPosition:'top'}}  className='w-100'/>
                        <div className='last-card'>

                        </div>
                        </div>
                        <Carousel.Caption >
                            <h3>{slider.title}</h3>
                            <p>{slider.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    )


                } )
            }
           
            
        </Carousel>
        </section>

    );
}