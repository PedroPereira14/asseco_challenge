import React, { useState } from 'react';
import "./styleForm.css";

const FormPage = ({ submission }) => {
    const [originAccount, setOriginAccount] = useState("My Account - 999403020030");
    const [destinationIBAN, setDestinationIBAN] = useState("");
    const [transferDescription, setTransferDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [errors, setErrors] = useState({});



    const SubmitData = (props) => {
        props.preventDefault();
        const errors = {};
        if (!originAccount){
            errors.originAccount = "Origin Account is required.";
        }
        if (!destinationIBAN){
            errors.destinationIBAN = "IBAN is required.";
        }
        if (!transferDescription){
            errors.transferDescription = "A description is required.";
        }
        if (!amount){
            errors.amount = "An amount is required.";
        }
        if (Object.keys(errors).length === 0){
            const data = {
                originAccount,
                destinationIBAN,
                transferDescription,
                amount,
            };
            console.log(data);
            submission(data);
        }
        else {
            setErrors(errors);
        }
    }

    return (
        <div class="page">
            <header class="Header">
                <div>
                    <p class="Title">National transfer</p>
                    <p class="Subtitle">Information</p>
                </div>
                <div class="step">
                    <div class="progress">
                        <div class="progressCircle">
                            <svg width="100px" height="100px" class="svg">
                                <circle cx={14} cy={14} r={14} className="circle1"></circle>
                                <circle cx={14} cy={14} r={14} className="circle2"></circle>
                            </svg>
                        </div>
                    </div>
                    <p class="stepText1">Step 1/2</p>
                </div>
            </header>
            <div>
                <form onSubmit={SubmitData} class="Form">
                    <div class="generalText">
                        <label>
                            Origin Account
                        </label>
                    </div>
                    <select id='originAccount' value={originAccount} onChange={(props) => setOriginAccount(props.target.value)} class="inputTextAccount">
                        <option value={"My Account - 999403020030"}>My Account - 999403020030</option>
                        <option value={"My Account - 184292575283"}>My Account - 184292575283</option>
                        <option value={"My Account - 305862723459"}>My Account - 305862723459</option>
                    </select>
                    {errors.originAccount && <div class="danger">{errors.originAccount}</div>}
                    <div class="generalText">
                        <label>
                            Destination IBAN
                        </label>
                    </div>
                    <input class="inputTextIBAN" type='text' id='destinationIBAN' value={destinationIBAN} onChange={(props) => setDestinationIBAN(props.target.value)} placeholder='Select the destination IBAN...'/>
                    {errors.destinationIBAN && <div class="danger">{errors.destinationIBAN}</div>}
                    <div class="generalText">
                        <label>
                            Transfer description
                        </label>
                    </div>
                    <textarea class="inputDescribeText" type='text' id='transferDescription' value={transferDescription} onChange={(props) => setTransferDescription(props.target.value)} placeholder='This is an example transaction description that spans more than one line.' />
                    {errors.transferDescription && <div class="danger">{errors.transferDescription}</div>}
                    <div class="generalText">
                        <label>
                            Amount
                        </label>
                    </div>
                    <input class="inputText" type='number' inputMode='numeric' id='amount' value={amount} onChange={props => setAmount(props.target.value)} onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }} placeholder='00' /><text class="euro">EUR</text>
                    {errors.amount && <div class="danger">{errors.amount}</div>}

                    <div class="NextStep">
                        <button class="submitButton" type="submit">Next Step</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormPage;