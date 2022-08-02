// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {BlogData: [], isLoaded: false}

  componentDidMount = () => {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const upDateBlog = data.map(EachData => ({
      id: EachData.id,
      title: EachData.title,
      imageUrl: EachData.image_url,
      avatarUrl: EachData.avatar_url,
      author: EachData.author,
      topic: EachData.topic,
    }))
    this.setState({BlogData: upDateBlog, isLoaded: true})
  }

  render() {
    const {BlogData, isLoaded} = this.state
    console.log(isLoaded)
    return (
      <div className="blogListContainer">
        {isLoaded ? (
          BlogData.map(eachBlog => (
            <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
          ))
        ) : (
          <div testid="loader">
            <Loader type="TailSpin" color="#000000" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}
export default BlogList
