import React from 'react'
import Hoc from '../admin/Hoc'
// import { useEffect } from 'react';
// import { useState } from 'react'

const UserLogin = ({ data }) => {
    // const [userList,setUserList] = useState([]);
    // const [term, setTerm] = useState('')
    // useEffect(()=>{
    //     const fetchUsers = async ()=> {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const jsonRes = await res.json();
    //         setUserList(jsonRes);
    //         console.log(jsonRes);
    //     }
    //     fetchUsers()
    // },[]) 
    // const filteredUser = userList.filter(({name})=>(name.indexOf(term) >=0)).map((user)=>(<div key={user.id}><strong>{user.name}</strong></div>))
   const filteredData = data.map((user)=>(<div key={user.id}><strong>{user.name}</strong></div>))
    return (

    <>
        <div>UserLogin</div>
        {/* <input type='text' value={term} onChange={(e)=>setTerm(e.target.value)}></input> */}
         <p/>
        {/* {userList.map((user)=>(
            <div key={user.id}><strong>{user.name}</strong></div>
        ))} */}
        {/* {userList.filter(({name})=>(name.indexOf(term) >=0)).map((user)=>(<div key={user.id}><strong>{user.name}</strong></div>))} */}
        {/* {filteredUser} */}
        {filteredData}
        <br/>
    </>
  )
}
// this is commented line. this is in 2nd branch. This is master branch.

const SearchUsers = Hoc(UserLogin, 'users')
export default SearchUsers