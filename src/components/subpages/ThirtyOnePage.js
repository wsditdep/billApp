import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const ThirtyOnePage = () => {
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
                    <h3>PREVIEW - <span>Mobile 31</span></h3>
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
                                <g data-name="Group 102" transform="translate(-2601 -144)">
                                    <g data-name="Group 101">
                                        <g data-name="Group 98" transform="translate(2048)">
                                            <g data-name="Group 94" transform="translate(-2274 103)">
                                                <g data-name="Group 87" transform="translate(102 -126)">
                                                    <path
                                                        d="M0 0H1736V3773H0z"
                                                        data-name="Rectangle 75"
                                                        transform="translate(2725 167)"
                                                    ></path>
                                                    <text
                                                        fill="#9d9d9d"
                                                        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                                                        fontSize="61"
                                                        letterSpacing=".1em"
                                                        transform="translate(3603 1433)"
                                                    >
                                                        <tspan x="-265.031" y="0">
                                                            提款正在處理中
                                                        </tspan>
                                                        <tspan y="0" fontFamily="Roboto-Regular, Roboto">
                                                            ...
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#b8b8b8"
                                                        data-name="地址/賬戶"
                                                        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                                                        fontSize="49"
                                                        transform="translate(2883 1874)"
                                                    >
                                                        <tspan x="-108.097" y="0">
                                                            地址
                                                        </tspan>
                                                        <tspan y="0" fontFamily="Roboto-Regular, Roboto">
                                                            /
                                                        </tspan>
                                                        <tspan y="0">賬戶</tspan>
                                                    </text>
                                                    <text
                                                        fill="#d6d6d6"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="63"
                                                        transform="translate(3937 1875)"
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
                                                        transform="translate(4237 1963)"
                                                    >
                                                        <tspan x="180" y="0" textAnchor="end">
                                                            {data.address2}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#d6d6d6"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="63"
                                                        transform="translate(4324 2163)"
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
                                                        transform="translate(4195 2381)"
                                                    >
                                                        <tspan x="210" y="0" textAnchor="end">
                                                            {data.remarks}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#b8b8b8"
                                                        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                                                        fontSize="49"
                                                        transform="translate(2831 2158)"
                                                    >
                                                        <tspan x="-49" y="0">
                                                            網絡
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#b8b8b8"
                                                        fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                                                        fontSize="49"
                                                        transform="translate(2831 2376)"
                                                    >
                                                        <tspan x="-49" y="0">
                                                            備註
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#fff"
                                                        data-name="518.31 USDT"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="177"
                                                        transform="translate(3593 1655)"
                                                    >
                                                        <tspan x="0" y="0" textAnchor="middle">
                                                            {data.amount}
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        fill="#6f6f6f"
                                                        d="M0 0H1654V6H0z"
                                                        data-name="Rectangle 76"
                                                        transform="translate(2762 1718)"
                                                    ></path>
                                                    <path
                                                        fill="#6f6f6f"
                                                        d="M0 0H1677V6H0z"
                                                        data-name="Rectangle 77"
                                                        transform="translate(2750 3729)"
                                                    ></path>
                                                    <text
                                                        fill="#efefef"
                                                        data-name="© 2023 Exodus. 版权所有。"
                                                        fontFamily="Roboto-Light, Roboto"
                                                        fontSize="61"
                                                        fontWeight="300"
                                                        transform="translate(3587 3824)"
                                                    >
                                                        <tspan x="-361.89" y="0">
                                                            © 2024 Exodus.{" "}
                                                        </tspan>
                                                        <tspan y="0" fontFamily="YuGothicUI-Light, Yu Gothic UI">
                                                            版权所有。
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#efefef"
                                                        data-name="使用条件 - 隐私政策 - 法律条款"
                                                        fontFamily="YuGothicUI-Light, Yu Gothic UI"
                                                        fontSize="61"
                                                        fontWeight="300"
                                                        transform="translate(3593 3906)"
                                                    >
                                                        <tspan x="-413.12" y="0">
                                                            使用条件
                                                        </tspan>
                                                        <tspan y="0" fontFamily="Roboto-Light, Roboto">
                                                            {" "}
                                                            -{" "}
                                                        </tspan>
                                                        <tspan
                                                            y="0"
                                                            fontFamily="MicrosoftJhengHeiUILight, Microsoft JhengHei UI"
                                                            fontWeight="400"
                                                        >
                                                            隐
                                                        </tspan>
                                                        <tspan y="0">私政策</tspan>
                                                        <tspan y="0" fontFamily="Roboto-Light, Roboto">
                                                            {" "}
                                                            -{" "}
                                                        </tspan>
                                                        <tspan y="0">法律条款</tspan>
                                                    </text>
                                                    <text
                                                        fill="#efefef"
                                                        data-name="预计完成时间 : 2023-8-26 15:30:35"
                                                        fontFamily="MicrosoftJhengHeiUILight, Microsoft JhengHei UI"
                                                        fontSize="55"
                                                        letterSpacing=".148em"
                                                        transform="translate(3600 3098)"
                                                    >
                                                        <tspan x="-522.066" y="0">
                                                            预计
                                                        </tspan>
                                                        <tspan
                                                            y="0"
                                                            fontFamily="YuGothicUI-Light, Yu Gothic UI"
                                                            fontWeight="300"
                                                        >
                                                            完成
                                                        </tspan>
                                                        <tspan y="0">时间</tspan>
                                                        <tspan
                                                            y="0"
                                                            fontFamily="Roboto-Light, Roboto"
                                                            fontWeight="300"
                                                        >
                                                            {" "}
                                                            : {data.time}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#efefef"
                                                        data-name="你將收到付款 當提款狀態已成功"
                                                        fontFamily="YuGothicUI-Light, Yu Gothic UI"
                                                        fontSize="55"
                                                        fontWeight="300"
                                                        letterSpacing=".148em"
                                                        transform="translate(3619 3228)"
                                                    >
                                                        <tspan x="-448.667" y="0">
                                                            你將收到付款
                                                        </tspan>
                                                        <tspan y="0" fontFamily="Roboto-Light, Roboto"></tspan>
                                                        <tspan y="0">當提款狀態已成功</tspan>
                                                    </text>
                                                </g>
                                            </g>
                                        </g>
                                        <g transform="translate(2954.792 446.867)">
                                            <g data-name="Group 100" transform="translate(540 540)">
                                                <g data-name="Group 99">
                                                    <g transform="translate(476.224 -23.28)">
                                                        <path
                                                            fill="#496161"
                                                            stroke="#fff"
                                                            strokeWidth="10.63"
                                                            d="M2.02 84.189c12.543 0 23.7-2.232 33.272-6.484A46.84 46.84 0 0058.04 56.339q4.624-9.726 5.421-23.6v-.427c0-12.012-3.3-21.9-9.78-29.445l-.213-.213a56.65 56.65 0 00-20.2-15.2 284.109 284.109 0 00-27.638-9.78q-12.278-3.508-18.5-6.7c-2.551-1.276-3.933-2.976-4.252-5.315-.532-5.1 1.276-7.016 3.3-8.4 3.72-2.551 8.717-3.827 14.669-3.827a33.063 33.063 0 0116.264 3.827 22.623 22.623 0 018.5 8.823c2.02 3.614 2.551 8.61 7.335 9.78a7.422 7.422 0 005.209-.85l19.772-11.161a7.286 7.286 0 003.508-8.079 48.78 48.78 0 00-19.984-29.445c-10.2-7.228-23.173-10.843-38.268-10.843-13.925 0-26.15 2.232-36.248 6.7-10.843 4.784-18.39 12.118-22.536 21.792a50.056 50.056 0 00-4.677 20.091c0 11.906 2.976 21.685 8.929 29.02A55.03 55.03 0 00-30.514 9.138 221.57 221.57 0 00-.856 19.13a81.673 81.673 0 0118.284 6.909c2.02 1.169 4.146 2.976 4.146 7.973 0 3.827-1.276 6.378-4.252 8.291-3.827 2.445-9.461 3.721-17.008 3.721q-12.915 0-18.815-5.1a34.828 34.828 0 01-9.567-14.032 6.8 6.8 0 00-9.567-3.72l-21.9 11.693a7.438 7.438 0 00-3.614 8.4c3.72 13.5 11.374 23.917 22.854 30.933 11.161 6.8 25.406 10.2 42.414 10.2z"
                                                            data-name="Path 36"
                                                        ></path>
                                                    </g>
                                                    <g data-name="Layer_1" transform="translate(-265.963 -21.685)">
                                                        <path
                                                            fill="#1298ad"
                                                            stroke="#fff"
                                                            strokeWidth="10.63"
                                                            d="M45.177-14.031a8.918 8.918 0 0012.65 0l33.7-33.7a13.275 13.275 0 003.824-9.351v-28.914a8.983 8.983 0 00-8.929-8.929H57.189a12.938 12.938 0 00-9.354 3.933L14.35-57.508a8.918 8.918 0 000 12.65zm45.709 61.76L-47.197-90.036a7.829 7.829 0 01-.638-.531 13.376 13.376 0 00-9.354-3.933h-29.233a8.914 8.914 0 00-8.929 8.929v28.913a13.274 13.274 0 003.827 9.354l36.248 36.355a11.114 11.114 0 001.7 1.276l10.847 10.736-46.878 46.134a13 13 0 00-3.933 9.461v28.807a8.914 8.914 0 008.929 8.929h29.232a13.026 13.026 0 009.248-3.827L.854 44.433l9.036 8.929a8.026 8.026 0 001.169 1.488l36.142 36.142a13.274 13.274 0 009.35 3.826h29.233a8.914 8.914 0 008.929-8.929V56.977a13.274 13.274 0 00-3.827-9.354z"
                                                            data-name="Path 37"
                                                        ></path>
                                                    </g>
                                                    <g data-name="Layer_1" transform="translate(1.382 144.781)">
                                                        <path
                                                            fill="#4a6262"
                                                            stroke="#fff"
                                                            strokeWidth="10.63"
                                                            d="M-524.273 24.13h-11.372l24.662-48.9h.425l24.768 48.9h-11.375l-4.146-8.5h-19.027zm7.228-15.732h12.439c-2.87-6.165-4.89-10.843-6.165-14.35l-2.658 6.059c-1.807 4.146-2.976 6.909-3.72 8.291zm74.2 15.732h-16.371v-48.154h16.264c8.61 0 15.413 2.232 20.516 6.7a22.211 22.211 0 017.76 17.433c0 7.122-2.551 12.969-7.76 17.433q-7.494 6.7-20.41 6.7zm-.319-39.544h-5.209v30.933h5.421c5.315 0 9.461-1.488 12.65-4.358A14.6 14.6 0 00-425.625 0a14.1 14.1 0 00-4.784-11.055q-4.624-4.465-12.756-4.465zm87.7-8.61h11.8l-24.98 48.9h-.429l-25.087-48.9h11.906l6.7 13.925q5.581 11.959 6.7 14.988c2.339-5.315 4.571-10.311 6.8-14.988l6.7-13.925zm71.646 39.544v8.61h-33.8v-48.154h32.74v8.61h-21.795v10.949h18.5v8.291h-18.5v11.693zm71.327-39.544v48.9h-.319L-240.773-.532l-3.3-2.764v27.425h-10.63v-48.9h.425L-226.427.635l3.3 2.764v-27.423h10.63zm66.969 0v8.61h-14.251V24.13h-10.838v-39.544h-14.244v-8.61zm58.571 0h10.843V6.59c0 5.634-1.913 10.2-5.634 13.5s-8.929 5-15.626 5-11.906-1.7-15.626-5-5.634-7.866-5.634-13.5v-30.614h10.843V5.634a10.028 10.028 0 002.764 7.441c1.807 1.807 4.358 2.658 7.654 2.658s5.953-.85 7.654-2.658a10.413 10.413 0 002.658-7.441v-29.658zm42.52 48.154v-48.154h17.858q9.089 0 14.35 4.146c3.508 2.764 5.315 6.7 5.315 11.693a14.367 14.367 0 01-2.551 8.5 13.792 13.792 0 01-7.122 5.209l10.63 18.6h-11.482l-8.929-16.9h-7.335v16.9h-10.736zm18.177-39.544h-7.441v14.35h7.76a9.045 9.045 0 005.953-1.807 6.8 6.8 0 002.126-5.315 6.389 6.389 0 00-2.232-5.315 9.7 9.7 0 00-6.168-1.913zm83.127 30.933v8.61h-33.8v-48.153h32.74v8.61H34.016v10.949h18.5v8.291h-18.5v11.693zm97.477-39.544v8.61h-14.246v39.544h-10.843v-39.543h-14.244v-8.61zm27.638 48.154v-48.153h17.858q9.089 0 14.351 4.146c3.508 2.764 5.315 6.7 5.315 11.693a14.366 14.366 0 01-2.551 8.5 13.792 13.792 0 01-7.122 5.209l10.63 18.6h-11.48l-8.929-16.9h-7.333v16.9h-10.741zm18.177-39.544h-7.438v14.35h7.76a9.045 9.045 0 005.953-1.807 6.8 6.8 0 002.126-5.315 6.389 6.389 0 00-2.232-5.315 9.7 9.7 0 00-6.171-1.912zm54.745 39.544h-11.376l24.662-48.9h.425l24.768 48.9h-11.375l-4.146-8.5h-19.027zm7.228-15.732h12.437c-2.87-6.165-4.89-10.843-6.165-14.35L265.752.106c-1.807 4.146-2.976 6.909-3.721 8.291zm82.276-32.421h11.8l-24.98 48.9h-.425l-25.087-48.9h11.905l6.7 13.925q5.581 11.959 6.7 14.988c2.339-5.315 4.571-10.311 6.909-14.988l6.7-13.925zM416.06 15.52v8.61h-33.8v-48.154H415v8.61h-21.796v10.949h18.5v8.291h-18.5v11.693zm59.528 0v8.61h-30.51v-48.154h10.843V15.52h19.665zm40.926 9.567a39.4 39.4 0 01-15.095-2.764v-9.886a34.7 34.7 0 0012.756 3.508 19.638 19.638 0 004.571-.319c4.146-.531 6.165-2.02 6.165-4.252a4.451 4.451 0 00-2.126-3.72 31.538 31.538 0 00-7.866-3.508c-4.783-1.7-8.4-3.614-10.736-5.846-2.232-2.232-3.4-5.209-3.4-9.142a12.122 12.122 0 015.1-10.2c3.3-2.551 7.76-3.933 13.394-3.933a34.444 34.444 0 0113.287 2.445v9.461a25.616 25.616 0 00-12.437-2.976 11.683 11.683 0 00-6.272 1.382 4.084 4.084 0 00-2.339 3.614 4.6 4.6 0 002.232 3.721 32.83 32.83 0 007.441 3.508q7.494 2.711 10.843 6.059 3.508 3.189 3.508 8.929a12.031 12.031 0 01-5 10.2c-3.3 2.445-7.972 3.72-13.925 3.72z"
                                                            data-name="Path 38"
                                                        ></path>
                                                    </g>
                                                    <g data-name="Layer_1" transform="translate(-77.174 -54.107)">
                                                        <path
                                                            fill="#496161"
                                                            stroke="#fff"
                                                            strokeWidth="10.63"
                                                            d="M-334.418-42.946c-12.331-7.122-26.788-10.736-42.945-10.736s-30.829 3.614-43.692 10.843a80.485 80.485 0 00-30.508 30.078c-7.335 12.654-11.055 27.324-11.055 43.481s3.72 30.827 11.055 43.477a79.745 79.745 0 0030.508 30.083c12.862 7.228 27.532 10.843 43.583 10.843a120.714 120.714 0 0040.713-6.7c12.65-4.465 23.067-10.417 31.146-17.646a6.614 6.614 0 002.232-4.89 7.166 7.166 0 00-1.913-5l-20.724-21.148a6.675 6.675 0 00-9.354-.213c-6.272 5.634-12.862 9.461-19.347 11.268a85.773 85.773 0 01-22.642 2.87c-10.2 0-18.6-2.87-25.512-8.717a36.615 36.615 0 01-6.165-6.7 5.9 5.9 0 01-.957-5.421 5.6 5.6 0 015.209-3.72h102.15a6.816 6.816 0 006.8-6.165 124.392 124.392 0 00.744-12.437c0-16.051-3.4-30.721-10.2-43.477a74.21 74.21 0 00-29.026-30.188zm-11.8 52.831a5.694 5.694 0 01-4.677 2.232h-54a5.452 5.452 0 01-5.209-3.72 5.9 5.9 0 01.957-5.421 40.8 40.8 0 016.165-6.7c6.91-5.847 15.307-8.717 25.512-8.717s18.39 2.87 25.087 8.717a36.405 36.405 0 016.484 7.547 5.293 5.293 0 01-.319 6.063zm396.5-52.724c-13.075-7.228-27.851-10.843-43.9-10.843s-30.933 3.614-43.9 10.843a80.131 80.131 0 00-30.94 30.078c-7.335 12.65-11.055 27.319-11.055 43.477s3.72 30.827 11.055 43.477a78.708 78.708 0 0030.933 30.083c13.075 7.228 27.851 10.843 43.9 10.843s30.933-3.614 43.9-10.843a80.413 80.413 0 0031.04-30.083c7.441-12.756 11.268-27.425 11.268-43.583S88.756-.217 81.315-12.973a81.147 81.147 0 00-31.033-30.079zM35.823 61.866c-7.866 8.079-17.539 12.012-29.445 12.012s-21.579-3.933-29.233-11.906c-7.76-8.079-11.587-18.284-11.587-31.146S-30.615 7.865-22.855-.32c7.76-8.079 17.327-11.906 29.233-11.906S28.063-8.293 35.823-.214c7.866 8.079 11.693 18.284 11.693 31.146s-3.827 22.961-11.693 31.146zm240.238-177.627h-27.532a8.688 8.688 0 00-8.717 8.717v62.5a3.9 3.9 0 01-2.232 3.614 4.253 4.253 0 01-4.465-.319 52.365 52.365 0 00-5.74-3.614c-10.417-5.846-22.323-8.823-35.5-8.823a78.581 78.581 0 00-70.158 41.244c-7.016 12.756-10.63 27.319-10.63 43.264a89.017 89.017 0 0010.63 43.264 78.581 78.581 0 0070.154 41.253c13.181 0 25.193-2.976 35.5-8.823 2.02-1.169 3.933-2.339 5.74-3.614a4.215 4.215 0 016.7 3.614 5.266 5.266 0 005.421 5.209h29.126a10.434 10.434 0 0010.424-10.421v-208.348a8.688 8.688 0 00-8.721-8.717zM227.694 61.654c-8.079 8.185-17.752 12.225-29.551 12.225a40.319 40.319 0 01-20.941-5.528 42.267 42.267 0 01-15.307-15.312 42.7 42.7 0 01-5.74-22.217 42.971 42.971 0 015.74-22.217 41.465 41.465 0 0115.307-15.307 40.591 40.591 0 0120.941-5.528A39.788 39.788 0 01227.694-.005c8.079 8.291 12.118 18.39 12.118 30.933s-3.933 22.642-12.118 30.933zM462.617-39.861A12.363 12.363 0 00450.282-52.3H429.77a12.341 12.341 0 00-12.224 12.439v85.465a28.307 28.307 0 01-8.4 20.728 27.057 27.057 0 01-20.3 8.5 26.37 26.37 0 01-19.984-8.5 28.067 28.067 0 01-8.4-20.622v-86.529a11.41 11.41 0 00-11.374-11.48h-22.322a11.478 11.478 0 00-11.374 11.48v92.058a64.17 64.17 0 0033.91 57.083 62.651 62.651 0 0026.15 7.335h3.3a46.36 46.36 0 005.421-.319s1.7-.213 1.807-.213a68.227 68.227 0 0019.028-7.122c2.02-1.169 3.933-2.339 5.74-3.614a4.215 4.215 0 016.7 3.614 5.266 5.266 0 005.421 5.209h29.126a10.434 10.434 0 0010.417-10.417V-39.861z"
                                                            data-name="Path 39"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                        <path
                                            d="M0 0H1214V165H0z"
                                            data-name="Rectangle 150"
                                            transform="translate(2912 1079)"
                                        ></path>
                                        <text
                                            fill="#fff"
                                            data-name="ADVENTURE TRAVELS"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="89"
                                            fontWeight="700"
                                            letterSpacing=".128em"
                                            transform="translate(3495 1173)"
                                        >
                                            <tspan x="-544.241" y="0">
                                                ADVENTURE TRAVELS
                                            </tspan>
                                        </text>
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

export default ThirtyOnePage;