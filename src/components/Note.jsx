/*
================================================================================
FILE        : Note.jsx
AUTHOR      : Kathryn Marie P. Sigaya
DESCRIPTION : JSX file where the note component will be displayed.
COPYRIGHT   : 18 July 2023
REVISION HISTORY
Date: 			By: 		Description:
18 July 2023    Sigaya      creation of file and initial layout
02 Aug 2023     Sigaya      Added components, props, map and arrow functions
================================================================================
*/

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

import React from "react";

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.contents}</p>
        </div>
    );
}

export default Note;