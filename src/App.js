import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import Gallery from "./Gallery";


function App() {
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const[search,setsearch]=useState("");
const[data,setdata]=useState([]);

const change=(e)=>{
  setsearch(e.target.value);
}
const submit=(e)=>{
  e.preventDefault();
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
  ).then(
    (res)=>setdata(res.data.photos.photo)).catch(err=>console.log(err.message));
  console.log(search);
  setsearch("");
}

  return (
    <div className="app">

      <center>
        <form className="form1" onSubmit={submit}>
        <h3>Gallery snapshot</h3>

       <input  type="text" placeholder="serch images" name="serach"
       value={search} onChange={change}/>       <br/>
       <input type="submit" name="submit"/>
       </form>

      <br/>
      {data.length>=1?<Gallery  data={data}/>:<h4> no data</h4>}
      </center>
      
    </div>
  );
}

export default App;
