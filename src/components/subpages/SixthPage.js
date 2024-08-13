import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SixthPage = () => {

    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "1:50",
        amount: "1779 USDT",
        date: "2023-08-02 15:17:44",
        processing: "2 minutes",
        fee: "1.00 USDT",
        network: "TRC20",
        with_a: "Finding Account",
        remark: "--",
        add_acc: "TjHbjW6WhcAwFJnmQHV4g2XVF",
        add_acc2: "7kNAKTEQS",
        TxHash: "--",
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
                        <h3>PREVIEW - <span>Mobile 6</span></h3>
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
                        <div className="artboard secondpage_font">
                            <foreignObject ref={screenshotRef}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={imageDimension + "%"}
                                    viewBox="0 0 1665 3605"
                                >
                                    <defs>
                                        <pattern
                                            id="pattern"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 93 24"
                                        >
                                            <image
                                                width="93"
                                                height="24"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-2"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 405 398"
                                        >
                                            <image
                                                width="405"
                                                height="398"
                                                xlinkHref="data:image/png;base64,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pLbeaZm9vfxMy+Y8/1m5eO58pJyNjY1IbcuOmZauSZfLeNfrmVPpml7p/Hx/r+53nlQAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKHPJMy3DYb6PlstlpJyemZbL5XJOHPT8fj3v86rzkBez/DzKpOOHT6fTSDm7q/xczO4if8ybHXMgd/7iT0fKGX8zP9Py0L/7QKS21dOnI7UduPqKSDnHz+ePeWu6GaltOJ1EyllcuBipbTXq+N7bM9PS+fnueX3XzFTHrW7a+Qywt9Z3363iSQWAMkoFgDJKBYAySgWAMkoFgDJKBYAySgWAMkoFgDJKBYAySgWAMkoFgDKXvP0FLyR/7B++K1LOqmNW6cF/8p5IbfOOT+NkMIqUs+j5pA8vz34VL3yeVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAoo1QAKKNUACijVAAosrb2/wD/dO7ZThNlQwAAAABJRU5ErkJggg=="
                                            ></image>
                                        </pattern>
                                    </defs>
                                    <g data-name="Group 4" transform="translate(-701 -199)">
                                        <g
                                            fill="#121212"
                                            stroke="#707070"
                                            strokeWidth="1"
                                            data-name="Rectangle 30"
                                            transform="translate(701 199)"
                                        >
                                            <path stroke="none" d="M0 0H1665V3605H0z"></path>
                                            <path fill="none" d="M0.5 0.5H1664.5V3604.5H0.5z"></path>
                                        </g>
                                        <path
                                            fill="url(#pattern)"
                                            d="M0 0H351V90.613H0z"
                                            data-name="Screenshot 2023-08-05 234814"
                                            transform="translate(1951 272)"
                                        ></path>
                                        <text
                                            fill="#fff"
                                            data-name="3:17"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="67"
                                            fontWeight="700"
                                            transform="translate(824 341)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.time}
                                            </tspan>
                                        </text>
                                        <image
                                            width="100"
                                            height="68"
                                            data-name="Screenshot 2023-08-05 234956"
                                            transform="translate(762 441)"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAYAAAAougcOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKDSURBVDhPnVS7aipRFN0zE+ObEElhZRPTKLYWYmNKQfILWqSxEVEErSRgYe135AfsRCy0UhQ7X2AhEVGTKBofc10bjojMXG7ugs2c1+y11j57RnI4HCrp4Hg8kizLPN7v9zwW899A9w1BYDKZyGg0kiRJHP+DUx6ZVV4CyXa7HblcLnp9faVwOEwGg+GvJBCFUFWVz+GJOSAjGRIA2FQUhdbrNT0+PlIikaB0Ok1er5dub295X48Ibm9ubngsqiBKKwtWPLG52WzI4/FQNpull5cXqlar9P7+zsRwjLNaWK1WdDgcNEUwCQAH2+2W3G435XI5ikQiVKlU6O3tjVqtFu8LpVqAUwHkvLwC9gN1n5+fXKJMJkPBYJDK5TKVSiXqdrt0d3fHKvGillIApRF3gPIjhGvp4eFB/fn5YQepVIodjEYjKhaL1Gw2z50FwA3ItAAB6MTFYkGTyYQJ4JyvAt8JEiWTSYrH41x7NMPX1xePUQbMQXCp9hogMZvNLKxQKFC/3+c5SGSwQSkUwNH9/T0TzGYzViLqi8MghRMQXQdEIAfKjjN4F+uAdEqqYtHpdFI0GqVYLMYEUFOv17nb4EYk07sTUUrEfD7nMmMN4hSbzZYH63K5pOFwyIn8fj+3ca/X40C5RBnhCs/rQGdiT7gALu5SySMxuuHj44Pb1Wq1cgP4fD5ugna7zfUVJdByg3WoBpHYFx+jYrFY8rCFDXQHFA8GA34hEAjQ09MTTafTs0u9cmEdgcTIB4jzyklhHgMs4AACF9/pdHgtFAqxulqtxnM9QJQAxoIU0P3VI7Hdbqfn52caj8fUaDRYoXD9G+iS4I6+v7/PvwtxH6IE/w6iP07VoHUgQcvMAAAAAElFTkSuQmCC"
                                        ></image>
                                        <text
                                            fill="#5c5c5c"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="57"
                                            fontWeight="700"
                                            transform="translate(1527 682)"
                                        >
                                            <tspan x="-100.835" y="0">
                                                Amount
                                            </tspan>
                                        </text>
                                        .
                                        <text
                                            fill="#f2f2f2"
                                            data-name="1799 USDT"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="111"
                                            transform="translate(1520 828)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <rect
                                            width="1530"
                                            height="687"
                                            fill="#161616"
                                            data-name="Rectangle 31"
                                            rx="50"
                                            transform="translate(774 938)"
                                        ></rect>
                                        <g
                                            fill="none"
                                            stroke="#43866d"
                                            strokeWidth="7"
                                            data-name="Ellipse 5"
                                            transform="translate(891 997)"
                                        >
                                            <circle cx="31.5" cy="31.5" r="31.5" stroke="none"></circle>
                                            <circle cx="31.5" cy="31.5" r="28"></circle>
                                        </g>
                                        <path
                                            fill="none"
                                            stroke="#459272"
                                            strokeWidth="7"
                                            d="M0 0L0 170"
                                            data-name="Line 1"
                                            transform="translate(922 1060.5)"
                                        ></path>
                                        <g
                                            fill="none"
                                            stroke="#43866d"
                                            strokeWidth="7"
                                            data-name="Ellipse 6"
                                            transform="translate(891 1224)"
                                        >
                                            <circle cx="31.5" cy="31.5" r="31.5" stroke="none"></circle>
                                            <circle cx="31.5" cy="31.5" r="28"></circle>
                                        </g>
                                        <path
                                            fill="none"
                                            stroke="#363636"
                                            strokeWidth="7"
                                            d="M0 0L0 170"
                                            data-name="Line 2"
                                            transform="translate(922 1288)"
                                        ></path>
                                        <g
                                            fill="none"
                                            stroke="#2f2f2f"
                                            strokeWidth="7"
                                            data-name="Ellipse 7"
                                            transform="translate(891 1458)"
                                        >
                                            <circle cx="31.5" cy="31.5" r="31.5" stroke="none"></circle>
                                            <circle cx="31.5" cy="31.5" r="28"></circle>
                                        </g>
                                        <text
                                            fill="#f2f2f2"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(1076 1047)"
                                        >
                                            <tspan x="0" y="0">
                                                Submitted
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#5c5c5c"
                                            data-name="2023-08-02 15:17:44"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="53"
                                            transform="translate(1080 1133)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#f2f2f2"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(1082 1269)"
                                        >
                                            <tspan x="0" y="0">
                                                Processing
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#5c5c5c"
                                            data-name="(≈ 2 minutes)"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(1387 1270)"
                                        >
                                            <tspan x="0" y="0">
                                                (≈ {data.processing})
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#5c5c5c"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(1076 1478)"
                                        >
                                            <tspan x="0" y="0">
                                                Completed
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#616161"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(774 1720)"
                                        >
                                            <tspan x="0" y="0">
                                                Fee
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#616161"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(774 1885)"
                                        >
                                            <tspan x="0" y="0">
                                                Time
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#616161"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(771 2050)"
                                        >
                                            <tspan x="0" y="0">
                                                Network
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#616161"
                                            data-name="Withdrawal Account"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(771 2215)"
                                        >
                                            <tspan x="0" y="0">
                                                Withdrawal Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#616161"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(774 2380)"
                                        >
                                            <tspan x="0" y="0">
                                                Remarks
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#616161"
                                            data-name="Address/ Account"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(774 2545)"
                                        >
                                            <tspan x="0" y="0">
                                                Address/ Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#616161"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(774 2710)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.TxHash}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#ececec"
                                            data-name="1.00 USDT"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(2310 1720)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.fee}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#ececec"
                                            data-name="2023-08-02 15:17:44"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(2310 1885)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#ececec"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(2310 2050)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.network}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#ececec"
                                            data-name="Funding Account"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(2310 2215)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.with_a}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#ececec"
                                            data-name="--"
                                            fontFamily="ArialMT, Arial"
                                            fontSize="57"
                                            transform="translate(2310 2380)"
                                        >
                                            <tspan x="" y="0" textAnchor="end">
                                                {data.remark}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#ececec"
                                            data-name="TjHbjW6WhcAwFJnmQHV4g2XVF 7kNAKTEQS"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(2310 2546)"
                                        >
                                            <tspan x="-110" y="0" textAnchor="end">
                                                {data.add_acc}
                                            </tspan>
                                            <tspan x="-110" y="68" textAnchor="end">
                                                {data.add_acc2}
                                            </tspan>
                                        </text>
                                        <image
                                            width="100"
                                            height="108"
                                            data-name="Screenshot 2023-08-06 001623"
                                            transform="translate(2230 2493)"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAbCAYAAACJISRoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQISURBVEhLtZVbbxtHDIW5sxfLlVNZSmTlhjZOAgQo+pL//y+ah76kqFO4SRy4deuLZGt3Z/od7jpNpU3fTJgaz5Xk4SE3m81mye5Ygn5SSp1aZIwWUW1l0jSgfi1Y5BjXXDsZ9teNcAuVIcNMJzE11qbWUobhDY2sG1rkwfIQLHA/YdF9GxA3Is9CKjiZuachFDxQcDlgONtSF5zqXJLBhLHcdUh6I9GyrGWCEebyKsaG/7SeBlTXciICYJ1lbFs0YnBAPPE6GIi5Gu1Znld+sZWHkgGYidXP1PWK/dojNhBQXrsI/ytuJGW57Y737f78ie0x6piMKC5FtykZe8urv+3k4292xSiQ8ly/gnM7MT1cPJhlNr3/2NaEfHV5Zu3Nta2WF7Zaof14uTxDLy0LOzg1AyazQpBipo0yIIi3pa+TZON7czt89dpOPhzZ6ccjNxoxGDzZHMy7eRYqWzx8ZuPJvr375SerV+cWil3PR2pviKjsn/5XPBLg5ZAiYqpE1jULNxhoncrJKYuX0DdIOZaRQ+VxZzQGgQVOTnpCbEu3ql95Cp5iaAYVU8qt4e0o1qCNxkZsUtwyUMDCzMoKI+Ty3mTua0PiRjy1KjTwVd13o9jVFxw5ZfisuiDaOo48UVS7VpQVd4alN8LBVFmR7RBQ541CD7yoyLzkVAtoQ7QN4ahecvbVFVrmiblTeEDciKKItsa7GmhqP6zKFxyKSmYy1hJ04ijRwSbm67jmhcb3Qsw7RAbEjXirIAeBXISi8KTGjOTrRa56tRCZ+pRGrWgt3TqiCHhCjBwSN6JrpbpcA5NgViTjLeq5ETWBSCxTjlQLajt0Kquga1mUbtLPfqVDdnAhkMdTPZ48sINHL222eGnTg+c2Xbyw2cPnqMYXrB16+4kRZ3AgNupzXS6+EshtMZqN9qb25PsfYEphOfA1NEglM1glzvIH9kQrZ+V5fXNhx0c/Q+GRPfruR1vSDd4fveHgtqXOCB5R0vbNZMFjySr4vm4hArGVNExhHluqHyrHVvlSbpKd//neptMH9vTwtV1cnNrxr28c+k3pGmQXrYebBT0NjsWIPBGFHNgStXuMsTWazGz++Jkt//pkJ8dv2eof+0I+w6WL2lcPKspdmx88tW/356xuf4jIBP6STs6GsrTR7tj++PDOPv3+lvPbTvUUFmtab9cF8OgLF2lmUrWQTXUCkx+dj+21Lc9P7Xp1xh60H5AOLrb11zU49SoluQQyohigpSJW8SUgS3xRc2orNhRy8z9d+DZVfpmxKFR4dFvHj4UNzTEcgj5qjECm2lKOcmpmSDq4FIa/AMw43tawiVFNMGFsU9fQe1Wvba1PASxrmdcUslrNkHyR+LsTj+RuxewfK4peTxYX/VQAAAAASUVORK5CYII="
                                        ></image>
                                        <text
                                            fill="#ececec"
                                            data-name="--"
                                            fontFamily="ArialMT, Arial"
                                            fontSize="57"
                                            transform="translate(2304 2710)"
                                        >
                                            <tspan x="-37.963" y="0">
                                                --
                                            </tspan>
                                        </text>
                                        <path
                                            fill="url(#pattern-2)"
                                            d="M0 0H124V121H0z"
                                            data-name="Image 7"
                                            transform="translate(859 962)"
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
                            <label>Amount</label>
                            <input
                                type="text"
                                value={data.amount}
                                name="amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Date and time</label>
                            <input
                                type="text"
                                value={data.date}
                                name="date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Processing</label>
                            <input
                                type="text"
                                value={data.processing}
                                name="processing"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Fee</label>
                            <input
                                type="text"
                                value={data.fee}
                                name="fee"
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
                            <label>Withdrawal Account</label>
                            <input
                                type="text"
                                value={data.with_a}
                                name="with_a"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Address / Account</label>
                            <input
                                type="text"
                                value={data.add_acc}
                                name="add_acc"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.add_acc2}
                                name="add_acc2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default SixthPage;