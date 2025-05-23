import { Star } from 'lucide-react';

type TestimonialCardProps = {
  name: string;
  review: string;
  rating: number;
}

function TestimonialCard({ name, review, rating }: TestimonialCardProps) {
  return (
    <div className="space-y-4 bg-white px-4 py-6 rounded-xl border-none shadow-md hover:shadow-lg">

      <div className="">

        <div>
          <h3 className="text-lg md:text-xl font-bold text-accent-500">{name}</h3>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                className={index < rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-400'}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm md:text-base italic text-accent-500">{review}</p>
    </div>
  );
}

export { TestimonialCard };
