import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SinglePost from "./SinglePost"
import Loader from "./Loader"
import POSTS_API from "../data/postsAPI"
import NotFound from "./NotFound"

const PostData = () => {
  const { postId } = useParams()
  const [posts, setPosts] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(POSTS_API)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  if (error) {
    return <h1>This is an error - {error}</h1>
  }

  if (loading) {
    return <Loader />
  }

  if (Array.isArray(posts)) {
    const currentPost = posts.find((post) => post.id === parseInt(postId))
    return <SinglePost currentPost={currentPost} />
  } else {
    return <NotFound />
  }
}

export default PostData
