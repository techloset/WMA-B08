import React,{useState} from 'react'

export default function App() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const  [contacts, setContact] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      phone: '555-555-5555'
    },
    {
      id: 2,
      name: 'Karen Williams',
      email: 'karen@gmail.com',
      phone: '222-222-2222'
    },
    {
      id: 3,
      name: 'Henry Johnson',
      email: 'henry@gmail.com',
      phone: '111-111-1111'
    }

  ])

  const onClickHanlder = () => {
    if(userName === '' || email === '' || phone === ''){
      return alert('Please fill all the fields')
    }
    let newContact= {
      id: contacts.length + 1,
      name: userName,
      email:email,
      phone: phone
    }
    setContact([newContact,...contacts])
    setUserName('')
    setEmail('')
    setPhone('')
    console.log(contacts)
  }

  const onDeleteHandler = (id) => {
    let newContacts = contacts.filter((item) => item.id !== id)
    setContact(newContacts)
  }
  return (
    <div>
      <h1>Contact Form</h1>
      
      <label>Name</label>
      <input value={userName} type="text" onChange={(e)=> setUserName(e.target.value)} />

      <br />
      <label>Email</label>
      <input value={email} type="text" onChange={(e)=> setEmail(e.target.value)} />
      <br />
      <label>Phone</label>
      <input value={phone} type="text" onChange={(e)=> setPhone(e.target.value)}/>
 
      <br />
      <button onClick={onClickHanlder}>Add Contact</button>
      <h1>Contacts List</h1>
      <table border="1" width={"100%"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item) => {
            return <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button>Edit</button>
                <button onClick={()=>onDeleteHandler(item.id)}>Delete</button>
              </td>
            </tr>
          })}



        </tbody>
      </table>
    </div>
  )
}













// import React,{useState} from 'react'

// export default function App() {
//   const [count, setCount] = useState(0)
//   const increment = () => {
//     setCount(count + 1)
//   }
//   const decrement = () => {
//     if(count === 0){
//       return
//     }
//     setCount(count - 1)
//   }

//   const reset = () => {
//     setCount(0)
//   }
//   return (
//     <div>
//      <button onClick={decrement}>-</button> <span>{count}</span> <button onClick={increment}>+</button> 
//      <button onClick={reset}>Reset</button>
//     </div>
//   )
// }
