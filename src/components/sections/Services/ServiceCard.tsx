import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

type ServiceCardProps = {
  color: string;
  icon: ReactNode;
  title: string;
  description: string;
};

export function ServiceCard({ color, icon, title, description }: ServiceCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg p-0">
      <div className={`h-1 ${color}`} />

      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-full ${color}`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-accent-500 text-base font-medium">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
