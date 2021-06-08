import React from 'react'
import './HowWork.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FileCopyIcon from '@material-ui/icons/FileCopy';

function HowWork() {
    return (
        <div className="HowWork">
            <div className="HowWork-container">
                <h2>How it works</h2>
                <div className="HowWork-flex">
                    <div>
                        <span className="fas"><LocalLaundryServiceIcon/></span>
                        <h4>Step 1:</h4>
                        <p> Customer contact us via website / phone call / Email / Social media and get the quote for Service category needed.</p>
                    </div>
                    <div>
                        <span className="fas"><CloudUploadIcon/></span>
                        <h4>Step 2:</h4>
                        <p> We book the service as per your convenient time and give order id on same day and keep you updated until task complete.</p>
                    </div>
                    <div>
                        <span className="fas"><FileCopyIcon/></span>
                        <h4>Step 3:</h4>
                        <p> Our Representative will visit as per your convenient time mentioned and complete the services as assigned. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWork
