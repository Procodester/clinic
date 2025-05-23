import { SectionHeading } from "@/components/features/SectionHeading";
import { GalleryCard } from "./GalleryCard";

function Gallery() {
  return (
    <section className="py-28 md:py-32 bg-gradient-to-br from-primary-500/80 to-secondary-500/80">

    <div className="container mx-auto px-4 md:px-6">

      <SectionHeading
        title="Our Clinic"
        description="Explore our facility and see how we prioritize your comfort and care."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 py-12 md:grid-cols-2 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (

          <GalleryCard
            key={index}
            imageSrc={`/gallery/pic_${index + 1}.jpg`}
            altText={`Clinic facility image ${index + 1}`}
            index={index}
          />
          // <div key={index} className="overflow-hidden rounded-lg modern-card image-hover soft-shadow">
          //   <Image
          //     src={`/placeholder.svg?height=300&width=400&text=Clinic+Image+${index + 1}`}
          //     width={400}
          //     height={300}
          //     alt={`Clinic facility image ${index + 1}`}
          //     className="w-full object-cover aspect-[4/3]"
          //   />
          // </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Gallery;