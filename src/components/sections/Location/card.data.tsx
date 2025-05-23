import { MapPin, Phone, Mail, Clock } from "lucide-react"

const cardsData = [
    {
        title: "Address",
        description: ["Football chowk, Delhi Rd, Meerut, Uttar Pradesh 250002"],
        icon: <MapPin className="h-6 w-6 text-primary-600" />,
    },
    {
        title: "Phone",
        description: ["+91 9319797986"],
        icon: <Phone className="h-6 w-6 text-primary-600" />,
    },
    {
        title: "Email",
        description: ["officialorthopain@gmail.com"],
        icon: <Mail className="h-6 w-6 text-primary-600" />,
    },
    {
        title: "Hours",
        description: ["Monday - Friday: 10:30 am - 2:15 pm | 5:30 pm  - 8pm", "Saturday: 10:30 am - 2:30 pm", "Sunday: Closed"],
        icon: <Clock className="h-6 w-6 text-primary-500" />,
    }

]

export {cardsData}