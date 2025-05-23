'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { TestimonialCard } from './TestimonialCard';


type Testimonial = {
  name: string;
  review: string;
  rating: number;
};

export function TestimonialCarousel({ testimonials } : { testimonials: Testimonial[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <TestimonialCard
              name={testimonial.name}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
