import React from 'react';
import NumberImageText from './NumberImageText';
const InsideTab =(props)=>{
    return(
        <div className="mt20" style={{marginBottom:150}}>
            <span className="texttab1">Drei einfache Schritte</span>
            <span className="texttab1">zu denim neuen Mitarbeiter</span>
           <NumberImageText tabindex={props.tabindex}/>
        </div>
    )
}
export default InsideTab