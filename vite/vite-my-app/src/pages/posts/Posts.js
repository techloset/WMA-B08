import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createPost, deletePost, getPosts } from '../../store/slices/posts.slice';
import Modal from '../../components/modal/Modal';
import { Link } from 'react-router';

export default function Post() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [post, setPost] = useState(null);
    const [image, setImage] = useState(null);
    const dispath = useDispatch();


    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(post) {
        setPost(post);
        setIsOpen(true);
    }



    const posts = useSelector((store) => store.postSlice.posts);

    const onClickHandler = () => {
        if (title === "" || content === "") {
            alert("Please fill all fields");
            return;
        }

        console.log("Title: ", title);
        console.log("Content: ", content);
        console.log("Image: ", image);
        let newPost = {
            title: title,
            content: content,
            createdAt: new Date().toISOString(),
        }

        dispath(createPost(newPost));


    }

    useEffect(() => {
        dispath(getPosts());
    }, []);

    const onClickDeleteHandler = (id) => {
        console.log("Delete Post with id: ", id);
        confirm("Are you sure you want to delete this post?") && dispath(deletePost(id));
    }
    return (
        <div style={{
            backgroundColor: "white",
            color: "black",
            // height: "100vh",
        }}>
            {/* create Post link */}
            <Link to="/createPost" style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.5rem",
                marginLeft: "20px",
                marginTop: "20px",
                display: "inline-block"
            }}>Create Post</Link>

            {/* list of posts */}
            <div style={{
                width: "80%",
                margin: "20px auto",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem"
            }}>
                <h2 style={{
                    textAlign: "center",
                    marginTop: "20px",
                    fontSize: "2rem",
                    fontWeight: "bold"
                }}>Posts List</h2>
                <div>
                    {posts.map((post) => (
                        <div key={post.id} style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "20px",
                        }}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <p>{post.createdAt}</p>
                            <img src={post.imageUrl} alt="post" style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "5px",
                            }} />

                            <button
                                onClick={() => onClickDeleteHandler(post.id)}
                                style={{

                                    height: "50px",
                                    // margin: "20px auto",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                    fontSize: "1rem",
                                    backgroundColor: "#dc3545",
                                    color: "white",
                                    cursor: "pointer",
                                }}
                            >Delete</button>

                            <button
                                onClick={()=>openModal(post)}
                                style={{

                                    height: "50px",
                                    // margin: "20px auto",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                    fontSize: "1rem",
                                    backgroundColor: "green",
                                    color: "white",
                                    cursor: "pointer",
                                }}
                            >update</button>

                        </div>
                    ))}
                </div>
            </div>

            <Modal
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                post={post}
            />


        </div>
    )
}
