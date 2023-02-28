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
    
<h1>Meet our team</h1><br/>
<p>Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.</p><br/>

   {items.map((data) => {
    return <p>{data.id}.&nbsp;
    {data.avatar}<br/>
    {data.email}<br/>
    {data.first_name} {data.last_name}
     </p>;

   })}

</div>

    );
}


export default Content;