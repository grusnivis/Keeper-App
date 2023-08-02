/*
================================================================================
FILE        : Footer.jsx
AUTHOR      : Kathryn Marie P. Sigaya
DESCRIPTION : JSX file where the footer will be displayed on the bottom of the web app.
COPYRIGHT   : 18 July 2023
REVISION HISTORY
Date: 			By: 		Description:
18 July 2023    Sigaya      creation of file and initial layout
02 Aug 2023     Sigaya      Added components, props, map and arrow functions
================================================================================
*/

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer><p>Copyright ⓒ {year}</p></footer>
    );
}

export default Footer;