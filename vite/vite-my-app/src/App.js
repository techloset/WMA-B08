import React, { useEffect, useState } from 'react'
import Routing from './routing/Routing'
import "./app.css"

export default function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [postId, setPostId] = useState("");
  const [userId, setUserId] = useState("");
  const getPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    console.log(data);
    setPosts(data.posts);
  }
  const getComments = async (id) => {
    const response = await fetch(`https://dummyjson.com/posts/${id}/comments`);
    const data = await response.json();
    console.log(data);
    setComments([...comments, ...data.comments]);
  }
  useEffect(() => {
    getPosts();
  }, [])

  const addNewComment = async (postId) => {
    const response = await fetch(`https://dummyjson.com/comments/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        body: comment,
        postId: postId,
        userId: 5
      })
    });
    const data = await response.json();
    console.log(data);
    setComments([...comments, data]);
  }
  const handlePostIdChange = (e) => {
    setPostId(e.target.value);
  }
  return (
    <>
      <h1 style={{ color: 'wheat' }}>Facebook App</h1>
      <div className='container'>
        {posts.map((post) => (
          <div style={{ backgroundColor: 'wheat' }} className='card' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => getComments(post.id)} style={{ backgroundColor: 'blue', border: '1px solid black' }}>Comments</button>
            {/* add new comment */}
            {comments.map((comment) => (
              comment.postId === post.id && (
                <div key={comment.id} className='card'>
                  <h3>{comment.body}</h3>
                  <p>{comment.user.username}</p>

                </div>)
            ))}
            <input onChange={(e)=>setComment(e.target.value)} type='text' placeholder='enter comment' />
            <button onClick={()=>addNewComment(post.id)} style={{ backgroundColor: 'blue', border: '1px solid black' }}>Add Comment</button>
          </div>
        ))}
      </div>
      {/* <Routing/> */}
    </>
  )
}
