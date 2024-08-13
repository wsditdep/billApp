import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const FourtyTwoPage = () => {
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
                    <h3>PREVIEW - <span>Mobile 42</span></h3>
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
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={imageDimension + "%"}
                                viewBox="0 0 1736 3773"
                            >
                                <defs>
                                    <pattern
                                        id="pattern"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 429 171"
                                    >
                                        <image
                                            width="429"
                                            height="171"
                                            xlinkHref="data:image/png;base64,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F1ygG05IL+bJrrXItVfSGERa1K1atUqnc9euXbqBgDQ4MJZJlsqHOpl10aZtG53G7t174OKLL0Kb1m30Pb1crtgL3/37D+ga2p7deyrWQZJJa7977rkHrVq1NMfI+jcep0+fUb3ut2Iky3zd9dfh8ssvNcdQIjBoRSRZo37Yaijxe1CmNn4XrA5E4yltpDhz6qm6kKL+jHMc0U5LChcVMo1pqPTIdTf6DsZxrkHpaFUKrxRneo0VKkKu35FlkWUP3vykEUFqWmrchbkEE5mmNQhr2eRRph1PASz05ILy2uPxorCoUDfhl+uddu7cqXu6kOdS2EutqmnTpqiTVQf1s+ujfoP6x+XwmnSAW1BYoJvfHzpkNMGXRwlcEjwljdJkX64xa9S4ka6t6YZvanmlVhXP5iGHnktK1frwqXVdQxfpyrzS09OMmmCQ4uJS3YFw4LYuz/XrJCVPruOLd3uj0Bi0oiBZ5HGoPVMVahwqUDh1Q4YYWbkc8PuQbblicw5RIgaRd6UcsQKfrDlH5K9EZP12Ky1NRYKSJvA8WpWtz8wTnbZ406KmKdPVk1b/WcuZqMNvUTPTEahay5UAkveV8kUNVv4ErhfJK512K/0Bn6vNrPwOTqu1LJXWhyyTPOj/9JikkHnaIe/sgkErCpJDPrXRSZ3LKPekOxor26LNPvmmnGg3tl4JNrLzWbEtH3s68gkjaKkain4m05QaS7yMb9Z4WR64qMGLbS6Mfoh3wdQ0yycrT6xpxju9eAWmw1St5UqA8rw38yUwPYHrRedVQPoDP1ebWctQZV1by2ItkEV9zi7LRgYGrShJJlUErQo+HTyiJYcDK8jzWAKGzEnSYUyj4ll11XTQqiTU1peoAsSadqKmd6L4NedL8PbGbcN2GLSiJJlkZVRgIR9r0ApHfjuhfj+B802W4xq0iIhiwPIqShJQJLOYYURExw/LYCIisg0GLSIisg2e06qm0LcNDyXcWasK4d5N9gqKnCoiotqDQYuIiGyDhweJiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMg2GLSIiMgmgP8HB+/jht6pqnEAAAAASUVORK5CYII="
                                        ></image>
                                    </pattern>
                                </defs>
                                <g data-name="Group 184" transform="translate(-2163 -167)">
                                    <g data-name="Group 183">
                                        <g data-name="Group 182">
                                            <path
                                                fill="#fff"
                                                d="M0 0H1736V3773H0z"
                                                data-name="Rectangle 270"
                                                transform="translate(2163 167)"
                                            ></path>
                                            <text
                                                fill="#254f17"
                                                data-name="Address/Account"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(2411 1874)"
                                            >
                                                <tspan x="-190.653" y="0">
                                                    Address/Account
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#254f17"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(3375 1875)"
                                            >
                                                <tspan x="480" y="0" textAnchor="end">
                                                    {data.address}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#254f17"
                                                data-name="7kNAKTEQS"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(3675 1963)"
                                            >
                                                <tspan x="170" y="0" textAnchor="end">
                                                    {data.address2}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#254f17"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(3762 2163)"
                                            >
                                                <tspan x="90" y="0" textAnchor="end">
                                                    {data.network}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#254f17"
                                                data-name="Platform Salary"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(3633 2381)"
                                            >
                                                <tspan x="210" y="0" textAnchor="end">
                                                    {data.remarks}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#254f17"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(2312 2158)"
                                            >
                                                <tspan x="-91.54" y="0">
                                                    Network
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#254f17"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(2320 2376)"
                                            >
                                                <tspan x="-96.206" y="0">
                                                    Remarks
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#254f17"
                                                data-name="518.31 USDT"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="177"
                                                transform="translate(3031 1655)"
                                            >
                                                <tspan x="0" y="0" textAnchor="middle">
                                                    {data.amount}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#6f6f6f"
                                                d="M0 0H1654V6H0z"
                                                data-name="Rectangle 272"
                                                transform="translate(2200 1718)"
                                            ></path>
                                            <path
                                                fill="#6f6f6f"
                                                d="M0 0H1677V6H0z"
                                                data-name="Rectangle 273"
                                                transform="translate(2188 3729)"
                                            ></path>
                                            <text
                                                fill="#142e0b"
                                                data-name="© 2024 houzz. All rights reserved."
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="61"
                                                transform="translate(3025 3824)"
                                            >
                                                <tspan x="-456.145" y="0">
                                                    © 2024 houzz. All rights reserved.
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#142e0b"
                                                data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="61"
                                                transform="translate(3031 3906)"
                                            >
                                                <tspan x="-634.2" y="0">
                                                    Conditions of Use -Privacy Policy - Legal Terms
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#254f17"
                                                data-name="Estimated completion time : 2023-8-26 15:30:35"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                letterSpacing=".148em"
                                                transform="translate(3031 3098)"
                                            >
                                                <tspan x="0" y="0" textAnchor="middle">
                                                    Estimated completion time : {data.time}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#254f17"
                                                data-name="You will receive your payment once"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                letterSpacing=".148em"
                                                transform="translate(3057 3228)"
                                            >
                                                <tspan x="-561.299" y="0">
                                                    You will receive your payment once
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#254f17"
                                                data-name="withdrawal is completed"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                letterSpacing=".148em"
                                                transform="translate(3071 3317)"
                                            >
                                                <tspan x="-386.924" y="0">
                                                    withdrawal is completed
                                                </tspan>
                                            </text>
                                            <rect
                                                width="1491"
                                                height="318"
                                                fill="none"
                                                data-name="Rectangle 271"
                                                rx="40"
                                                transform="translate(2312 987)"
                                            ></rect>
                                        </g>
                                    </g>
                                    <path
                                        fill="url(#pattern)"
                                        d="M0 0H1472V587H0z"
                                        transform="translate(2267 892)"
                                    ></path>
                                    <text
                                        fill="#254f17"
                                        data-name="Withdrawal Processing"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        letterSpacing=".1em"
                                        transform="translate(3031 1433)"
                                    >
                                        <tspan x="-371.778" y="0">
                                            Withdrawal Processing
                                        </tspan>
                                    </text>
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

export default FourtyTwoPage;