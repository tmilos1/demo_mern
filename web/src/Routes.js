// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/admin/contacts/new" page={AdminNewContactPage} name="adminNewContact" />
      <Route path="/admin/contacts/{id:Int}/edit" page={AdminEditContactPage} name="adminEditContact" />
      <Route path="/admin/contacts/{id:Int}" page={AdminContactPage} name="adminContact" />
      <Route path="/admin/contacts" page={AdminContactsPage} name="adminContacts" />
      <Route path="/admin/categories/new" page={AdminNewCategoryPage} name="adminNewCategory" />
      <Route path="/admin/categories/{id:Int}/edit" page={AdminEditCategoryPage} name="adminEditCategory" />
      <Route path="/admin/categories/{id:Int}" page={AdminCategoryPage} name="adminCategory" />
      <Route path="/admin/categories" page={AdminCategoriesPage} name="adminCategories" />
      <Route path="/admin/posts/new" page={AdminNewPostPage} name="adminNewPost" />
      <Route path="/admin/posts/{id:Int}/edit" page={AdminEditPostPage} name="adminEditPost" />
      <Route path="/admin/posts/{id:Int}" page={AdminPostPage} name="adminPost" />
      <Route path="/admin/posts" page={AdminPostsPage} name="adminPosts" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
