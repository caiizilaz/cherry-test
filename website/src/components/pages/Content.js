import React, {useState, useEffect} from "react";
import Avatar from '@mui/material/Avatar';


function Content() {

    
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://reqres.in/api/users")
          .then(res => res.json())
          .then(
            (result) => 
              { setItems(result.data);
                console.log(result.data);
              }
              );
            },          
       []);
    
    return(
<div className="member">
    
<h1>Meet our leadership</h1><br/>
<p>Libero fames augue nisl porttior nisi,<br/>
   quis. Id ac elit odio vitae elementum<br/>
   enim vitae ullamcorpoer suspendisse.<br/>
   Vivamus fringilla.</p><br/>

   {items.map((data) => {
    return <div>
   
   <br/> <img src={data.avatar} atl=''/><br/>
    {data.email}<br/>
    {data.first_name} {data.last_name}
     </div>;

   })}

</div>

    );
}


export default Content;
