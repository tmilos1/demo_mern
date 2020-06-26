import ContactsLayout from 'src/layouts/Admin/ContactsLayout'
import EditContactCell from 'src/components/Admin/EditContactCell'

const EditContactPage = ({ id }) => {
  return (
    <ContactsLayout>
      <EditContactCell id={id} />
    </ContactsLayout>
  )
}

export default EditContactPage
