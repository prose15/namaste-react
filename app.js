/*
<div>
<div classname="parent">
<div classname="child">
    <h1>Hi iam h1 tag</h1>
    <h1>Hi iam h1 tag</h1>
</div>
<div classname="child2">
    <h1>Hi iam h1 tag</h1>
    <h1>Hi iam h1 tag</h1>
</div>
</div>
</div>

*/



const heading = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hi i am h1 tag"),React.createElement("h1",{},"Hi i am tag 2")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"Hi i am h1 tag"),React.createElement("h1",{},"Hi i am tag 2")])])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)