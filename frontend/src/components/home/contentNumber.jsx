import React from 'react';

const ContentNumber = ({ScrollPosition,clickScrollNum,TotalChild}) => {

    return (
        <>
            {ScrollPosition.map((element,index)=>(
                
                index !== TotalChild-1 ?
                    <span key={index} onClick={(e) => clickScrollNum(e,index)}>
                        {`${index}`}
                    </span>
                 : 
                    <span key={index} style={{display:'none'}}>
                    </span>
                ))}
        </>
        
    )
}

export default ContentNumber;