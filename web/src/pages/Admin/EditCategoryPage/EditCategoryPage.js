import CategoriesLayout from 'src/layouts/Admin/CategoriesLayout'
import EditCategoryCell from 'src/components/Admin/EditCategoryCell'

const EditCategoryPage = ({ id }) => {
  return (
    <CategoriesLayout>
      <EditCategoryCell id={id} />
    </CategoriesLayout>
  )
}

export default EditCategoryPage
