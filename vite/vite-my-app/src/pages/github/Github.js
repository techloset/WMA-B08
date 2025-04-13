import React,{useState} from 'react'
import axios from 'axios';
// https://jsonplaceholder.typicode.com/posts/1/comments
export default function Github() {
    const [search, setSearch] = useState("");
    const [user, setUser] = useState({});
    const fetchGithubUser = async()=>{
        try {
            const response = await axios.get(`https://api.github.com/users/${search}`);
            console.log(response.data);
            setUser(response.data);
            setSearch("");
        } catch (error) {
            console.log(error);
            
        }
    }
    const onClickHandler = () => {
        if (search === "") {
            alert("Please enter a username");
        } else {
            fetchGithubUser()
        }
    }
    return (
        <div>
            <h1 style={{ color: 'wheat' }}>Github User Search App</h1>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search for a user" style={{ color:'white',padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <button onClick={onClickHandler} style={{marginTop:'20px', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: 'blue', color: 'white' }}>Search</button>
            <div style={{ marginTop: '20px' }}>
                <h2 style={{ color: 'wheat' }}>User Details</h2>
                <img src={user.avatar_url} alt="User Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                <p style={{ color: 'wheat' }}>Name: {user.name}</p>
                <p style={{ color: 'wheat' }}>Bio: {user.bio}</p>
                <p style={{ color: 'wheat' }}>Followers: {user.followers}</p>
                <p style={{ color: 'wheat' }}>Following: {user.following}</p>
                <p style={{ color: 'wheat' }}>Public Repos: {user.public_repos}</p>
                <p style={{ color: 'wheat' }}>Location: {user.location}</p>
                <p style={{ color: 'wheat' }}>Company:{user.company}</p>
                </div>
            </div>
            )
}
