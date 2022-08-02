// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {BlogItem: {}, isLoading: true}

  componentDidMount = () => {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const BlogData = await response.json()

    const updateBlogItem = {
      id: BlogData.id,
      author: BlogData.author,
      avatarUrl: BlogData.avatar_url,
      content: BlogData.content,
      imageUrl: BlogData.image_url,
      title: BlogData.title,
      topic: BlogData.topic,
    }
    this.setState({BlogItem: updateBlogItem, isLoading: false})
  }

  render() {
    const {BlogItem, isLoading} = this.state
    const {id, author, avatarUrl, content, imageUrl, title} = BlogItem
    console.log(BlogItem)
    return isLoading ? (
      <Loader
        testid="loader"
        type="TailSpin"
        color="#000000"
        width={50}
        height={50}
      />
    ) : (
      <div className="blogItemsContainer">
        <h1>{title}</h1>
        <div className="authorContainer">
          <img className="authorImage" src={avatarUrl} alt={author} />
          <p className="authorName">{author}</p>
        </div>
        <img className="imageStyle" src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
