type SectionHeadingProps = {
    title: string;
    description: string;
  };
  
  export function SectionHeading({ title, description }: SectionHeadingProps) {
    return (
      <div className="mx-auto space-y-2 max-w-4xl text-center">
        <h2 className="font-playfair text-3xl sm:text-5xl text-accent-500 font-bold tracking-tighter section-title">
          {title}
        </h2>
        <p className="font-geist text-base md:text-xl text-accent-500">
          {description}
        </p>
      </div>
    );
  }
  