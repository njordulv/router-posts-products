import NotFound from "./NotFound"

const SinglePost = ({ currentPost }) => {
  if (!currentPost) {
    return <NotFound />
  }

  return (
    <div className="wrapper">
      <div className="post">
        <h1>{currentPost.title}</h1>
        <p>{currentPost.body}</p>
      </div>
    </div>
  )
}

export default SinglePost
