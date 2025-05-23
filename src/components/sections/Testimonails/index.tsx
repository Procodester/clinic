import { SectionHeading } from "@/components/features/SectionHeading"
import { TestimonialCarousel } from "./Carousel"


const testinmonials = [
    {
        name: "Vivek R.",
        review: "I was badly suffering from my left shoulder pain past few weeks.thqnks dr urvashi for getting out of my pain so early..now i am pain free",
        rating: 5,
    },
    {
        name: "Rajneesh S.",
        review: "Dr. Manish is an outstanding orthopedic specialist. His expertise in treating arthritis and joint pain is remarkable. He provided me with a clear diagnosis and an effective treatment plan that brought significant relief. His compassionate and patient-centered approach made me feel well cared for throughout the process. I highly recommend Dr. Manish to anyone dealing with joint pain or arthritis.",
        rating: 5,
    },
    {
        name: "Suhani K.",
        review: "Simply the best Dr s.. Dr Manish Dr urvashi I went to clinic for my pain which was in different part of my body nnn....guesss what other dr advised me to go for surgery but by gods grace my heel pain was 50 percent good in first treatment thanks dr urvashi n fr manish",
        rating: 5,
    },
]

function Testimonials() {
    return (
        <section className="py-12 md:py-24 lg:py-32 bg-primary-50">

            <div className="container mx-auto px-4 md:px-6">

                <SectionHeading
                    title="What Our Patients Say"
                    description="We value our patients' feedback and strive to provide the best care possible"
                />

                <div className="mx-auto max-w-5xl py-12 px-2">
            
                <TestimonialCarousel 
                testimonials={testinmonials}
                />

                    
                </div>
            </div>
        </section>
    )
}

export default Testimonials;