import BlogPostLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return (
    <BlogPostLayout>
      <BlogPostCell id={id} />
    </BlogPostLayout>
  )
}

export default BlogPostPage
