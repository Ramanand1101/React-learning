const heading=React.createElement("h3",
{
    id:"heading",//props
    style:{backgroundColor:"red",color:"white",padding:"10px"} 
}
,"Namaste Duniya !");
const root=ReactDOM.createRoot(document.getElementById("root"))



const heading1=React.createElement("h1",{},"heading1")
const heading2=React.createElement("h2",{},"heading2")
const div=React.createElement("div",
{
    id:"container"
},
[heading1,heading2])


root.render([heading,div])