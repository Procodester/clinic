import { AddressItem } from "./AddressItem";
import { SectionHeading } from "@/components/features/SectionHeading";
import { cardsData } from "./card.data";



function Location() {
    return (
        <section id="location" className="py-28 md:py-32">

            <div className="container mx-auto px-4 md:px-6">

                <SectionHeading
                    title="Our Location"
                    description="Conveniently located in the heart of the city, our clinic is easily accessible by public transportation."
                />

                <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2">
                    <div className="flex flex-col gap-4">

                        <div className="rounded-lg border-none bg-white text-accent-500 shadow-md hover:shadow-lg p-6">

                            <div className="space-y-4">

                                {cardsData.map((feature, index) => (
                                    <AddressItem 
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    descriptions={feature.description}
                                    /> ))}

                            </div>
                        </div>
                    </div>

                    <div className="aspect-video rounded-lg shadow-md hover:shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55854.32349017715!2d77.6456569!3d28.9608322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c657efab3fc61%3A0xe17c9b7cae35786f!2sDr.%20Manish%20%7C%20Best%20Orthopaedic%20Physician%20for%20Arthritis%20%26%20Joint%20Pain%20in%20Meerut!5e0!3m2!1sen!2sin!4v1745773804189!5m2!1sen!2sin"
                            style={{ border: 0, width: "100%", height: "100%" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Clinic Location"
                            aria-label="Map showing the location of the Health & Arthritis Clinic"
                        ></iframe>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Location;