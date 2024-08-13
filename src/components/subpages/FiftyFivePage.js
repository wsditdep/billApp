import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const FiftyFivePage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        name: "Theresa Lawrence",
        price: "403.06 USDC"
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
                    <h3>PREVIEW - <span>Mobile 55</span></h3>
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
                                viewBox="0 0 1494 2279"
                            >
                                <g data-name="Group 17" transform="translate(-1606 -91)">
                                    <g data-name="Group 16">
                                        <g data-name="Group 15">
                                            <g data-name="Group 14">
                                                <g
                                                    fill="#202125"
                                                    stroke="#707070"
                                                    strokeWidth="1"
                                                    data-name="Rectangle 157"
                                                    transform="translate(1606 91)"
                                                >
                                                    <path stroke="none" d="M0 0H1494V2279H0z"></path>
                                                    <path fill="none" d="M0.5 0.5H1493.5V2278.5H0.5z"></path>
                                                </g>
                                                <g
                                                    fill="#ffc300"
                                                    stroke="#707070"
                                                    strokeWidth="1"
                                                    data-name="Ellipse 41"
                                                    transform="translate(1653 189)"
                                                >
                                                    <ellipse
                                                        cx="71"
                                                        cy="71.5"
                                                        stroke="none"
                                                        rx="71"
                                                        ry="71.5"
                                                    ></ellipse>
                                                    <ellipse
                                                        cx="71"
                                                        cy="71.5"
                                                        fill="none"
                                                        rx="70.5"
                                                        ry="71"
                                                    ></ellipse>
                                                </g>
                                                <text
                                                    fill="#fff"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="85"
                                                    letterSpacing=".057em"
                                                    transform="translate(1696.98 292)"
                                                >
                                                    <tspan x="0" y="0">
                                                        B
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="48"
                                                    letterSpacing=".063em"
                                                    transform="translate(1845 230)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Binance
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#949494"
                                                    data-name="Theresa Lawrence"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="38"
                                                    letterSpacing=".001em"
                                                    transform="translate(1845 308)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.name}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="..."
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="114"
                                                    letterSpacing="-.073em"
                                                    transform="translate(2966 237)"
                                                >
                                                    <tspan x="0" y="0">
                                                        ...
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="#d5d5d5"
                                                    d="M39.244 8.181a4.005 4.005 0 003.923-4.091A4.005 4.005 0 0039.244 0H27.473A12.032 12.032 0 0015.7 12.272v39.206l-9-9.378a3.817 3.817 0 00-5.554 0 4.221 4.221 0 000 5.791l15.697 16.358a3.817 3.817 0 005.554 0l15.694-16.363a4.221 4.221 0 000-5.791 3.817 3.817 0 00-5.554 0l-8.987 9.383V12.272a4.005 4.005 0 013.923-4.091z"
                                                    transform="rotate(90 1341.856 1552.868)"
                                                ></path>
                                                <path
                                                    fill="#1d1d21"
                                                    d="M0 0H1396V188H0z"
                                                    data-name="Rectangle 159"
                                                    transform="translate(1655 392)"
                                                ></path>
                                                <path
                                                    fill="#171717"
                                                    d="M0 0H1396V8H0z"
                                                    data-name="Rectangle 160"
                                                    opacity="0.12"
                                                    transform="translate(1655 393)"
                                                ></path>
                                                <path
                                                    fill="#131313"
                                                    d="M0 0H1398V8H0z"
                                                    data-name="Rectangle 161"
                                                    opacity="0.12"
                                                    transform="translate(1653 572)"
                                                ></path>
                                                <path
                                                    fill="#443911"
                                                    d="M0 0H1293V6H0z"
                                                    data-name="Rectangle 163"
                                                    opacity="0.85"
                                                    transform="translate(1707 1601)"
                                                ></path>
                                                <image
                                                    width="174"
                                                    height="98"
                                                    transform="translate(2152 432)"
                                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApoAAAF3CAYAAAAFPus+AAAAAXNSR0IArs4c6QAAIABJREFUeF7svQmcpVV55/8757zve/dae6ne6WZfXZI4JDFGBCRjRBC0AaEb0JgoSTTb/DPziZk4nziTzCSTCZqZLBKwu0ERFxARV2yjxKhBEQGRrel976q6desu73LO+X+e895bXd2E2FTV7bq37vNq01233uWc7zl163efVYAPJsAEmAATYAJMgAkwASbQBgKiDffkWzIBJsAEmAATYAJMgAkwAbDQ5E3ABJgAE2ACTIAJMAEm0BYCLDTbgpVvygSYABNgAkyACTABJsBCk/cAE2ACTIAJMAEmwASYQFsIsNBsC1a+KRNgAkyACTABJsAEmAALTd4DTIAJMAEmwASYABNgAm0hwEKzLVj5pkyACTABJsAEmAATYAIsNHkPMAEmwASYABNgAkyACbSFAAvNtmDlmzIBJsAEmAATYAJMgAmw0OQ9wASYABNgAkyACTABJtAWAiw024KVb8oEmAATYAJMgAkwASbAQpP3ABNgAkyACTABJsAEmEBbCLDQbAtWvikTYAJMgAkwASbABJgAC03eA0yACTABJsAEmAATYAJtIcBCsy1Y+aZMgAkwASbABJgAE2ACLDR5DzABJsAEmAATYAJMgAm0hQALzbZg5ZsyASbABJgAE2ACTIAJsNDkPcAEmAATYAJMgAkwASbQFgIsNNuClW/KBJgAE2ACTIAJMAEmwEKT9wATYAJMgAkwASbABJhAWwiw0GwLVr4pE2ACTIAJMAEmwASYAAtN3gNMgAkwASbABJgAE2ACbSHAQrMtWPmmTIAJMAEmwASYABNgAiw0eQ8wASbABJgAE2ACTIAJtIUAC822YOWbMgEmwASYABNgAkyACbDQ5D3ABJgAE2ACTIAJMAEm0BYCLDTbgpVvygSYABNgAkyACTABJsBCk/cAE2ACTIAJMAEmwASYQFsIsNBsC1a+KRNgAkyACTABJsAEmAALTd4DTIAJMAEmwASYABNgAm0hwEKzLVj5pkyACTABJsAEmAATYAIsNHkPMAEmwASYABNgAkyACbSFAAvNtmDlmzIBJsAEmAATYAJMgAmw0OQ9wASYABNgAkyACTABJtAWAiw024KVb8oEmAATYAJMgAkwASbAQpP3ABNgAkyACTABJsAEmEBb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"
                                                ></image>
                                                <text
                                                    fill="#ffc300"
                                                    data-name="BINANCE"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="56"
                                                    fontWeight="500"
                                                    letterSpacing=".091em"
                                                    transform="translate(2287 501)"
                                                >
                                                    <tspan x="0" y="0">
                                                        BINANCE
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="Deposit Successful"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="72"
                                                    fontWeight="500"
                                                    letterSpacing=".011em"
                                                    transform="translate(1696 700)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Deposit Successful
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="Your deposit of 403.06 USDC is now available in your"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="49"
                                                    letterSpacing=".008em"
                                                    transform="translate(1697 827)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Your deposit of {data.price} is now available in your
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="Binance account. Log in to check your balance. Read our"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="49"
                                                    letterSpacing=".006em"
                                                    transform="translate(1697 897)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Binance account. Log in to check your balance. Read our
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="FAQs if you are running into problems."
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="52"
                                                    letterSpacing="-.012em"
                                                    transform="translate(1697 969)"
                                                >
                                                    <tspan x="0" y="0">
                                                        FAQs if you are running into problems.
                                                    </tspan>
                                                </text>
                                                <rect
                                                    width="676"
                                                    height="118"
                                                    fill="#4b3c08"
                                                    data-name="Rectangle 162"
                                                    rx="12"
                                                    transform="translate(1697 1044)"
                                                ></rect>
                                                <text
                                                    fill="#ccc"
                                                    data-name="Visit Your Dashboard"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="48"
                                                    fontWeight="500"
                                                    letterSpacing=".01em"
                                                    transform="translate(1805 1120)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Visit Your Dashboard
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="Don't recognize this activity? Please"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="47"
                                                    letterSpacing=".026em"
                                                    transform="translate(1697 1269)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Don&apos;t recognize this activity? Please{" "}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#7e6306"
                                                    data-name="reset your password"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="52"
                                                    letterSpacing="-.022em"
                                                    textDecoration="underline"
                                                    transform="translate(2502 1270)"
                                                >
                                                    <tspan x="0" y="0">
                                                        reset your password
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="and contact customer support immediately."
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="52"
                                                    letterSpacing="-.032em"
                                                    transform="translate(1697 1365)"
                                                >
                                                    <tspan x="0" y="0">
                                                        and contact
                                                    </tspan>
                                                    <tspan y="0" fill="#977a15"></tspan>
                                                    <tspan dx="20" y="0" fill="#977a15" textDecoration="underline">
                                                        customer support
                                                    </tspan>
                                                    <tspan dx="15" y="0"> immediately. </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="This is an automated message , please do not reply."
                                                    fontFamily="Roboto-Italic, Roboto"
                                                    fontSize="47"
                                                    fontStyle="italic"
                                                    letterSpacing="-.017em"
                                                    transform="translate(1697 1482)"
                                                >
                                                    <tspan x="0" y="0">
                                                        This is an automated message , please do not reply.
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#725900"
                                                    data-name="Stay connected!"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="48"
                                                    fontWeight="500"
                                                    letterSpacing=".011em"
                                                    transform="translate(2177 1697)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Stay connected!
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="#505050"
                                                    d="M50.686 59.386c.033.494.033 1 .033 1.493 0 15.23-11.651 32.787-32.945 32.787A32.776 32.776 0 010 88.495a23.4 23.4 0 002.791.143 23.3 23.3 0 0014.376-4.919 11.6 11.6 0 01-10.823-7.994 14.3 14.3 0 002.185.176 12.185 12.185 0 003.045-.4A11.529 11.529 0 012.295 64.2v-.143a11.632 11.632 0 005.23 1.46A11.507 11.507 0 013.939 50.1a32.942 32.942 0 0023.875 12.053 13.114 13.114 0 01-.287-2.635 11.6 11.6 0 0120.036-7.884 22.755 22.755 0 007.348-2.778 11.51 11.51 0 01-5.085 6.344 23.42 23.42 0 006.664-1.779 25.081 25.081 0 01-5.8 5.962z"
                                                    transform="translate(1877.054 1728)"
                                                ></path>
                                                <ellipse
                                                    cx="27.5"
                                                    cy="27"
                                                    fill="#505050"
                                                    data-name="Ellipse 42"
                                                    rx="27.5"
                                                    ry="27"
                                                    transform="translate(2171.054 1772)"
                                                ></ellipse>
                                                <path
                                                    fill="#232323"
                                                    d="M18.662 24.625v17.5h8.193v-17.5h6.11l1.271-8.047h-7.381v-2.846c0-4.254 1.434-5.883 5.135-5.883a24.854 24.854 0 012.613.1V.65A21.926 21.926 0 0029.695 0c-7.551 0-11.033 4.155-11.033 13.115v3.464H14v8.047z"
                                                    transform="translate(2174.252 1783.875)"
                                                ></path>
                                                <ellipse
                                                    cx="27"
                                                    cy="26.5"
                                                    fill="#505050"
                                                    data-name="Ellipse 43"
                                                    opacity="0.93"
                                                    rx="27"
                                                    ry="26.5"
                                                    transform="translate(2603.054 1774)"
                                                ></ellipse>
                                                <path
                                                    fill="#202125"
                                                    d="M27.765 39.935a3.975 3.975 0 01-3.865-3.052 4.7 4.7 0 00-4.035 4.645v.015a19.116 19.116 0 019.3 2.7 5.559 5.559 0 115.769 9.431c-.179 6.461-7.22 11.657-15.87 11.657S3.387 60.145 3.2 53.691a5.563 5.563 0 115.761-9.439 19.059 19.059 0 019.208-2.71v-.022a6.411 6.411 0 015.717-6.364 3.965 3.965 0 113.878 4.779zm-16.041 8.687c-1.556 0-2.9 1.548-2.992 3.566a2.545 2.545 0 002.829 2.836 2.545 2.545 0 002.814-2.747c.089-2.017-1.094-3.655-2.657-3.655zM29.4 52.18c-.089-2.017-1.429-3.566-2.992-3.566s-2.747 1.638-2.657 3.655a2.545 2.545 0 002.814 2.747A2.545 2.545 0 0029.4 52.18zm-4.474 5.27a.442.442 0 00-.365-.6 56.56 56.56 0 00-10.988 0 .442.442 0 00-.365.6 6.35 6.35 0 0011.717 0z"
                                                    transform="translate(2611.054 1752)"
                                                ></path>
                                                <path
                                                    fill="#505050"
                                                    d="M70.615 69.256a6.661 6.661 0 00-5.032-4.25C61.145 64 43.351 64 43.351 64s-17.794 0-22.232 1.006a6.661 6.661 0 00-5.032 4.25C14.9 73.008 14.9 80.826 14.9 80.826s0 7.818 1.188 11.57a6.583 6.583 0 005.032 4.18c4.438 1.006 22.232 1.006 22.232 1.006s17.794 0 22.232-1.006a6.6 6.6 0 005.032-4.18c1.184-3.752 1.184-11.57 1.184-11.57s0-7.818-1.188-11.57zM37.538 87.927v-14.2l14.866 7.1-14.866 7.1z"
                                                    transform="translate(2427.558 1719.333)"
                                                ></path>
                                                <path
                                                    fill="#1d1d1d"
                                                    d="M-5797.333 2100l18.319 9.181-18.319 9.181z"
                                                    data-name="Path 19"
                                                    transform="translate(8260.63 -309.047)"
                                                ></path>
                                                <path
                                                    fill="#505050"
                                                    d="M25.376 44.22a13.045 13.045 0 1013.045 13.045A13.024 13.024 0 0025.376 44.22zm0 21.526a8.481 8.481 0 118.481-8.481 8.5 8.5 0 01-8.481 8.481zM42 43.686a3.043 3.043 0 11-3.043-3.043A3.036 3.036 0 0142 43.686zm8.64 3.088c-.193-4.076-1.124-7.686-4.11-10.661S39.943 32.208 35.867 32c-4.2-.238-16.792-.238-20.992 0-4.065.2-7.675 1.128-10.661 4.1S.308 42.687.1 46.763c-.238 4.2-.238 16.792 0 20.992.193 4.076 1.124 7.686 4.11 10.661s6.585 3.906 10.661 4.11c4.2.238 16.792.238 20.992 0 4.076-.193 7.686-1.124 10.661-4.11s3.906-6.585 4.11-10.661c.242-4.2.242-16.78.003-20.981zm-5.429 25.489a8.586 8.586 0 01-4.837 4.837c-3.349 1.328-11.3 1.022-15 1.022s-11.66.3-15-1.022a8.586 8.586 0 01-4.837-4.837c-1.328-3.349-1.022-11.3-1.022-15s-.3-11.66 1.022-15a8.586 8.586 0 014.837-4.837c3.349-1.328 11.3-1.022 15-1.022s11.66-.3 15 1.022a8.586 8.586 0 014.837 4.837c1.328 3.349 1.022 11.3 1.022 15s.306 11.662-1.022 15z"
                                                    transform="translate(2778.129 1743.295)"
                                                ></path>
                                                <path
                                                    fill="#505050"
                                                    d="M0 0H56V54H0z"
                                                    data-name="Rectangle 164"
                                                    transform="translate(2304.054 1772)"
                                                ></path>
                                                <path
                                                    fill="#272727"
                                                    d="M8.209 36.667H.606v-24.48h7.6zM4.4 8.847A4.424 4.424 0 118.807 4.4 4.44 4.44 0 014.4 8.847zm32.258 27.82h-7.587V24.75c0-2.84-.057-6.482-3.953-6.482-3.953 0-4.559 3.086-4.559 6.278v12.121h-7.6v-24.48h7.292v3.339h.106a7.99 7.99 0 017.194-3.953c7.693 0 9.109 5.066 9.109 11.647v13.447z"
                                                    transform="translate(2313.887 1783)"
                                                ></path>
                                                <path
                                                    fill="#505050"
                                                    d="M25.94 8a25.94 25.94 0 1025.94 25.94A25.935 25.935 0 0025.94 8zm12.028 17.645c-.387 4.1-2.081 14.058-2.939 18.65A3.81 3.81 0 0133.9 46.7a1.223 1.223 0 01-.637.248c-1.506.136-2.646-.994-4.111-1.956-2.28-1.5-3.577-2.427-5.784-3.891-2.563-1.684-.9-2.615.554-4.132.387-.4 7.018-6.433 7.144-6.977a.506.506 0 00-.126-.46.606.606 0 00-.533-.052q-.345.073-10.941 7.228a4.88 4.88 0 01-2.814 1.036 18.67 18.67 0 01-4.037-.952c-1.621-.523-2.918-.805-2.8-1.7q.084-.7 1.935-1.433 11.338-4.937 15.125-6.516c7.207-2.991 8.7-3.514 9.675-3.535a1.739 1.739 0 011 .3 1.1 1.1 0 01.366.7c.031.273.052 1.037.052 1.037z"
                                                    transform="translate(2020.067 1766.12)"
                                                ></path>
                                                <path
                                                    fill="#272727"
                                                    d="M-5829.669 2299.7l-19.664 8.647v1.255h.7v.7l5.717 1.674 2.929-1.115 11.017-7.531.7.7-9.345 9.344 9.345 6.973 1.813.7 1.254-.7v-1.255l3.9-19.385v-1.813l-1.673-.558z"
                                                    data-name="Path 20"
                                                    transform="translate(7879.616 -507.907)"
                                                ></path>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="To stay secure, setup your phishing"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="37"
                                                    letterSpacing=".01em"
                                                    transform="translate(1697 1929)"
                                                >
                                                    <tspan x="0" y="0">
                                                        To stay secure, setup your phishing
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#9b7800"
                                                    data-name="here"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="37"
                                                    letterSpacing=".052em"
                                                    transform="translate(1795 2001)"
                                                >
                                                    <tspan x="0" y="0"></tspan>
                                                    <tspan y="0" textDecoration="underline">
                                                        here
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="Risk warning: Cryptocurrency trading is subject to high market risk."
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="37"
                                                    letterSpacing=".032em"
                                                    transform="translate(1697 2099)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Risk warning: Cryptocurrency trading is subject to high market
                                                        risk.
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="Binance will make the best efforts to choose high-quality coins, but will not"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="39"
                                                    letterSpacing="-.008em"
                                                    transform="translate(1697 2154)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Binance will make the best efforts to choose high-quality
                                                        coins, but will not
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="be responsible for your trading losses. Please trade with caution."
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="39"
                                                    letterSpacing="-.001em"
                                                    transform="translate(1697 2206)"
                                                >
                                                    <tspan x="0" y="0">
                                                        be responsible for your trading losses. Please trade with
                                                        caution.
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="Kindly note: Please be aware of phishing sites and always make sure you"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="38"
                                                    letterSpacing=".023em"
                                                    transform="translate(1697 2260)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Kindly note: Please be aware of phishing sites and always make
                                                        sure you
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    data-name="are visiting the official Binance.com website when entering sensitive data."
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="39"
                                                    letterSpacing="-.003em"
                                                    transform="translate(1697 2311)"
                                                >
                                                    <tspan x="0" y="0">
                                                        are visiting the official Binance.com website when entering
                                                        sensitive data.
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d5d5d5"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="39"
                                                    letterSpacing=".027em"
                                                    transform="translate(1697 2002)"
                                                >
                                                    <tspan x="0" y="0">
                                                        code
                                                    </tspan>
                                                </text>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </foreignObject>
                    </div>
                </div>
            </div >
            <div className="billing_childs">
                <div className="app-heading">
                    <h3>CONTROLS</h3>
                </div>
                <div className="global_form_wrapper">
                    <div className="global_form_inner">
                        <label>Name</label>
                        <input
                            type="text"
                            value={data.name}
                            name="name"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Price</label>
                        <input
                            type="text"
                            value={data.price}
                            name="price"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FiftyFivePage;