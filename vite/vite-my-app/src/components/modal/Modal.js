import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { updatePost } from '../../store/slices/posts.slice';
import { useDispatch } from 'react-redux';

export default function ModalComponent({ modalIsOpen, setIsOpen, post }) {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const dispath = useDispatch();
    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setContent(post.content);
        }
    }
        , [post]);



    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const onUpdateHandler = () => {
        if (title === "" || content === "") {
            alert("Please fill all fields");
            return;
        }
        let updatedPost = {
            title: title,
            content: content,
            createdAt: post.createdAt,
        }
        console.log("Updated Post: ", updatedPost);
        dispath(updatePost({ postId: post.id, postData: updatedPost }));
        setIsOpen(false);
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h1> Update Post</h1>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                <input value={content} onChange={(e) => setContent(e.target.value)} type="text" placeholder="Content" />
                <input type="file" placeholder="Image" />
                <button style={{
                    height: "50px",
                    // margin: "20px auto",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "1rem",
                    backgroundColor: "green",
                    color: "white",
                    cursor: "pointer",
                }} onClick={onUpdateHandler}>Update</button>
            </Modal>
        </div>
    )
}
