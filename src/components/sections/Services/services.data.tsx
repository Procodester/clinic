import { FileText, Pill, Activity, Stethoscope, HeartPulse, Users } from "lucide-react"

const servicesData = [
    {
        title: "Diagnostic Services",
        description: "Advanced imaging and laboratory tests to accurately diagnose arthritis and joint conditions",
        icon: <FileText className="h-6 w-6 text-white" />,
        color: "bg-primary-500"
    },
    {
        title: "Medical Treatment",
        description: "Personalized medication plans to manage symptoms and slow disease progression",
        icon: <Pill className="h-6 w-6 text-white" />,
        color: "bg-secondary-500"
    },
    {
        title: "Physical Therapy",
        description: "Customized exercise programs to improve mobility, strength, and function",
        icon: <Activity className="h-6 w-6 text-white" />,
        color: "bg-primary-500"
    },
    {
        title: "Screening Tests",
        description: "Nadi Pariksha, Bone Calcium Test(BMD), ECG Neural Biothesio Test, Body Analyzer",
        icon: <Stethoscope className="h-6 w-6 text-white" />,
        color: "bg-secondary-500",
    },
    {
        title: "Pain Management",
        description: "Innovative techniques to reduce pain and improve quality of life",
        icon: <HeartPulse className="h-6 w-6 text-white" />,
        color: "bg-primary-500"
    },
    {
        title: "Nutritional Counseling",
        description: "Dietary guidance to support joint health and reduce inflammation",
        icon: <Users className="h-6 w-6 text-white" />,
        color: "bg-secondary-500"
    },
]

export {servicesData};