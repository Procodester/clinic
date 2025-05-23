import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {Badge} from "./Badge"

type DoctorCardProps = {
  image?: string;
  name: string;
  specialty: string;
  bio: string;
};

export function DoctorCard({ image = "", name, specialty, bio }: DoctorCardProps) {
  return (
    <Card className="shadow-md p-0 border-white bg-white">
      <CardContent className="p-0">
        <div>
          <Image
            src={image}
            alt={name}
            width={1000}
            height={1000}
            quality={100}
            objectFit="contain" 
            className="w-full h-auto aspect-square overflow-hidden rounded-tl-2xl rounded-tr-2xl"
          />
        </div>

        <div className="px-2 py-4 ">
          <h3 className="text-xl font-bold ">{name}</h3>
          <Badge label={specialty} />
         
          <p className="mt-2 text-accent-500  text-sm font-medium">{bio}</p>
        </div>
      </CardContent>
    </Card>
  );
}
