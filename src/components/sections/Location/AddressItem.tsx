import { ReactNode } from "react";

type FeatureItemProps = {
  icon: ReactNode;
  title: string;
  descriptions: string[]; // multiple lines
};

export function AddressItem({ icon, title, descriptions }: FeatureItemProps) {
  return (
    <div className="flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="font-medium">{title}</h3>
        {descriptions.map((desc, index) => (
          <p key={index} className="text-sm text-accent-500 font-medium">
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
}
