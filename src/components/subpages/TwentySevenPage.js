import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const TwentySevenPage = () => {
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
                    <h3>PREVIEW - <span>Mobile 27</span></h3>
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
                                <g data-name="Group 90" transform="translate(-2273 -167)">
                                    <g data-name="Group 89">
                                        <path
                                            fill="#fff"
                                            d="M0 0H1736V3773H0z"
                                            data-name="Rectangle 146"
                                            transform="translate(2273 167)"
                                        ></path>
                                        <text
                                            fill="#254f17"
                                            data-name="Withdrawal Processing"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            letterSpacing=".1em"
                                            transform="translate(3181 1430)"
                                        >
                                            <tspan x="-371.778" y="0">
                                                Withdrawal Processing
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#254f17"
                                            data-name="Address/Account"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(2521 1874)"
                                        >
                                            <tspan x="-190.653" y="0">
                                                Address/Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#254f17"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(3485 1875)"
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
                                            transform="translate(3785 1963)"
                                        >
                                            <tspan x="178" y="0" textAnchor="end">
                                                {data.address2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#254f17"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(3872 2163)"
                                        >
                                            <tspan x="88" y="0" textAnchor="end">
                                                {data.network}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#254f17"
                                            data-name="Platform Salary"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(3743 2381)"
                                        >
                                            <tspan x="210" y="0" textAnchor="end">
                                                {data.remarks}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#254f17"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(2422 2158)"
                                        >
                                            <tspan x="-91.54" y="0">
                                                Network
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#254f17"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(2430 2376)"
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
                                            transform="translate(3181 1652)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#6f6f6f"
                                            d="M0 0H1654V6H0z"
                                            data-name="Rectangle 148"
                                            transform="translate(2310 1718)"
                                        ></path>
                                        <path
                                            fill="#6f6f6f"
                                            d="M0 0H1677V6H0z"
                                            data-name="Rectangle 147"
                                            transform="translate(2298 3729)"
                                        ></path>
                                        <text
                                            fill="#142e0b"
                                            data-name="© 2023 Taskrabbit. All rights reserved."
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            transform="translate(3135 3824)"
                                        >
                                            <tspan x="-516.504" y="0">
                                                © 2024 Taskrabbit. All rights reserved.
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#142e0b"
                                            data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            transform="translate(3141 3906)"
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
                                            transform="translate(3141 3098)"
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
                                            transform="translate(3167 3228)"
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
                                            transform="translate(3181 3317)"
                                        >
                                            <tspan x="-386.924" y="0">
                                                withdrawal is completed
                                            </tspan>
                                        </text>
                                        <g data-name="Layer 2" transform="translate(2430.002 897.452)">
                                            <g transform="translate(-.003 -.001)">
                                                <path
                                                    fill="#51af33"
                                                    d="M235.5 157.62h-21.292a11.748 11.748 0 01-11.985-11.906h-.394c-5.6 10.881-19.476 15.77-32.485 15.77-35.245 0-55.9-27.754-55.9-59.609 0-36.507 26.256-59.451 55.9-59.451a36.822 36.822 0 0132.485 15.77h.394a11.669 11.669 0 0111.827-11.908h21.45zm-61.107-27.439a27.439 27.439 0 0027.833-28.464 27.755 27.755 0 10-55.194.394 27.755 27.755 0 0027.281 28.07zM273.265 9.07h10.171v45.968a43.287 43.287 0 0132.328-12.616c23.26 0 54.72 16.637 54.72 58.742 0 40.055-27.833 60.161-56.14 60.161a36.98 36.98 0 01-31.539-15.77v11.906h-33.273V32.173A23.654 23.654 0 01273.265 9.07zm35.876 121.189a28.385 28.385 0 00.631-56.692 27.36 27.36 0 00-27.676 28.07 27.045 27.045 0 0027.045 28.543zM402.418 9.07h9.856v45.968A43.366 43.366 0 01444.6 42.423c23.26 0 54.72 16.637 54.72 58.742 0 40.055-27.833 60.161-56.14 60.161a36.98 36.98 0 01-31.539-15.77v11.906h-32.562V32.173a23.655 23.655 0 0123.339-23.1zm35.8 121.189a28.385 28.385 0 00.631-56.692 27.36 27.36 0 00-27.676 28.07 27.045 27.045 0 0027.045 28.543zm103.133 27.36h-32.567V69.547a22.945 22.945 0 0122.945-23.654h9.541z"
                                                    data-name="Path 30"
                                                    transform="translate(781.031 62.451)"
                                                ></path>
                                                <circle
                                                    cx="17.425"
                                                    cy="17.425"
                                                    r="17.425"
                                                    fill="#51af33"
                                                    data-name="Ellipse 18"
                                                    transform="translate(1288.711 67.499)"
                                                ></circle>
                                                <path
                                                    fill="#51af33"
                                                    d="M196.183 124.1a21.447 21.447 0 01-14.745-7.175l-5.283-6.781-2.681-3.154a44.943 44.943 0 0036.743-46.678 51.566 51.566 0 00-17.977-40.528c-9.619-7.412-19.711-10.724-45.731-10.724H99.2v148.628h36.428v-44.47l14.114 17.741 5.6 7.017a55.193 55.193 0 0040.843 19.712h14.745V124.1zm-47.309-40.134h-13.01V42.728h13.4c14.587 0 24.443 6.544 24.443 20.027.237 7.175-2.365 21.21-24.6 21.21zM703.018 124.1a23.655 23.655 0 01-10.093-2.681 13.562 13.562 0 01-6.939-13.956v-35.8h21.684V45.645h-21.684V9.139h-9.856a23.654 23.654 0 00-23.654 23.654v74.984A49.122 49.122 0 00703.018 158h4.81v-33.9z"
                                                    data-name="Path 31"
                                                    transform="translate(682.992 62.382)"
                                                ></path>
                                                <path
                                                    fill="#254f17"
                                                    d="M77.868 43.142H44.2V32.655A22.629 22.629 0 0166.987 9h81.371v33.59h-32.564V158.1H101.6a23.654 23.654 0 01-23.654-23.654z"
                                                    data-name="Path 32"
                                                    transform="translate(304.17 61.968)"
                                                ></path>
                                                <path
                                                    fill="#254f17"
                                                    d="M177.241 157.64h-21.289a11.748 11.748 0 01-11.985-11.906h-.789c-5.6 10.881-19.475 15.77-32.485 15.77-35.245 0-55.9-27.754-55.9-59.609 0-36.507 26.256-59.451 55.9-59.451a36.822 36.822 0 0132.485 15.77h.394A11.67 11.67 0 01155.4 46.307h21.447zm-61.107-27.44a27.439 27.439 0 0027.833-28.464 27.755 27.755 0 10-55.194.394 27.755 27.755 0 0027.36 28.07zM240.24 77.373c0-2.208-.631-8.358-10.408-8.358-7.017 0-9.383 4.415-9.383 7.412 0 5.992 7.885 9.462 17.031 12.064 18.845 5.2 38.872 10.8 38.872 34.851s-20.658 37.689-45.259 37.689c-16.873 0-42.263-7.885-45.259-37.059h33.037a11.512 11.512 0 0012.538 10.728c5.6 0 11.591-3.075 11.591-8.516 0-8.594-7.885-9.541-29.489-17.82-14.429-4.573-26.414-14.035-26.493-29.016 0-22.077 20.027-36.743 43.13-36.743 14.666 0 39.9 5.756 42.657 35.008zm44.391 50.542v29.725h33.589v-52.907s4.652 6.86 17.662 26.729c17.11 26.256 51.015 26.414 52.434 26.414h7.884v-29.489h-7.885s-20.027 0-28.543-13.325l-11.589-17.425-1.34-2.365 41.868-49.043h-39.424l-30.83 40.134h-.394v-54.17a22.629 22.629 0 00-23.654-23.1h-9.777z"
                                                    data-name="Path 33"
                                                    transform="translate(377.238 62.43)"
                                                ></path>
                                                <path
                                                    fill="#51af33"
                                                    d="M302.794 124.112c-15.77-26.178-27.281-29.41-37.216-32.328-8.437-2.444-15.77-4.573-29.8-28.149a177.723 177.723 0 00-37.852-44.785C179.16 3.238 165.6 0 157.714 0a24.443 24.443 0 00-14.429 4.337L136.9 8.915a23.654 23.654 0 00-5.835-1.025 13.8 13.8 0 00-8.831 2.839 11.827 11.827 0 00-3.942 11.039 37.216 37.216 0 009.935 18.214 93.06 93.06 0 007.885 8.358A113.068 113.068 0 0027.22 89.418h-2.444A24.443 24.443 0 003.724 100.93a23.654 23.654 0 00-2.6 19.949 26.414 26.414 0 005.441 9.7 112.91 112.91 0 00208.08 83.579 49.59 49.59 0 005.756 0 29.647 29.647 0 0013.8-2.917 15.3 15.3 0 008.594-12.3 14.9 14.9 0 00-6.7-13.72 40.527 40.527 0 00-9.462-4.494q.71-3.785 1.183-7.885a71.594 71.594 0 0024.364 3.548 119.916 119.916 0 0012.3-.473c27.045-1.656 37.768-11.669 42.026-19.712 3.469-5.914 5.6-16.952-3.706-32.091z"
                                                    data-name="Path 34"
                                                    transform="translate(.003 .001)"
                                                ></path>
                                                <path
                                                    fill="#fff"
                                                    d="M288.594 121.288c-27.912-46.363-37.532-12.931-67.336-60.713C197.6 21.939 160.94-5.578 143.2 2.464a1.183 1.183 0 000 2.208c17.583 7.175 55.194 38.557 71.673 70.175a.744.744 0 11-1.262.788c-20.185-25.547-82.554-73.959-93.277-65.444-8.831 7.017 38.084 51.567 76.325 70.963a1.735 1.735 0 01.788 2.365c-1.735 3.154-5.992 7.885-17.662 7.491-20.185 0-39.424-29.8-83.106-30.356A90.675 90.675 0 0026.74 92.193a.867.867 0 01-1.1 0A16.952 16.952 0 003.559 97.87a16.4 16.4 0 004.81 22.314 1.656 1.656 0 01.71 1.971 102.5 102.5 0 00-4.889 30.751 91.069 91.069 0 0090.91 90.36 86.733 86.733 0 0048.57-14.035c13.956-8.437 24.206-19.554 21.525-27.6-3.864-11.669-20.737-7.885-37.847-1.183a1.1 1.1 0 01-1.1-1.814A52.434 52.434 0 0088.4 109.855a49.359 49.359 0 00-48.965 31.539 1.262 1.262 0 11-2.444-.631A57.233 57.233 0 11141.7 183.026a1.656 1.656 0 002.208 2.365 57.638 57.638 0 0016.4-13.641.789.789 0 011.183 0c28.385 31.066 64.734 31.539 65.68 19.554 1.1-13.72-33.983-4.81-36.191-38.872a.788.788 0 011.262-.631 7.412 7.412 0 0012.064-4.889.788.788 0 011.262-.473c15.139 14.745 30.514 15.77 51.488 14.193 29.961-1.655 43.918-18.132 31.538-39.344zm-27.2 0a9.3 9.3 0 01-8.594-7.1 6.071 6.071 0 016.15-7.491 9.3 9.3 0 018.752 7.491 6.071 6.071 0 01-6.387 7.491z"
                                                    data-name="Path 35"
                                                    transform="translate(7.421 7.319)"
                                                ></path>
                                            </g>
                                        </g>
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

export default TwentySevenPage;