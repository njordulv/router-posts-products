import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "./Loader"
import POSTS_API from "../data/postsAPI"

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(POSTS_API)
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  if (error) {
    return <h1>This is an error - {error}</h1>
  }

  return (
    <div className="wrapper">
      <h1>Posts</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="posts">
          {posts.map((post) => (
            <Link to={`/posts/${post.id}`} key={post.id} className="post">
              <span>{post.id}.</span> {post.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Posts
