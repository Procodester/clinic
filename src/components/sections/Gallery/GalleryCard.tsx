import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type CardWithImageProps = {
  imageSrc: string;
  altText: string;
  index: number;
};

export function GalleryCard({ imageSrc, altText, index }: CardWithImageProps) {
  return (
<Card key={index} className="p-0 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <CardContent className="p-0">
    <div>
      <Image
        src={imageSrc}
        alt={altText}
        width={1000}
        height={1000}
        quality={100}
        className="aspect-square transition-transform duration-300 transform hover:scale-105"
      />
    </div>
  </CardContent>
</Card>

  );
}
