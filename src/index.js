/*
================================================================================
FILE        : index.js
AUTHOR      : Kathryn Marie P. Sigaya
DESCRIPTION : JS file that serves as the index of the web app.
COPYRIGHT   : 18 July 2023
REVISION HISTORY
Date: 			By: 		Description:
18 July 2023    Sigaya      creation of file and initial layout
02 Aug 2023     Sigaya      Added components, props, map and arrow functions
================================================================================
*/

//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App.jsx"

ReactDOM.render(<App/>, document.getElementById("root"));
