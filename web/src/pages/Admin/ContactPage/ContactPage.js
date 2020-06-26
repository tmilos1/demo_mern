import ContactsLayout from 'src/layouts/Admin/ContactsLayout'
import ContactCell from 'src/components/Admin/ContactCell'

const ContactPage = ({ id }) => {
  return (
    <ContactsLayout>
      <ContactCell id={id} />
    </ContactsLayout>
  )
}

export default ContactPage
