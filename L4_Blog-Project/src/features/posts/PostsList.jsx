import { useSelector } from "react-redux";
import { 
  selectAllPosts, 
  getPostsStatus, 
  getPostsError,
} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);
  
  let content;
  if(postStatus === 'loading'){
    content = <p>Loading...</p>
  }
  else if(postStatus === 'succeeded'){
    const orderedPosts = posts
    .slice()
    .sort((a,b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post, index) => <PostsExcerpt post={post} key={index} />)
  }
  else if(postStatus === 'failed'){
    content = <p>{postsError}</p>
  }

  return (
    <section>
      {content}
    </section>
  )
}

export default PostsList
