import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

type FeatureCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
};

function AboutCard({ icon, title, description }: FeatureCardProps) {
    return (
        <Card className="bg-white border-none shadow-md hover:shadow-lg">
            <CardContent className="p-4">
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 shadow-md">{icon}</div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-accent-500 text-base font-medium">{description}</p>
                </div>
            </CardContent>
        </Card>
    );
}


export { AboutCard };