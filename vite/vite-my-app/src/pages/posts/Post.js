import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getPosts } from '../../store/slices/posts.slice';
export default function Post() { 
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const dispath = useDispatch();

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
    return (
        <div style={{
            backgroundColor: "white",
            color: "black",
            // height: "100vh",
        }}>
            <h1 style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "2rem",
                fontWeight: "bold"
            }}>Create Posts</h1>

            <input type="text" placeholder="Title" style={{
                width: "80%",
                height: "50px",
                margin: "20px auto",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem"
            }}
            onChange={(e) => setTitle(e.target.value)} value={title}
            />
            <textarea placeholder="Content" style={{
                width: "80%",
                height: "200px",
                margin: "20px auto",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem"
            }}
            onChange={(e) => setContent(e.target.value)} value={content}
            ></textarea>
            <input type="file" style={{
                width: "80%",
                height: "50px",
                margin: "20px auto",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem"
            }}
            onChange={(e) => setImage(e.target.files[0])} value={image}
            />

            <button style={{
                width: "80%",
                height: "50px",
                margin: "20px auto",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                backgroundColor: "#007bff",
                color: "white",
                cursor: "pointer",
                paddingBottom: "10px",
                marginBottom: "20px",
            }}
            onClick={onClickHandler}
            >Create Post</button>

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
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <p>{post.createdAt}</p>
                        </li>
                    ))}
                </ul>
            </div>
    

        </div>
    )
}
