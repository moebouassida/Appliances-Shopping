import React from 'react';
import './Pagination.css'

function PageSquare(props)
{
    return (
            <button className={props.active ?'square-pagination-active' : 'square-pagination-nonactive'} onClick={()=>props.change(props.nb)}             >{props.nb}</button>
    )
}


export default PageSquare;