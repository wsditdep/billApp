import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const FourtyThreePage = () => {
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
                    <h3>PREVIEW - <span>Mobile 43</span></h3>
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
                    <div className="artboard">
                        <foreignObject ref={screenshotRef}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={imageDimension + "%"}
                                viewBox="0 0 1736 3773"
                            >
                                <g data-name="Group 187" transform="translate(-553 -162)">
                                    <g data-name="Group 185" transform="translate(0 -27)">
                                        <g data-name="Group 126" transform="translate(0 45)">
                                            <g data-name="Group 96">
                                                <g data-name="Group 87" transform="translate(-2172 -23)">
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
                                                            <tspan x="470" y="0" textAnchor="end">
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
                                                            <tspan x="170" y="0" textAnchor="end">
                                                                {data.address2}
                                                            </tspan>
                                                        </text>
                                                        <text
                                                            fill="#d6d6d6"
                                                            fontFamily="Roboto-Regular, Roboto"
                                                            fontSize="63"
                                                            transform="translate(4334 2104)"
                                                        >
                                                            <tspan x="80" y="0" textAnchor="end">
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
                                                            <tspan x="210" y="0" textAnchor="end">
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
                                                            data-name="© 2024 Perfect. All rights reserved."
                                                            fontFamily="Roboto-Light, Roboto"
                                                            fontSize="61"
                                                            fontWeight="300"
                                                            transform="translate(3597 3765)"
                                                        >
                                                            <tspan x="-462.832" y="0">
                                                                © 2024 Perfect. All rights reserved.
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
                                                            <tspan x="0" y="0" textAnchor="middle">
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
                                                </g>
                                                <path
                                                    fill="#0046d1"
                                                    d="M0 0.892L1.15 0"
                                                    data-name="Line 1"
                                                    transform="translate(1184.7 704)"
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                    <path
                                        fill="#d6b560"
                                        fillRule="evenodd"
                                        d="M0 96.581v44.961l.006.006H0l48.641 48.444V187.2l.007.006v-52.981H75.6q20.475 0 35.785-7.581a56.249 56.249 0 0023.887-21.611q8.574-14.029 8.575-33.2c0-12.664-2.771-32.475-8.313-41.944a57.051 57.051 0 00-23.276-22.046Q97.3 0 77.346 0H0v48.134l.008.008H0l48.636 48.439H0zm48.641 0H65.8a32.91 32.91 0 0014.612-2.962 21.713 21.713 0 009.362-8.628A25.214 25.214 0 0093.1 71.833c0-5.112-1.108-18.213-3.325-21.815a20.826 20.826 0 00-9.362-8.365A32.91 32.91 0 0065.8 38.69H48.648v54.73l-.007-.006zm453.63-8.361V53.364h-24.5v-5.926a11.562 11.562 0 012.362-7.581q2.362-2.876 9.187-2.876a42.127 42.127 0 016.124.523 37.927 37.927 0 016.124 1.22l7-34.508q-4.2-1.046-12.949-2.44A112.166 112.166 0 00477.772.382q-14.7 0-25.549 5.4a38.173 38.173 0 00-16.8 16.3q-5.949 10.893-5.949 27.449v3.834h-17.149V88.22h17.149v98.992h48.3V88.22zM223.9 189.652q-21.523 0-37.1-8.191a57.515 57.515 0 01-23.887-23.7q-8.311-15.511-8.312-37.121 0-20.74 8.4-36.25a59.9 59.9 0 0123.711-24.138q15.312-8.627 36.136-8.627a76.816 76.816 0 0127.561 4.706A57.761 57.761 0 01271.5 70.008a60.217 60.217 0 0113.474 21.61 81.9 81.9 0 014.725 28.669v11.154H202.2v2.092a23.943 23.943 0 002.712 11.5 19.629 19.629 0 007.788 7.929 24.472 24.472 0 0012.249 2.876 28.2 28.2 0 009.1-1.394 20.509 20.509 0 007.175-4.009 16.3 16.3 0 004.375-6.448h44.1a49.928 49.928 0 01-10.762 24.225q-8.487 10.2-22.487 15.859-13.911 5.581-32.55 5.581zm-18.637-94.9a19.108 19.108 0 00-3.062 10.2h43.048a18.4 18.4 0 00-2.975-10.109 18.93 18.93 0 00-7.612-6.884 22.465 22.465 0 00-10.762-2.528 23.131 23.131 0 00-10.762 2.527 20.318 20.318 0 00-7.872 6.797zm104.145-41.388h46.9v25.445h1.4q3.675-14.117 11.637-20.652a28.954 28.954 0 0118.812-6.536 36.836 36.836 0 016.212.523 39.666 39.666 0 016.037 1.307v41.043a43.423 43.423 0 00-8.837-1.83 79.9 79.9 0 00-9.012-.61 25.436 25.436 0 00-12.774 3.224 22.757 22.757 0 00-8.837 8.888 26.414 26.414 0 00-3.237 13.332v69.713h-48.3zm271.806 136.288q-21.523 0-37.1-8.191a57.512 57.512 0 01-23.886-23.7q-8.313-15.511-8.312-37.121 0-20.74 8.4-36.25a59.9 59.9 0 0123.711-24.138q15.312-8.627 36.136-8.627a76.815 76.815 0 0127.561 4.706 57.76 57.76 0 0121.087 13.681 60.227 60.227 0 0113.474 21.61 81.9 81.9 0 014.725 28.669v11.154h-87.5v2.092a23.943 23.943 0 002.712 11.5 19.624 19.624 0 007.788 7.929 24.472 24.472 0 0012.249 2.876 28.207 28.207 0 009.1-1.394 20.516 20.516 0 007.175-4.009 16.3 16.3 0 004.375-6.448h44.1a49.928 49.928 0 01-10.762 24.225q-8.487 10.2-22.487 15.859-13.909 5.577-32.546 5.577zm-18.637-94.9a19.1 19.1 0 00-3.062 10.2h43.048a18.4 18.4 0 00-2.975-10.109 18.928 18.928 0 00-7.613-6.884 22.46 22.46 0 00-10.762-2.527 23.129 23.129 0 00-10.762 2.527 20.318 20.318 0 00-7.874 6.796zm131.441 86.27q15.574 8.626 37.448 8.627 19.949 0 34.3-7.146a52.607 52.607 0 0022.312-20.217q7.879-13.159 8.134-30.848h-44.796a29.512 29.512 0 01-3.15 11.851 18.5 18.5 0 01-6.65 7.32 18.16 18.16 0 01-9.449 2.44 17.768 17.768 0 01-11.025-3.573q-4.724-3.66-7.349-10.893-2.626-7.32-2.625-18.3t2.625-18.212q2.624-7.32 7.349-10.893a17.489 17.489 0 0111.025-3.66 16.928 16.928 0 0113.124 5.582q5.162 5.49 6.125 16.034h44.795q-.083-17.428-8.047-30.325a52.694 52.694 0 00-22.486-20.042q-14.438-7.146-34.211-7.146-21.874 0-37.448 8.714a58.753 58.753 0 00-23.887 24.225q-8.311 15.511-8.312 36.076t8.312 36.163a59.451 59.451 0 0023.887 24.226zM896.285 53.364V88.22h-23.1v55.944a10.418 10.418 0 00.966 4.706 6.289 6.289 0 002.977 2.788 13.077 13.077 0 005.162.872 28.942 28.942 0 005.075-.523c1.979-.349 3.444-.64 4.37-.872l7.006 33.811q-3.242.958-9.278 2.353a81.967 81.967 0 01-14.171 1.83q-16.625.872-27.914-3.4-11.281-4.357-16.973-13.681t-5.51-23.353V88.22h-17.158V53.364h17.155V21.3h48.292v32.064zm28.547 129.578a24.1 24.1 0 0017.41 7.058 23.3 23.3 0 0011.986-3.224 26.342 26.342 0 008.93-8.8 23.346 23.346 0 003.586-12.374 22.857 22.857 0 00-7.529-16.992 23.759 23.759 0 00-16.973-7.059 24.1 24.1 0 00-17.409 7.059 22.663 22.663 0 00-7.085 16.992 23.248 23.248 0 007.085 17.34z"
                                        transform="translate(937.628 1055)"
                                    ></path>
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

export default FourtyThreePage;