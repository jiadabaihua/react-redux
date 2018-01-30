import React from 'react';
export default props=>(
        <span className='default' data-name={props.pageName} onClick={props.handlePageChange}>
            {props.text}
        </span>
     )
