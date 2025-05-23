import { Shield, Stethoscope, HeartHandshake, Heart } from "lucide-react"

const aboutCards = [
    {
        title: "Preventive Care",
        description: "Proactive screenings and check-ups to identify and address potential health concerns early.",
        icon: <Shield className="h-6 w-6 text-primary-600" />,
    },
    {
        title: "Treatment Plan",
        description: "Personalized treatment strategies crafted by our experienced specialists for effective recovery.",
        icon: <Stethoscope className="h-6 w-6 text-secondary-600" />,
    },
    {
        title: "Wellness Programs",
        description: "Integrated programs focused on enhancing your physical, mental, and emotional wellbeing.",
        icon: <Heart className="h-6 w-6 text-secondary-600" />,
    },
    {
        title: "Holistic Approach",
        description: "Comprehensive care that addresses the root causes of illness, guided by compassionate experts.",
        icon: <HeartHandshake className="h-6 w-6 text-primary-600" />,
    }
];


export { aboutCards };