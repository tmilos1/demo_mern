import Contact from 'src/components/Admin/Contact'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Contact not found</div>

export const Success = ({ contact }) => {
  return <Contact contact={contact} />
}
