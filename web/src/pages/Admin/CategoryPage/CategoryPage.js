import CategoriesLayout from 'src/layouts/Admin/CategoriesLayout'
import CategoryCell from 'src/components/Admin/CategoryCell'

const CategoryPage = ({ id }) => {
  return (
    <CategoriesLayout>
      <CategoryCell id={id} />
    </CategoriesLayout>
  )
}

export default CategoryPage
