/*
================================================================================
FILE        : App.jsx
AUTHOR      : Kathryn Marie P. Sigaya
DESCRIPTION : JSX file where the Keeper App website will be launched as root.
COPYRIGHT   : 18 July 2023
REVISION HISTORY
Date: 			By: 		Description:
18 July 2023    Sigaya      creation of file and initial layout
02 Aug 2023     Sigaya      Added components, props, map and arrow functions
================================================================================
*/

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
    return (
        <div>
            <Header/>
            {notes.map((noteContents) => (
                <Note
                    title={noteContents.title}
                    contents={noteContents.content}
                />
            ))}
            <Footer/>
        </div>
    );
}

export default App;