import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SixtyNinePage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "8:41",
        amount: "$8,407",
        best: "BEST EGG",
        best_price: "$2,251",
        best_price_alt: "$299/mo",
        upstart: "UPSTART/FINWISE",
        upstart_price: "$1,744",
        upstart_price_alt: "$109/mo",
    });

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("5G");
    const [battery, setBattery] = useState("25");

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
                    <h3>PREVIEW - <span>Mobile 69</span></h3>
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
                                viewBox="0 0 2600 3657"
                            >
                                <g data-name="Group 326" transform="translate(-2951 -206)">
                                    <g data-name="Group 325">
                                        <path
                                            fill="#fff"
                                            d="M0 0H2600V3657H0z"
                                            data-name="Rectangle 69"
                                            transform="translate(2951 206)"
                                        ></path>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            fontFamily="Roboto-Black, Roboto"
                                            fontSize="183"
                                            fontWeight="800"
                                            transform="translate(3040.314 726.893)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                Loans
                                            </tspan>
                                        </text>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="Loans"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="109"
                                            transform="translate(3449.523 961.991)"
                                            fontWeight="500"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                Loans
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#5a5a5a"
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="Find a loan"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="108"
                                            transform="translate(4552.412 960.991)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                Find a loan
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#008707"
                                            d="M0 0H1208V21H0z"
                                            data-name="Rectangle 70"
                                            transform="translate(3039 1046)"
                                        ></path>
                                        <path
                                            fill="#e3eaf0"
                                            d="M0 0H1204V21H0z"
                                            data-name="Rectangle 71"
                                            transform="translate(4242 1046)"
                                        ></path>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="8:41"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="100"
                                            fontWeight="600"
                                            transform="translate(3228.523 415)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.time}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#010101"
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="Total reported balance"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="118"
                                            fontWeight="500"
                                            transform="translate(3038.529 1362.857)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                Total reported balance
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#020202"
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="$8,407"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="372"
                                            fontWeight="700"
                                            transform="translate(3039.42 1821.188)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <g
                                            fill="#fff"
                                            stroke="#ccc"
                                            strokeWidth="7"
                                            data-name="Rectangle 72"
                                            transform="translate(3039 2118)"
                                        >
                                            <rect width="1943" height="218" stroke="none" rx="109"></rect>
                                            <rect
                                                width="1936"
                                                height="211"
                                                x="3.5"
                                                y="3.5"
                                                fill="none"
                                                rx="105.5"
                                            ></rect>
                                        </g>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="Recommendations up to date"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="108"
                                            fontWeight="700"
                                            transform="translate(3253 2265)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                Recommendations up to date
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#020202"
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="BEST EGG"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="121"
                                            fontWeight="700"
                                            transform="translate(3333.877 2661.48)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                {data.best}
                                            </tspan>
                                        </text>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="$299/mo"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="112"
                                            transform="translate(3333.766 2848.913)"
                                            fontWeight="500"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                {data.best_price_alt}
                                            </tspan>
                                        </text>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="$6,663"
                                            fontFamily="Roboto-Black, Roboto"
                                            fontSize="125"
                                            fontWeight="800"
                                            transform="translate(5059.621 2665.48)"
                                        >
                                            <tspan x="380" y="0" className="ibm" textAnchor="end">
                                                {data.best_price}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#020202"
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="$1,744"
                                            fontFamily="Roboto-Black, Roboto"
                                            fontSize="125"
                                            fontWeight="800"
                                            transform="translate(5059.621 3359.265)"
                                        >
                                            <tspan x="385" y="0" className="ibm" textAnchor="end">
                                                {data.upstart_price}
                                            </tspan>
                                        </text>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="UPSTART/FINWISE"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="121"
                                            fontWeight="700"
                                            transform="translate(3334.004 3359.444)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                {data.upstart}
                                            </tspan>
                                        </text>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="$109/mo"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="112"
                                            transform="translate(3333.766 3538.519)"
                                            fontWeight="500"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                {data.upstart_price_alt}
                                            </tspan>
                                        </text>
                                        <path
                                            fill="none"
                                            stroke="#e7e7e7"
                                            strokeWidth="9"
                                            d="M0 0L2403.171 0"
                                            data-name="Line 28"
                                            transform="translate(3049.217 3033.384)"
                                        ></path>
                                        <path
                                            fill="#f0f1f3"
                                            d="M0 0H2600V50H0z"
                                            data-name="Rectangle 73"
                                            transform="translate(2951 3767)"
                                        ></path>
                                        <rect
                                            width="17"
                                            height="2775"
                                            fill="#a8a8a8"
                                            data-name="Rectangle 74"
                                            rx="2"
                                            transform="translate(5521 1088)"
                                        ></rect>
                                        <g data-name="Group 322" transform="translate(2571 -8)">
                                            <rect
                                                width="88"
                                                height="95"
                                                fill="#008d00"
                                                data-name="Rectangle 416"
                                                rx="11"
                                                transform="translate(556 2188)"
                                            ></rect>
                                            <path
                                                fill="#fff"
                                                d="M1.862 53.152a2.862 2.862 0 000 5.363l14.027 5.263 5.263 14.027a2.862 2.862 0 005.363 0l5.263-14.027 14.027-5.263a2.862 2.862 0 000-5.363l-14.027-5.263-5.263-14.027a2.862 2.862 0 00-5.363 0l-5.263 14.027z"
                                                transform="translate(566 2169)"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                d="M1.018 43.565a1.565 1.565 0 000 2.932l7.669 2.878 2.878 7.669a1.565 1.565 0 002.932 0l2.878-7.669 7.669-2.875a1.565 1.565 0 000-2.932l-7.669-2.878-2.875-7.672a1.565 1.565 0 00-2.932 0l-2.88 7.67z"
                                                data-name="wand-magic-sparkles-solid"
                                                transform="translate(604 2207)"
                                            ></path>
                                        </g>
                                        <g data-name="Group 323" transform="translate(3060 -33)">
                                            <circle
                                                cx="48"
                                                cy="48"
                                                r="48"
                                                fill="#040404"
                                                data-name="Ellipse 115"
                                                transform="translate(78 2597)"
                                            ></circle>
                                            <path
                                                d="M58.983 17.695H35.39L12.406 4.59A2.948 2.948 0 0114.857 0h64.658a2.948 2.948 0 012.451 4.59zm-23.593 5.9h23.593c.7.461 1.493.977 2.4 1.548 10.451 6.691 32.993 21.1 32.993 51.536a17.7 17.7 0 01-17.699 17.693H17.695A17.7 17.7 0 010 76.677c0-30.431 22.542-44.845 32.993-51.536.885-.571 1.7-1.087 2.4-1.548zm15.483 16.22a3.686 3.686 0 10-7.373 0v2.58a14.221 14.221 0 00-4.092 1.567 9.2 9.2 0 00-4.755 8.092 8.59 8.59 0 004.553 7.5 28.836 28.836 0 006.562 2.58l.313.092a22.787 22.787 0 015.16 1.974c.94.59 1.069 1 1.087 1.511a1.993 1.993 0 01-1.087 1.935 7.326 7.326 0 01-3.944.866 22.944 22.944 0 01-6.47-1.567q-.636-.221-1.327-.442a3.684 3.684 0 10-2.341 6.986c.35.111.737.24 1.124.387a42.8 42.8 0 005.2 1.548v2.728a3.686 3.686 0 007.373 0v-2.544a13.219 13.219 0 004.276-1.659 9.353 9.353 0 004.568-8.294 9 9 0 00-4.534-7.668 28.938 28.938 0 00-6.838-2.765l-.129-.037a25.738 25.738 0 01-5.216-1.935c-.958-.571-.977-.9-.977-1.235a1.84 1.84 0 011.143-1.715 8.024 8.024 0 013.963-.922 23.416 23.416 0 015.751.958 3.691 3.691 0 001.9-7.133 49.035 49.035 0 00-3.889-.866z"
                                                transform="translate(78.728 2568)"
                                            ></path>
                                            <text
                                                fill="#fff"
                                                stroke="rgba(0,0,0,0)"
                                                strokeWidth="1"
                                                data-name="$"
                                                fontFamily="Poppins-Regular, Poppins"
                                                fontSize="66"
                                                transform="translate(107 2665)"
                                            >
                                                <tspan x="0" y="0">
                                                    $
                                                </tspan>
                                            </text>
                                        </g>
                                        <g data-name="Group 324" transform="translate(3060 662)">
                                            <circle
                                                cx="48"
                                                cy="48"
                                                r="48"
                                                fill="#040404"
                                                data-name="Ellipse 115"
                                                transform="translate(78 2597)"
                                            ></circle>
                                            <path
                                                d="M58.983 17.695H35.39L12.406 4.59A2.948 2.948 0 0114.857 0h64.658a2.948 2.948 0 012.451 4.59zm-23.593 5.9h23.593c.7.461 1.493.977 2.4 1.548 10.451 6.691 32.993 21.1 32.993 51.536a17.7 17.7 0 01-17.699 17.693H17.695A17.7 17.7 0 010 76.677c0-30.431 22.542-44.845 32.993-51.536.885-.571 1.7-1.087 2.4-1.548zm15.483 16.22a3.686 3.686 0 10-7.373 0v2.58a14.221 14.221 0 00-4.092 1.567 9.2 9.2 0 00-4.755 8.092 8.59 8.59 0 004.553 7.5 28.836 28.836 0 006.562 2.58l.313.092a22.787 22.787 0 015.16 1.974c.94.59 1.069 1 1.087 1.511a1.993 1.993 0 01-1.087 1.935 7.326 7.326 0 01-3.944.866 22.944 22.944 0 01-6.47-1.567q-.636-.221-1.327-.442a3.684 3.684 0 10-2.341 6.986c.35.111.737.24 1.124.387a42.8 42.8 0 005.2 1.548v2.728a3.686 3.686 0 007.373 0v-2.544a13.219 13.219 0 004.276-1.659 9.353 9.353 0 004.568-8.294 9 9 0 00-4.534-7.668 28.938 28.938 0 00-6.838-2.765l-.129-.037a25.738 25.738 0 01-5.216-1.935c-.958-.571-.977-.9-.977-1.235a1.84 1.84 0 011.143-1.715 8.024 8.024 0 013.963-.922 23.416 23.416 0 015.751.958 3.691 3.691 0 001.9-7.133 49.035 49.035 0 00-3.889-.866z"
                                                data-name="sack-dollar-solid"
                                                transform="translate(78.728 2568)"
                                            ></path>
                                            <text
                                                fill="#fff"
                                                stroke="rgba(0,0,0,0)"
                                                strokeWidth="1"
                                                data-name="$"
                                                fontFamily="Poppins-Regular, Poppins"
                                                fontSize="66"
                                                transform="translate(107 2665)"
                                            >
                                                <tspan x="0" y="0">
                                                    $
                                                </tspan>
                                            </text>
                                        </g>


                                        {
                                            network === "low"
                                                ?
                                                <g fill="#3b3b3b" transform="translate(4803 338.163)">
                                                    <rect
                                                        width="18"
                                                        height="27"
                                                        data-name="Rectangle 244"
                                                        rx="2"
                                                        transform="translate(0 51.836)"
                                                    ></rect>
                                                    <rect
                                                        width="20"
                                                        height="41"
                                                        data-name="Rectangle 242"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(35 37.836)"
                                                    ></rect>
                                                    <rect
                                                        width="20"
                                                        height="59"
                                                        data-name="Rectangle 240"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(69 19.836)"
                                                    ></rect>
                                                    <rect
                                                        width="20"
                                                        height="79"
                                                        data-name="Rectangle 238"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(105 -.164)"
                                                    ></rect>
                                                </g>
                                                :
                                                network === "strong"
                                                    ?
                                                    <g fill="#3b3b3b" transform="translate(4803 338.163)">
                                                        <rect
                                                            width="18"
                                                            height="27"
                                                            data-name="Rectangle 35"
                                                            rx="2"
                                                            transform="translate(0 51.836)"
                                                        ></rect>
                                                        <rect
                                                            width="20"
                                                            height="41"
                                                            data-name="Rectangle 36"
                                                            rx="2"
                                                            transform="translate(35 37.836)"
                                                        ></rect>
                                                        <rect
                                                            width="20"
                                                            height="59"
                                                            data-name="Rectangle 37"
                                                            rx="2"
                                                            transform="translate(69 19.836)"
                                                        ></rect>
                                                        <rect
                                                            width="20"
                                                            height="79"
                                                            data-name="Rectangle 38"
                                                            rx="2"
                                                            transform="translate(105 -.164)"
                                                        ></rect>
                                                    </g>
                                                    :
                                                    <g fill="#3b3b3b" transform="translate(4803 337.036)">
                                                        <rect
                                                            width="18"
                                                            height="27"
                                                            data-name="Rectangle 243"
                                                            rx="2"
                                                            transform="translate(0 50.964)"
                                                        ></rect>
                                                        <rect
                                                            width="20"
                                                            height="41"
                                                            data-name="Rectangle 241"
                                                            rx="2"
                                                            transform="translate(35 36.964)"
                                                        ></rect>
                                                        <rect
                                                            width="20"
                                                            height="59"
                                                            data-name="Rectangle 239"
                                                            opacity="0.5"
                                                            rx="2"
                                                            transform="translate(69 18.964)"
                                                        ></rect>
                                                        <rect
                                                            width="20"
                                                            height="78"
                                                            data-name="Rectangle 237"
                                                            opacity="0.5"
                                                            rx="2"
                                                            transform="translate(105 -.036)"
                                                        ></rect>
                                                    </g>
                                        }
                                        {
                                            net === "4G"
                                                ?
                                                <text
                                                    fill="#3a3a3a"
                                                    data-name="4G"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="94"
                                                    fontWeight="600"
                                                    transform="translate(4981 409)"
                                                >
                                                    <tspan x="0" y="0">
                                                        4G
                                                    </tspan>
                                                </text>
                                                :
                                                net === "5G"
                                                    ?
                                                    <text
                                                        fill="#3a3a3a"
                                                        data-name="5G"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="94"
                                                        fontWeight="600"
                                                        transform="translate(4988 416)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            5G
                                                        </tspan>
                                                    </text>
                                                    :
                                                    <>
                                                        <g fill="#3a3a3a" transform="translate(4984 335)">
                                                            <path
                                                                d="M117.492 192a79.08 79.08 0 00-52.986 21.123 1.906 1.906 0 00-.072 2.727l6.387 6.674a1.964 1.964 0 002.775.072 64.265 64.265 0 0143.92-17.152 64.265 64.265 0 0143.92 17.152 1.964 1.964 0 002.775-.072l6.387-6.674a1.907 1.907 0 00-.072-2.727A79.292 79.292 0 00117.492 192z"
                                                                data-name="Path 73"
                                                                transform="translate(-63.896 -192)"
                                                            ></path>
                                                            <path
                                                                d="M222.129 438.26l6.842 6.77a1.961 1.961 0 002.679.072 37.209 37.209 0 0149.231 0 1.961 1.961 0 002.679-.072l6.842-6.77a1.911 1.911 0 00-.072-2.8 51.014 51.014 0 00-68.176 0 1.95 1.95 0 00-.025 2.8zm34.16 11.171a19.491 19.491 0 00-14.209 6.1 1.914 1.914 0 00.048 2.679l12.772 12.607a1.964 1.964 0 002.775 0l12.774-12.607a1.914 1.914 0 00.048-2.679 19.584 19.584 0 00-14.208-6.1z"
                                                                data-name="Path 72"
                                                                transform="translate(-202.693 -394.843)"
                                                            ></path>
                                                        </g>
                                                    </>
                                        }
                                        {
                                            battery === "25"
                                                ?
                                                <>
                                                    <g transform="translate(5154.197 319)">
                                                        <path
                                                            fill="#3a3a3a"
                                                            d="M34.519 0h96.054a34.519 34.519 0 0134.519 34.519V54.03a34.519 34.519 0 01-34.519 34.52H34.519A34.519 34.519 0 010 54.03V34.519A34.519 34.519 0 0134.519 0z"
                                                            data-name="Path 75"
                                                            transform="translate(.001 18.01)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0a9 9 0 019 9v8a9 9 0 01-9 9V0z"
                                                            data-name="Rectangle 248"
                                                            transform="translate(165.803 51)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0h97a23 23 0 0123 23v43a23 23 0 01-23 23H0V0z"
                                                            data-name="Rectangle 249"
                                                            transform="translate(44.803 18)"
                                                        ></path>
                                                        <text
                                                            fill="#fff8f6"
                                                            data-name="25"
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="75"
                                                            fontWeight="700"
                                                            transform="translate(38.803 88)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                25
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                </>
                                                :
                                                battery === "50"
                                                    ?
                                                    <>
                                                        <g transform="translate(5154.197 319)">
                                                            <path
                                                                fill="#3a3a3a"
                                                                d="M34.519 0h96.054a34.519 34.519 0 0134.519 34.519v21.012a34.519 34.519 0 01-34.519 34.519H34.519A34.519 34.519 0 010 55.531V34.519A34.519 34.519 0 0134.519 0z"
                                                                data-name="Path 74"
                                                                transform="translate(.001 16.509)"
                                                            ></path>
                                                            <path
                                                                fill="#818d9d"
                                                                d="M0 0a9 9 0 019 9v2a9 9 0 01-9 9V0z"
                                                                data-name="Rectangle 251"
                                                                transform="translate(165.803 53)"
                                                            ></path>
                                                            <path
                                                                fill="#818d9d"
                                                                d="M0 0h58a23 23 0 0123 23v44a23 23 0 01-23 23H0V0z"
                                                                data-name="Rectangle 247"
                                                                transform="translate(83.803 17)"
                                                            ></path>
                                                            <text
                                                                fill="#fff8f6"
                                                                data-name="50"
                                                                fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                                fontSize="75"
                                                                fontWeight="700"
                                                                transform="translate(38.803 88)"
                                                            >
                                                                <tspan x="0" y="0">
                                                                    50
                                                                </tspan>
                                                            </text>
                                                        </g>
                                                    </>
                                                    :
                                                    <>
                                                        <g transform="translate(5154.703 319)">
                                                            <rect
                                                                width="164"
                                                                height="90"
                                                                fill="#3a3a3a"
                                                                data-name="Rectangle 245"
                                                                rx="23"
                                                                transform="translate(.297 17)"
                                                            ></rect>
                                                            <path
                                                                fill="#818d9d"
                                                                d="M0 0a9 9 0 019 9v5a9 9 0 01-9 9V0z"
                                                                data-name="Rectangle 250"
                                                                transform="translate(165.297 53)"
                                                            ></path>
                                                            <path
                                                                fill="#818d9d"
                                                                d="M0 0h18a23 23 0 0123 23v44a23 23 0 01-23 23H0V0z"
                                                                data-name="Rectangle 246"
                                                                transform="translate(123.297 17)"
                                                            ></path>
                                                            <text
                                                                fill="#fff8f6"
                                                                data-name="78"
                                                                fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                                fontSize="75"
                                                                fontWeight="700"
                                                                transform="translate(38.297 88)"
                                                            >
                                                                <tspan x="0" y="0">
                                                                    78
                                                                </tspan>
                                                            </text>
                                                        </g>
                                                    </>
                                        }
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
                        <label>Time</label>
                        <input
                            type="text"
                            value={data.time}
                            name="time"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
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
                        <label>Best Egg</label>
                        <input
                            type="text"
                            value={data.best}
                            name="best"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.best_price}
                            name="best_price"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.best_price_alt}
                            name="best_price_alt"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Upstart</label>
                        <input
                            type="text"
                            value={data.upstart}
                            name="upstart"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.upstart_price}
                            name="upstart_price"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.upstart_price_alt}
                            name="upstart_price_alt"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                </div>
                <div className="global_form_wrapper">
                    <div className="manage-heders">
                        <div className="global_form_inner">
                            <label>Network</label>
                            <select
                                onChange={(e) => setNetwork(e.target.value)}
                                value={network}
                                name="network"
                            >
                                <option value="strong">--Choose Network--</option>
                                <option value="strong">Strong</option>
                                <option value="mid">Mid</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <div className="global_form_inner">
                            <label>Internet (Wi-Fi, 5G, 4G)</label>
                            <select
                                onChange={(e) => setNet(e.target.value)}
                                value={net}
                                name="net"
                            >
                                <option value="wifi">--Choose Internet--</option>
                                <option value="wifi">Wi-Fi</option>
                                <option value="4G">4G</option>
                                <option value="5G">5G</option>
                            </select>
                        </div>
                        <div className="global_form_inner">
                            <label>Battery</label>
                            <select
                                onChange={(e) => setBattery(e.target.value)}
                                value={battery}
                                name="battery"
                            >
                                <option value="78">--Choose Battery--</option>
                                <option value="78">78%</option>
                                <option value="50">50%</option>
                                <option value="25">25%</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SixtyNinePage;