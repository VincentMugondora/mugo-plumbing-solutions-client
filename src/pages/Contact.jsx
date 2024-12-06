import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import MapBackground from '../components/contact/MapBackGround'

const Contact = () => {
  return (
    <div className='flex flex-col gap-[100px]'>
      {/* <Hero /> */}
      <ContactInfo />
      <ContactForm />
      <MapBackground />
    </div>
  )
}

export default Contact
