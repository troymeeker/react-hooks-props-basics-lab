import React from "react"



function Links({github, linkedin}){
    return (
        <React.Fragment>
        <h3> Links</h3>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a>
        </React.Fragment>
    );
}

export default Links;