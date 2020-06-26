import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ContactForm from 'src/components/Admin/ContactForm'

const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const NewContact = () => {
  const { addMessage } = useFlash()
  const [createContact, { loading, error }] = useMutation(
    CREATE_CONTACT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminContacts())
        addMessage('Contact created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createContact({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Contact</h2>
      </header>
      <div className="rw-segment-main">
        <ContactForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewContact
