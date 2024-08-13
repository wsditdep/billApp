import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SeventyFivePage = () => {
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
                    <h3>PREVIEW - <span>Mobile 75</span></h3>
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
                                width={imageDimension + "%"}
                                viewBox="0 0 1716 3730"
                            >
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.5"
                                        x2="0.5"
                                        y2="1"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#10040e"></stop>
                                        <stop offset="1" stopColor="#32062a"></stop>
                                    </linearGradient>
                                </defs>
                                <g data-name="Group 341" transform="translate(-469 -166)">
                                    <path
                                        fill="url(#linear-gradient)"
                                        d="M0 0H1716V3730H0z"
                                        data-name="Rectangle 386"
                                        transform="translate(469 166)"
                                    ></path>
                                    <path
                                        fill="#6f6f6f"
                                        d="M0 0H1635V5H0z"
                                        data-name="Rectangle 76"
                                        transform="translate(510 1697)"
                                    ></path>
                                    <path
                                        fill="#6f6f6f"
                                        d="M0 0H1658V6H0z"
                                        data-name="Rectangle 77"
                                        transform="translate(498 3685)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="Wallet Address"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="47"
                                        transform="translate(687 1849)"
                                    >
                                        <tspan x="-156.858" y="0">
                                            Wallet Address
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(1670 1851)"
                                    >
                                        <tspan x="467.891" y="0" textAnchor="end">
                                            {data.address}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="7kNAKTEQS"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(1967 1938)"
                                    >
                                        <tspan x="170.969" y="0" textAnchor="end">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        transform="translate(2053 2135)"
                                    >
                                        <tspan x="91.083" y="0" textAnchor="end">
                                            {data.network}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Platform Salary"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(1926 2352)"
                                    >
                                        <tspan x="212.913" y="0" textAnchor="end">
                                            {data.remarks}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="47"
                                        transform="translate(618 2130)"
                                    >
                                        <tspan x="-87.804" y="0">
                                            Network
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="47"
                                        transform="translate(622 2345)"
                                    >
                                        <tspan x="-92.279" y="0">
                                            Remarks
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="518.31 USDT"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="173"
                                        transform="translate(1347 1632)"
                                    >
                                        <tspan x="0" y="0" textAnchor="middle">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Estimated completion time : 2023-8-26 15:30:35"
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="53"
                                        fontWeight="300"
                                        letterSpacing=".148em"
                                        transform="translate(1313 3059)"
                                    >
                                        <tspan x="12" y="0" textAnchor="middle">
                                            Estimated completion time : {data.time}
                                        </tspan>
                                    </text>
                                    <g
                                        data-name="Group 340"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="60"
                                        fontWeight="700"
                                        transform="translate(28)"
                                    >
                                        <text
                                            fill="#dd1286"
                                            data-name="BLACK TOMATO"
                                            transform="translate(1440 3817)"
                                        >
                                            <tspan x="-223.506" y="0">
                                                BLACK TOMATO
                                            </tspan>
                                        </text>
                                        <text fill="#fff" data-name="© 2024" transform="translate(1084 3817)">
                                            <tspan x="-99.844" y="0">
                                                © 2024
                                            </tspan>
                                        </text>
                                    </g>
                                    <text
                                        fill="#fff"
                                        data-name="Withdrawal Successful"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        letterSpacing=".1em"
                                        transform="translate(1350 1414)"
                                    >
                                        <tspan x="-363.398" y="0">
                                            Withdrawal Successful
                                        </tspan>
                                    </text>
                                    <g transform="translate(971.674 687.046)">
                                        <path
                                            fill="#e92679"
                                            d="M189.887 112.276c.106 21.033-8.253 38.218-23.925 51.969-6.956 6.1-15.155 10.052-23.905 12.843-3.688 1.177-7.482 2.024-11.244 2.952-5.465 1.345-11.041 1.177-16.557.7-13.2-1.137-24.99-6.178-35.647-13.869-12.1-8.729-19.72-20.656-23.88-34.824a130.165 130.165 0 01-3.656-16.191 44.084 44.084 0 01-.087-10.432 68.12 68.12 0 0115.134-37.8c11.7-14.555 26.856-23.533 45.387-25.6 27.019-3.011 49.228 6.332 65.59 28.29a63.411 63.411 0 0112.452 33.652c.084 1.1.285 2.205.322 3.311.056 1.671.016 3.335.016 4.999zm-110.072-.445c.071 1.052.164 2.554.284 4.055.045.55.148 1.1.246 1.64a40.9 40.9 0 0012.574 22.917 39.45 39.45 0 0039.61 9.3c19.683-6 31.9-26.223 28.044-46.156-4.136-21.371-27.431-39.319-53.626-30.47-15.779 5.328-27.1 21.581-27.132 38.717z"
                                            transform="translate(390.228 351.118)"
                                        ></path>
                                        <g fill="#fff" transform="translate(16.74 10.912)">
                                            <path
                                                d="M127.378 10.912c2.333.319 4.665.695 7 .949A67.824 67.824 0 01169.38 26c7.252 5.641 12.238 12.97 16.048 21.2a95.628 95.628 0 016.486 20.322 18.757 18.757 0 01.178 2.191c-10.865.028-21.589-.252-32.367-.276a7.646 7.646 0 01-.351-1.236c-.983-10.77-6.651-18.629-15.845-23.668A37.447 37.447 0 0094.8 55.466a46.416 46.416 0 00-6.906 16.555c-1.843 8-2.211 16.153-2.265 24.313q-.068 10.571.326 21.145a77.755 77.755 0 004.677 24.621c5.739 15.288 21.8 23.654 35.784 23.1a37.833 37.833 0 0014.9-3.626c9.629-4.573 15.184-12.372 17.491-22.638.294-1.309.545-2.627.82-3.939.016-.071.089-.129.234-.329h32.312c-.228 1.4-.413 2.639-.636 3.867-1.162 6.4-2.58 12.7-5.4 18.64-7.1 14.939-18.622 25.24-33.845 31.019-24.479 9.292-47.946 6.544-69.816-7.888-9.283-6.125-15.873-14.668-20.26-24.917a108.246 108.246 0 01-7.983-29.728 214.5 214.5 0 01-.361-43.422 106.855 106.855 0 017.019-29.487c6.589-17.17 18.782-28.809 35.42-36.141 5.8-2.553 11.953-3.592 18.107-4.7 1.785-.322 3.567-.667 5.349-1z"
                                                transform="translate(399.083 -10.912)"
                                            ></path>
                                            <path
                                                d="M16.742 26.8c1.026.042 2.051.121 3.077.121q65.14.01 130.28.007h3.013c.56 1.788.727 26.04.212 29.767H101.4v146.05c-1.992.57-27.559.749-31.879.268-.047-4.828-.016-9.707-.021-14.585q-.009-7.251 0-14.5V56.757H16.74v-29.96z"
                                                transform="translate(-16.74 171.517)"
                                            ></path>
                                            <path
                                                d="M26.8 167.322q10.576-30.138 21.145-60.275 3.567-10.2 6.978-20.452a5.481 5.481 0 013.359-3.634c10.643-4.5 21.24-9.122 31.852-13.7.638-.273 1.292-.511 2.416-.952l-12.116 36.01c2.043.581 47.836.608 50.1.037-5.15-15.2-10.3-30.39-15.524-45.826 9.246-4.119 18.323-8.161 27.684-12.333.576 1.38 1.115 2.5 1.521 3.667 4.111 11.81 8.161 23.642 12.307 35.441q13.968 39.767 28 79.51c.285.81.43 1.67.64 2.506h-33.288q-5.451-16.321-10.912-32.637a5.757 5.757 0 00-.552-.989H70.259c-.247.6-.49 1.094-.665 1.614q-5.075 15.2-10.129 30.41a13.468 13.468 0 00-.331 1.6H26.8z"
                                                transform="translate(98.755 394.33)"
                                            ></path>
                                            <path
                                                d="M72.236 218.089c-.011-1.031-.031-2.061-.031-3.09V71.6H40.726l-.08-.484c.521-.28 1.028-.6 1.57-.839Q74 56.392 105.807 42.543a8.3 8.3 0 013.183-.732c15.217-.048 30.436-.031 45.653-.027.468 0 .934.049 1.369.073.538 1.776.743 24.588.265 29.681-2.849.231-5.755.072-8.649.1-2.852.027-5.707.006-8.559.006h-34.935V214.994c0 1.031-.021 2.061-.031 3.092H72.237z"
                                                transform="translate(257.813 343.563)"
                                            ></path>
                                            <path
                                                d="M22.759 114.522c.078-.94.221-1.879.226-2.818q.122-22.338.212-44.677v-2.851C33.329 59.78 43.45 55.384 54.021 50.8v60.885c0 .946.079 1.892.121 2.841H22.754z"
                                                transform="translate(52.383 447.13)"
                                            ></path>
                                            <path
                                                d="M71.991 202.83H41.7V26.818h42.99l45.966 124.72.548.045c7.749-20.715 15.375-41.477 23.069-62.213 7.686-20.708 15.336-41.429 23.1-62.4h40.714c-.087-.086-.029-.031.024.027a.627.627 0 01.145.18 1.586 1.586 0 01.1.464q.021 54.918.025 109.837c0 .47-.05.938-.091 1.631-10.108 4.36-20.245 8.734-30.8 13.29V78.648l-.531-.117c-.284.677-.6 1.342-.849 2.026q-15.67 41.945-31.286 83.906a6.374 6.374 0 01-3.868 4.022c-12.1 5.135-24.138 10.416-36.2 15.643-.65.282-1.308.547-2.288.954-3.458-9.051-6.628-18.128-9.94-27.15-3.3-8.992-6.552-18-9.82-27.012q-4.941-13.618-9.876-27.24-4.891-13.477-9.776-26.9a2 2 0 00-.441.052.286.286 0 00-.121.164 4.285 4.285 0 00-.091.463 1.576 1.576 0 00-.012.237c0 .158-.007.316-.007.475l-.014 123.626c0 .079 0 .159-.01.238s-.025.157-.039.234a.922.922 0 01-.048.231 2.976 2.976 0 01-.279.331z"
                                                transform="translate(269.91 171.756)"
                                            ></path>
                                            <path
                                                d="M126.718 96.437c2.871 2.066 5.6 4.1 8.4 6.029 9.95 6.844 14.917 16.608 16.294 28.309 1.2 10.2-.07 20.108-4.955 29.294-7.615 14.324-19.576 22.709-35.5 25.512-9.476 1.669-19.054 1.965-28.647 1.972q-31.493.022-62.989 0H17.25c-.523-1.9-.6-173.722-.088-176.232.655-.036 1.349-.106 2.044-.106 23.927-.006 47.857-.092 71.784.038a73.362 73.362 0 0126.535 4.619c8.737 3.411 16.317 8.358 21.858 16.122a44.33 44.33 0 017.387 19.092 50.091 50.091 0 01-.589 20.755c-2.721 10.544-8.6 18.76-18.41 23.894-.331.174-.632.417-1.053.7zm-77.971 62.39c.943.061 1.716.14 2.492.16 4.037.1 8.077.148 12.115.29a206.129 206.129 0 0031.087-.76 39.365 39.365 0 0012.334-3.294 20.822 20.822 0 0012.2-15.112 25.064 25.064 0 00.131-9.2c-1.5-9.808-6.845-16.3-16.372-19.249a25.933 25.933 0 00-2.985-.772 122.31 122.31 0 00-24.129-1.733c-8.395.129-16.785.439-25.179.689a13.612 13.612 0 00-1.7.255v48.727zm-.06-75.879c1.046.055 1.827.109 2.61.136 6.495.208 12.988.425 19.484.611a152.872 152.872 0 0025.374-1.219 26.717 26.717 0 0011.9-4.449 15.191 15.191 0 006.255-8.685 53.316 53.316 0 001.131-5.815 20.174 20.174 0 00-13.1-22.508 21.287 21.287 0 00-5.008-1.419 144.279 144.279 0 00-15.367-1.356c-10.773-.076-21.549.255-32.324.43a4.847 4.847 0 00-.958.233c.002 14.63.002 29.184.002 44.04z"
                                                transform="translate(-15.867 -7.76)"
                                            ></path>
                                            <path
                                                d="M28.433 113.606a118.251 118.251 0 012.924-30.97c5.985-26.806 21.977-44.987 48.506-52.8 18.839-5.545 37.6-4.24 55.23 4.8 20.823 10.681 32.79 28.07 36.439 51.124 1.1 6.954 2.024 13.964 2.486 20.984a183.182 183.182 0 01.156 20.427c-.289 6.235-1.258 12.441-1.97 18.653a70.3 70.3 0 01-1.206 8.7c-6.842 28-24 46.065-52.147 52.948a73.532 73.532 0 01-38.315-.715c-15.494-4.479-28.3-12.873-37.71-26.161-5.076-7.169-8.071-15.227-10.121-23.666-3.326-13.7-4.564-27.634-4.271-43.324zm113.612 6.276c-.346-7.631-.486-13.891-.95-20.125a65.087 65.087 0 00-4.77-20.986c-4.523-10.561-11.979-17.984-23.236-21.115-13.653-3.8-26.249-1.8-37.234 7.485C68.791 71.107 65.1 79.152 63.1 87.978a117 117 0 00-2.386 23.122c-.1 4.433-.373 8.865-.292 13.293.067 3.795.5 7.585.823 11.373a77.517 77.517 0 002.33 14.272c1.956 7.037 4.658 13.747 10.011 18.882 10.288 9.869 22.345 14.111 36.559 10.5 12.9-3.279 22.268-10.68 26.991-23.4a57.654 57.654 0 003.494-14.993c.66-7.486 1.017-14.998 1.415-21.145z"
                                                transform="translate(116.185 168.448)"
                                            ></path>
                                            <path
                                                d="M65.929 11.3h31.754v80.272l.512.2c.663-.732 1.339-1.454 1.986-2.2q31.637-36.453 63.27-72.909c1.3-1.5 2.549-3.041 3.931-4.455a3.182 3.182 0 011.984-.982c12.126-.053 24.253-.032 36.381-.018.136 0 .269.111.742.321-2.307 2.867-4.679 5.566-6.992 8.314q-3.443 4.091-6.911 8.169-3.533 4.175-7.067 8.347T178.44 44.7q-3.461 4.08-6.919 8.16-3.539 4.169-7.08 8.335-3.463 4.077-6.923 8.157c-2.35 2.771-4.7 5.544-7.1 8.372l62.99 109.5h-37.614l-47.584-83.176c-.755.8-1.3 1.343-1.8 1.927q-13.61 15.895-27.229 31.777a5.991 5.991 0 00-1.522 4.282c.055 14.029.03 28.058.03 42.087v2.789c-1.773.545-28.212.7-31.758.21V11.298z"
                                                transform="translate(548.175 -7.723)"
                                            ></path>
                                            <path
                                                d="M198.434 187.123h-33.48q-5.6-16.67-11.25-33.5H83.261q-5.607 16.666-11.277 33.509H40.369a2.344 2.344 0 01-.141-.194c-.04-.067-.108-.153-.094-.212.157-.61.291-1.23.5-1.823Q71.1 98.075 101.594 11.2h35.069q30.814 87.754 61.771 175.923zm-105.07-62.617h49.858c-.211-2.427-23.847-72.073-25.017-73.6l-24.841 73.6z"
                                                transform="translate(251.909 -7.633)"
                                            ></path>
                                            <path
                                                d="M61.424 156.924h81.422c.524 1.8.668 26.879.219 29.947-1.7.443-109.362.627-113.253.193-.51-1.64-.652-172.878-.117-175.862h31.73v145.722z"
                                                transform="translate(128.144 -7.59)"
                                            ></path>
                                            <path
                                                d="M91.907 26.807h31.724c.4 0 .794.01 1.189 0a2.581 2.581 0 012.75 2.066c2.022 6 4.149 11.965 6.242 17.941q5.766 16.474 11.534 32.947c.207.6.391 1.2.678 2.08-9.175 4.086-18.427 7.9-27.819 11.911-3.108-9.146-6.151-18.1-9.193-27.063l-.475.007c-.338.931-.693 1.858-1.009 2.8-3.576 10.656-7.173 21.3-10.683 31.981a4.406 4.406 0 01-2.7 2.971c-10.773 4.605-21.513 9.29-32.266 13.943-.633.272-1.292.484-2.4.892 10.889-31.055 21.636-61.705 32.428-92.476z"
                                                transform="translate(474.105 171.634)"
                                            ></path>
                                            <path
                                                d="M155.047 27.561q-8.929 3.877-17.854 7.755Q113.771 45.5 90.358 55.7a9.791 9.791 0 01-4.117.892c-5.385-.051-10.768-.021-16.112-.021-.566-1.756-.777-24.99-.307-29.441 1.836-.514 80.175-.42 85.224.434z"
                                                transform="translate(589.92 171.689)"
                                            ></path>
                                            <path
                                                d="M45.612 85.91H22.385l-5.608-15.008c13.525-5.959 26.97-11.878 40.481-17.83.057 1.751-10.014 30.002-11.646 32.838z"
                                                transform="translate(-16.313 473.273)"
                                            ></path>
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

export default SeventyFivePage;