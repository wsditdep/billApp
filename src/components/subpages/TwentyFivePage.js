import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const TwentyFivePage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        amount: "518.31 USDT",
        address: "TjHbjW6WhcAwFJnmQHV4g2XVF",
        address2: "7kNAKTEQS",
        network: "TRC20",
        remarks: "Platform Salary",
        time: "2023-8-26 15:30:35"
    });

    const [imageDimension, setImageDimension] = useState("167");

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const notify = (message) => toast.success(message, {
        containerId: 'success-toast',
        style: {
            background: 'black',
            color: 'white',
        },
    });


    const takeScreenshot = async () => {
        try {
            const canvas = await html2canvas(screenshotRef.current);
            const dataURL = canvas.toDataURL('image/png');

            const img = new Image();
            img.src = dataURL;

            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;

                const context = canvas.getContext("2d");
                context.drawImage(img, 0, 0);

                // Convert canvas to blob
                canvas.toBlob((blob) => {
                    const clipboardItem = new ClipboardItem({ [blob.type]: blob });

                    // Use the clipboard-polyfill to copy the item
                    write([clipboardItem]).then(() => {
                        notify("Copied to clipboard");
                    }).catch((error) => {
                        console.error("Error copying image:", error);
                    });
                }, img.type);
            };
        } catch (error) {
            console.error('Error taking screenshot:', error);
        }
    };

    return (
        <>
            <div className="billing_childs">
                <ToastContainer autoClose={1000} />
                <div className="app-heading">
                    <h3>PREVIEW - <span>Mobile 25</span></h3>
                    <div class="slidecontainer">
                        <button onClick={() => takeScreenshot()}>Screenshot <i className="fa fa-copy"></i></button>
                        <span>{imageDimension + "%"}</span>
                        <input
                            type="range"
                            min="1"
                            max="500"
                            className="slider"
                            name="imageDimension"
                            value={imageDimension}
                            onChange={(e) => setImageDimension(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mobile-view-wrapper">
                    <div className="artboard roboto">
                        <foreignObject ref={screenshotRef}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={imageDimension + "%"}
                                viewBox="0 0 1736 3773"
                            >
                                <g data-name="Group 86" transform="translate(-2725 -167)">
                                    <g data-name="Group 85" transform="translate(-10 59)">
                                        <path
                                            d="M0 0H1736V3773H0z"
                                            data-name="Rectangle 75"
                                            transform="translate(2735 108)"
                                        ></path>
                                        <text
                                            fill="#9d9d9d"
                                            data-name="Withdrawal Processing"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            letterSpacing=".1em"
                                            transform="translate(3603 1374)"
                                        >
                                            <tspan x="-371.778" y="0">
                                                Withdrawal Processing
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#b8b8b8"
                                            data-name="Address/Account"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(2983 1815)"
                                        >
                                            <tspan x="-190.653" y="0">
                                                Address/Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#d6d6d6"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(3947 1816)"
                                        >
                                            <tspan x="480" y="0" textAnchor="end">
                                                {data.address}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#d6d6d6"
                                            data-name="7kNAKTEQS"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(4247 1904)"
                                        >
                                            <tspan x="176" y="0" textAnchor="end">
                                                {data.address2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#d6d6d6"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(4334 2104)"
                                        >
                                            <tspan x="86" y="0" textAnchor="end">
                                                {data.network}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#d6d6d6"
                                            data-name="Platform Salary"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(4205 2322)"
                                        >
                                            <tspan x="206" y="0" textAnchor="end">
                                                {data.remarks}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#b8b8b8"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(2884 2099)"
                                        >
                                            <tspan x="-91.54" y="0">
                                                Network
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#b8b8b8"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(2892 2317)"
                                        >
                                            <tspan x="-96.206" y="0">
                                                Remarks
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="518.31 USDT"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="177"
                                            transform="translate(3603 1596)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#6f6f6f"
                                            d="M0 0H1654V6H0z"
                                            data-name="Rectangle 76"
                                            transform="translate(2772 1659)"
                                        ></path>
                                        <path
                                            fill="#6f6f6f"
                                            d="M0 0H1677V6H0z"
                                            data-name="Rectangle 77"
                                            transform="translate(2760 3670)"
                                        ></path>
                                        <text
                                            fill="#efefef"
                                            data-name="© 2023 Ezus. All rights reserved."
                                            fontFamily="Roboto-Light, Roboto"
                                            fontSize="61"
                                            fontWeight="300"
                                            transform="translate(3597 3765)"
                                        >
                                            <tspan x="-431.378" y="0">
                                                © 2024 Hero. All rights reserved.
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#efefef"
                                            data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                            fontFamily="Roboto-Light, Roboto"
                                            fontSize="61"
                                            fontWeight="300"
                                            transform="translate(3603 3847)"
                                        >
                                            <tspan x="-624.088" y="0">
                                                Conditions of Use -Privacy Policy - Legal Terms
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#efefef"
                                            data-name="Estimated completion time : 2023-8-26 15:30:35"
                                            fontFamily="Roboto-Light, Roboto"
                                            fontSize="55"
                                            fontWeight="300"
                                            letterSpacing=".148em"
                                            transform="translate(3603 3039)"
                                        >
                                            <tspan x="0" y="0" textAnchor='middle'>
                                                Estimated completion time : {data.time}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#efefef"
                                            data-name="You will receive your payment once"
                                            fontFamily="Roboto-Light, Roboto"
                                            fontSize="55"
                                            fontWeight="300"
                                            letterSpacing=".148em"
                                            transform="translate(3629 3169)"
                                        >
                                            <tspan x="-554.921" y="0">
                                                You will receive your payment once
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#efefef"
                                            data-name="withdrawal is completed"
                                            fontFamily="Roboto-Light, Roboto"
                                            fontSize="55"
                                            fontWeight="300"
                                            letterSpacing=".148em"
                                            transform="translate(3643 3258)"
                                        >
                                            <tspan x="-382.05" y="0">
                                                withdrawal is completed
                                            </tspan>
                                        </text>
                                    </g>
                                    <image
                                        width="1006"
                                        height="1006"
                                        transform="translate(3093 312)"
                                        xlinkHref="data:image/jpeg;base64,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"
                                    ></image>
                                </g>
                            </svg>
                        </foreignObject>
                    </div>
                </div>
            </div>
            <div className="billing_childs">
                <div className="app-heading">
                    <h3>CONTROLS</h3>
                </div>
                <div className="global_form_wrapper">
                    <div className="global_form_inner">
                        <label>Amount</label>
                        <input
                            type="text"
                            value={data.amount}
                            name="amount"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Address/Account</label>
                        <input
                            type="text"
                            value={data.address}
                            name="address"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.address2}
                            name="address2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Network</label>
                        <input
                            type="text"
                            value={data.network}
                            name="network"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Remarks</label>
                        <input
                            type="text"
                            value={data.remarks}
                            name="remarks"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Date</label>
                        <input
                            type="text"
                            value={data.time}
                            name="time"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TwentyFivePage;