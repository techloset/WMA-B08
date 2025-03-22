import {useState} from 'react'

export default function App() {
  const [userName, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [contacts, setContacts] = useState([])
 
  const handleClick = () => {
    console.log('Name:', userName)
    console.log('Email:', email)
    console.log('Phone:', phone)
    console.log('Password:', password
    )
    const contact = {
      name: userName,
      email: email,
      phone: phone,
      password: password
    }
    setContacts([...contacts, contact])
  }
  
  
  return (
    <div>
      <h1>Contact Form</h1>

      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />
      <br/>
      <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
      <br/>
      <input type="text" onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Phone' />
      <br/>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' />
      <br/>
      <button onClick={handleClick}>Submit</button>

      <hr/>
      <h2>Contacts</h2>
      <ul>
        {contacts.length === 0 && <li>No contacts available</li>}
        {contacts.map((contact, index) => (
          <li key={index}>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Password: {contact.password}</p>
          </li>
        ))}
      </ul>
      
    </div>
  )
}
