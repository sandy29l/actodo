import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login(props){
    const loginuser=props.loginuser;
    const [newuser,setnewuser]=useState("");
    const [newuserpass,setnewuserpass]=useState("");
    const [ruser,setruser]=useState(true);
    var validuser=false;

    const navigate=useNavigate();
    function handleuser(evt){
        setnewuser(evt.target.value);
    }
    function handlepass(evt){
        setnewuserpass(evt.target.value);
    }
    function checkuser(){
        loginuser.forEach(function(item){
            if(item.username===newuser && item.password===newuserpass){
                console.log("successfull")
                validuser=true;
                navigate("/actodo",{state:{user:newuser}});
            }
        })
        if(validuser===false){
            console.log("login failed")
            setruser(false)
        }
        setnewuser("")
        setnewuserpass("")
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded">
                <h1 className="font-medium text-3xl">Heyy Hii</h1>
                {(ruser)?<p>I help you manage you activity after you login:)</p>:<p className='text-red-700'>Please signup before you login</p>}
                <div className="flex flex-col gap-2 my-2">
                <input placeholder="username" className="border border-black rounded w-52 p-1" value={newuser} onChange={handleuser}></input>
                <input placeholder="password" className="border border-black rounded w-52 p-1" value={newuserpass} onChange={handlepass}></input>
                </div>
                <button className="bg-purple-400 p-2 border rounded-md" onClick={checkuser}>Login</button>
                <p>don't Have an account?<Link to="/signup" className="underline text-blue-500"> Signup</Link></p>
            </div>
            
        </div>
    )
}
export default Login;