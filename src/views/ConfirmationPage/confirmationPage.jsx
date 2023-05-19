import React, {useState} from "react";
import "./style.css";
import PdfView from "../PdfViewPage/pdfView";



const ConfirmationPage = ({ props, Back }) => {
    const [showPdf, setShowPdf] = useState(false);

    const handlePDF = () => {
        setShowPdf(true);
      };

    if (showPdf) {
        return <PdfView data={props} />;
    }

  return (
    <div class="page">
      <header class="Header">
        <div>
          <p class="Title">National transfer</p>
          <p class="Subtitle">Summary</p>
        </div>
        <div class="step">
          <div class="progress">
            <div class="progressCircle">
              <svg width="100px" height="100px" class="svg">
                <circle cx={14} cy={14} r={14} className="circle3"></circle>
                <circle cx={14} cy={14} r={14} className="circle4"></circle>
              </svg>
            </div>
          </div>
          <p class="stepText">Step 2/2</p>
        </div>
      </header>
        <div>
          <div>
              <div class="generalText">
                  <label>
                    Origin Account
                  </label>
               </div>
              <div class="TextAccount">
                <p>{props.originAccount}</p>
              </div>
              <div class="generalText">
                <label>Destination IBAN</label>
              </div>
              <div class="TextIBAN">
                <p>{props.destinationIBAN}</p>
              </div>
              <div class="generalText">
                <label>Transfer description</label>
              </div>
              <div class="DescribeText">
                <p>{props.transferDescription}</p>
              </div>
              <div class="generalText">
                <label>Amount</label>
              </div>
                <text class="Text">{props.amount}</text><text class="euro">EUR</text>
              <div class="FinalStep">
                <button class="cancelButton" onClick={Back}>Cancel</button>
                <button class="confirmButton" onClick={handlePDF}>Confirm</button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
