import { useState } from "react";

function Form(){
    const [activityarr,setactivity]=useState([]);
    const [newactivity,setnewactivity]=useState("");

    function handlechange(evt){
        setnewactivity(evt.target.value)
    }
    function addnewactivity(){
        setactivity([...activityarr,{id:activityarr.length+1,activity:newactivity}])
        setnewactivity("")
    }
    function handledelete(id){
        var temarr=activityarr.filter(function(item){
            if(item.id===id){
                return false
            }
            else{
                return true
            }
        })
        setactivity(temarr)
    }
    return(

        <div className="flex gap-3 flex-wrap">
            <div>
                <h1 className="text-2xl font-medium">Manage Activity</h1>
                <div className="my-2">
                <input placeholder="Next activity..?" className="border border-black bg-transparent p-1" value={newactivity} onChange={handlechange}></input>
                <button className="border border-black bg-black text-white p-1" onClick={addnewactivity}>Add</button>
                </div>
            </div>
            <div className="bg-purple-400 flex-grow border rounded-md p-2">
                <div>
                    <h1 className="text-3xl font-medium">Today's Activity</h1>
                    {(activityarr.length===0)?"Have'nt added anything":""}
                    {
                        activityarr.map(function(item,index){
                            return(
                                <div className="flex justify-between">
                                    <p>{index+1}.{item.activity}</p>
                                    <button className="text-red-600" onClick={()=>{handledelete(item.id)}}>delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Form;