//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

import React from "react";

const title = "This is the note title";
const content = "This is the note content";

function Note(){
    return (<div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
    </div>);
}

export default Note;