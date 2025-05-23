import { AboutCard } from "./AboutCard";
import { SectionHeading } from "@/components/features/SectionHeading";
import { aboutCards } from "./aboutCards.data";



function About() {
    return (
        <section id="about" className="py-28 md:py-32 bg-primary-50">

            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="About Our Clinic"
                    description="With 20 years of experience, Health and Arthritis Clinic offers personalized care, expert guidance, and holistic treatments. We focus on finding the root cause of illness, working as a team to ensure thorough diagnosis and complete healing"
                />

                <div className="mx-auto max-w-6xl grid grid-cols-1 gap-4 py-10 md:grid-cols-2">
                    {aboutCards.map((feature, index) => (
                        <AboutCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>


            </div>
        </section>
    )
}

export default About