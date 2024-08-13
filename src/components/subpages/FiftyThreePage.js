import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const FiftyThreePage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "3:39",
        price: "$182.14",
        bprice: "B0.00275512 BTC",
        dollorPrice: "$66,110.99 USD",
        percent: "4.61%",
        fPrice: "$362",
    });

    const [isArrow, setIsArrow] = useState(true);
    const handleArrow = (e) => {
        const val = e.target.value;

        if (val === "up") {
            setIsArrow(true);
        } else {
            setIsArrow(false);
        }
    }

    const [imageDimension, setImageDimension] = useState("167");

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("5G");
    const [battery, setBattery] = useState("78");

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
                    <h3>PREVIEW - <span>Mobile 53</span></h3>
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
                                viewBox="0 0 1889 4035"
                            >
                                <defs>
                                    <filter
                                        id="Rectangle_370"
                                        width="1889"
                                        height="405"
                                        x="0"
                                        y="3630"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset dy="-16"></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                                        <feFlood floodOpacity="0.161"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                </defs>
                                <g data-name="Group 257" transform="translate(-2703 -87)">
                                    <path
                                        fill="#0c0c0c"
                                        d="M0 0H1871V4034H0z"
                                        data-name="Rectangle 360"
                                        transform="translate(2712 87)"
                                    ></path>
                                    <text
                                        fill="#e8e8e8"
                                        data-name="3:39"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="73"
                                        fontWeight="500"
                                        letterSpacing=".02em"
                                        transform="translate(2975.25 216)"
                                    >
                                        <tspan x="-74.103" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="83"
                                        fontWeight="500"
                                        letterSpacing=".02em"
                                        transform="translate(3648.25 458)"
                                    >
                                        <tspan x="-134.586" y="0">
                                            Bitcoin
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#fff"
                                        d="M112.543 102.307a7.258 7.258 0 010 10.259L76.307 148.8a7.254 7.254 0 01-10.259-10.259l31.118-31.118-31.095-31.116A7.254 7.254 0 0176.33 66.048l36.236 36.236z"
                                        transform="rotate(180 1452.458 267.963)"
                                    ></path>
                                    <g data-name="Group 248" transform="translate(1976.25 -138)">
                                        <g
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="14"
                                            data-name="Rectangle 361"
                                            transform="translate(2405 510)"
                                        >
                                            <rect width="109" height="109" stroke="none" rx="23"></rect>
                                            <rect width="95" height="95" x="7" y="7" rx="16"></rect>
                                        </g>
                                        <path
                                            fill="#0c0c0c"
                                            d="M0 0H27V138H0z"
                                            data-name="Rectangle 362"
                                            transform="translate(2447 498)"
                                        ></path>
                                        <path
                                            fill="#0c0c0c"
                                            d="M0 0H27V138H0z"
                                            data-name="Rectangle 363"
                                            transform="rotate(-90 1485.5 -905)"
                                        ></path>
                                    </g>
                                    <text
                                        fill="#fff"
                                        data-name="$182.14"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="222"
                                        fontWeight="500"
                                        transform="translate(3648.25 916)"
                                    >
                                        <tspan x="0" y="0" textAnchor="middle">
                                            {data.price}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#b1b1b1"
                                        data-name="B0.00275512 BTC"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="68"
                                        fontWeight="500"
                                        letterSpacing=".05em"
                                        transform="translate(3619.25 1051)"
                                    >
                                        <tspan x="290" y="0" textAnchor="end">
                                            {data.bprice}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e5e5e5"
                                        data-name="More ways to get bitcoin"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="77"
                                        fontWeight="500"
                                        letterSpacing=".05em"
                                        transform="translate(3413 3163)"
                                    >
                                        <tspan x="-466.929" y="0">
                                            More ways to get bitcoin
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#0fd4f6"
                                        data-name="$66,110.99 USD"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="69"
                                        fontWeight="500"
                                        letterSpacing=".028em"
                                        transform="translate(3337 1265)"
                                    >
                                        <tspan x="261.083" y="0" textAnchor="end">
                                            {data.dollorPrice}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#0fd4f6"
                                        data-name="4.61%"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="69"
                                        fontWeight="500"
                                        letterSpacing=".028em"
                                        transform="translate(3856 1265)"
                                    >
                                        <tspan x="-97.661" y="0">
                                            {data.percent}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#0fd4f6"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        letterSpacing=".028em"
                                        transform="translate(4124 1265)"
                                    >
                                        <tspan x="-96.751" y="0">
                                            Today
                                        </tspan>
                                    </text>
                                    <g
                                        fill="#b1b1b1"
                                        data-name="Group 249"
                                        transform="rotate(-90 2969.64 79.839)"
                                    >
                                        <path
                                            d="M21.011 2.695L5.6 17.456l15.842 15.407-2.909 2.586L0 17.456l6.074-5.722L18.533 0z"
                                            data-name="Path 15"
                                            transform="rotate(180 1030.966 543.225)"
                                        ></path>
                                        <path
                                            d="M0 0H35.022V3.947H0z"
                                            data-name="Rectangle 72"
                                            transform="rotate(180 1028.75 535.564)"
                                        ></path>
                                    </g>
                                    <g
                                        fill="#b1b1b1"
                                        data-name="Group 250"
                                        transform="rotate(90 3022.956 2022.02)"
                                    >
                                        <path
                                            d="M21.011 2.695L5.6 17.456l15.842 15.407-2.909 2.586L0 17.456l6.074-5.722L18.533 0z"
                                            data-name="Path 15"
                                            transform="rotate(180 1030.966 543.225)"
                                        ></path>
                                        <path
                                            d="M0 0H35.022V3.947H0z"
                                            data-name="Rectangle 72"
                                            transform="rotate(180 1028.75 535.564)"
                                        ></path>
                                    </g>
                                    {
                                        isArrow
                                            ?
                                            <>
                                                <g xmlns="http://www.w3.org/2000/svg" id="Group_316" data-name="Group 316" transform="translate(7416.928 2562.613) rotate(180)">
                                                    <path id="Path_162" data-name="Path 162" d="M30.267,3.882,8.071,25.145,30.888,47.34,26.7,51.065,0,25.145,8.75,16.9,26.7,0Z" transform="translate(3688.932 1353) rotate(-90)" fill="#0fd4f6" />
                                                    <rect id="Rectangle_410" data-name="Rectangle 410" width="50.449" height="5.686" transform="translate(3711.621 1346.616) rotate(-90)" fill="#0fd4f6" />
                                                </g>
                                            </>
                                            :
                                            <>
                                                <g
                                                    fill="#0fd4f6"
                                                    data-name="Group 251"
                                                    transform="rotate(90 2795.006 1984.61)"
                                                >
                                                    <path
                                                        d="M30.267 3.882L8.071 25.145 30.888 47.34 26.7 51.065 0 25.145 8.75 16.9 26.7 0z"
                                                        data-name="Path 15"
                                                        transform="rotate(180 1039.657 551.033)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H50.449V5.686H0z"
                                                        data-name="Rectangle 72"
                                                        transform="rotate(180 1036.465 539.998)"
                                                    ></path>
                                                </g>
                                            </>
                                    }
                                    <image
                                        width="1862"
                                        height="911"
                                        data-name="Image 94"
                                        transform="translate(2712 1353)"
                                        xlinkHref="data:image/png;base64,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L67rAG4iDP5W2Tlo75OwthMuHJuknYQL7//Guuax5c59j+gAdmcei+03Nh7Wdhu7NoDbheSTdzDSg1iF5VsrDG8wPZD8lk1d/tqLr0j2nv5XvyD56i/+kmTxwguStqZ6TAa1HgevLfXYNPYZ8+9Yrx/cT7clbUNS2+enSmYPrRT675S0rYqdB6UNilck52t503lau3QwwWQFAAAAAAAAdxmufAAAAAAAAADAism21070pW+NVcGFqri04rZJHkc6bTTSqsAsGcSptoGg3FKXWYRRrTqh+jYMylVZhac3X9PKxEVSOeoWWuVYWlXosI0VtwMr8y2tIjHd5qVV+R3YoqqJDnzmLddsMK5QXetNdN1r79Jq2oe+4Tske/d+549J3l87Kfmwitu3O9Xtm1k5abEZq2trKxAM2+D1NZpWAJwWAg/sPRjUuq9FMqCYs8eNVbg2WVxPPyBUctzC4FC57WORHOdioO9ZbtW0eTLIlhXqxpwMrBaWn64ns+OchffAKly9MF9jVdNZMrhdaY/LUHHpYiXswKpwT9lAX4OZDgYmrutgXNXFi5K9/ZdelHztea0gvfriy5K9dteqaKe2jFAt682sgtYqTt08qaBd2H7YwF0iPAz7n34uwiEM05Iq4b4cPUxLS483dMA718YKaveOr5L05Ad+WPKp92qlt3d+oFXir9h7V23F83ph1b55pefKmVAF3HnSKnRf+gWtvPU+99M/rQ8ua3WxO/+85s54oMs4saEn6HIaj1s9133cWNOq9GVyjhzM7XO6HSuvD2obDM+OQzrIYai8zvpBypKK23ASBi0VtwAAAAAA4M2BKx8AAAAAAAAAsGKyjfVYcRu0Wax4C5rcKvmOzK3VcINSK/nqpc7j1TN93FZaYhj6snpj6y+7NtbKwXYUS05fqbSfaJ00xR3VutKxVYWuJdebB6GPq1V5hkJfb17oetrtHcnXh0k/W6v2dY8+rrnz0Pu1wvarvv39kkdPvF2y98vPXZbc7mh15KSMy8pspQPr8TrObdmdUEW4tApI78RJrZCsrD/qchGrSaulPs4arVoc2HH3hoXu/yCzCuciVty2mVYi1sml+NqO19z6306Tvq9zq45e2PGrkorozCp0czvOefLelaFncVKhm9t+D6wSurTqSm9U6vJH9h4PrG+usKraxfSG5OWuVX122kM9Dz7zb35X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"
                                    ></image>
                                    <circle
                                        cx="87.5"
                                        cy="87.5"
                                        r="87.5"
                                        fill="#474747"
                                        data-name="Ellipse 81"
                                        transform="translate(3035 2347)"
                                    ></circle>
                                    <text
                                        fill="#fff"
                                        data-name="1D"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        transform="translate(3123 2455)"
                                    >
                                        <tspan x="-34.693" y="0">
                                            1D
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#b4b4b4"
                                        data-name="1W"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        transform="translate(3389 2454)"
                                    >
                                        <tspan x="-41.289" y="0">
                                            1W
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#b4b4b4"
                                        data-name="1M"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        transform="translate(3661 2455)"
                                    >
                                        <tspan x="-40.885" y="0">
                                            1M
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#b4b4b4"
                                        data-name="1Y"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        transform="translate(3925 2455)"
                                    >
                                        <tspan x="-33.12" y="0">
                                            1Y
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#b4b4b4"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        transform="translate(4202 2455)"
                                    >
                                        <tspan x="-49.263" y="0">
                                            ALL
                                        </tspan>
                                    </text>
                                    <rect
                                        width="524"
                                        height="240"
                                        fill="#00d8ff"
                                        data-name="Rectangle 364"
                                        rx="120"
                                        transform="translate(2826 2688)"
                                    ></rect>
                                    <rect
                                        width="512"
                                        height="240"
                                        fill="#00d8ff"
                                        data-name="Rectangle 365"
                                        rx="120"
                                        transform="translate(3390 2688)"
                                    ></rect>
                                    <rect
                                        width="512"
                                        height="240"
                                        fill="#00d8ff"
                                        data-name="Rectangle 366"
                                        rx="120"
                                        transform="translate(3958 2688)"
                                    ></rect>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="79"
                                        transform="translate(3085 2836)"
                                    >
                                        <tspan x="-65.055" y="0">
                                            Buy
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="79"
                                        transform="translate(3646 2836)"
                                    >
                                        <tspan x="-63.532" y="0">
                                            Sell
                                        </tspan>
                                    </text>
                                    <path
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="10"
                                        d="M4173.787 2787.98l84.705-21.477-30.792 86.73-18.63-39.395 11.926-12.867-14.378 9.688z"
                                        data-name="Path 131"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M5 0l5 11H0z"
                                        data-name="Polygon 8"
                                        transform="rotate(47 -1095.626 6253.718)"
                                    ></path>
                                    <rect
                                        width="1648"
                                        height="628"
                                        fill="#18191b"
                                        data-name="Rectangle 367"
                                        rx="80"
                                        transform="translate(2826 3302)"
                                    ></rect>
                                    <text
                                        fill="#e5e5e5"
                                        data-name="Get paid in bitcoin"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="69"
                                        fontWeight="500"
                                        letterSpacing=".05em"
                                        transform="translate(3515 3453)"
                                    >
                                        <tspan x="-310.065" y="0">
                                            Get paid in bitcoin
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#bebebe"
                                        data-name="Invest from direct deposits"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        letterSpacing=".05em"
                                        transform="translate(3601 3558)"
                                    >
                                        <tspan x="-402.001" y="0">
                                            Invest from direct deposits
                                        </tspan>
                                    </text>
                                    <g data-name="Group 252" transform="translate(1771 1)">
                                        <rect
                                            width="180"
                                            height="180"
                                            fill="#01d4ff"
                                            data-name="Rectangle 368"
                                            rx="52"
                                            transform="translate(1165 3392)"
                                        ></rect>
                                        <g
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="11"
                                            data-name="Rectangle 337"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h82v29a12 12 0 01-12 12H12A12 12 0 010 29V0z"
                                                transform="translate(1214 3485.75)"
                                            ></path>
                                            <path
                                                d="M5.5 5.5h71V29a6.5 6.5 0 01-6.5 6.5H12A6.5 6.5 0 015.5 29V5.5h0z"
                                                transform="translate(1214 3485.75)"
                                            ></path>
                                        </g>
                                        <path
                                            fill="#01d4ff"
                                            d="M0 0H102V21H0z"
                                            data-name="Rectangle 369"
                                            transform="translate(1205 3477)"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M38.473 4.935L10.259 31.962l29 28.212-5.327 4.735L0 31.962l11.123-10.477L33.935 0z"
                                            data-name="Path 15"
                                            transform="rotate(-90 2360.648 1138.102)"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M0 0H55.747V7.227H0z"
                                            data-name="Rectangle 72"
                                            transform="rotate(-90 2370.618 1120.018)"
                                        ></path>
                                    </g>
                                    <path
                                        fill="#9f9f9f"
                                        d="M35.2 35.2a5.255 5.255 0 000-7.428L8.966 1.537a5.253 5.253 0 00-7.429 7.429L24.069 31.5 1.554 54.027a5.253 5.253 0 007.428 7.428l26.237-26.236z"
                                        data-name="angle-right-solid"
                                        transform="translate(4388.26 3455.25)"
                                    ></path>
                                    <g filter="url(#Rectangle_370)" transform="translate(2703 87)">
                                        <path
                                            fill="#18191b"
                                            d="M0 0H1871V380H0z"
                                            data-name="Rectangle 370"
                                            transform="translate(9 3655)"
                                        ></path>
                                    </g>
                                    <text
                                        fill="#fff"
                                        data-name="$362"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="88"
                                        fontWeight="700"
                                        letterSpacing=".05em"
                                        transform="translate(2963 3884)"
                                    >
                                        <tspan x="-107.577" y="0">
                                            {data.fPrice}
                                        </tspan>
                                    </text>
                                    <g data-name="Group 253" transform="translate(1970 -2)">
                                        <g
                                            fill="none"
                                            stroke="#919191"
                                            strokeWidth="11"
                                            data-name="Rectangle 371"
                                            transform="translate(1271 3808)"
                                        >
                                            <rect width="106" height="88" stroke="none" rx="22"></rect>
                                            <rect width="95" height="77" x="5.5" y="5.5" rx="16.5"></rect>
                                        </g>
                                        <circle
                                            cx="13.5"
                                            cy="13.5"
                                            r="13.5"
                                            fill="#919191"
                                            data-name="Ellipse 82"
                                            transform="translate(1294 3829)"
                                        ></circle>
                                    </g>
                                    <text
                                        fill="#919191"
                                        data-name="$"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="117"
                                        fontWeight="500"
                                        letterSpacing=".05em"
                                        transform="rotate(10.02 -20372.463 22681.434)"
                                    >
                                        <tspan x="-33.249" y="0">
                                            $
                                        </tspan>
                                    </text>
                                    <g data-name="Group 254" transform="translate(1972)">
                                        <g
                                            fill="none"
                                            stroke="#707070"
                                            strokeWidth="11"
                                            data-name="Ellipse 83"
                                            transform="translate(1972 3806)"
                                        >
                                            <circle cx="38.5" cy="38.5" r="38.5" stroke="none"></circle>
                                            <circle cx="38.5" cy="38.5" r="33"></circle>
                                        </g>
                                        <rect
                                            width="15"
                                            height="42"
                                            fill="#707070"
                                            data-name="Rectangle 372"
                                            rx="7.5"
                                            transform="rotate(-45.97 5578.125 -455.295)"
                                        ></rect>
                                    </g>
                                    <g
                                        fill="none"
                                        stroke="#707070"
                                        data-name="Group 255"
                                        transform="translate(1972)"
                                    >
                                        <g
                                            strokeWidth="11"
                                            data-name="Ellipse 84"
                                            transform="translate(2321 3798)"
                                        >
                                            <circle cx="52.5" cy="52.5" r="52.5" stroke="none"></circle>
                                            <circle cx="52.5" cy="52.5" r="47"></circle>
                                        </g>
                                        <path
                                            strokeWidth="9"
                                            d="M2371.5 3826v27.5l22 11"
                                            data-name="Path 132"
                                        ></path>
                                    </g>
                                    {
                                        battery === "50"
                                            ?
                                            <>
                                                <rect
                                                    width="108"
                                                    height="59"
                                                    fill="#fff"
                                                    data-name="Rectangle 170"
                                                    rx="23"
                                                    transform="translate(4369 159)"
                                                ></rect>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0a6 6 0 016 6v4a6 6 0 01-6 6V0z"
                                                    data-name="Rectangle 172"
                                                    transform="translate(4479 181)"
                                                ></path>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0h28a23 23 0 0123 23v13a23 23 0 01-23 23H0V0z"
                                                    data-name="Rectangle 171"
                                                    transform="translate(4426 159)"
                                                ></path>
                                                <text
                                                    fill="#0a1032"
                                                    data-name="50"
                                                    fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                    fontSize="49"
                                                    fontWeight="700"
                                                    transform="translate(4395 205)"
                                                >
                                                    <tspan x="0" y="0">
                                                        50
                                                    </tspan>
                                                </text>
                                            </>
                                            :
                                            battery === "78"
                                                ?
                                                <>
                                                    <rect
                                                        width="665"
                                                        height="23"
                                                        fill="#fff"
                                                        data-name="Rectangle 373"
                                                        rx="11.5"
                                                        transform="translate(3315 4064)"
                                                    ></rect>
                                                    <rect
                                                        width="108"
                                                        height="59"
                                                        fill="#fff"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(4369 159)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(4479 180)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h3a23 23 0 0123 23v13A23 23 0 013 59H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(4451 159)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="78"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="49"
                                                        fontWeight="700"
                                                        transform="translate(4395 204)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            78
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                <>
                                                    <rect
                                                        width="108"
                                                        height="59"
                                                        fill="#fff"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(4369 159)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v4a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(4479 181)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h55a23 23 0 0123 23v13a23 23 0 01-23 23H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(4399 159)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="25"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="49"
                                                        fontWeight="700"
                                                        transform="translate(4395 205)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            25
                                                        </tspan>
                                                    </text>
                                                </>
                                    }
                                    {
                                        network === "mid"
                                            ?
                                            <>
                                                <rect
                                                    width="12"
                                                    height="20"
                                                    fill="#fff"
                                                    data-name="Rectangle 35"
                                                    rx="2"
                                                    transform="translate(4145 194)"
                                                ></rect>
                                                <rect
                                                    width="15"
                                                    height="29"
                                                    fill="#fff"
                                                    data-name="Rectangle 36"
                                                    rx="2"
                                                    transform="translate(4169 185)"
                                                ></rect>
                                                <rect
                                                    width="14"
                                                    height="41"
                                                    fill="#384965"
                                                    data-name="Rectangle 37"
                                                    rx="2"
                                                    transform="translate(4193 173)"
                                                ></rect>
                                                <rect
                                                    width="13"
                                                    height="55"
                                                    fill="#384965"
                                                    data-name="Rectangle 38"
                                                    rx="2"
                                                    transform="translate(4219 159)"
                                                ></rect>
                                            </>
                                            :
                                            network === "low"
                                                ?
                                                <>
                                                    <rect
                                                        width="12"
                                                        height="19"
                                                        fill="#fff"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(4146 195)"
                                                    ></rect>
                                                    <rect
                                                        width="15"
                                                        height="28"
                                                        fill="#384965"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(4169 186)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="40"
                                                        fill="#384965"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(4193 174)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="54"
                                                        fill="#384965"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(4217 160)"
                                                    ></rect>
                                                </>
                                                :
                                                <>
                                                    <rect
                                                        width="12"
                                                        height="19"
                                                        fill="#fff"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(4146 195)"
                                                    ></rect>
                                                    <rect
                                                        width="15"
                                                        height="28"
                                                        fill="#fff"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(4169 186)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="40"
                                                        fill="#fff"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(4193 174)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="54"
                                                        fill="#fff"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(4217 160)"
                                                    ></rect>
                                                </>
                                    }


                                    {
                                        net === "4G"
                                            ?
                                            <text
                                                fill="#fff"
                                                data-name="4G"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="55"
                                                fontWeight="500"
                                                transform="translate(4264 208)"
                                            >
                                                <tspan x="0" y="0">
                                                    4G
                                                </tspan>
                                            </text>
                                            :
                                            net === "5G"
                                                ?
                                                <text
                                                    fill="#fff"
                                                    data-name="5G"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="55"
                                                    fontWeight="500"
                                                    transform="translate(4264 207)"
                                                >
                                                    <tspan x="0" y="0">
                                                        5G
                                                    </tspan>
                                                </text>
                                                :
                                                <>
                                                    <path
                                                        fill="#fff"
                                                        d="M102.315 192a56.687 56.687 0 00-37.982 15.141 1.366 1.366 0 00-.051 1.955l4.578 4.784a1.408 1.408 0 001.989.051 46.068 46.068 0 0131.483-12.295 46.068 46.068 0 0131.483 12.295 1.408 1.408 0 001.989-.051l4.578-4.784a1.367 1.367 0 00-.051-1.955A56.839 56.839 0 00102.315 192z"
                                                        data-name="Path 7"
                                                        transform="translate(4196.623 -31.452)"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M221.965 433.769l4.9 4.853a1.406 1.406 0 001.921.052 26.673 26.673 0 0135.29 0 1.406 1.406 0 001.921-.052l4.9-4.853a1.37 1.37 0 00-.051-2.006 36.568 36.568 0 00-48.871 0 1.4 1.4 0 00-.01 2.006zm24.487 8.008a13.972 13.972 0 00-10.186 4.373 1.372 1.372 0 00.034 1.921l9.157 9.037a1.408 1.408 0 001.989 0l9.157-9.037a1.372 1.372 0 00.034-1.921 14.038 14.038 0 00-10.185-4.373z"
                                                        data-name="Path 8"
                                                        transform="translate(4052.487 -242.097)"
                                                    ></path>
                                                </>
                                    }
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
                        <label>Price</label>
                        <input
                            type="text"
                            value={data.price}
                            name="price"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.bprice}
                            name="bprice"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.dollorPrice}
                            name="dollorPrice"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.percent}
                            name="percent"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <select name="arrow" onClick={(e) => handleArrow(e)}>
                            <option value="up">Arrow Up</option>
                            <option value="down">Arrow Down</option>
                        </select>
                    </div>
                    <div className="global_form_inner">
                        <label>Final Price</label>
                        <input
                            type="text"
                            value={data.fPrice}
                            name="fPrice"
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

export default FiftyThreePage;