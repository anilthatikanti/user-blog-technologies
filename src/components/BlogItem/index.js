// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails
  return (
    <Link className="linkItem" to={`/blogs/${id}`}>
      <div className="blogItemContainer">
        <img className="image" src={imageUrl} alt={`item${id}`} />
        <div className="card">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="authorProfile">
            <img className="authorImage" src={avatarUrl} alt={`author${id}`} />
            <p className="authorStyle">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
