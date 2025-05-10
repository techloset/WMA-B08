import React,{useState} from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';

let contactSchema = yup.object({
  name: yup.string().required().min(3).max(20),
  phone: yup.string().required().matches(/^[0-9]{10}$/, 'Phone number is not valid'),
  age: yup.number().required().positive().integer(),
  email: yup.string().required().email(),
  website: yup.string().url().nullable(),
  createdOn: yup.date().default(() => new Date()),
});


export default function App() {
  const [userName, setUserName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    const validate = values => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = 'Required';
      } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
      }
    
      if (!values.lastName) {
        errors.lastName = 'Required';
      } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
      }
    
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    
      return errors;
    };
    const onClickHanlder = async () => {
      try { const isValid = await contactSchema.validate({
        name: userName,
        age:`2`,
        email: email,
        phone: phone
       })
       setErrorMessage('')
       console.log(isValid);
        
      } catch (error) {
         
        console.log(error.message);
        setErrorMessage(error.message)
      }
      
    
    }
    const formik = useFormik({
      initialValues: {
        email: '',
      },
      validate,
      onSubmit: values => {
        console.log("values",values);
        
        alert(JSON.stringify(values, null, 2));
      },
    });
    console.log(formik.errors);
    
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
  
        <button type="submit">Submit</button>
      </form>
    );
  return (
    <div>
            <h1>Contact Form</h1>
             <span style={{color:'red'}}>{errorMessage}</span> 
              <br />
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
    </div>
  )
}






// import { useEffect,useState } from "react"
// import Header from "./components/header/Header";

// export default function App() {
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [count, setCount] = useState(0)
//   const [show, setShow] = useState(false)
//   const handleClick = ()=>{
//     console.log("Component mounted");
    
//   }
//   // useEffect( ()=>{
//   //   console.log("Component mounted");
    
//   // },[])

//   // useEffect( ()=>{
    
//   //   return () => {
//   //     console.log("Component unmounted");
      
//   //   }
    
//   // },[])


//   const fetchData = async () => {
//     setLoading(true)
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     console.log(data);
 
//     setData(data.slice(0,5))
//     setLoading(false)
    
//   }

//   useEffect(() => {
//     fetchData()
//   }
//   ,[])

//   useEffect(() => {
//     if(count % 5 == 0){
//       console.log("Count is divisible by 5");
//       fetchData()
//     }
    
//   }
//   ,[count])
 


//   return (
//     <div>
//       <button onClick={fetchData}>Get Data</button>
//       <br/>
//       {
//         loading ? <h1>Loading...</h1> : data.length === 0 ? <h1>No Data Found</h1> :
//         data.map((item) => {
//           return (
//             <div key={item.id}>
//               <h1>{item.title}</h1>
//               <p>{item.body}</p>
//             </div>
//           )
//         })
//       }

//       {show && <Header/>}
//       <button onClick={()=>setShow(!show)}>Toggle Header</button>
//       <button onClick={()=>setCount(count+1)}>Click me - {count}</button>
//     </div>
//   )
// }



// import React,{useState} from 'react'

// export default function App() {
//   const [userName, setUserName] = useState('')
//   const [email, setEmail] = useState('')
//   const [phone, setPhone] = useState('')
//   const  [contacts, setContact] = useState([
//     {
//       id: 1,
//       name: 'John Doe',
//       email: 'john@gmail.com',
//       phone: '555-555-5555'
//     },
//     {
//       id: 2,
//       name: 'Karen Williams',
//       email: 'karen@gmail.com',
//       phone: '222-222-2222'
//     },
//     {
//       id: 3,
//       name: 'Henry Johnson',
//       email: 'henry@gmail.com',
//       phone: '111-111-1111'
//     }

//   ])

//   const onClickHanlder = () => {
//     if(userName === '' || email === '' || phone === ''){
//       return alert('Please fill all the fields')
//     }
//     let newContact= {
//       id: contacts.length + 1,
//       name: userName,
//       email:email,
//       phone: phone
//     }
//     setContact([newContact,...contacts])
//     setUserName('')
//     setEmail('')
//     setPhone('')
//     console.log(contacts)
//   }

//   const onDeleteHandler = (id) => {
//     let newContacts = contacts.filter((item) => item.id !== id)
//     setContact(newContacts)
//   }
//   return (
//     <div>
//       <h1>Contact Form</h1>
      
//       <label>Name</label>
//       <input value={userName} type="text" onChange={(e)=> setUserName(e.target.value)} />

//       <br />
//       <label>Email</label>
//       <input value={email} type="text" onChange={(e)=> setEmail(e.target.value)} />
//       <br />
//       <label>Phone</label>
//       <input value={phone} type="text" onChange={(e)=> setPhone(e.target.value)}/>
 
//       <br />
//       <button onClick={onClickHanlder}>Add Contact</button>
//       <h1>Contacts List</h1>
//       <table border="1" width={"100%"}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.map((item) => {
//             return <tr>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.phone}</td>
//               <td>
//                 <button>Edit</button>
//                 <button onClick={()=>onDeleteHandler(item.id)}>Delete</button>
//               </td>
//             </tr>
//           })}



//         </tbody>
//       </table>
//     </div>
//   )
// }













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
