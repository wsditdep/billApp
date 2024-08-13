import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const FourtyOnePage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "8:43",
        address: "0xE160...3577",
        amount: "$121.71",
        amount1: "$121.71",
        amount2: "0.049 ETH",
    });

    const [imageDimension, setImageDimension] = useState("167");

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("5G");
    const [battery, setBattery] = useState("86");

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
                    <h3>PREVIEW - <span>Mobile 41</span></h3>
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
                                viewBox="0 0 2460 3662"
                            >
                                <defs>
                                    <pattern
                                        id="pattern"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 300 300"
                                    >
                                        <image
                                            width="300"
                                            height="300"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAC+lBMVEVHcExif+hifelhfelhfephfulifuthfehhfeljf+xif+xhfephfephfelhfelifupif+1hfepifuthfutifuthfOphfuphfOlgfOZhf+xdet9de+lifuxhfepifuphfelhfepkge9mg/RnhPVnhfdohvlph/tqiP1ph/pohfhohvhnhPZpiPxkgfBifuthfephfephfuxifulif+ldeORifelif+1hfelifuxlgvJjf+xjf+tif+tifutifupkgO5lgvFohvphfupif+xcfudkgO1hfeplge9jgO9ifutifutgfepifupifutmhPRjgO1hfuphfepif+tkgO9ifupjge9ifepjgO5kgfBkgO9jf+xjgO5gfepjgO9if+xifuxhfepjgO1jfe1kgfBkgO9ifupjgO5jgO5kgfBhfOhjgO5ifuplgvFkgfBifelifulkgfFhfOljgO5kgfBhfupifutge+hee+phfepuiOxlgetfe+pkgOvS2vqJn/BZd+llgvJWdOmqufT///+1wvZkgvFbeOlzje32+P7I0viWqfHJ0/jy9P3DzffAzPd1ju1ceelXdemRpfHBzPfH0PhgfOpgfepeeurn7PzI0fiInfBaeOmywPXAy/fEzve5xvZrhetlgfF8lO76+/6crvJiferU2/rCzfd6ku5hfeqarfLG0PiuvPXt8f2PpPC7x/a/yvdviexdeuqEm+/9/v+ktPPc4vuAl+5kge+ltfO0wvVbeelxi+z09v7H0fdWdenk6fyGnO+wvvXFz/hphOv4+f5hfupqheuOovC+yfeDmu78/P+isvNffOp/lu5rfNa0wfVhfeiUp/Gnt/TCzPe3xPZ4kO1iferP2Plhfenq7v2NofBsh+yBmO6gsfNhfera4Pp/le5hfutifOqLoPDi5/ysuvRnguuYq/LN1vm9yPfX3/pjgfDw8/3Ez/iesPLV3fphfene5PuDme+puPTL1Plifuq/y/eCme59le7x9P3z9f7Ezvj+//+bSJmVAAAA93RSTlMADRklNUlaaHWCj6Kfp7/Dq5N5aVxOOSgcEAILRWLU5fT/////////////////+OeIZEwrBSKV4vP////////////JTgcWQ3PRsH0fVOz/78xAhb/uxl+l6LJruS/z/Vfx/zLemzz62eMtybr98Jr/9VHe+262E/////////////D/////+f////////////////////////////////////////+L////gP//////////////////7P////////////////////////////8B/3H//////9D/2P//////xv//3An///////////3/////4P////+gcfTf6QAAGipJREFUeAHs2XOD7ToQAPCsbXuLpCnXqKY9a9u2ra//3rWNNjl7f/8XcWYGsSElNS09IzMrOyc3L7+g8KWi4vy8kpzSsvKKyqrqmlr0D6pLq2/IyStsbGoWREnGRKGqJouv6JpKFQOrkmhaLY1FBa1t7R0p6Hnq7KrP7i7s6TUJfdEhtuC4nu/D53zPdYJQlHGCiFZLX35pf9oAek4Gh4YLRpptbOgvOgl+2ItOkwgVrcbRsYxx9BykTrQWTdoES4Ljw69wAxHTqemZ3MwulMxqZufmFyRDNx34Ta754jXWYm77IEpK40vLPTaRBRf+EC/QqbSyulaFkkza2novprYDf5gXatRaHNtIojlVtr6Z0AQf/o5Aplt9pR1JsU9tj+5QTYC/alen1npbKuLbXu6+jAWIQKDilYNDxK2U8vUjYvsQET8k4eIan8djWs6xpu5CpBydnOSeIt5U5vcS0YfohcZRcT3iSf3qFjEhJgG1i7Y7+emqkAYQI0eVz7a5yOrUr9sJB2LmydpZOfOzq3LVxq+6ioHuWuxHLDtdDt7MKia6Sz+fRayqzt00AmCIk7hYrmIz9bl2YgjAmF1ymVODmDO0SERgkGkcZ7K2Aq9MzQc2SfIoUymJpRNl9xpY5ZDLUmauEWmjmggsuw6NxUrEhLYV4gDr8NEcAxW0rlEsXgPzrgVlMR3FLHPFcIEP+CY73vTelf7BtGLctUlWY6zNpo8Yu8ARl5zcopiU3WjAl2tJbO2MZQke4PAaOHMdKOvVKHJVZ4oDPCJ3QyhiFSsY+HSt3z+gSGVfiNfAqetQK4kw59zZnTCvgV+7yuMTisjTo/I/c+cdF8W1/v+T3jW9N5ciwnpvegKYA+m93l4N+b3SE9OzI4vub5k4OCqy67iLK2E0xOugi4Brp0RxFSkusffeUGOv+O2ecEXCmYVZdp5H3//mr7zd83A+55x5Howdg02Au4/t/TzS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"
                                        ></image>
                                    </pattern>
                                    <pattern
                                        id="pattern-2"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 179 175"
                                    >
                                        <image
                                            width="179"
                                            height="175"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                    </pattern>
                                    <pattern
                                        id="pattern-3"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 97 99"
                                    >
                                        <image
                                            width="97"
                                            height="99"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                    </pattern>
                                    <image
                                        id="image"
                                        width="101"
                                        height="101"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAC+lBMVEVHcExif+hifelhfelhfephfulifuthfehhfeljf+xif+xhfephfephfelhfelifupif+1hfepifuthfutifuthfOphfuphfOlgfOZhf+xdet9de+lifuxhfepifuphfelhfepkge9mg/RnhPVnhfdohvlph/tqiP1ph/pohfhohvhnhPZpiPxkgfBifuthfephfephfuxifulif+ldeORifelif+1hfelifuxlgvJjf+xjf+tif+tifutifupkgO5lgvFohvphfupif+xcfudkgO1hfeplge9jgO9ifutifutgfepifupifutmhPRjgO1hfuphfepif+tkgO9ifupjge9ifepjgO5kgfBkgO9jf+xjgO5gfepjgO9if+xifuxhfepjgO1jfe1kgfBkgO9ifupjgO5jgO5kgfBhfOhjgO5ifuplgvFkgfBifelifulkgfFhfOljgO5kgfBhfupifutge+hee+phfepuiOxlgetfe+pkgOvS2vqJn/BZd+llgvJWdOmqufT///+1wvZkgvFbeOlzje32+P7I0viWqfHJ0/jy9P3DzffAzPd1ju1ceelXdemRpfHBzPfH0PhgfOpgfepeeurn7PzI0fiInfBaeOmywPXAy/fEzve5xvZrhetlgfF8lO76+/6crvJiferU2/rCzfd6ku5hfeqarfLG0PiuvPXt8f2PpPC7x/a/yvdviexdeuqEm+/9/v+ktPPc4vuAl+5kge+ltfO0wvVbeelxi+z09v7H0fdWdenk6fyGnO+wvvXFz/hphOv4+f5hfupqheuOovC+yfeDmu78/P+isvNffOp/lu5rfNa0wfVhfeiUp/Gnt/TCzPe3xPZ4kO1iferP2Plhfenq7v2NofBsh+yBmO6gsfNhfera4Pp/le5hfutifOqLoPDi5/ysuvRnguuYq/LN1vm9yPfX3/pjgfDw8/3Ez/iesPLV3fphfene5PuDme+puPTL1Plifuq/y/eCme59le7x9P3z9f7Ezvj+//+bSJmVAAAA93RSTlMADRklNUlaaHWCj6Kfp7/Dq5N5aVxOOSgcEAILRWLU5fT/////////////////+OeIZEwrBSKV4vP////////////JTgcWQ3PRsH0fVOz/78xAhb/uxl+l6LJruS/z/Vfx/zLemzz62eMtybr98Jr/9VHe+262E/////////////D/////+f////////////////////////////////////////+L////gP//////////////////7P////////////////////////////8B/3H//////9D/2P//////xv//3An///////////3/////4P////+gcfTf6QAAGipJREFUeAHs2XOD7ToQAPCsbXuLpCnXqKY9a9u2ra//3rWNNjl7f/8XcWYGsSElNS09IzMrOyc3L7+g8KWi4vy8kpzSsvKKyqrqmlr0D6pLq2/IyStsbGoWREnGRKGqJouv6JpKFQOrkmhaLY1FBa1t7R0p6Hnq7KrP7i7s6TUJfdEhtuC4nu/D53zPdYJQlHGCiFZLX35pf9oAek4Gh4YLRpptbOgvOgl+2ItOkwgVrcbRsYxx9BykTrQWTdoES4Ljw69wAxHTqemZ3MwulMxqZufmFyRDNx34Ta754jXWYm77IEpK40vLPTaRBRf+EC/QqbSyulaFkkza2novprYDf5gXatRaHNtIojlVtr6Z0AQf/o5Aplt9pR1JsU9tj+5QTYC/alen1npbKuLbXu6+jAWIQKDilYNDxK2U8vUjYvsQET8k4eIan8djWs6xpu5CpBydnOSeIt5U5vcS0YfohcZRcT3iSf3qFjEhJgG1i7Y7+emqkAYQI0eVz7a5yOrUr9sJB2LmydpZOfOzq3LVxq+6ioHuWuxHLDtdDt7MKia6Sz+fRayqzt00AmCIk7hYrmIz9bl2YgjAmF1ymVODmDO0SERgkGkcZ7K2Aq9MzQc2SfIoUymJpRNl9xpY5ZDLUmauEWmjmggsuw6NxUrEhLYV4gDr8NEcAxW0rlEsXgPzrgVlMR3FLHPFcIEP+CY73vTelf7BtGLctUlWY6zNpo8Yu8ARl5zcopiU3WjAl2tJbO2MZQke4PAaOHMdKOvVKHJVZ4oDPCJ3QyhiFSsY+HSt3z+gSGVfiNfAqetQK4kw59zZnTCvgV+7yuMTisjTo/I/c+cdF8W1/v+T3jW9N5ciwnpvegKYA+m93l4N+b3SE9OzI4vub5k4OCqy67iLK2E0xOugi4Brp0RxFSkusffeUGOv+O2ecEXCmYVZdp5H3//mr7zd83A+55x5Howdg02Au4/t/TzS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"
                                    ></image>
                                </defs>
                                <g data-name="Group 181" transform="translate(-2750 -147)">
                                    <g
                                        fill="#23262b"
                                        stroke="#707070"
                                        strokeWidth="1"
                                        data-name="Rectangle 260"
                                        transform="translate(2750 147)"
                                    >
                                        <path stroke="none" d="M0 0H2460V3662H0z"></path>
                                        <path fill="none" d="M0.5 0.5H2459.5V3661.5H0.5z"></path>
                                    </g>
                                    <rect
                                        width="1429"
                                        height="189"
                                        fill="#151618"
                                        data-name="Rectangle 262"
                                        rx="94.5"
                                        transform="translate(3280 564)"
                                    ></rect>
                                    <text
                                        fill="#fff"
                                        data-name="Ethereum Main Network"
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="82"
                                        fontWeight="300"
                                        transform="translate(3936 689)"
                                    >
                                        <tspan x="-433.923" y="0">
                                            Ethereum Main Network
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="105"
                                        fontWeight="300"
                                        transform="translate(3444 1223)"
                                    >
                                        <tspan x="-219.921" y="0">
                                            Account1
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="79"
                                        transform="translate(3099 1630)"
                                    >
                                        <tspan x="-154.548" y="0">
                                            Address:
                                        </tspan>
                                    </text>
                                    <use transform="translate(3343 607)" xlinkHref="#image"></use>
                                    <use
                                        data-name="ethereum-logo-EC6CDBA45B-seeklogo.com"
                                        transform="matrix(1.98 0 0 1.98 2818 2937)"
                                        xlinkHref="#image"
                                    ></use>
                                    <g
                                        fill="url(#pattern)"
                                        stroke="#23262b"
                                        strokeWidth="2"
                                        data-name="ethereum-logo-EC6CDBA45B-seeklogo.com"
                                        transform="translate(2938 2898)"
                                    >
                                        <rect width="113" height="113" stroke="none" rx="56.5"></rect>
                                        <rect
                                            width="111"
                                            height="111"
                                            x="1"
                                            y="1"
                                            fill="none"
                                            rx="55.5"
                                        ></rect>
                                    </g>
                                    <path
                                        fill="#c1c1c1"
                                        d="M1852.156-12646.336l-24.29-23.271 24.969-24.289-4.586-4.076-29.216 28.365 29.216 27.518z"
                                        data-name="Path 81"
                                        transform="rotate(-90.97 9773.04 -7373.656)"
                                    ></path>
                                    <path
                                        fill="#c1c1c1"
                                        d="M1866.713-12623.643l-34.964-33.5 35.942-34.965-6.6-5.867-42.055 40.832 42.055 39.611z"
                                        data-name="Path 84"
                                        transform="rotate(-90.97 10210.842 -7278.927)"
                                    ></path>
                                    <image
                                        width="165"
                                        height="161"
                                        data-name="Image 84"
                                        transform="translate(2774 579)"
                                        xlinkHref="data:image/png;base64,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"
                                    ></image>
                                    <image
                                        width="175"
                                        height="211"
                                        data-name="Image 85"
                                        transform="translate(4987 542)"
                                        xlinkHref="data:image/png;base64,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"
                                    ></image>
                                    <g
                                        fill="none"
                                        stroke="#9c9c9c"
                                        strokeWidth="6"
                                        data-name="Rectangle 263"
                                        transform="translate(2818 971)"
                                    >
                                        <rect width="2324" height="842" stroke="none" rx="48"></rect>
                                        <rect width="2318" height="836" x="3" y="3" rx="45"></rect>
                                    </g>
                                    <path
                                        fill="url(#pattern-2)"
                                        d="M0 0H238V233H0z"
                                        data-name="Image 86"
                                        transform="translate(2898 1056)"
                                    ></path>
                                    <path
                                        fill="#76797e"
                                        d="M0 0H2105V8H0z"
                                        data-name="Rectangle 264"
                                        transform="translate(2911 1385)"
                                    ></path>
                                    <path
                                        fill="#2a9be9"
                                        d="M0 0H1248V17H0z"
                                        data-name="Rectangle 268"
                                        transform="translate(2750 2213)"
                                    ></path>
                                    <rect
                                        width="720"
                                        height="129"
                                        fill="#1d384b"
                                        data-name="Rectangle 265"
                                        rx="64.5"
                                        transform="translate(3309 1538)"
                                    ></rect>
                                    <text
                                        fill="#55baff"
                                        data-name="0xE160...3577"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="71"
                                        opacity="0.81"
                                        transform="translate(3604 1628)"
                                    >
                                        <tspan x="-225.272" y="0">
                                            {data.address}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#55baff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="92"
                                        opacity="0.81"
                                        transform="translate(3366 2106)"
                                    >
                                        <tspan x="-147.793" y="0">
                                            Tokens
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="$121.71"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="197"
                                        transform="translate(3176 2622)"
                                    >
                                        <tspan x="-357.784" y="0">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="105"
                                        transform="translate(3332 3048)"
                                    >
                                        <tspan x="-223.766" y="0">
                                            Ethereum
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#d8d8d8"
                                        data-name="0.049 ETH"
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="93"
                                        fontWeight="300"
                                        transform="translate(3325 3190)"
                                    >
                                        <tspan x="-213.064" y="0">
                                            {data.amount2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#d8d8d8"
                                        data-name="Don't see your token? Import tokens"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="80"
                                        opacity="0.87"
                                        transform="translate(3980 3452)"
                                    >
                                        <tspan x="-634.219" y="0">
                                            Don&apos;t see your token?{" "}
                                        </tspan>
                                        <tspan y="0" fill="#2a9be9">
                                            Import tokens
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="$121.71"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="93"
                                        transform="translate(4976 3043)"
                                    >
                                        <tspan x="160" y="0" textAnchor="end">
                                            {data.amount1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="92"
                                        opacity="0.81"
                                        transform="translate(4634 2106)"
                                    >
                                        <tspan x="-107.229" y="0">
                                            NFTs
                                        </tspan>
                                    </text>
                                    <g
                                        fill="#2a9be9"
                                        stroke="#1d384b"
                                        strokeWidth="3"
                                        data-name="Rectangle 267"
                                        transform="translate(3901 1559)"
                                    >
                                        <rect width="60" height="64" stroke="none" rx="11"></rect>
                                        <rect
                                            width="57"
                                            height="61"
                                            x="1.5"
                                            y="1.5"
                                            fill="none"
                                            rx="9.5"
                                        ></rect>
                                    </g>
                                    <g
                                        fill="#2a9be9"
                                        stroke="#1d384b"
                                        strokeWidth="3"
                                        data-name="Rectangle 266"
                                        transform="translate(3874 1585)"
                                    >
                                        <rect width="60" height="64" stroke="none" rx="11"></rect>
                                        <rect
                                            width="57"
                                            height="61"
                                            x="1.5"
                                            y="1.5"
                                            fill="none"
                                            rx="9.5"
                                        ></rect>
                                    </g>
                                    <ellipse
                                        cx="9"
                                        cy="9.5"
                                        fill="#fff"
                                        data-name="Ellipse 41"
                                        rx="9"
                                        ry="9.5"
                                        transform="translate(4889 1591)"
                                    ></ellipse>
                                    <circle
                                        cx="9.5"
                                        cy="9.5"
                                        r="9.5"
                                        fill="#fff"
                                        data-name="Ellipse 42"
                                        transform="translate(4912 1591)"
                                    ></circle>
                                    <ellipse
                                        cx="9"
                                        cy="9.5"
                                        fill="#fff"
                                        data-name="Ellipse 43"
                                        rx="9"
                                        ry="9.5"
                                        transform="translate(4936 1591)"
                                    ></ellipse>
                                    <g data-name="Group 179" transform="translate(2653 -273)">
                                        <g
                                            fill="none"
                                            stroke="#2a9be9"
                                            strokeWidth="6"
                                            data-name="Rectangle 269"
                                            transform="translate(1766 2692)"
                                        >
                                            <rect width="726" height="252" stroke="none" rx="118"></rect>
                                            <rect width="720" height="246" x="3" y="3" rx="115"></rect>
                                        </g>
                                        <text
                                            fill="#2a9be9"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="85"
                                            transform="translate(2062 2852)"
                                        >
                                            <tspan x="-163.94" y="0">
                                                Portfolio
                                            </tspan>
                                        </text>
                                        <path
                                            fill="url(#pattern-3)"
                                            d="M0 0H126V129H0z"
                                            data-name="Image 87"
                                            transform="translate(2272 2763)"
                                        ></path>
                                    </g>
                                    <text
                                        fill="#fff"
                                        data-name="8:43"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="104"
                                        transform="translate(3073 353)"
                                    >
                                        <tspan x="-100.191" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <g transform="translate(2600)">
                                        {
                                            battery === "78"
                                                ?
                                                <g transform="translate(2289 254)">
                                                    <rect
                                                        width="160"
                                                        height="87"
                                                        fill="#fff"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(0 17)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a7 7 0 017 7v9a7 7 0 01-7 7V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(163 50)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h18a23 23 0 0123 23v41a23 23 0 01-23 23H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(119 17)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="78"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="74"
                                                        fontWeight="700"
                                                        transform="translate(38 87)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            78
                                                        </tspan>
                                                    </text>
                                                </g>
                                                :
                                                battery === "50"
                                                    ?
                                                    <g transform="translate(2289 254.774)">
                                                        <rect
                                                            width="160"
                                                            height="87"
                                                            fill="#fff"
                                                            data-name="Rectangle 170"
                                                            rx="23"
                                                            transform="translate(0 16.226)"
                                                        ></rect>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0a7 7 0 017 7v9a7 7 0 01-7 7V0z"
                                                            data-name="Rectangle 172"
                                                            transform="translate(163 50.226)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0h54a23 23 0 0123 23v41a23 23 0 01-23 23H0V0z"
                                                            data-name="Rectangle 171"
                                                            transform="translate(83 16.226)"
                                                        ></path>
                                                        <text
                                                            fill="#0a1032"
                                                            data-name="50"
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="74"
                                                            fontWeight="700"
                                                            transform="translate(38 87.226)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                50
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    :
                                                    <g transform="translate(2289 254.785)">
                                                        <rect
                                                            width="160"
                                                            height="87"
                                                            fill="#fff"
                                                            data-name="Rectangle 170"
                                                            rx="23"
                                                            transform="translate(0 16.214)"
                                                        ></rect>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0a7 7 0 017 7v9a7 7 0 01-7 7V0z"
                                                            data-name="Rectangle 172"
                                                            transform="translate(163 50.215)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0h92a23 23 0 0123 23v41a23 23 0 01-23 23H0V0z"
                                                            data-name="Rectangle 171"
                                                            transform="translate(45 16.214)"
                                                        ></path>
                                                        <text
                                                            fill="#0a1032"
                                                            data-name="25"
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="74"
                                                            fontWeight="700"
                                                            transform="translate(38 87.215)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                25
                                                            </tspan>
                                                        </text>
                                                    </g>
                                        }
                                        {
                                            network === "mid"
                                                ?
                                                <g transform="translate(-2515 13911)">
                                                    <rect
                                                        width="19"
                                                        height="28"
                                                        fill="#fff"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(4473 -13587)"
                                                    ></rect>
                                                    <rect
                                                        width="22"
                                                        height="42"
                                                        fill="#fff"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(4509 -13601)"
                                                    ></rect>
                                                    <rect
                                                        width="21"
                                                        height="61"
                                                        fill="#384965"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(4544 -13620)"
                                                    ></rect>
                                                    <rect
                                                        width="20"
                                                        height="81"
                                                        fill="#384965"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(4582 -13640)"
                                                    ></rect>
                                                </g>
                                                :
                                                network === "low"
                                                    ?
                                                    <g transform="translate(-2513 13914)">
                                                        <rect
                                                            width="18"
                                                            height="27"
                                                            fill="#fff"
                                                            data-name="Rectangle 35"
                                                            rx="2"
                                                            transform="translate(4473 -13589)"
                                                        ></rect>
                                                        <rect
                                                            width="21"
                                                            height="41"
                                                            fill="#384965"
                                                            data-name="Rectangle 36"
                                                            rx="2"
                                                            transform="translate(4507 -13603)"
                                                        ></rect>
                                                        <rect
                                                            width="19"
                                                            height="59"
                                                            fill="#384965"
                                                            data-name="Rectangle 37"
                                                            rx="2"
                                                            transform="translate(4542 -13621)"
                                                        ></rect>
                                                        <rect
                                                            width="19"
                                                            height="78"
                                                            fill="#384965"
                                                            data-name="Rectangle 38"
                                                            rx="2"
                                                            transform="translate(4578 -13640)"
                                                        ></rect>
                                                    </g>
                                                    :
                                                    <g fill="#fff" transform="translate(-2513 13914)">
                                                        <rect
                                                            width="18"
                                                            height="27"
                                                            data-name="Rectangle 35"
                                                            rx="2"
                                                            transform="translate(4473 -13589)"
                                                        ></rect>
                                                        <rect
                                                            width="21"
                                                            height="41"
                                                            data-name="Rectangle 36"
                                                            rx="2"
                                                            transform="translate(4507 -13603)"
                                                        ></rect>
                                                        <rect
                                                            width="19"
                                                            height="59"
                                                            data-name="Rectangle 37"
                                                            rx="2"
                                                            transform="translate(4542 -13621)"
                                                        ></rect>
                                                        <rect
                                                            width="19"
                                                            height="78"
                                                            data-name="Rectangle 38"
                                                            rx="2"
                                                            transform="translate(4578 -13640)"
                                                        ></rect>
                                                    </g>
                                        }
                                        {
                                            net === "5G"
                                                ?
                                                <text
                                                    fill="#fff"
                                                    data-name="5G"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="83"
                                                    fontWeight="500"
                                                    transform="translate(2133 344)"
                                                >
                                                    <tspan x="0" y="0">
                                                        5G
                                                    </tspan>
                                                </text>
                                                :
                                                net === "4G"
                                                    ?
                                                    <text
                                                        fill="#fff"
                                                        data-name="4G"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="83"
                                                        fontWeight="500"
                                                        transform="translate(2133 346)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            4G
                                                        </tspan>
                                                    </text>
                                                    :
                                                    <g fill="#fff" transform="translate(2128.522 274)">
                                                        <path
                                                            d="M120.609 192a83.678 83.678 0 00-56.067 22.351 2.017 2.017 0 00-.076 2.886l6.758 7.062a2.078 2.078 0 002.936.076 68 68 0 0146.474-18.149 68 68 0 0146.474 18.149 2.078 2.078 0 002.936-.076l6.758-7.062a2.018 2.018 0 00-.076-2.886A83.9 83.9 0 00120.609 192z"
                                                            data-name="Path 7"
                                                            transform="translate(-63.895 -192)"
                                                        ></path>
                                                        <path
                                                            d="M222.163 439.182l7.239 7.163a2.075 2.075 0 002.835.076 39.373 39.373 0 0152.093 0 2.075 2.075 0 002.835-.076l7.239-7.163a2.022 2.022 0 00-.076-2.962 53.98 53.98 0 00-72.141 0 2.063 2.063 0 00-.024 2.962zM258.309 451a20.624 20.624 0 00-15.036 6.455 2.025 2.025 0 00.051 2.835l13.517 13.34a2.078 2.078 0 002.936 0l13.517-13.34a2.025 2.025 0 00.051-2.835A20.722 20.722 0 00258.309 451z"
                                                            data-name="Path 8"
                                                            transform="translate(-201.596 -393.24)"
                                                        ></path>
                                                    </g>
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
                        <label>Address</label>
                        <input
                            type="text"
                            value={data.address}
                            name="address"
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
                        <input
                            type="text"
                            value={data.amount1}
                            name="amount1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.amount2}
                            name="amount2"
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

export default FourtyOnePage;