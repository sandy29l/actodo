import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup(props){
    
    const loginuser=props.loginuser;
    const setloginuser=props.setloginuser;
    const navigate=useNavigate();

    const [newusername,setnewusername]=useState("");
    const [newuserpass,setnewuserpass]=useState("");
    const [newuserconformpass,setnewconformpass]=useState("");

    function handleuser(evt){
        setnewusername(evt.target.value)
    }
    function handlepass(evt){
        setnewuserpass(evt.target.value)
    }
    function addnewuser(){
        // (newuserpass===newuserconformpass)?setloginuser([...loginuser,{username:newusername,password:newuserpass}]):alert("Enter correct password");
        if(newuserpass===newuserconformpass){
            setloginuser([...loginuser,{username:newusername,password:newuserpass}])
            alert("Signup successfull you can login now:)")
            navigate("/")
        }
        else{
            alert("Enter correct password")
        }
        setnewusername("")
        setnewuserpass("")
        setnewconformpass("")
    }
    function conformpass(evt){
        setnewconformpass(evt.target.value)
    }
    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded">
                <h1 className="font-medium text-3xl">Heyy Hii</h1>
                <p>You can Signup here:)</p>
                <div className="flex flex-col gap-2 my-2">
                <input placeholder="username" className="border border-black rounded w-52 p-1"  value={newusername} onChange={handleuser}></input>
                <input placeholder="password" className="border border-black rounded w-52 p-1"  value={newuserpass} onChange={handlepass}></input>
                <input placeholder="conform password" className="border border-black rounded w-52 p-1" value={newuserconformpass} onChange={conformpass}></input>
                </div>
                <button className="bg-orange-400 p-2 border rounded-md" onClick={addnewuser}>Signup</button>
                <p>Already Have an account?<Link to="/" className="underline text-blue-500"> Login</Link></p>
            </div>
            
        </div>
    )
}
export default Signup;