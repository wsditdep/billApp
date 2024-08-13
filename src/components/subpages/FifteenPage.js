import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import { ToastContainer, toast } from 'react-toastify';

const FifteenPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "13.06",
        type: "Deposit",
        quantity: "257.3394",
        chain_type: "TRC20",
        status: "Succeeded",
        transaction_hash_1: "78e905ad4917203354",
        transaction_hash_2: "49ee1850fef98c84f2fa",
        transaction_hash_3: "53f323d23fd20105c52",
        transaction_hash_4: "577058b",
        deposit_address_1: "TC1McB7ZyMQ4Pw1LY",
        deposit_address_2: "trUij4CJMVMyjmEyf",
        time_2: "2023-08-10 12:54:15"
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
            <>
                <div className="billing_childs">
                    <ToastContainer autoClose={1000} />
                    <div className="app-heading">
                        <h3>PREVIEW - <span>Mobile 15</span></h3>
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
                                    viewBox="0 0 1705 3693"
                                >
                                    <defs>
                                        <pattern
                                            id="pattern"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 56 71"
                                        >
                                            <image
                                                width="56"
                                                height="71"
                                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABHCAYAAABS8oQKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAgVSURBVGhD7ZrZUxNZFIdPdiBIEATEpdRyV1xe0MFxKR9884+af0xfdGp8cCmxtJxxoFxQEAUhYU1CMvc7zYFLRks7dIJY/Jxr753z9e/cc2+3E+vM7anKL6z46vKX1Q7gdtcO4HbXDuB2V1MAY7GYLiuVilSrVW3I1m3b9LV99arhgMAlEgldEjSQKB4PftqHsX1RquGAAC0vL0upVFIQIMxRlmz7+6JWwwHNIYNhSbN9/v5GqOGABJ9Op9ca6YpWVlb+l5q1fTQKNRwQEfi3GjD+NorS0aakKIHjmLnmN/8YzdI2KjXFQWRAuJNKpTRdk8nkWsra8W0HSLA2TOAQjgHiy09JA41KDQe0IgNAuVzW4aJYLOqSbYSjNB6E9cWoIBsOSLAA4R6wLS0t2gACAlCOIY6jKB1s+CcLSzlzsru7W9cXFxdldnZWlpaWFBaH7VyTpe1m1LRvMh0dHQp36NAhTcWZmRl5/fq1fP78WV1GgEftYugUDZ7qxpkI69Z3fFWrbFcV6MiRI3Ljxg25fv26nD9/Xnp6eqS1tXUNiCXnsYzCOVNoQAuABxyLsR5XQBvHkEHzJ56ISzbbJqdPn5Zbt27J1atX5eTJkwoHEOcZHMNGlHAoNKBVuPU4glSyIJHCuUbfOnDggNy+fVsuXLig57x580Zevnypy3w+v/ZQuC8Fx4oO10eh0IDB7/IX41p5LUCePm0dLin9e/fKwNmzcu3adTl48KAUCgWFe/Hihbx7907m5ub0XHPN0rw21Tej0ICB6HuyNqYRJHBUyQC4Km0uLQfODcjvLiVxL5vNyocPH+Tp06fy7NkzGRsbk4WFBYUzQIONMk1DA/Lb9vuWlixxs1QqSiqdlL17+xzUeRkaGpLjx48r2PPnzxXu1atXMjk5qYM8INbvrHEvWlSQdTnIk0Y2AyEYAna1VHbv7pSjx47K4OCgFpaOXbtcSj6Xx48fa2q+f/9eUxMI4Px+iwwwKoW6E0FYkUGkJICkZcUNCW1tbXLmzBl1jgbAP86xe/fuKeDbt291YAeKc1lyLx6O3uPn6YNBmpKSpXJRYvGYpuXAwIBcunRJTp06pQAjI//Kgwd/ucLyt0xMTMj8/Lxey0Mx5/yKSSbYelSqCzDoHzHnxqIrMsuSyaTk2LFjcuXKFQXct2+ffPnyRR4+fCh/3r/v0nJMKyjO4Kr1O+CCohTc01ITyKhAQwESRNDYCCon0y9mJpcvX5Zz585pkCMjI3L37h1XLYdlfGJcwXCMxvVsa5/1nOM6f0mLQnU5GIRVlVxnTqdgwJGewH76NCnDw081NRnrlhaX3LnrgZs7QLJkvx0zRQWH6gPUOaZoKl68eFFu3rwphw8f1s+Dw8PDCseSapnOpCWR3Phd1NLSh/OhaVEpNCABZduyCjc09Jtz75JzrktGR0flzp078ujRE3k/Nu6CdrOaSlwqK66vlTcWEoMyp6KG8hUakEB4YeVtgCHhxIkTbjvjZibv5MmTJzI6MuoKTF4ScV5omQDgTABgULUpWQvnH9usQgGSQqQhS8ZAZJWQApLJtLhlcm1/pRJM2ywVTd8DitLNREtL2x+r6z+sYAaTlK6uLvfa0ybt7e36hs68lH43P7/g5pnzGyqnyYL/EYgonAwFyA8yNLikW5uRkK79/fsUlPX8bEHf1qemppzLqeB8B0PDeV+2n/Y1mC0BBKrs3iJwCLd4o+DllU8Se/bscWmadi+5CSkuF52jJXUWAYG4B42UNThTLVDTAQO5uaO+OZRkrjCnIPF4QnIdOQUEtLWlVc/M52e1EajvFHA8KF8+jK03HZAUW1pe0rRrz+5yhSRI1c+fpnQ9nUq7l9x+6evrk96+Hh30SdVyaX0ybYDcA7Htu4i2DJBAKtUVSbng0umMBkDQvLhSXZedmwwZ7e1ZheR8YPL5gjpubw3Id9CctWZqOiDpyY8yFJCWVvqBoz8WCnkXVVWrKp8oeDfkg9PExKQ6bf8QykOxaw2iFg41HZAf5I2dgdvGQ76qUT2Bp6gU5gr6hpFMxqW3t0f7ZbEYfKLHQUBZcu331HRAk/YZ/lvtO7hBLEG6usLjAHGqq2u3dHd1u+X612yc5uGQqgAE1667Z/f0921G4YqMm2SX3Usuw0CLq5QUFgLFkZQrMAz+BjE9PaXDR29vrwwOXtbJAZ/qeU/kxZdJQS0cMme3BBAFP+z6j+dgsC/YZg+BV10aF9wwMje3ILlcp6Yx81emeDwQPjxxPtdSUQHDdQOztlmF7oP6Ndv9qX3SCudafPU47s7MzLqUXdTPF7lcTvbv36/rAH78+FGBaFRUMoHGujkbherqg9+SH5StE/T09LQG3tnZ6aZ1/eomQwspy7SOh8X5nEMqawasZsdmFSkgIlAfFEA+0QNB0KQjYHyEGh8f12P++Qb30wKaLEBSEAiGB4oL6cnshj5oX9ps0OcaHzYK1f3vg997wn6g5irpR6FhnRQFnGrKfsBpfv/z71GvGgZoIkgcMgBg2Gcpy7pVUdLZxP4oAEO90dcjIAADkuJi2wZII40RoFFWUNQUQBoieCAYC4EFmmPmHMeQnR+FQgFasGEC8N3wrzWn2PbTNcy9f0Sh+mA9Pw6I9UFSEbfYR1/kftY4x85DwEaRqpsG/JEgOAeXaL58CB80SjW8DwJl/wqMa0zAM5nM6tEA0voi7pnjUanhgAZgLgJhaWrusZ9tGy5qnd6MmvY/Am2VGu7gVmsHcLtrB3C7awdwu2sHcHtL5D8vKYB8+OBQNAAAAABJRU5ErkJggg=="
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-2"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 69 76"
                                        >
                                            <image
                                                width="69"
                                                height="76"
                                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABMCAYAAAA7gnrhAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVmSURBVHhe7Zo5T2RXFIS7G2iafRGrBCRIDAEBYP8B+AX8ARI0xnaO+CNEIBETGhkjBwg0whIBCQRmBicEiIh9XxswVU0xd96ciL5OrPNJpaL7LTO6t965573X6fq6pueU8w2ZV3cCfFAMfFAMfFAMfFAMfFAMfFAMfFAMfFAMfFAMfFAMogzK09PTN0qn02/Sd9lslrq/v6eS28Njnp+fKW0TDw8P1OPjI6X9oEwmQ8XAk2Lgg2IQ5dGBYosYg/Lycjq4ubl5/auAPldXV9N1jBzgEgL6TufP5/N0fcblKO7u7ug6thg8KQZRkoKiFxLO4Pn5Ob22tpZeUVFBLysro19fX9NLSr+fYRRVUFpaSk+Sy+Ve/0qldnd36TXVdfRi8KQYREmKrvUwIUI1ZHh4mD4wMEBPJqY8V3CgmqHlWDVKdeP4+JiufxesrKzQv3z+h14MnhSDKEnRjOoaR3MmlJ6xsTF6W1sbfWtri64UXFye0UFytdF5tbKUlJTQ+/r66GBtbY2++Mef9GLwpBhESYpmUIm5vLykg6amJvrExAT97KyQiKmpKbpqTn1DYXUKCc8DlJyWlhb6+Pg4Hezs7NDnf/udXgyeFIMog4JVAaqqqqKQDgkpgpAISDd56D0gdLbQ6cn5m+5uH6hsWY6qramnyrMVVP7hidJnqCRTRsXAk2IQpaYMDg7Sh4aG6K2trXSwublJ7+npoe/t7dFnZ2fpqkfhvY9WH3W0WqGurq7oWo0mJyfpQKvZwsICvRg8KQY+KAZRBuWHHweohsY6avWvT2/6/OVvKvPSb0HpzDOVf7ynUumXZfxFWG4lXEoQLhNIT9xUnFW8LcXAk2IQZVBQAKHt7W1qeXn5TRsbG9TFxQWFG0AIxRTSEo3bAUnPYNG8QXquq32VKH2G0Pqr/S8WT4pBlEFB2w1VVlZSSg6kWdVMJmuA0hHOurYpTXhABanRs45RumLgSTGIMiinp6eUUhGi9Gj2tbIIHaOZhpQQ7avUHRwcUMkUQjU1NVQMPCkGUQZF17hWlvBal/AAG1Ji6uvrKaVCPQik8zQ0NFDaVzeZXV1dlJIUpikGnhSDKDeEH38qPGrEjIHp6Wk6wKMEMDo6Su/v76fv7+/TdXNXkSvsB1CfgLYJJA4gTSB86ba4uEhfWlqiF4MnxcAHxSDK5fPLr4VnpXqKPzMzQwe3t7f07u5uem9vLx3LNKirK7zRS6e+tuhHR0f0zs5Ous5xcnJCVzuP2waxvr5O1xvHYvCkGERJyvjPH+lKytzcHB1oltWCq/DqqZocz1xFc3MzfWRkhH54eEhfXV2lqxCr4AIVeSz3xeJJMYgyKGq1dYuv1h5SU6XPSA6kfdW8qWGD9FCpvb2d6ujooHSMCG8NdGwMPCkGUWvKhw8f6OEKoGtdv1zSG0Fd+6oLj/mv/w0drzeBasjm5+fpWn3UzAH9HeNBkyfFIEpSyrKF2dH7H/1qKUSrj1Yj3ECG4E2gUIr0Kyg8zgRahRobG+lKIUBNA+F378WTYhAlKdc3hV8H4PYeaNaA+hBd80qBfsmk1eT6qpAgoC5XqdI5sHqFhP+O8JryH+GDYhDl8kleCoo9UJy19KJRA2q0rB8FJ1+oa1+dSz/mCZs1bVNBLwZPikGUpAjNUjjrmk0V2rBNDwmPUaqUovDGD2jfsPDqvGFD9148KQZRkqLZSdYNoG1qqpIzqWPC78PjQfJYJSWsH6o/Md79eFIMoiRFM6n6ETZVqgvapvY+2XiFNUXb9J3OrwTJw3Rp9Ukm8T14Ugyirj7/FzwpBj4oBj4oBj4oBj4oBj4oBj4oBj4oBj4oBj4oBj4o35FK/QvUDDIqCwubhAAAAABJRU5ErkJggg=="
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-4"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 385 40"
                                        >
                                            <image
                                                width="385"
                                                height="40"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                    </defs>
                                    <g data-name="Group 8" transform="translate(-2630 -172)">
                                        <path
                                            fill="#100f14"
                                            d="M0 0H1705V3693H0z"
                                            data-name="Rectangle 29"
                                            transform="translate(2630 172)"
                                        ></path>
                                        <image
                                            width="468"
                                            height="181"
                                            data-name="Image 36"
                                            transform="translate(3807 193)"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                        <text
                                            fill="#e6e6e6"
                                            data-name="13.06"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="72"
                                            transform="translate(2912 297)"
                                        >
                                            <tspan x="-90.334" y="0">
                                                {data.time}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e6e6e6"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="117"
                                            fontWeight="500"
                                            transform="translate(2838 677)"
                                        >
                                            <tspan x="-145.707" y="0">
                                                USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="55"
                                            transform="translate(2760 894)"
                                        >
                                            <tspan x="-58.451" y="0">
                                                Type
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="54"
                                            fontWeight="500"
                                            transform="translate(4171 891)"
                                        >
                                            <tspan x="82" y="0" textAnchor="end">
                                                {data.type}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            data-name="257.339"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="54"
                                            fontWeight="500"
                                            transform="translate(4155 1046)"
                                        >
                                            <tspan x="100" y="0" textAnchor="end">
                                                {data.quantity}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="54"
                                            fontWeight="500"
                                            transform="translate(4183 1197)"
                                        >
                                            <tspan x="75" y="0" textAnchor="end">
                                                {data.chain_type}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            data-name="78e905ad4917203354"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="54"
                                            fontWeight="500"
                                            transform="translate(3943 1500)"
                                        >
                                            <tspan x="264" y="0" textAnchor="end">
                                                {data.transaction_hash_1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="54"
                                            fontWeight="500"
                                            transform="translate(3931 1863)"
                                        >
                                            <tspan x="280" y="0" textAnchor="end">
                                                {data.deposit_address_1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="54"
                                            fontWeight="500"
                                            transform="translate(3951 1939)"
                                        >
                                            <tspan x="256" y="0" textAnchor="end">
                                                {data.deposit_address_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            data-name="2023-08-10 12:54:15"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="54"
                                            fontWeight="500"
                                            transform="translate(4027 2092)"
                                        >
                                            <tspan x="240" y="0" textAnchor="end">
                                                {data.time_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            data-name="49ee1850fef98c84f2fa"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="54"
                                            fontWeight="500"
                                            transform="translate(3943 1565)"
                                        >
                                            <tspan x="256" y="0" textAnchor="end">
                                                {data.transaction_hash_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            data-name="53f323d23fd20105c52"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="54"
                                            fontWeight="500"
                                            transform="translate(3943 1643)"
                                        >
                                            <tspan x="256" y="0" textAnchor="end">
                                                {data.transaction_hash_3}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            data-name="577058b"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="54"
                                            fontWeight="500"
                                            transform="translate(4107 1715)"
                                        >
                                            <tspan x="100" y="0" textAnchor="end">
                                                {data.transaction_hash_4}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="59"
                                            fontWeight="500"
                                            transform="translate(4119 1345)"
                                        >
                                            <tspan x="-143.107" y="0">
                                                {data.status}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="55"
                                            transform="translate(2804 1047)"
                                        >
                                            <tspan x="-101.849" y="0">
                                                Quantity
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            data-name="Chain Type"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="55"
                                            transform="translate(2837 1200)"
                                        >
                                            <tspan x="-134.573" y="0">
                                                Chain Type
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="55"
                                            transform="translate(2781 1353)"
                                        >
                                            <tspan x="-78.579" y="0">
                                                Status
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            data-name="Transaction Hash"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="55"
                                            transform="translate(2917 1499)"
                                        >
                                            <tspan x="-215.045" y="0">
                                                Transaction Hash
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            data-name="Deposit Address"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="55"
                                            transform="translate(2903 1862)"
                                        >
                                            <tspan x="-201.295" y="0">
                                                Deposit Address
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="55"
                                            transform="translate(2756 2091)"
                                        >
                                            <tspan x="-61.754" y="0">
                                                Time
                                            </tspan>
                                        </text>
                                        <path
                                            fill="url(#pattern)"
                                            d="M0 0H102V129H0z"
                                            data-name="Image 37"
                                            transform="translate(2693 405)"
                                        ></path>
                                        <image
                                            width="51"
                                            height="81"
                                            data-name="Image 38"
                                            transform="translate(3920 1291)"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAuCAYAAADUfRIMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATpSURBVFhH7ZZZb9tGFIUv90XyFjsBAmR5aFGg/7J/M0BRFH1o6sRFY0cSKZEc9jtDjuGiBfWk9MVXHg85yz1zz12G0eXFzWjfWOK5/6byDHpSeQb14mw0F5FRWhUZb7Rx9C2If3esnMciLUTCujCuvu97c6xdBo0BTXjIWJagTMCzojia1fMsReZGDxjHsW/T1HwQ1mrN4XDw/WJxcPykOYmF7B8nRfwJIBxATYqTKNaOaSEiAM0lSfK4LsuyZUsTh6KBh36yRGjo9nSHkwrMW0cvpc4Nj0CaC2B6L4rC0jRdtjQdQRiddUNvAz/vX6yJ1ECWZQIMDAiwHwbGEquqyrqu8358PBjtuE/n3xiJZgj1GxPf0iS1mBaJeuYUdIQJhEw26BACC206lPOHWATlnHaIehvTyNI8syIvrSwqq8qKvrQ8K6AtFenwMHsAAEmgVYCiVlYG4EV6+7FHCcErP4zQyErYnpQxP6BAlvGH1bCQYjULJljmoVprFTwSAR6l1/suIiAMZYANBJToGQY4GDsbYMGJCSYVzSnrUugOdD5tAlN/NJDkQ5k6BjBHUCTkaB5ZVrNZucu8a+k6YHsaYyOUPAWShHcF2CIohLEYfX0HUGzZOrXqBX69Liy/JN8E0I3W/nmw7e3Otp930KFjTNEaJICrHQclT+WzfX+w6qayizcXdvXdla3frSx/mVE0UNg42/y2tU8f7uz2wydzG3zWxxONc1AJNIj8m5Rl/dP8/i/xm6Cqi3urX6/t8vtru/rxha1/OLPkXQJwbvkVVpcFmongPYHTYNEBF8zRGuiVLo2pFC4GkoJHgVRUha2uazt/u7L1G+i94bQFxaEE+Cy31euVnb8/861Y54+AEoE9tVjji6BuULXJrK7P7OLVmV2+rW31MrEsJ1ofCKoHytveAE5horT1e2jnEAJRukhCORSgglG0L4IOlIeO0Dx0rbUtbbentKEsjS0/L604pzgQxY6oPjR7ax9a6/bdZM1s7ZRiU75qzNM86/9PUfmjmrKxs/32YM393vYbcrMDVwGRyQqiu+2svedQfwHKs6wSgCRQGmg+Sm+MRaIHXOseOtvdNrb7o7X9HdY0KNwRZF97az631twyfru3fkexeAKi/Z7S2XJZvRi98mg8qjgoiqeyp6rUNT2HEFhjm9839uWXL3b/8719/XVjPYdQrgZLJQJ9BJSPl4sDpyUV+pYwrgiKy9iKVyU5W1p9UWuBDfi4udva7mNj7cdWx/wHlRKBClDpUpblcVDln6PquIhgyPBVTfRWKbmZ43NFOJ8hu4MNW+a31NYCKnGLAHWfyqcqCMHS9Xq9DCrMSJqhy40oVeJinW4Uf6VJEbfK0A+ekZgPKtXlKGYPIlABhVtG649a6mLyEQUpBcJfljRtFICa9zHvOJ5ITj2NqtNaI98pXWRpCCSJxhaj1yc0J+35DJm+IADVOP8Hnp12+ybLNKfInVIkpI3/EJsBNS7rF0H9hS3rUODo6fwFIMAhQTnXHJfoTKfmpyok5aJVYLIyBJXPWX6LoGmUUgSppWMGnXxGDrp1ZksFiP905cnH3vcUjQxfh2gVkETWBf/WVb0MiucUS/4zxQsvfoyTK3/1vabY4gz6g34s0jpEVgbrgmif7xej90SyaOmp5Bn0pPIMelJ5Bj2p/A+gZn8D1SgxHQNHWvMAAAAASUVORK5CYII="
                                        ></image>
                                        <path
                                            fill="url(#pattern-2)"
                                            d="M0 0H91V100H0z"
                                            data-name="Image 39"
                                            transform="translate(4208 1428)"
                                        ></path>
                                        <path
                                            fill="url(#pattern-2)"
                                            d="M0 0H91V100H0z"
                                            data-name="Image 40"
                                            transform="translate(4208 1792)"
                                        ></path>
                                        <path
                                            fill="url(#pattern-4)"
                                            d="M0 0H602V63H0z"
                                            data-name="Image 41"
                                            transform="translate(3182 3785)"
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
                            <label>Time</label>
                            <input
                                type="text"
                                value={data.time}
                                name="time"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Type</label>
                            <input
                                type="text"
                                value={data.type}
                                name="type"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Quantity</label>
                            <input
                                type="text"
                                value={data.quantity}
                                name="quantity"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>chain_type</label>
                            <input
                                type="text"
                                value={data.chain_type}
                                name="chain_type"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transaction Hash</label>
                            <input
                                type="text"
                                value={data.transaction_hash_1}
                                name="transaction_hash_1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.transaction_hash_2}
                                name="transaction_hash_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.transaction_hash_3}
                                name="transaction_hash_3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.transaction_hash_4}
                                name="transaction_hash_4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Deposit Address</label>
                            <input
                                type="text"
                                value={data.deposit_address_1}
                                name="deposit_address_1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.deposit_address_2}
                                name="deposit_address_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>

                        <div className="global_form_inner">
                            <label>Time 2</label>
                            <input
                                type="text"
                                value={data.time_2}
                                name="time_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default FifteenPage;