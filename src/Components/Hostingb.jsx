import React from "react";
const Hostingb=(props)=>
{
    return <>
    <div className="col-md-6 hosting-row">
        <div className="row text-light"><h1>{props.hosting}</h1></div>
        <div className="row mt-1 text-light"><p className="control">{props.control}</p></div>
        <div className="row mt-1 ">
        <button className="Get-started">Get started</button>
        </div>
    </div>
    <div className="col-md-6">
        <img src={props.hostingimg} alt={props.hostingalt}/>
    </div>
 
    </>


}
export default Hostingb;