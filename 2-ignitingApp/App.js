import React from "react"
import ReactDOM from "react-dom/client"



/* 
* HMR-Hot Module Reading
* File Matcher Algorithm c++
* Bundling
* Minify
* Cleaning Our code
* Dev and Production Build
* Super Fast Build algorithm
* Image Optimization
* Caching while development
* Compression
* Compatible with older version of browser
* HTTPS on dev
* Port Number
* consistent hashing Algorithm
* Zero Config
* 
* 
* 
* 
* 
* Transitive Dependencies
*/
const heading=React.createElement("h3",
{
    id:"heading",//props
    style:{backgroundColor:"red",color:"white",padding:"10px"} 
}
,"Namaste Duniya !");
const root=ReactDOM.createRoot(document.getElementById("root"))



const heading1=React.createElement("h1",
{
    id:"heading-1"
},
"heading1 from parcel"
)
const heading2=React.createElement("h2",
{
    id:"heading2"
},
"heading2"
)
const div=React.createElement("div",
{
    id:"container"
},
[heading1,heading2])


root.render(div)