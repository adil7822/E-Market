import React from "react";
import ReactDom from "react-dom";
import "./style.css";

function Card(props){
    return(
<div className="mainDiv" >
<div>
<h1>{props.name}</h1>
 <img   src={props.img} alt="adil"></img>
 </div>
<p>{props.phno}</p>
<p>{props.gmail}</p>
</div>

    )
}


ReactDom.render(
  <div>

  
<Card name="Adil Raza" img="https://www.w3schools.com/html/img_chania.jpg"
  phno="03036778912" gmail="adilr7822@gamil.com"  
/>
<Card name="Adil Raza" img="https://www.w3schools.com/html/img_chania.jpg"
  phno="03036778912" gmail="adilr7822@gamil.com"  
/>
<Card name="Adil Raza" img="https://www.w3schools.com/html/img_chania.jpg"
  phno="03036778912" gmail="adilr7822@gamil.com"  
/>
</div>
    
,document.getElementById("root")
)