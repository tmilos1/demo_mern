import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ContactForm from 'src/components/Admin/ContactForm'

export const QUERY = gql`
  query FIND_CONTACT_BY_ID($id: Int!) {
    contact: contact(id: $id) {
      id
      name
      email
      message
      createdAt
    }
  }
`
const UPDATE_CONTACT_MUTATION = gql`
  mutation UpdateContactMutation($id: Int!, $input: UpdateContactInput!) {
    updateContact(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ contact }) => {
  const { addMessage } = useFlash()
  const [updateContact, { loading, error }] = useMutation(
    UPDATE_CONTACT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminContacts())
        addMessage('Contact updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateContact({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Contact {contact.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ContactForm
          contact={contact}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
