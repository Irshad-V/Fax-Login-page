import React from 'react'
import Fax from '../components/Fax'
import Faxtable from '../components/Faxtable'
import { faxContent } from '../Faxxontent'


function Faxlist() {
    return (
        <div className='fax-container'>
            <Fax />
            <Faxtable faxContent={faxContent} />
        </div>

    )
}

export default Faxlist
