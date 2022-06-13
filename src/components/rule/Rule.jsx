import React from 'react'
import "./Rule.scss"

export default function Rule({rule}) {
    return ( rule && 
    <ul className='ruleContainer'>
        <h4>1. In the input field "Find tag", you need to enter the tag without #. The search is based on a complete match of the tags (if nothing is found, nothing will be shown).</h4>
        <h4>2. Create tags using the symbol#.</h4>
        <h4>3. In the field "Tags", you can view all the current tags, and delete them with the contents of the tag.</h4>
        <h4>4. You can change the tag by the button "Edit" (or by completely deleting the tag).</h4>
    </ul>
    )
}
