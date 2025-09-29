import React , { useEffect, useState } from 'react'
import axios from 'axios'
import "./update.css";
import { Link , useNavigate , useParams} from 'react-router-dom';
import toast from "react-hot-toast";

const UpdateUser = ()=> {

    const users ={
        name: "",
        email:"",
        address:"",
    };

    const [user ,setUser] = useState(users);
    const navigate = useNavigate();
    const {id} = useParams();

    const inputHandler = (e) =>{
         const {name, value }=e.target

         setUser({...user, [name]: value});
    };

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then((response) => {
            setUser(response.data);
        })
        .catch((error) =>{
        console.log(error);
    });
},[id]);

const submitForm = async (e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/user/${id}`, user)
    .then((response)=>{
        toast.success(response.data.message,{position:"top-right"});
        navigate("/");
    })
    .catch((error)=>{
console.log(error)
    })
};
  return (
    <div className='addUser'>
                <Link to="/" type="button" class="btn btn-secondary">View Users</Link>

        <h3>Update User</h3>

        <form className='addUserForm' onSubmit={submitForm}>
            <div className='inputGroup'>
                <label htmlFor='name'>Name:</label>
                <input type='text'id='name' value={user.name} onChange={inputHandler} placeholder='Enter User Name' name='name' autoComplete='off'/>
                </div>

                <div className='inputGroup'>
                <label htmlFor='email'>Email:</label>
                <input type='email'id='email' value={user.email} onChange={inputHandler} placeholder='Enter User Email' name='email' autoComplete='off'/>
</div>
<div className='inputGroup'>

                <label htmlFor='address'>Address:</label>
                <input type='text'id='address' value={user.address} onChange={inputHandler} placeholder='Enter User Address' name='address' autoComplete='off'/>

            </div>

            <div className='inputGroup'>
            <button type="submit" class="btn btn-success">Submit</button>

                </div>
        </form>
    </div>
  )
}

export default UpdateUser;