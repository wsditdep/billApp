import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SeventyEightPage = () => {
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
                    <h3>PREVIEW - <span>Mobile 78</span></h3>
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
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.524"
                                        x2="0.5"
                                        y1="0.566"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#fff"></stop>
                                        <stop offset="1" stopColor="#1ccfb9"></stop>
                                    </linearGradient>
                                </defs>
                                <g data-name="Group 343" transform="translate(-324 -89)">
                                    <g data-name="Group 342">
                                        <path
                                            fill="url(#linear-gradient)"
                                            d="M0 0H1736V3773H0z"
                                            data-name="Rectangle 75"
                                            transform="translate(324 89) rotate(180 868 1886.5)"
                                        ></path>
                                        <text
                                            fill="#1c1c1c"
                                            data-name="Withdrawal Processing"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            letterSpacing=".1em"
                                            transform="translate(1192 1355)"
                                        >
                                            <tspan x="-371.778" y="0">
                                                Withdrawal Processing
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#030303"
                                            data-name="Address/Account"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(572 1796)"
                                        >
                                            <tspan x="-190.653" y="0">
                                                Address/Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#030303"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(1536 1797)"
                                        >
                                            <tspan x="475.438" y="0" textAnchor="end">
                                                {data.address}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#030303"
                                            data-name="7kNAKTEQS"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(1836 1885)"
                                        >
                                            <tspan x="173.727" y="0" textAnchor="end">
                                                {data.address2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#030303"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(1923 2085)"
                                        >
                                            <tspan x="90" y="0" textAnchor="end">
                                                {data.network}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#030303"
                                            data-name="Platform Salary"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(1794 2303)"
                                        >
                                            <tspan x="214" y="0" textAnchor="end">
                                                {data.remarks}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#030303"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(473 2080)"
                                        >
                                            <tspan x="-91.54" y="0">
                                                Network
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#030303"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(481 2298)"
                                        >
                                            <tspan x="-96.206" y="0">
                                                Remarks
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#1c1c1c"
                                            data-name="518.31 USDT"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="177"
                                            transform="translate(1192 1577)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#6f6f6f"
                                            d="M0 0H1654V6H0z"
                                            data-name="Rectangle 76"
                                            transform="translate(361 1640)"
                                        ></path>
                                        <path
                                            fill="#6f6f6f"
                                            d="M0 0H1677V6H0z"
                                            data-name="Rectangle 77"
                                            transform="translate(349 3651)"
                                        ></path>
                                        <text
                                            data-name="Copyright@2024 Binamik Tecnologia all rights reserved"
                                            fontFamily="Roboto-Light, Roboto"
                                            fontSize="61"
                                            fontWeight="300"
                                            transform="translate(1188 3788)"
                                        >
                                            <tspan x="-734.74" y="0">
                                                Copyright@2024 Binamik Tecnologia all rights reserved
                                            </tspan>
                                        </text>
                                        <text
                                            data-name="Estimated completion time : 2023-8-26 15:30:35"
                                            fontFamily="Roboto-Light, Roboto"
                                            fontSize="55"
                                            fontWeight="300"
                                            letterSpacing=".148em"
                                            transform="translate(1192 3020)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle">
                                                Estimated completion time : {data.time}
                                            </tspan>
                                        </text>
                                        <text
                                            data-name="You will receive your payment once"
                                            fontFamily="Roboto-Light, Roboto"
                                            fontSize="55"
                                            fontWeight="300"
                                            letterSpacing=".148em"
                                            transform="translate(1218 3150)"
                                        >
                                            <tspan x="-554.921" y="0">
                                                You will receive your payment once
                                            </tspan>
                                        </text>
                                        <text
                                            data-name="withdrawal is completed"
                                            fontFamily="Roboto-Light, Roboto"
                                            fontSize="55"
                                            fontWeight="300"
                                            letterSpacing=".148em"
                                            transform="translate(1232 3239)"
                                        >
                                            <tspan x="-382.05" y="0">
                                                withdrawal is completed
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#0046d1"
                                            d="M0 0.892L1.15 0"
                                            data-name="Line 1"
                                            transform="translate(955.699 649)"
                                        ></path>
                                        <image
                                            width="1002"
                                            height="310"
                                            transform="translate(697 923)"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                    </g>
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

export default SeventyEightPage;