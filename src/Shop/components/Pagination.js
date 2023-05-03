import React from 'react';
import PageSquare from './PageSquare';

function Pagination(props)
{ 
    return (
        <div className='pagination-pagination'>
        { props.page>4 && <div> <PageSquare nb="1" change={props.change} />
        <span>...</span>
         </div> }  
            {props.page-2>0 && <PageSquare nb={props.page-2} change={props.change} />}
            {props.page-1>0 &&<PageSquare nb={props.page-1} change={props.change} />}
                <PageSquare nb={props.page} active={true} change={props.change} />    
            {(props.page+1>0 && props.page+1<=props.last) && <PageSquare nb={props.page+1} change={props.change} />}
            {(props.page+2>0 && props.page+2<=props.last) && <PageSquare nb={props.page+2} change={props.change} />}
        
            { props.page<props.last-2 && <div>
        <span>...</span> <PageSquare nb={props.last} /> </div> }

        </div>
    )
    
}

export default Pagination;