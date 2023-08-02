/*
================================================================================
FILE        : Header.jsx
AUTHOR      : Kathryn Marie P. Sigaya
DESCRIPTION : JSX file where the header will be displayed on top of the web app.
COPYRIGHT   : 18 July 2023
REVISION HISTORY
Date: 			By: 		Description:
18 July 2023    Sigaya      creation of file and initial layout
02 Aug 2023     Sigaya      Added components, props, map and arrow functions
================================================================================
*/
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.

import React from "react";

function Header() {
    return (
        <header><h1>Keeper App</h1></header>
    );
}

export default Header;