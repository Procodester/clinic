import { ServiceCard } from "./ServiceCard"
import { SectionHeading } from "@/components/features/SectionHeading"

import { servicesData } from "./services.data"



function Services() {
    return (
        <section id="services" className="py-28 md:py-32">

            <div className="container mx-auto px-4 md:px-6">

                <SectionHeading
                    title="What We Provide"
                    description="Providing personalized, holistic care to enhance your health and wellbeing, from prevention to recovery"
                />


                <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">

                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            color={service.color}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services