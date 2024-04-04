import Post from "./Post"

const Feed = () => {
  return (
    <>
      {posts.map(post =>(
        <Post key={post.id} post={post}/>
      ) )}
    </>
  )
}

export default Feed
