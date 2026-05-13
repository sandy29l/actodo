import { useState } from "react";

function Formcomp(){

    const [fname,setfname]=useState('');
    const [lname,setlname]=useState('');
    const [result,merge]=useState("result");

    function handlefname(event){
        setfname(event.target.value)
    }
    function handlelname(event){
        setlname(event.target.value)

    }
    function mergename(event){
        event.preventDefault()
        merge(Number(fname) + Number(lname))
    }

    return(
        <div>
            <form>
                <label>FirstName: </label>
                <input type="number" value={fname} onChange={handlefname}></input>
                <br/>
                <label >LastName: </label>
                <input type="number" value={lname} onChange={handlelname}></input>
                <br/>
                <input type="submit" onClick={mergename}></input>
            </form>
            <h1>{result}</h1>
        </div>
    )
}
export default Formcomp