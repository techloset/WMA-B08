import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, fetchPosts, increment, setUserName } from '../../store/slices/counter.slice'
import { setUser } from '../../store/slices/user.slice'

export default function Counter() {
  const dispatch = useDispatch()
const count = useSelector((store) => store.counterSlice.count)
const userName = useSelector((store) => store.counterSlice.userName)
const isLogin = useSelector((store)=>store.userSlice.isLogin)
const posts = useSelector((store)=>store.counterSlice.posts)
console.log(posts)

const onClickHandler =()=>{
  console.log("onClickHandler clicked");
  dispatch(setUserName("Naveed"))
  dispatch(increment())
  
}

const onDecrementHandler =()=>{
  console.log("onDecrementHandler clicked");
  dispatch(decrement())
}



useEffect(() => {
   dispatch(fetchPosts({
    page: 1,
    limit: 10,
   }))
}, [])



  return (
    <div style={{backgroundColor:'wheat'}}>
      
      <button onClick={onClickHandler}>+</button>
      <h1>{count}-{userName}</h1>
      <button onClick={onDecrementHandler}>-</button>
      
       </div>
  )
}
