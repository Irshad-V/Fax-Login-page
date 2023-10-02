import React from 'react'

function Faxtable({ faxContent }) {
    return (
        <table className='table'>
            <thead className='namw' >
                <th>Fax ID</th>
                <th>Case ID</th>
                <th>Fax Status</th>
                <th>Verified</th>
                <th>Main Fax ID</th>
                <th>Fax Date</th>
                <th>Fax Time</th>
                <th>Sender Fax #</th>
                <th>Ocr Status</th>
            </thead>
            <tbody>
                {faxContent.map((fax, index) => {
                    return (
                        <tr key={index}>
                            <td data-label="Fax ID">{fax.faxID}</td>
                            <td data-label="Case ID">{fax.caseID}</td>
                            <td data-label="Fax Status">{fax.faxStatus}</td>
                            <td data-label="verified">{fax.verified}</td>
                            <td data-label="Main Fax ID">{fax.mainFaxID}</td>
                            <td data-label="Fax Date">{fax.faxDate}</td>
                            <td data-label="Fax Time">{fax.faxTime}</td>
                            <td data-label="Sender Fax ">{fax.senderFaxNumber}</td>
                            <td data-label="Ocr Status">{fax.ocrStatus}</td>
                        </tr>


                    )
                })}



            </tbody>



        </table>
    )
}

export default Faxtable
