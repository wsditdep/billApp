import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import { ToastContainer, toast } from 'react-toastify';

const FirstPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "9:34",
        refNo: "REF #: 104660554169",
        amount: "$16.36",
        fromAccountAmount: "$521.76",
        fromAccountAmount1: "Chequing",
        fromAccountAmount2: "6438997",
        to: "one-time contacts",
        email: "jasonseeweng0411@gmail.com",
        transfer_date: "Aug 01, 2023",
        expiry_date: "Aug 31, 2023",
    });

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("wifi");
    const [battery, setBattery] = useState("86");

    const [imageDimension, setImageDimension] = useState("167");

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const takeScreenshot = async () => {
        try {
            const canvas = await html2canvas(screenshotRef.current);
            const dataURL = canvas.toDataURL('image/png');

            const notify = (message) => toast.success(message, {
                containerId: 'success-toast',
                style: {
                    background: 'black',
                    color: 'white',
                },
            });

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
                    <h3>PREVIEW - <span>Mobile 1</span></h3>
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
                                viewBox="0 0 1868 3960"
                            >
                                <defs>
                                    <filter
                                        id="Rectangle_153"
                                        width="1868"
                                        height="109"
                                        x="0"
                                        y="3529.5"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset dy="-2"></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="11.5"></feGaussianBlur>
                                        <feFlood floodOpacity="0.169"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                </defs>
                                <g data-name="Group 106" transform="translate(-2900.5 -50)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H1825V3421H0z"
                                        data-name="Rectangle 1"
                                        opacity="0.88"
                                        transform="translate(2919 589)"
                                    ></path>
                                    <path
                                        fill="#a71f30"
                                        d="M0 0H1825V474H0z"
                                        data-name="Rectangle 3"
                                        opacity="0.88"
                                        transform="translate(2922 50)"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M0 69.5A5.494 5.494 0 015.5 64h66a5.5 5.5 0 010 11h-66A5.494 5.494 0 010 69.5zM0 97a5.494 5.494 0 015.5-5.5h66a5.5 5.5 0 010 11h-66A5.494 5.494 0 010 97zm77 27.5a5.494 5.494 0 01-5.5 5.5h-66a5.5 5.5 0 110-11h66a5.494 5.494 0 015.5 5.5z"
                                        transform="translate(3036 272)"
                                    ></path>
                                    <path
                                        fill="#fafafa"
                                        d="M0 0H1826V682H0z"
                                        data-name="Rectangle 2"
                                        transform="translate(2921 464)"
                                    ></path>
                                    <text
                                        fill="#515151"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="88"
                                        transform="translate(3561 634)"
                                    >
                                        <tspan x="12" y="0">
                                            Confirmation
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6a6969"
                                        data-name="Your transfer has been sent!"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="63"
                                        transform="translate(3433 778)"
                                    >
                                        <tspan x="0" y="0">
                                            Your transfer has been sent!
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6b6868"
                                        data-name="REF #: 104660554169"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="55"
                                        transform="translate(3541 931)"
                                    >
                                        <tspan x="300" y="0" textAnchor="middle">
                                            {data.refNo}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#585858"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="55"
                                        transform="translate(3036 1407)"
                                    >
                                        <tspan x="0" y="0">
                                            Amount
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#585858"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="55"
                                        transform="translate(3039 2239)"
                                    >
                                        <tspan x="0" y="0">
                                            To
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#656565"
                                        data-name="Transfer date"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="55"
                                        transform="translate(3041 2886)"
                                    >
                                        <tspan x="0" y="0">
                                            Transfer date
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#707070"
                                        data-name="Expiry date"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="55"
                                        transform="translate(3042 3188)"
                                    >
                                        <tspan x="0" y="0">
                                            Expiry date
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#585858"
                                        data-name="From account"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="58"
                                        transform="translate(3036 1811)"
                                    >
                                        <tspan x="0" y="0">
                                            From account
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#3d3d3d"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="72"
                                        transform="translate(3036 1928)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.fromAccountAmount1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#3d3d3d"
                                        data-name="One-time contact"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="72"
                                        transform="translate(3039 2358)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.to}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#3d3d3d"
                                        data-name="Track this transfer"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="73"
                                        fontWeight="700"
                                        transform="translate(3074 3539)"
                                    >
                                        <tspan x="0" y="0">
                                            Track this transfer
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#3d3d3d"
                                        data-name="Aug 01, 2023"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="72"
                                        transform="translate(3042 3016)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.transfer_date}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#3d3d3d"
                                        data-name="Aug 31, 2023"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="72"
                                        transform="translate(3042 3314)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.expiry_date}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#727272"
                                        data-name="6438997"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="62"
                                        transform="translate(3036 2038)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.fromAccountAmount2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#8f8f8f"
                                        data-name="jasonseeweng0411@gmail.com"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="56"
                                        transform="translate(3040 2464)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.email}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#5e5c5c"
                                        data-name="$521.76"
                                        fontFamily="HelveticaWorld-Regular, Helvetica World"
                                        fontSize="71"
                                        transform="translate(4234 1927)"
                                    >
                                        <tspan x="350" y="0" textAnchor="end">
                                            {data.fromAccountAmount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#585858"
                                        data-name="$16.36"
                                        fontFamily="HelveticaWorld-Regular, Helvetica World"
                                        fontSize="151"
                                        transform="translate(3036 1608)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <ellipse
                                        cx="120.5"
                                        cy="119.5"
                                        fill="#619c70"
                                        data-name="Ellipse 2"
                                        rx="120.5"
                                        ry="119.5"
                                        transform="translate(3703 1039)"
                                    ></ellipse>
                                    <path
                                        fill="#fff"
                                        d="M5839.667 1369.333l13.7-13.7 30 30 79.3-93.633 14.333 14.667L5883.372 1414z"
                                        data-name="Path 1"
                                        transform="translate(-2084.834 -194.5)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="9:34"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="74"
                                        opacity="0.93"
                                        transform="translate(3174 200)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#b53242"
                                        data-name="Save to My contacts"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="65"
                                        textDecoration="underline"
                                        transform="translate(3175 2726)"
                                    >
                                        <tspan x="0" y="0">
                                            Save to My contacts
                                        </tspan>
                                    </text>
                                    <image
                                        width="113"
                                        height="113"
                                        data-name="Image 4"
                                        transform="translate(3039 2650)"
                                        xlinkHref="data:image/png;base64,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"
                                    ></image>
                                    <path
                                        fill="#efeeee"
                                        d="M0 0H1693V6H0z"
                                        data-name="Rectangle 4"
                                        transform="translate(3036 3419)"
                                    ></path>
                                    <g filter="url(#Rectangle_153)" transform="translate(2900.5 50)">
                                        <path
                                            fill="#fff"
                                            d="M0 0H1799V40H0z"
                                            data-name="Rectangle 153"
                                            transform="translate(34.5 3566)"
                                        ></path>
                                    </g>
                                    <rect
                                        width="662"
                                        height="21"
                                        fill="#383838"
                                        data-name="Rectangle 7"
                                        rx="10.5"
                                        transform="translate(3522 3954)"
                                    ></rect>
                                    <rect
                                        width="662"
                                        height="21"
                                        fill="#383838"
                                        data-name="Rectangle 11"
                                        rx="10.5"
                                        transform="translate(3522 3954)"
                                    ></rect>
                                    <path
                                        fill="#fff"
                                        d="M0 0H1825V270H0z"
                                        data-name="Rectangle 152"
                                        transform="translate(2922 3616)"
                                    ></path>
                                    <g
                                        fill="#b53242"
                                        stroke="#b53242"
                                        strokeWidth="5"
                                        data-name="Rectangle 6"
                                        transform="translate(3853 3643)"
                                    >
                                        <rect width="860" height="185" stroke="none" rx="12"></rect>
                                        <rect
                                            width="855"
                                            height="180"
                                            x="2.5"
                                            y="2.5"
                                            fill="none"
                                            rx="9.5"
                                        ></rect>
                                    </g>
                                    <text
                                        fill="#fff"
                                        data-name="New transfer"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="65"
                                        transform="translate(4092 3765)"
                                    >
                                        <tspan x="0" y="0">
                                            New transfer
                                        </tspan>
                                    </text>
                                    <g
                                        fill="none"
                                        stroke="#b53242"
                                        strokeWidth="5"
                                        data-name="Rectangle 5"
                                        transform="translate(2957 3643)"
                                    >
                                        <rect width="860" height="185" stroke="none" rx="12"></rect>
                                        <rect width="855" height="180" x="2.5" y="2.5" rx="9.5"></rect>
                                    </g>
                                    <text
                                        fill="#b53242"
                                        data-name="My Accounts"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="65"
                                        transform="translate(3187 3765)"
                                    >
                                        <tspan x="0" y="0">
                                            My Accounts
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#fff"
                                        d="M0 0H143V116H0z"
                                        data-name="Rectangle 154"
                                        transform="translate(3021 2654)"
                                    ></path>
                                    <g data-name="Group 104" transform="translate(-65 88)">
                                        <g
                                            fill="#fff"
                                            stroke="#b53242"
                                            strokeWidth="4"
                                            data-name="Ellipse 20"
                                            transform="translate(3144 2581)"
                                        >
                                            <circle cx="17.5" cy="17.5" r="17.5" stroke="none"></circle>
                                            <circle cx="17.5" cy="17.5" r="15.5" fill="none"></circle>
                                        </g>
                                        <g
                                            fill="#fff"
                                            stroke="#b53242"
                                            strokeWidth="4"
                                            data-name="Ellipse 21"
                                            transform="translate(3170 2624)"
                                        >
                                            <circle cx="15.5" cy="15.5" r="15.5" stroke="none"></circle>
                                            <circle cx="15.5" cy="15.5" r="13.5" fill="none"></circle>
                                        </g>
                                        <path
                                            fill="none"
                                            stroke="#b53242"
                                            strokeWidth="4"
                                            d="M3172.2 2622.8h-27.4s-17 4.2-16.8 14 0 12.8 0 12.8h36.6"
                                            data-name="Path 42"
                                        ></path>
                                        <text
                                            fill="#b53242"
                                            data-name="+"
                                            fontFamily="HelveticaWorld-Regular, Helvetica World"
                                            fontSize="29"
                                            transform="translate(3177 2647)"
                                        >
                                            <tspan x="0" y="0">
                                                +
                                            </tspan>
                                        </text>
                                    </g>
                                    <text
                                        fill="#fff"
                                        data-name="Send Money"
                                        fontFamily="'Roboto', sans-serif"
                                        fontSize="69"
                                        transform="translate(3616 401)"
                                    >
                                        <tspan x="0" y="0">
                                            Send Money
                                        </tspan>
                                    </text>
                                    <g id="Group_108" data-name="Group 108" transform="translate(-93.523 14)">
                                        <g id="Group_105" data-name="Group 105" transform="translate(-26.523 29.783)">
                                            <g id="Ellipse_22" data-name="Ellipse 22" transform="translate(4626 314)" fill="none" stroke="#fff" stroke-width="4">
                                                <circle cx="27.5" cy="27.5" r="27.5" stroke="none" />
                                                <circle cx="27.5" cy="27.5" r="25.5" fill="none" />
                                            </g>
                                            <path id="Path_44" data-name="Path 44" d="M-18697-16843.5l-4.25,22.75,15.5-8.25" transform="translate(23326 17192)" fill="none" stroke="#fff" stroke-width="4" />
                                            <g id="Rectangle_155" data-name="Rectangle 155" transform="translate(4631.572 344.744) rotate(10)" fill="#b53242" stroke="#b53242" stroke-width="1">
                                                <rect width="6" height="17" stroke="none" />
                                                <rect x="0.5" y="0.5" width="5" height="16" fill="none" />
                                            </g>
                                            <g id="Rectangle_156" data-name="Rectangle 156" transform="matrix(0.469, 0.883, -0.883, 0.469, 4637.844, 355.166)" fill="#b53242" stroke="#b53242" stroke-width="1">
                                                <rect width="6" height="8.312" stroke="none" />
                                                <rect x="0.5" y="0.5" width="5" height="7.312" fill="none" />
                                            </g>
                                            <g id="Rectangle_157" data-name="Rectangle 157" transform="translate(4680.848 369.496) rotate(22)" fill="#b13a49" stroke="#b13a49" stroke-width="1">
                                                <rect width="9" height="5" stroke="none" />
                                                <rect x="0.5" y="0.5" width="8" height="4" fill="none" />
                                            </g>
                                            <g id="Rectangle_158" data-name="Rectangle 158" transform="matrix(0.966, -0.259, 0.259, 0.966, 4680.094, 362.043)" fill="#b13a49" stroke="#b13a49" stroke-width="1">
                                                <rect width="7.236" height="13.624" stroke="none" />
                                                <rect x="0.5" y="0.5" width="6.236" height="12.624" fill="none" />
                                            </g>
                                        </g>
                                        <g id="Group_107" data-name="Group 107" transform="translate(4604.227 361.783)">
                                            <g id="Ellipse_22-2" data-name="Ellipse 22" transform="translate(8.582 0)" fill="#b53242" stroke="#fff" stroke-width="4">
                                                <ellipse cx="24.561" cy="24.561" rx="24.561" ry="24.561" stroke="none" />
                                                <ellipse cx="24.561" cy="24.561" rx="22.561" ry="22.561" fill="none" />
                                            </g>
                                            <path id="Path_44-2" data-name="Path 44" d="M-18691.2-16843.5l3.795,20.32-13.842-7.369" transform="translate(18746.225 16874.313)" fill="#b53242" stroke="#fff" stroke-width="4" />
                                            <g id="Rectangle_155-2" data-name="Rectangle 155" transform="matrix(-0.985, 0.174, -0.174, -0.985, 55.364, 42.411)" fill="#b53242" stroke="#b53242" stroke-width="1">
                                                <rect width="5.359" height="15.183" stroke="none" />
                                                <rect x="0.5" y="0.5" width="4.359" height="14.183" fill="none" />
                                            </g>
                                            <g id="Rectangle_156-2" data-name="Rectangle 156" transform="matrix(-0.469, 0.883, -0.883, -0.469, 53.681, 40.252)" fill="#b53242" stroke="#b53242" stroke-width="1">
                                                <rect width="5.359" height="7.424" stroke="none" />
                                                <rect x="0.5" y="0.5" width="4.359" height="6.424" fill="none" />
                                            </g>
                                            <g id="Rectangle_157-2" data-name="Rectangle 157" transform="translate(10.391 53.706) rotate(158)" fill="#b53242" stroke="#b13a49" stroke-width="1">
                                                <rect width="8.038" height="4.466" stroke="none" />
                                                <rect x="0.5" y="0.5" width="7.038" height="3.466" fill="none" />
                                            </g>
                                            <g id="Rectangle_158-2" data-name="Rectangle 158" transform="matrix(-0.966, -0.259, 0.259, -0.966, 6.242, 54.662)" fill="#b53242" stroke="#b13a49" stroke-width="1">
                                                <rect width="6.462" height="12.168" stroke="none" />
                                                <rect x="0.5" y="0.5" width="5.462" height="11.168" fill="none" />
                                            </g>
                                        </g>
                                    </g>
                                    {
                                        network === "strong"
                                            ?
                                            <>
                                                <g fill="#fff">
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 159"
                                                        transform="translate(4172 162)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 163"
                                                        transform="translate(4172 188)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 164"
                                                        transform="translate(4198 188)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 165"
                                                        transform="translate(4224 188)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 166"
                                                        transform="translate(4250 188)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V24H0z"
                                                        data-name="Rectangle 160"
                                                        transform="translate(4198 156)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V33H0z"
                                                        data-name="Rectangle 161"
                                                        transform="translate(4224 147)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V41H0z"
                                                        data-name="Rectangle 162"
                                                        transform="translate(4250 139)"
                                                    ></path>
                                                </g>
                                            </>
                                            :
                                            <></>
                                    }
                                    {
                                        network === "low"
                                            ?
                                            <>
                                                <g fill="#fff">
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 159"
                                                        transform="translate(4172 162)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 163"
                                                        transform="translate(4172 188)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 164"
                                                        opacity="0.56"
                                                        transform="translate(4198 188)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 165"
                                                        opacity="0.56"
                                                        transform="translate(4224 188)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 166"
                                                        opacity="0.56"
                                                        transform="translate(4250 188)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V24H0z"
                                                        data-name="Rectangle 160"
                                                        opacity="0.56"
                                                        transform="translate(4198 156)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V33H0z"
                                                        data-name="Rectangle 161"
                                                        opacity="0.56"
                                                        transform="translate(4224 147)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V41H0z"
                                                        data-name="Rectangle 162"
                                                        opacity="0.56"
                                                        transform="translate(4250 139)"
                                                    ></path>
                                                </g>
                                            </>
                                            :
                                            <>
                                            </>
                                    }
                                    {
                                        network === "mid"
                                            ?
                                            <>
                                                <g fill="#fff">
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 159"
                                                        transform="translate(4172 162)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 163"
                                                        transform="translate(4172 188)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 164"
                                                        transform="translate(4198 188)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 165"
                                                        opacity="0.56"
                                                        transform="translate(4224 188)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V18H0z"
                                                        data-name="Rectangle 166"
                                                        opacity="0.56"
                                                        transform="translate(4250 188)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V24H0z"
                                                        data-name="Rectangle 160"
                                                        transform="translate(4198 156)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V33H0z"
                                                        data-name="Rectangle 161"
                                                        opacity="0.56"
                                                        transform="translate(4224 147)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H18V41H0z"
                                                        data-name="Rectangle 162"
                                                        opacity="0.56"
                                                        transform="translate(4250 139)"
                                                    ></path>
                                                </g>
                                            </>
                                            :
                                            <></>
                                    }
                                    {
                                        net === "4G"
                                            ?
                                            <text
                                                fill="#fff"
                                                data-name="4G"
                                                fontFamily="'Roboto', sans-serif"
                                                fontSize="59"
                                                fontWeight="600"
                                                transform="translate(4310 197)"
                                            >
                                                <tspan x="0" y="0">
                                                    4G
                                                </tspan>
                                            </text>
                                            :
                                            <></>
                                    }

                                    {
                                        net === "5G"
                                            ?
                                            <>
                                                <text
                                                    fill="#fff"
                                                    data-name="5G"
                                                    fontFamily="'Roboto', sans-serif"
                                                    fontSize="59"
                                                    fontWeight="600"
                                                    transform="translate(4312 197)"
                                                >
                                                    <tspan x="0" y="0">
                                                        5G
                                                    </tspan>
                                                </text>
                                            </>
                                            :
                                            <></>
                                    }
                                    {
                                        net === "wifi"
                                            ?
                                            <>
                                                <g fill="#fff" transform="translate(4244 -48.363)">
                                                    <path
                                                        d="M104.316 192a59.64 59.64 0 00-39.961 15.93 1.438 1.438 0 00-.054 2.057l4.817 5.033a1.481 1.481 0 002.093.054 48.467 48.467 0 0133.123-12.935 48.467 48.467 0 0133.123 12.935 1.481 1.481 0 002.093-.054l4.817-5.033a1.438 1.438 0 00-.054-2.057A59.8 59.8 0 00104.316 192z"
                                                        data-name="Path 7"
                                                    ></path>
                                                    <path
                                                        d="M221.987 434.361l5.16 5.106a1.479 1.479 0 002.021.054 28.062 28.062 0 0137.128 0 1.479 1.479 0 002.021-.054l5.16-5.106a1.441 1.441 0 00-.054-2.111 38.473 38.473 0 00-51.416 0 1.47 1.47 0 00-.02 2.111zm25.762 8.425a14.7 14.7 0 00-10.716 4.6 1.443 1.443 0 00.036 2.021l9.634 9.508a1.481 1.481 0 002.093 0l9.634-9.508a1.443 1.443 0 00.036-2.021 14.769 14.769 0 00-10.717-4.6z"
                                                        data-name="Path 8"
                                                        transform="translate(-143.433 -209.617)"
                                                    ></path>
                                                </g>
                                            </>
                                            :
                                            <></>
                                    }
                                    {
                                        battery === "50"
                                            ?
                                            <>
                                                <g>
                                                    <rect
                                                        width="125"
                                                        height="68"
                                                        fill="#fff"
                                                        data-name="Rectangle 167"
                                                        rx="27"
                                                        transform="translate(4429 139)"
                                                    ></rect>
                                                    <path
                                                        fill="#e6828e"
                                                        d="M0 0a6 6 0 016 6v6a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 169"
                                                        transform="translate(4555 165)"
                                                    ></path>
                                                    <path
                                                        fill="#d591a0"
                                                        d="M0 0h36a27 27 0 0127 27v14a27 27 0 01-27 27H0V0z"
                                                        data-name="Rectangle 168"
                                                        transform="translate(4491 139)"
                                                    ></path>
                                                    <text
                                                        fill="#9b3f4e"
                                                        data-name="50"
                                                        fontFamily="'Roboto', sans-serif"
                                                        fontSize="58"
                                                        fontWeight="600"
                                                        transform="translate(4459 194)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            50
                                                        </tspan>
                                                    </text>
                                                </g>
                                            </>
                                            :
                                            <></>
                                    }
                                    {
                                        battery === "25"
                                            ?
                                            <>
                                                <g>
                                                    <rect
                                                        width="125"
                                                        height="68"
                                                        fill="#fff"
                                                        data-name="Rectangle 167"
                                                        rx="27"
                                                        transform="translate(4429 139)"
                                                    ></rect>
                                                    <path
                                                        fill="#e6828e"
                                                        d="M0 0a6 6 0 016 6v6a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 169"
                                                        transform="translate(4555 165)"
                                                    ></path>
                                                    <path
                                                        fill="#d591a0"
                                                        d="M0 0h62a27 27 0 0127 27v14a27 27 0 01-27 27H0V0z"
                                                        data-name="Rectangle 168"
                                                        transform="translate(4465 139)"
                                                    ></path>
                                                    <text
                                                        fill="#9b3f4e"
                                                        data-name="25"
                                                        fontFamily="'Roboto', sans-serif"
                                                        fontSize="58"
                                                        fontWeight="600"
                                                        transform="translate(4459 194)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            25
                                                        </tspan>
                                                    </text>
                                                </g>
                                            </>
                                            :
                                            <>
                                            </>
                                    }
                                    {
                                        battery === "86"
                                            ?
                                            <g>
                                                <rect
                                                    width="125"
                                                    height="68"
                                                    fill="#fff"
                                                    data-name="Rectangle 167"
                                                    rx="27"
                                                    transform="translate(4429 139)"
                                                ></rect>
                                                <path
                                                    fill="#e6828e"
                                                    d="M0 0a6 6 0 016 6v6a6 6 0 01-6 6V0z"
                                                    data-name="Rectangle 169"
                                                    transform="translate(4555 165)"
                                                ></path>
                                                <path
                                                    fill="#d591a0"
                                                    d="M0 0h1a27 27 0 0127 27v14A27 27 0 011 68H0V0z"
                                                    data-name="Rectangle 168"
                                                    transform="translate(4526 139)"
                                                ></path>
                                                <text
                                                    fill="#9b3f4e"
                                                    data-name="86"
                                                    fontFamily="'Roboto', sans-serif"
                                                    fontSize="58"
                                                    fontWeight="600"
                                                    transform="translate(4459 194)"
                                                >
                                                    <tspan x="0" y="0">
                                                        86
                                                    </tspan>
                                                </text>
                                            </g>
                                            :
                                            <></>
                                    }
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
                        <label>Time</label>
                        <input
                            type="text"
                            value={data.time}
                            name="time"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Reference No.</label>
                        <input
                            type="text"
                            value={data.refNo}
                            name="refNo"
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
                        <label>From Account</label>
                        <input
                            type="text"
                            value={data.fromAccountAmount}
                            name="fromAccountAmount"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.fromAccountAmount1}
                            name="fromAccountAmount1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.fromAccountAmount2}
                            name="fromAccountAmount2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>To</label>
                        <input
                            type="text"
                            value={data.to}
                            name="to"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.email}
                            name="email"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Transfer date</label>
                        <input
                            type="text"
                            value={data.transfer_date}
                            name="transfer_date"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Expiry date</label>
                        <input
                            type="text"
                            value={data.expiry_date}
                            name="expiry_date"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
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
                                <option value="86">--Choose Battery--</option>
                                <option value="86">86%</option>
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

export default FirstPage;