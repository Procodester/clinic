import { SocialIcon } from 'react-social-icons'

function WhatsappMe() {
  return (
    <div className="fixed right-2 bottom-4">

    <SocialIcon 
    url="whatsapp://send?phone=919319797986&text=Hello" 
    label='whatsapp'
    network='whatsapp'
   
    bgColor="#afcc26"
    />

    </div>
  )
}

export default WhatsappMe