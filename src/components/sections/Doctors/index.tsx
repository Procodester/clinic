import { DoctorCard } from "./DoctorCard";
import { SectionHeading } from "@/components/features/SectionHeading";
import { doctorsData } from "./doctors.data";


function Doctors() {
  return (
    <section id="doctors" className="py-28 md:py-32 bg-primary-50">

      <div className="container mx-auto px-4 md:px-6">

        <SectionHeading
          title="Meet Our Doctors"
          description="Our doctors are dedicated to providing the best care for our patients. With years of experience and a commitment to excellence, they are here to help you every step of the way"
        />
    
        <div className="mx-auto grid max-w-2xl grid-cols-1 justify-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
          {doctorsData.map((doctor) => (
            <DoctorCard
              key={doctor.name}
              name={doctor.name}
              specialty={doctor.specialty}
              bio={doctor.bio}
              image={doctor.image}
            />

          ))}

        </div>
      </div>
    </section>
  )
}

export default Doctors