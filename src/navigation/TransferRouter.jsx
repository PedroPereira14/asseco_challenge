import React, { useState } from "react";
import FormPage from "../views/FormPage/formPage.jsx";
import ConfirmationPage from "../views/ConfirmationPage/confirmationPage.jsx";

const TransferRouter = () => {
    const [data, setData] = useState(null);

    const handleData = (data) => {
        setData(data);
    }
    const Back = () => {
        setData(null);
    }
    
    return(
        <div>
            {!data ? (
                    <FormPage submission={handleData} />
                ) : (
                    <ConfirmationPage props={data} Back={Back}/>
                )
            }
        </div> 
    )
}

export default TransferRouter;