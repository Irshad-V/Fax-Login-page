import React from 'react'

function Fax() {
    return (
       
            <div className="fax-box">
                <div className="fax-user">
                    
                    <p>NEXT SCIENCE</p>
                    <div className="user-icon">
                        <i class="fa-regular fa-user"></i>
                        <p>Erica Fernamdas</p>
                    </div>
                    <div className="ocr-status-check">
                        <label htmlFor="search"> OCR status:</label>
                        <input type="search" name="search" id="" />
                    </div>

                </div>

                <p className='titile'>FAX LIST</p>

                <div className="fax-data">
                    <div className="user-icon list">
                        <i class="fa-regular fa-user"></i>
                        <p>Fax list</p>
                    </div>
                    <div className="user-icon one">
                        <i class="fa-regular fa-user"></i>
                        <p>Rx Tracker List
                        </p>
                    </div>
                    <div className="user-icon two">
                        <i class="fa-regular fa-user"></i>
                        <p>Case Detsils</p>
                    </div>
                    <div className="user-icon log-out">
                        <i class="fa-regular fa-user"></i>
                        <p>Logout</p>
                    </div>


                    <div className="heading">
                        <h1>Tika<span>Rx</span></h1>
                        <p>Rx Management </p>
                    </div>


                </div>

            </div>

          

    )
}
export default Fax
