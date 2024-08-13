import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SixtySixPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "21:39",
        amount: "99 USDT",
        date: "2024-05-12 22:22:21."
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
                    <h3>PREVIEW - <span>Mobile 66</span></h3>
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
                                viewBox="0 0 1820 3942"
                            >
                                <g data-name="Group 348" transform="translate(-2253 -95)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H1820V3942H0z"
                                        data-name="Rectangle 51"
                                        transform="translate(2253 95)"
                                    ></path>
                                    <text
                                        fill="#1d212a"
                                        data-name="Withdrawal Processing"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="92"
                                        fontWeight="500"
                                        transform="translate(2691 1365)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal Processing
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#0b0b0c"
                                        data-name="99 USDT"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="148"
                                        fontWeight="700"
                                        transform="translate(2860 1564)"
                                    >
                                        <tspan x="290" y="0" textAnchor="middle">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#8c8f8f"
                                        data-name="Estimated completion time: 2024-05-12 22:22:21."
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="65"
                                        transform="translate(2452.5 1771.648)"
                                    >
                                        <tspan x="0" y="0">
                                            Estimated completion time: {data.date}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#8c8f8f"
                                        data-name="You will receive an email once withdrawal"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="65"
                                        transform="translate(2572.184 1885.727)"
                                    >
                                        <tspan x="0" y="0">
                                            You will receive an email once withdrawal
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#8c8f8f"
                                        data-name="is completed."
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="65"
                                        transform="translate(2995.448 1967.863)"
                                    >
                                        <tspan x="0" y="0">
                                            is completed.
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#8c8f8f"
                                        data-name="View history for the latest updates."
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="65"
                                        transform="translate(2678.076 2050)"
                                    >
                                        <tspan x="0" y="0">
                                            View history for the latest updates.
                                        </tspan>
                                    </text>
                                    <rect
                                        width="1671"
                                        height="220"
                                        fill="#fcd434"
                                        data-name="Rectangle 52"
                                        rx="56"
                                        transform="translate(2327 3573)"
                                    ></rect>
                                    <text
                                        fill="#111"
                                        data-name="View History"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="63"
                                        fontWeight="700"
                                        transform="translate(2976.127 3704.041)"
                                    >
                                        <tspan x="0" y="0">
                                            View History
                                        </tspan>
                                    </text>
                                    <path
                                        d="M38.487 60L10.263 32.96 39.276 4.737 33.947 0 0 32.96l11.127 10.48 22.82 21.494z"
                                        data-name="Path 15"
                                        transform="translate(2349.783 381)"
                                    ></path>
                                    <path
                                        d="M0 0H66.1V7.23H0z"
                                        data-name="Rectangle 72"
                                        transform="translate(2357.9 410.639)"
                                    ></path>
                                    <image
                                        width="1275"
                                        height="789"
                                        data-name="Image 95"
                                        transform="translate(2558 495)"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4wAAAIyCAYAAACAfUQTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAE7GSURBVHhe7d3ZsyRZmhj0cPeIu2Rl1tpV3TPTaqZnn+lpejAtaExoQ0iGEGA8YgYYD/AAL2z/EE8shsl44EG7kJA0QgMyidEy3T1Lz6Jeqquqa83l3ljcibOFnxt5Mjszq3KqMu/vl3byi+sR7uER4TfinviOn6+b9hYAAABwpM8RAAAArtBhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoKmb9vJlAJ7ImCM8r3y/DHBd+QQAAACgSYcRAACAJh1GAAAAmpzDCPAxTc5h5DnX+X4Z4NryCQAAAECTDiMAAABNOowAAAA06TACAADQZNIb4Foax3mimnJ5GIYY1+t1jMHp6WmMu90uxnKb8nPQDb574/k27a5O7NT36Ziv/4Touu5KbF0HwLPHXzkAAAA0yTAC1155GyxZkM1mE2OwWq1i3G63MS6XyxjrDOV0nDyZqu/iuny7sqz8HBwve5T1nua2gydZ72luO3jQek9z28GD1nua2w6eZL2nue29oUvLjn9XaiXrXrKP9e9IWSbTCPDsqT4pAAAAYKbDCAAAQJMhqcC1VL/1HU96U4afBmUIahmmWm5zZWidYXY853b5d6L8rpycnMRYK7835XfEkFSA54MMIwAAAE0yjMC1dGXSmvw2+LAM4w9+8IMYS8mNYUiT4QRHFQf26ixKeYsty+q33ONlj7Le09x28CTrPc1tBw9a72luO3jQek9z28GTrPc0t71Y9F25nA72N954I8Y6Y3g8MVT954XMIsCzS4YRAACAJhlGgCN1Uf6SifzWt74V47vvvhtjnWHsh3Q+V3XGVo5BWVqW1enI42WPst7T3HbwJOs9zW0HD1rvaW47eNB6T3PbwZOs98lvu6/WOztNWcNhSJnCn/zJn4yxPpfxOMPYOocRgGePd3AAAACaZBiBa6nOIpZzF4vW2+I3vvGNGN95550YVydnMQZdlzMqh+/gHpy1mX8Ojpc9ynpPc9vBk6z3NLcdPGi9p7nt4EHrPc1tB0+y3tPY9nwu77BIvy8lw/jVr341xjrDWM7vLcvqc4FLhlGmEeDZ450bAACAJh1GAAAAmgxJBa6ly8vLfGkeklpi/bZYhtD95m/+ZoylvMbNWy/FGFzcS8P1xi5/BzdV38V1eZhfWVZ+Do6XPcp6T3PbwZOs9zS3HTxovae57eBB6z3NbQdPst5T2XY1pHRKw027XF7ja1/7Woxlgpvg3r17MZ6fn8e42WxiDMrtlNcAePZUnxQAAAAwk2EEyMrbYT1ZR8mIfP3rX4/x3Xffj/Hll16NMdjm+XMOGUZ4DvTTnJlcLtPlcUy/G7/0S78UY50xvH37dow3b96Msf49qjORADxb/HUDAABAkwwjcE1U53FF8/dlpcB4lzOE9WlW63XKkpQM47276dzHujzAVFaozweDZ1117mOfL5+ermL8+Z//+RjrzOHxnxNKaAA8H7ybAwAA0KTDCAAAQJMhqcA18cOHpLaG0O3yvB3f+MY3YyylA+rJPrpcjgOeL/OfB13+/SlDUn/hF34hxlr5c2Ie4j3/jhieCvDs8g4OAABAkwwjcE1czTBO05z9KG+DrSzINtce/+Y3U4bx7t27MdZvnb2SATyXqj8PplQ75vz8NMaSYayziOV3YrdLt61/n2QYAZ5d3sEBAABokmEErokHn8P4MJcXKVvyG7/xGzHeuXMnxroo+Y1cqByeL/OfB5cXKbNeMoxf+cpXYqzLapRzF1sZexlGgGeXd3AAAACadBgBAABoMiQVuCYefUhqHlkXbTfph9/5nd+J8eLiIsZ6SOq2XgGeG/OfB6cnaejpapVKyPzsz/5sjPVQ0+M/J+rr6slxAHi2yDACAADQJMMIXBNXs4B1UrBkQsq7Yf2uWPIib775doylZECZ4CNYnpzkS/A8qX4RclmNcUyZ9S9+8Ysx1o7/nGj9eWHyG4Bnj3duAAAAmmQYgWvih2cYy7L6bXHoU47x/fdvx9jKkHSD7954vpVD/N69VFbmtddei7H+XTk+T7G+rmTm6zIcADwb/JUDAABAkw4jAAAATYakAtfE1SGpre/LypDUumTGKg+h++CDNCR1tVrFWNvs5tvD82P+nTk/O4vx9u0PYyxDUjebTYxBGW7aKqFRhqQOQyrLAcCzQ4YRAACAJhlG4Jp4cIZxLpGRltXz2pTk4cXFZYx1RuUgT4wDz5f5d2bKvyMnuYD/Wc44tjKGrT8rFO4HeHbJMAIAANCkwwgAAECTDiMAAABNOowAAAA06TACAADQpMMIAABAkw4jAPBDhLIax6VpALgOdBgBAABoUrgfuCaOsyPz92Ufv3C/t1Geb9OYfhFOTk5iVLgf4PqQYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GgIfpptzG1Iryc70MAOA5o8MIAABAkw4jcE2Et7u6zUKh8VRsPGQLr2YMh6GLbbnsY+v6Kbbdbndo8LwLhfdD6/s+tvLzw5TbhDb/jgHwrNFhBAAAoEmHEQAAgCYdRuDae5ThdUXXTfc1eN7Vw0vr1vKw6wB49ugwAgAA0KTDCPAI6qzKcYPn3eNMdgPA80WHEQAAgCYdRuDaq7OFD8qelAzLcablQbeH58kwDLGV479F6QyA55MOIwAAAE06jAAAADTpMALXUhk+96hD6MrwU0NSuY7KcX98/D8qw1UBnl06jAAAADTpMALX3nG2pJV9LLc5zrSEBs+7MunN8e8KAM8/f+kAAADQpMMIkD0se1KyiTIsXEd1Rj00AK4P7/oAAAA06TACAADQpMMI8BjKkNS6wfPOsQ5wfekwAgAA0NRNKukCfCwffHg7X3qw1lttWSZzw9PUOr7GcYyxPi7LZDYnJycxrlarGIPV0vfLANeVTwAAAACadBgBPqbjouYha3PcinKbuh3fBp6Whx1rrWOzNACuLx1GAAAAmpzDCPAxXa63MW42mxi32/RzUN5iS5amLnperivnk8nk8Afl+LgMlstljPM5jEOMgSMT4PqSYQQAAKBJhxEAAIAmQ1IBPqZdGlG6WK/XV2JQhpuWoaj1EEBDUnmayvFUf8wfD0Wth0iXMhplSGp1lSGpANeYDCMAAABNMowAH1N5E91sdjHWGcbdLi0rZBj5g9LKMBYls1gmuglKhnHZKNLvyAS4vmQYAQAAaJJhBPiYyptoThReKatRLpfoLZdPU8k6lsxiySoGy2Uqo9FKdMswAlxfMowAAAA06TACAADQZEgqwMdUymqUMgT1u+pmk4aiXl5exlgPVy2GIQ0F9HbM01aOtbmExjwk9XgoahliHQy+Xga4tnwEAAAA0CTDCPAxbXfpbXQY7p8aZJevu3v3box1yY3jCUg+7ttxa2KSLm9yeuRZS6q00n0e8B3jNC9/2N1M3cO2/Qeo2t+HesD+dtO8/PCYWrc93E+O01zCYn49nv5zUpdrKRnGUpx/tUo/18phuCup871Vo9QGANeDTwAAAACaZBgB/gCUAv71OYybzSbGcl0p4B+UTFApsF6uK7cNytt3ue2yn7NF24t0zuTZKmWSdofiH3OWc8zLSrYp6JYpG1W2Xe9TyZj1R5mzrkpf9oe7KbeZ13/UxN7TN+/vuDvaqW5+fe4rL5Gv6xfpdQumIV2+XN+O8eTkLMag605j3G1TZnE3zs/zkF+XcUqv03p9EWNweprWK+qP6XL5+KP7+Ofg7CztSzk+gpLNrpcda91HOQ4BuH58AgAAANCkwwgAAECTIakAH1N5G60nFzlWblMPSS2XyzDTMkQ1KEMAyzZLrIeIHr9992WGm2Cbhp2W8glTNQxzM+bb5TGiw2qejKXcT2uY7OE7xsPY0rxv1d3O30Je3bdgPOxC2eZ86/uXNe73iW4TtJYl816Wnbt/SdGXyW6qYauLLj1Py1W+rpr4aMwTHl2u03VjNenNMg9d7fs8XLUaatyX/c2vU/06H7/mrWOuLCtDW+vhpGUo6sOGpBb1fbXuB4Dr4f5PTwAAANiTYQT4mEoWrmRhHpaNqTN2x1m8i4t54pPy1ny8zda2D9vJE6hEQ8owdqv8Fj/OBdrHKV3uFim71S3nSVbGnOha5+zncpgnapnntjnK5uUsW9Atcvatm7OlxTSW9XKsZ8EpZSnKsrpMxfGyx7lNcLRs6ucMYX05ys9N0JeMYE6NdmPJys2ZwjLJz+F1Wc6Pe+zei3G7uxNj/RXtsDyPsZ9ejnHazRm/YZf2qc8vxtUs71Ule1hnDMu+lAxjfcwcH0f1dQDQUn18AQAAwEyGEeBjepwMY628/Zb1Ly/nDOHx+Y1FK5NU1t9NVeZsldbb5RIQU1X6omTa+j5n07oq+5jLTJSi7cNyLhNRjIfMXt63K+f05QxbvSzrx5zJrM7l+zSMfcq+BlN/N8axT4+p36XMX1SyjbsU+5KZ3c0Z2XL+5nab11/Or2F/+lGM3ZDuo/6KtpTY2G1finGxnl/X8yE9r/1YXrv7P6aPM4ulXEZQrivnrz4q2UYAWqqPLwAAAJjpMAIAANBkSCrAx/SkQ1KP1cNP1+s0bLIMUz2+j+C4NMJUTcYyTmko6S5PoDJ1eVjkXpeHZPbD/dvsuzQks1uk4YzbTfURcaifkYeb5mGnU18Pm03bLCU0+rGeIKYMb/10v6ucunlI6nb5QYxTnrinqyYH6vIQ2n7Mw1R3aRjpYWhtpc9DWhf9PCR17O+lC/nh7qqJeLa79Lzsti/EWJcmubHM603zfhbltToeilofC+VyXU7j2MM++p/0+AXg+STDCAAAQJMMI8DH1Mr+FU+arSmT3pQMY/m5fssu2z7ExTxBzbhJ2bApF38fciYt6PLlbvowxt2YM1p7Q5e+RzzJpTbyQ4vmwvUlo1hdeZC/h5xKxmv+XrIUqf/05Qzp3jZPenN4TIf93ptyRnF7PFlP/TjSczCcpPXW2znbusuT5YzdjRi3JVO5tyuZ1zzx0HJZfX87pX0qJUrqY6hkDY8zi3WG8WGZRQB4XD5VAAAAaJJhBPiYHudt9FEzjmWb5bzGkmHcbKrC8Dn9V27b54xYsNykbGOfy2osVz+IMei678V49+K3Y7xz+3djDKbduzGerdK2V9XulvPshlyAvyvZuKrY/SELV66rT84b8jl5jZIbn5Ypn2w55szqoi4/cvhONcXpuJzI3i6fuzjlcz53YyrEHyxXPxXj2WmK/fD5GIPtIj0/0/Iixu5k/v52vc370N2fPTzOKJbYyiqW4+Jxs9xlvfq4lrUEuL58AgAAANAkwwjwMT3sbfT4uodlex6W0SnZxLq4f5lJtWQhl1Wmb5nPn1vmbNiqOodxu/t2jO+/+09jfPutfxxjcJmzjmf9+zF2u3SeY7Cc0raGvO0hzyjaV4Xs+1yQvmQfy+yjwXZ1J8axFPf/lPT1eYp55tP5/MRKn16PXZ4FdtenzOguF9YPdmU22fG1GFcnKZsYvPzqn4zxjTf+WIzDjS/FGJTX+nLxXoxjNdPstsszp/Zp3+qi/CWjWJYdzl9tHFetc2sfJdt4nLkO6iwnANeLDCMAAABNOowAAAA0GZIK8Aypi/sfT4Qzbue381UZKnkvDWEdqolabpzlyWf678Zw771/EmPwzvf/zxhvf/hrMb6wTJPgBKeLNEHLcpO+a+wvU1xNc7mIsy6X9sjDGi82uWzFXnfj6hDPT8thsp7gIj1P5ydpGOjYz0M2L3N5i82QhtJOeQagy24eInpv82qMZ+d/OMZXXk/DUIMbr/zxdKH7kRh20zx0dxrSczcu0+uzqV6f/iRPWDSkfWsNST1Wf5SXyyaqAeCT4NMEAACAJhlGgM+I+u34QZOT1LcpGcYS6+zjepuyjn3Ohg27+fvB5ZiuO+0+inExzmU1br//j1J8N8U776eJcYIX8sQ5L+SC8st8v8tSBmLvtEy8k3dzrPZpc5JuV0pRXP3O8nhZ+Tk4XvY4twmuLutyKY3gbErZvClnZ3d9zr7ubVbp8d3rUqbxbi5bMp2kjGEwnP5ijJ97/S/GuDr/WoxBf54nwBleiuFiTNsLLvMEQuOQ7rdOBp6epkxkyRDWWcVHmXymHCOPMsENAPww9ScqAAAAHMgwAnxGlHIGQckOPSxLVG5fMoubnPkLPtjm7GGfMlLdZj5/btim7wrP+pR9PM/n6AXj3VRWY333n8f4vd//GzEG/ebrMa7GfxXjzWVa72Z1/t1infahX+fyGv18v5e5OP72kE6rv7M8zgzOz8X9yx7nNsHVZUO12gtDyjBeXKbs6XZ1O8ZgPE/P/e2cnf3gMp+veGs+T/FzX/gLMd567c/FuB2/EGOw6dO2d6u0/kXOVAaX21weZUivwdkql/fYu7lMz9kyp2nrY+BRjgsA+CTVn6gAAABwoMMIAABAkyGpAJ8RjzsktShv4+tunrDldi6BcXudhkHuLvNkNHtn/c0UcwmMfjvf78mYhmSe9W/G+MHbvxJj8N5bfzfGi49+NcYXT95KcZXuK+gu7qULueTGkIdlBtsu7cMuD039tHTTfP/neVjuekz7vVnlobx7u9O07/cWr8e47X8uxhdf+0sxBq99/s/HuOvSBDd3NvPzfK9Lz+u0TK/LtEyTDUV57prlMg1FPe3nIakv5Nd8eISPZ0NTAXjaZBgBAABokmEE+Ix40gxjsa0mgblYpGzWR2OamGZzMU+IMyxSNqsfb8TYbedSDasxXX5hlbJi3eZbMQZ3P/h/Y/zgnb8d4+VHqeTGyfTdGIMbQ5rMZZXLVIzbeUKcfpm2XVW1+JTM35V2uazGJj93l1WWdrf6XIynL6Wi/C+++qdjPLv5Z2IMxtVPx3hnk57TTfXY1ov0XExdei1WJ/P9np2l269y2ZO+1CHZO12kjcyvyuxBH9kyjQA8LTKMAAAANMkwAnxGtDKMxaNkkOo387tjLtvQp6Xb3Xz+3N176Xy9cZOyW8vhPMZgOaaMW7dN5yXWJTfOV2/HePHB/xPjt3/3b8V48eE/izF48fT9GG8s031sLz+MMVgO6THkXfrUjIv0uINdPsfyYptKWdyb0vmdwerGz8T4+o+l8xRf/ELKMC66n0xx7wd30rZ2paD+cn6dxj5nGHPZkbOhOo80F+dfTun2U/X6nCzn2wHAp02GEQAAgCYdRgAAAJoMSQX4jHjct+P7hqlWq+8u0hDHYZmGTE55Epzg7mWeCGdMw077xleH0zoNjz2pvlc8P8nDLtfvxHD7zX8c43tv/YMYg3H7L2JcDb8T40n3bozBsEv7O3zKs97UZT3Wefjn5fiFGIflH4kxePGVfyvGW6//coyLG38ohnWelCa4vcslM07Skz/mUhrBqk/DTs+GFE/zZENBt8vP5a7xmp/n6/pHf57qY6dc7lsvLAA8Jp8mAAAANMkwAnxGPOztuHXdfRPj5AlUost8+zKRTj+Xt1is0rLtmIr6l4xjME3pdqfLlBXrNikG40XKpp3mEhR994MY77yTJsEJvvPdVHJju/vnMb56c5705uReyjauxpz9rB5Sly9P+THVj3Z33yw56TbDnMw7TKRT4lhlEbf5YokX/Qvpwt69/o0YpyFNcPPaK382xuDlz//JdGH55RhuX6SNb4Y0oU9w+mLKGl5u0nO4neadOl2mCXVunb0SYzfOk+0sLnOZk1Lt5KSa6CYnIqecYXyUCY/qCZPKsTKUiXgA4GOQYQQAAKBJhhHgeVQlFKMqwzjl8+zGnCncbHIJjr31OqW8dpt0+5NhzsZtL1JmbbVImcYb5zk91n0/xb0P3/31GL/z3X8S4733Ugx+5Oy3Y3w5n9e4yudJBruLtK1tPr9xLOdL7q1P8n7m7N2ts1T6Yv3+RzEGN3bp+8/TXLri7nzK5uLyNGX2Lm6l1N0728/HGHQ3/kKML7+ezld8442fizFYLV+N8eIirb/O99Gv5kzhMu9n+SjtqvMGV0O6v5Lp61ql+MfyEVx9FJdt/PDEIgA8dTKMAAAANOkwAgAA0GRIKsBzaH5nTxfKMNQkXd7l63ZVaYfNOg1F3eUSGIvNvN6QJ2HppzQ0te9SWY7lMA8N3W5TyY233/7dGG+/PU+Ic3bn78T4av+9GG9M1bjRPCx2l4ed7oZ5PObFafpus8wP02/Sz+fVp9fZvbT+qs+Tx5y/nOLe2+t0w7dP0gQ+/ef+aIzBrdf+0xiHs1+I8fxsHoLb5YlzxjwUdZpSvDq0NC07O7sRY13KolwehrzelSGm6XGWj+D6o7jvq8lxAOBTNn+yAQAAQEWGEeA5NL+150zWlQxjuq4sGauPgd02pcHGMX2fuLuYJ8vpSsmIXBaj61Km8XQ1T5ozLFOpjnt334rx4v1vxhjc+07KMA53vxHjavOdGIMbJ6ksxXKZ8og5KRhddKk8xdSlSWTGXDLkhSoLebpO5TtKCYp1nrAmeGeTsoaXL/90jK9++c/FGNx6NV1ej2kinPEwCU3IlubnLk/EM+RJbPquzgCm5+n8PN1HXQKjZBjLoodlGGtd15gcBwA+JTKMAAAANMkwAjyHHifDuP8oyDGsV8pEpO8T69MM791NGcXdJhfwzwXmz1bp52CaUoZxt0vnNZ51H8QYXL6Vivm/9+1/GOO99341xuDW+Q9SvJHucJOzmMHdzXmM0yKdJ3jal0xjuq/ghZzl3OaE6Nu3U1Yy6F/9xRhf/al/N8azz/2RGINd98UYt4tUqqM+n3Obz9+cpvT8LJfp/MjTk7Q/wclJuZ/7v3+dM4pXX4ug69Ky6XDdbD5H0ne6AHz6fBoBAADQJMMI8Byapvncw6jKMJasVincX3932C1y2rCoNnPvTvphvU4ZxaFP6y+HORs45RlUhy6di3jWz9nHbpPOM7z3dirm//6bfzXGYH3312I8H74f49npnPXcbHOh/su07Pw0ZRrHnOkMhi5dvhzT/l8OKXMYvPblfyfGGz/6F2O8m89XDLZTzlYeMqvzR2I5l3AY0jmLy3wO45xVDNddPd/w6ifq8cfr/BrUr8cxGUYAPkt8GgEAANCkwwgAAECTIakAz6FxTEMey+QqV4dApmXjIc66RRp+WYZFVnPPHCZxySNSF5f3UuH+aZrLapzkihN9HpI6btNtgtO8gdXy7Rh37//dGIPv/e5fiXHzYRqaeut8Hgu7HFLJios7ZWfy0NQbL8YYrHOpjXGVhpt+/qf/TIzR5/9EDBeXPxvj+/fm4vw3b6bHuV6nx1CX1Tg5SUNQSzH/5TI9uPzURrtd2s9y27a0wlSP7z0o9zcPwTUkFYDPEp9GAAAANMkwAjyHpl3JMObMVT9nt6ac8dqVQvyVKRelL5nGXUoURjnBtshJtcX6Xt7Otpp8pk8fKWXSnW11XfHSjZTN67epgH9w53sp23j7zRTHi9+NMVgt0jaWfXosl5u0U8PJazFGw5diuPXGvxHj6ZerDOPwkzF8/6N0+20uzxHcPMvZv20u0ZHLiQSnp6c5pjIa5bmsS2+UTO5qdXXym2Au4l+e5/n5LhMPTYfXYM4w9vk18J0uAJ8FPo0AAABokmEEeA6VqhqHJFcugRGUc+l2OTtWfwyM+fZ9n7Jcfc40BjlpGTYQ9fkrx12VRLy4TGU1ppyG7MpJjXuXeVmfi/q/3Kdi/cFy/K0Y19//mzG+9Xvz+Y3D+rsxvvRSKpxf9uO923Om8OXP//kYX/ypVDpjMfxEintv303nOm7OfizG0/PqfMN7d2JY5QzsapXuIyiXS6awPE/luQnKczCfMzpnCg/njx7Ur0G6ToYRgM86n0YAAAA06TACAADQZEgqwPNoHv2YXPl6MF1ZJr8pwyOD3WGoZIp1CYnlkIZydtXwyeBynce/7q1zzY1pm0pgbKthmdtV2onllG5zvknDV4Ob/bdjvPN7/0eM3//dvxpj8OrpmzEO/QcxTnmo6Pv3UgmN4JUv/Mcx3vrSvx/jvUUafhrcXqQhqdP5rRg3m7lWyEku+3G6TI+pLo9RLpdhp0X9qVnKcAzD1WGrydUXoS6rMQ9dLbefn1NlNQD4LPFpBAAAQJMOI8A1EBJfc+tSW6RW6/dLQgsJsNCWQ3dooSBFaLtpE9t6exHbtmrTfnls/RRbTJblNnVjbGPXx7ZbnB7aYhGyf7f2l89jW0wnh9bt9zW1/X7FB7Dfj31Le5raZnEztkX3Umy77sVDG7uz2PYrxRZuXdp+N2IrwuQ1pW2329hCGY3QyvNX6/sutiJkDks71r4uXL7/tgDwWaHDCAAAQJMOI8BzKOXSqrb/b24hW7a/EM6/y+fgFV3+t9x/PIQ27C+XFmt17Nt6fS+2y8vUtrv1oS26Mbaun1Lrqjbtl8cyEqlNXXdo6eOoz9dcla5ZLIZpvx8h0zimNl/T77dxEtuuO01tWB7afpXYhmkbWzfObdntH+e+TfvthbbbToe2We+utO1miq1+LsOuX0kYVuqMYswqTvt9LQ0AnhE+tQAAAGjSYQQAAKBJhxHgOXSYzCUMl8zDJkubhRv0i26qWvi5+mgIJTfKvzABTGhjbrvdLrYyxDS0w/DLrBunQ0v3tl+W7+uqvI0ypDVsq7TD/oV1w1DQ/d7s27jfWmm7bpnaMMQ27m9Y2qLb7+O+9dM6ttW0PbTyiIvymEIL5TfqVpaX+4/Deh9DPTy1DPS9Mky1tP0e+XgG4LPCJxIAAABNOowAz7GQ7Lu/VZmusKBWZojJNuvNoe02u9imUGJi38pkOMtueWj91MfW7fbX7Nu47Q6tH/fX79swLlKb9tvIrZTs6BeXsS26zaEN4xhb2XZptV0/xjZ1+/0Lrb84tC6Uz9i31bhNbTceWnik6dGmS3X2sJTXqLOO97dScuP+NmcKH7cBwGeHTyYAAACadBgBnhv5PMB9m6Zwrl04vzBl7urrjjOLh0L++1YyZtvNGNv6cntopdxEOf9u6Jax1dmxUp6ibK8b+0Nb7VJb7i+HVspsxFIb+TzDRb+JrV+sD61kAcs5jK3M6NSF7OK42OV/h+3t27DfRmgn0xTbchwPrd/fd2gtx/dTsorbfC5naOX8xpKNbGcaAeDZpcMIAABAkw4jAAAATTqMAM+h3WKTWx6iWQ1JnVtShqHGthlj21ymttvsr89tMXapxY+OfjFNQ2rb/eXSdl1s3X55aMt+dWj9ft3QhilMeFO2Uj6I0tDZbr+vodVDSsOjCa0U0SjLp357aLv98tDK0NTFuL9NbmXY6XIMw1H3bX8Ppe0fQGpZ3/f3ta6fYts/O7HVQ1LX63VsZUhq3R5taGp4Po8bAHx26DACAADQpMMI8By6L8tV/Svq7Fdpm+14pdWmro+t64bYyjpXy0ykViaMWS6Xh/Yo+lBMf9+6mG1Mbez72Hb7+w6tZAeHaTy0kqGcFuvYumm/D6WNU2wlgzftP/rmtn9c+5b+398u73erFXUWsTze+jk8bgDwLNNhBAAAoKmbfP0J8Ewqb9/HMZhyQmzoh3ShMuWc2uVFODFxEc/BK0K2rDb08/eKj/Zh8eDvIUNJjGBapPtdTPP9vrz6/Rjv/f7/GOPb3/prMQYvnlzGeLq4G2M3XcT4g90XYgy6L/+XMb7y438pxu3u9RiD3eY0xrMhxc1mfozjMu3voz22BwvZxmAY5ud7tVpdict8Xz/UY3ws15lPAHgaZBgBAABo0mEEAACgSYcR4BlXJmWpS0GEoaj1cNS6dMb6chtbmbClVm8jtDA4srRHE4ZmtlspeRGGy4Y27vd5buHn/c0OqvUWy9h2XWrDfvFxKxPkxHGv+1ZKaaS2f1z7VibN2Vbtk3I8MU5wPDFO/RqEUacPGnna2hYAfFp0GAEAAGjSYQT4DAsT2TyolUxUqxVhLpbQSoH50C4vL2Mrxedb2ywZRh5Ned7q57JkFjebzX1ttwuZx/0L8xBlmw9rAPC0+WsAAACAJh1GgM+gOlNVt8dVsoh1K5mvss1Wxqqcf8ejaWX8yvNcnvc6w1iWlQzwx1UfI6UBwCdBhxEAAIAmHUaAz4hWdug4c1Xf5mHt8nITW8lolYxhaGWb5TzF8nNoZf2SHePJleeyPO/lOa1byTRenUH1agOAT5MOIwAAAE06jAAAADTpMAJ8hj1s+OjxUMcyvDG0UkKjXFc73tbxEEjDID8Z5fkt6ue3vC71RDillevK61s3rw8Af9B0GAEAAGjSYQT4jKgzUI+i3PY4qxhaWVZuU7Jddcarlckqt1kul7HxaMrzXCuZ3FYrt2+9dvXrEVq57fH2a63XFwA+CTqMAAAANOkwAjxD6kxSyTqVTFTJGIb2MHX26rgVwzDExqNpZQDL61Syig977UqmMbT69Qit3LbVWsp9AMAnQYcRAACAJh1GAAAAmnQYAf4A1cMJy5DDMoy0vu54WGFZfnFxcWj37t2L7fLyMrZ6SGoZBlm0tl2GndatKMMjeTTHr1dQP+fHrdy+vE71a3D8utYlN8ox07q/Y637fVgDgBYdRgAAAJp0GAE+JQ/LMhUlY1hKLtRZxKKsXzeeXcfZw5JVrLPRpT0sO3i8HQB4Ev6qAAAAoEmHEeATVp8XdtxK1qfVaiWjVDKL5Xy2uvzC8TZlGJ8P5fUsr2+dUazPZwytLH+Ysr0f1gCgxV8VAAAANOkwAgAA0KTDCPAJKUMIW+1x1UNPQytDD+ttHg8lrCdH4dl1/LqW1z60cjyUIanl50/yta+PsdIAuL50GAEAAGjSYQT4mI6zMCVDVGeJ6mzNg1qZ2KYu1l6yRmV79cQ2ZVlZv85E8fyoj5FyPNSvdWgl0xhaWVavVxoAPC4dRgAAAJp0GAE+YSXzV2cEy88lQ1RniUpmqJTQqAv0F8fbCU326HqoX/OivOblOCkZ6bqV6+pjrjTHDACPSocRAACAJh1GAAAAmnQYAT6mxxneV24b2vFQ1PJzaOU2x0MRyzDDeqhhuc1yuTw0nl3ltS/KcORWK7etj51yPNVDUEs73nbL8TEHwPWmwwgAAECTDiPAH4CStSkZntBK1qdkDNNbcmlX1Vmi41YMw+rQxsVwtXX725bWb2NbdI12uP+h0dJ13X6LoTXX328/tsZ25v3pY9s/G4fWT/sl+zYtlrn1h7YbLmMb+9S2fR/brhsObRiXsS13Q2zdNLddF24b1hlTG7aHtusWsY25zftd73v5Oaseb7c4bvvFpeX7X0yr+9q435/Urr4mse0fdWjTfiOhlWMntJJZnI+n1MJhUNp2u3+M+1YvK63c/pBpHKsWEo9V29/D4R8A11f1CQgAAACzbopfMQLwpHbbdYxDOXdwmr+Lm0JaZ+/u3YsYw7llx4YhZLGC+ju8tN79GstjRi9ccxJjsFucxTh2+S2+/yjFvb67jLGb0nr9VJ3zON6MoRvnbR10ad+77m6MU18eS7XfIYMWwngrxnGRfg7W4ybG1XIb40un83OxvPj1GN/7/f8txne/89djDFbdb8X44o38WDYvxPD+3S/FGLz8Y/9Zij/5H8V4d3wjxuC9XJ1kvJkuTIt0/8HZNj3OYZdil/c/Kq9jyCbu9Yu0/11/J8bgvudwOk1xb8zP5RSzlCmTWZTnbrfMr0s3l1BZ7vI+5Pvvq+Ppfum68jLXxpi13m+vOqd1tUrbXq3SPg19a9uNY6zcTrIR4Np52KcQAAAA15gOI8DHVM4rOwgDN3Kbz09M6vPRum6ILb0V/7C345D1aWR+rii3CefF7WKbum1sMYNV2vG24nl2qXXjMrbDz1daH1sRzj0Mrb7f+4ST8HI7OzuJbdxOsW3ufnhoi/EytjLLa78c5jZMsXXL1C739xpaP5wd2mq//dAW9+7FNm32jzu3oV/Ftjo9ia1bza3sXhEezaEdXVfON7wipPZiei89/pBxLK2chVluMp+VGRbsb3+8rWzaLw+tKOdX1u1Rjpl+f2yFVs5XDK2c9zpt98fGvoVdObSyyf2xGRsA7D380wYAAIBrS4cRAACAJpPeAHxsafjgOKXJUXbb+W11s0kTpex2aVldBiOUN6iFYaoP1hq+eHVZvbnDBCtlaGMcipp0Y/muME180o/zRC3d7rxcyv9XHxF5spxFmfQl/zx11XePZdKYMU1MM1WTwAxD2ub64oMYbw1vxxicDL8d48Wbfy3Gt7/zN2MMut1vxPjSedrfi4sbMV6ufzzG4LUv/Icxnn/pL8S4W/5rMQYfdmnymc2NtG/bPFFNsNyky0N5mPUEM0dDRssEN0M1ac7+QzTGslZ3ZXxrWloWhdIeRXl9dodF83311VMe1MOAZ1eXHa8T9Pn1LcdlUI6x1ZDWPzmZJzdarvI2y3FY/3kQh04DcB21PoUAAABAhhHgyVzNPgXbXSqVsL6cMzrbbbl8//dzJcNYso5XJs45uP9+ZlevuzJRSp8ymwd16YycBZwzi/N13ZgzSXlb3WLOTC66vM0ulQjZbyj9X2dGj8pLxAl0st06bfN8eTvGs7PvxBhd/NMYPvp2yjB+8PavxhgM2zdjPM1PT9+9EuOHd1MMXv78n4jxxZ/58zEuzn8uxb17mxdj/GhKWc/NmLOge2dDfg5y6YxDFjU4PIfleU07MJSyF3tdfrxDvkko3n/QlwxsuvJKWY38nO8OZUfm52m+vxSfOMOYj6dxNx8L5Vgr2d7T0zkDfHqS9qErx2Ezw9jaFwCeZ975AQAAaJJhBHgiJQsULqW30fU6Zd4uL+csVcnopPIZc9YnKKczHjKMXZ1lOnJ0Pl1bld0q2cDyveBYzk3cK+cVhtIZwZWq7yXTlta/kjE73odDNrHe77zNnBU7nBu4t7xM2cqzsx/EuJj+cYp7H33/b8X4wff/XoyrXcoqBmf5/M/1nbRPZ2evxXj7Ys70DS/9WIyvfPGXYly98rUYg+ns52NcT1+O8fblrRiDIWcYxz7t27R8L8Yon6tZsrV9zkx2u3ROZNDn57XPmdRS3D/ourT+lDONYz8/lyXDOE1p/bGc+7lXZ4qTH/7d7pWXMCvH2lSVdSklXsphWAr5ByXDWAr91+fUduV19T0zwLXjnR8AAIAmHUYAAACaDEkF+JjW2zTkcLMpcR4CeDyhTRmaGpS33xLnYX+PqAxdLJOiXBnKWK7Lw0Xz0MeoDEUttzkMX90b0oQ0iy5N4LO/cY77RWW9Mrz1MLQ138feYWhknkRmNc3Dc8/L/Vz8egwfvvtXYwze+t7fiHG8+EaMb7wwf595Y5Emrbn9flr/ZJmGlG6q4b338tjXzSpNhHP62jwk9fNf/HMxdi/8cozri8/HGFzkx7Itm1q9lS+Ep+nDGMc8pPQwWdD21RiDMjx12KXnoquGKvd9eS7vxXDYzl4ptVHKjoxXJr1Jz/P0GN/ptoakliGlVz7mx2qI8V49RHq5TJdLqY3lMB+P83DpR98nAJ4P3vkBAABokmEE+Jju3Lsb47ZRuP/4LbbOMN7vcb/DK9mstF5/pWh8nrgkT9QyLarrsnHIWcT+oxSDIRXVnzOM8z71u1SWotvmchY5O1cXq+9LGY6cqTyd3o0xWN37dowfvvUrMb733lycf335azHe6NKEODfnevKL813K6K3vpudu6FNWbjqZn9s7XXoMH2zzvpynCW6Cz33+T8f48iu55Mbqqynu3ZvSZDnrPm17d1JlGJfvxzhnGPNrt3s5xb1+my53uxsx1uUtupyd7XKGcRrScRLl53fKqcGxfn1y1nFaVE/CD9HKME5Tei2uTF6TL5di/iUDHgw5o1hKbZyt5vsfHjYhEwDPNRlGAAAAmmQYAZ5A/cb54YcpmzZWSaKivMW23mpLtmc+16yxgcdxODdxsejHs3Sh3G1192P5qnDIZR9KVjHI5+0tupydOhT3D9m0dC5ht01lLUqR/6F6bOW8vW75/RhPu7k4/0e//w9jfO+7KcO43vyLGINXbqUM4Y2c7dzkEhpBv07ZrVWXsnjdkLKmpRRGsDlJJU02Q8qK3a3OM9z1Kdv46iu5uP8bfyrGYJuzjRd9Oi9yt5yzrVOfMoO7Ie3L4TzDMe1HtEvrHbKvc8Lu8I1syTQu8vaifLmU3KiN+XzTUnqjzh6WQ6SVUTy2ywX7S5mMoJyzWMprbLfzOY3lODxkGM/yMbR3kjOwAFw/MowAAAA06TACAADQZEgqcC3Vk33UpQWChw0fLUP5LtfzUL7tNm2rNST1cdTDAw8ea5jqPPRwuchDSfP69b5Nfb6fPPxzrCdj6dMw1T6X6lh189DO7d00RHEoE7zkp7Dv8jDWvRdupkluLnf/MsZ3vv1/xRjczUNRb0xvx7hczMM/l2Pah+UiDS1dlslz9sq+HCaUyaMj67ITmzxGc50njLmc0lDRYDekIbTL5Rdi3C1/Ksbgi//6fxLjxe6NGKdunuhlWqWhobtFGgJ7d50mqtlVQ3+XQ3pOpjE9932eZCgoZUgO+52H+UZdHop6GKZajWWd0j6M3dHj3iuvY1k2v67V+lk5Vuvj+/hYr38PyjFehrCWSXCCW+fz8NSgNdT6eIh17bi8DADPDu/cAAAANMkwAtdSKzNStN4Wy21KFrAuzn/7TsoSldIIQ7W9KV8e8qI60zfk2495ppSTPGFL8KBM0sOyTfu9zDFcmjNdQX2/Uymgn7NbY19KaOzlLFjJlG1v5yL9ey+ep4ldtjkxeHmRJrh5+aVUCiPqvhnDd9/6azF++M6vxhi8cPl7Md4Y03p9njQn6Mb0IIYpPRdDLgkR9If9S899Vx5wVaJkm7NymzxJz7qarGfs03XDKu3/ZjkX7r/5o382xtWLqdD/6dmcfVznyX0uNqk4/7RMWba+SrZNQ9qnMRfEL9nQ4DBh0HGmsVayjl3O+kblhum5qF66wzVlWWuT5bWetnnbQ7VP+XgsGb8qwXg47ksWcFVNdHPzhfSgy6Fdbtv6PZJhBHi+eOcGAACgSYYRuJZamZGi9bZYlpUMYzlvMbi8SBm7kk3sq5xQOQWxfDs3VXUX+nz7smy3ma8re1C2dPxzcN9t6izV4Xy5tM2x+n7w/tMiqwU5UzfsUnZsmYvzB4c6+Tm7en6SM4uruTzGO2/+9Ri/8/2/EuPp4vdjDF7L5+2d5t3stvO2F1PKYA0lPVad71cK3x/O+yvPYTdnUce8/jafw7irUqpjfu1KNnCzTJnG4OIkFe5/6Y1fjvG1Utw/6H4uhrubdJttn8tczMnL/dOV9u1i+06Mi5K93ZszjCn2uQRHVGVAo+q4OH68Dyurcf9rOS9bDfmc1r66Uc6AluO5nWFMmcX61+LmC+m1Ok4Qtn6PWhnGcrvWdQB8tskwAgAA0KTDCAAAQJMhqcC19LhvfWXSjm1j0psyzO+g2nYZDtkdhobW66XL5dbLqoxBGaZ6PPSwPTwxDzOshkNOXSpPcRgCe2Uf0/2MefhpGTIZ9HkIar9Lt1lVQxYvb78f40tnuQzHKg03/SAPQw3eevtvpQvd12M46+cJcW7lba22aSjptJuHhi7GNKR0Ouxndcd5cp4ulwMpE8xcmdinyzPRTGkYZv3y7vJkOVMu2bGuZp/5cJe2cXLrKzG+/uq/F2Pwwqv/drrQp+sutml/7+XnNjpL+zacpYl8xn5+DfpcaqMMt+22L8UYlaG+1X4WXZ+235ehqQ9RT2Z0rAybru+iyxMFlZIk9eqHZY1hozfO0zEy5NmbHjZ5jSGpAM+XB7/jAwAAcK3JMALX3vHbYJ0FKdeVIuibTcoglUxjUFWAiEqJiKCUzOjyjcrPQZ9zP7ucdazLGJTblWRYySTVpRnmZem7v7Ga9KZkGPeXcqwfU8ks5sxXzu4FfZ6MZcgZ1dUiFfIPVn0qyr8YvxXDh9/7+zG+9d2/G2NwtvpOjDdvpNobm9t5Mpi9s1wUf8jlNKYx78feuCjZuJwhrBJRh8eVn5PdLr0GJVsWdDlrWkqa1K9hlzOM45hfuyoTu82bWI+5uP/JH40xePm1PxXj2St/IsbF6R+KYdPPmc3dMj2/2z5lXesM48GUbz/WGdV8ebwRQ5/LiQRd/2G60OdJfh6iOhwq5bvgfFzE/5NyqJdsYp+ft2Dq0rJyzNe/F6en6TGsVimW4v61cvvy3MsmAjwfyqcKAAAAXCHDCFx75fzEoj4/q7xFlsxiiWMpir53/M1bV59oWPI7eVn7uhR3uzlDeDUv9MOUPajWKVmi+P+xnFXK2cSuZBz3+jFta5kziyfDnCFcdKnw/off/dsxvv3tX4nxbPFmjMELQz6/cZPOv1tVSabukEVL9zFV2a1dTikeslx1ljc/PyUeXq/64ytnWYdSdL6633Iv0yK/dtOcuVudpWsv1inLenv9eozBtPrZGG+9njKML/3YH4tx8eKXUwymlCm8uFzHuOur16AqDRKVTGNwyDqW0iLzev2hfEhav3XealHd232Wy/T67qobTXkD4yHjnJ6vKD+HJZu+q7KeJyfpGDk9TdssmcY6i1heFxlGgOdL9UkBAAAAMx1GAAAAmgxJBa69RxmSul6nIYclTtU4v1UuNVBKZ0zVUL7pUDojx2qGnHK7ct1qNQ/RvG+w4ZWhrEcO4xTniUiGPKHNYpoHZBaHUgz5ur66r2Uertnnchi7y1+LMfjwnf87xre/9zdiPNmkCW5evzEPtZw+SsNqtx+koYsv3rwZY7DpPohx7MtzMj/eXd6nXXnqq6Gdu1xOo8sz/pShjrtt9Zxs0oplEpd6SOqyrLdIj23KZTmCky7t+y5PoPPRdl7xzpjKYHQ309DUlz7/x2O8+covxxj0pz8Z425KQ1l3eXtRnlxnKpPXVJPtzK9v2u+rL2+183sPG5J6+Lkqm1Je3/Vluo9dY+hu36djZRiq/c2TLpVfh3E+VBf9Ml13dpaOqzJEtTUktXhY6Q0Anh3ezQEAAGiSYQSuvcfLMOYSDdWkN6WMRp+zc90ulZSItimrNm1y3M7Xjbs0Mcw45clYciYtGHNaaapKZQSlSH9Qymn0uUxFPalK16fJVEr5hP0Wc5y3PW9pvo8+Z+FWJcO4+40Yg+9/+x/EOK3TsldupOfkZDN/jKw2aRKYk83nYizPV9Cfp8e7G3Lmrcowlr0bh7yteecWU5+zunlZKemwW8+PaZdust9AulE7w5gzfHWW9zJfN6T1xtN5n9bLlE27s01Z0m2XymrceiVPfrP3yud+KcaPbqfyGLtFyqxG+bWbM4xVwf+u7HBLefApXs0+5usOqcWrtw3Ka16ygPURNPXpMQ0nL8e4XP5YjEE/pGVjLhuyrTPlecKhkmEsk9/IMAI8/7ybAwAA0CTDCFwTV7Mf9fdlc2YkLasTI7tdeou8uEjZoc26ZKeqzMomZbxePEkZrOWYyk8E73z9r8e4efv/i3G5m0tQrHLGaTPdjnE8nfdxvUzbKufvldIbwzifp3iyySUOtiWbOF93uUzrXSnzkJVs0dXMVZZLOfQ5GzcsU1YwGHKpjWGRlnX5nLyhuosuF97vx5LtrJ7MnHEb8/3XjnflcJ5llK89Xq/Ktu6vjP/nZOIV3WHr999vvYWgnEsZjPnasZznuEjP85iL7QdjWbZNtxlzWZArDuU16vu/ui9TPq8zWl7NPvbVa77Ilw/LdikO41waZVce7zLdx6Y6oDdDzgDf+sUYv/QT/3mMwa7/iRjv5Iz1mM/NDab8Wp+cpm2VTOMwzBnZovVnhRIbAM+uxicbAAAALGQYgeviOLs0f1/20AxjTvBdXKTz0Erh/vr8u03O8tw6SZnC8/HrMQbv/fr/HuP0zj+M8WyXZhYNTnKR+23OMG5P57fjkmHc5vRdybidVImok03Kbp2ub8VYsmzBepn2dztUKzyBTzQzdDzF52dBM836+D7uR+khk7y3yxnGkontd/OxNuTsX8kodjmTW2eey9O861MG+3I5H9CXy3SsLG+l8zB/5Mf/uxiDXf+VGG8vcka1/kUY0/F4epLuR4YR4PqoPg0AAABgpsMIAABAkyGpwDXxyQ5J3fbzELt7+eL56fsx3hz/WYzB9/7lX46xe/cfxfjC+O0Yg7M87HTM5TjWy3mb6zxhyfZoFpe8ODrZpklvTtdpeGCZcCYqJR0+oSGXPF3banKiecKiGBZDLhUSlJdzyBP+lOu6arjvlCfZ2eYhqRfVsXp5mibsWd76N2P8sS//NzEG6yFNhHMnT540LdJxFeQRzovzXGrEkFSA66P6swgAAABmOowATyRkUVLr+tRCuYrYFutD23X3UlvciW0c7h1a11/E1g9jal13aMtxFVu/WOaW/g3T8tBC1ia0kGwKret3h9ZPU2zdNMY2VO14Wfm5taz83Fr2OLdpLSs/t5aVn1vLHuc2rWXl59ay8nNr2ePcprWs/NxaFhLJpa2mVWr71z+2aahal9uU2y61xbZq4efdfrvbRkv3twhZ9X3rxv0xktsit5AhNPgIgEKHEQAAgCbnMALXRHXyXzR/X/ZEZTW6+ZysXT7n63z4QYq7X40x+N7X/9cY+/d+Jcabi+/FGNzMpxxO+f533VwQftulsgmbvC+l2H7MDmXLfP7aSTnZrbLLhfdL4f6QuSpKiY6yrC6Sf7wsZp6yB6336NtO+/n466X4JLcJHr5een4eZ73WbYZc0uTqtlN8tG1Xr2GXyloUfS5pEZTXfygf3eX1qUuW5IubfB7r3WHe9sXqpRj7m388xte//N/HGIz9V2P8aJGOvXFZnZ84pW2dKKsBcO3c/1cGAAAA7OkwAgAA0GRIKnBNzEM5k/n7sicZknoY97c3Tbm8xfLtGG/sUgmN4Ltf/59j7D74ezHeXLwVY3BryNvYpbibXogx2ORhiWWo4piHpPaLVDIh6Bdp51bzooPNkIdaljGPV4YsHi2rS28cLatGwD54vYdt+1nxKI/lIbfpyvFUbhM8wnplWZeH6wbLKQ0JLTfpx3wQ7pXXvAwRPRzWV8bCpjANaQN3unnY6L3Vy+nCC2VI6v8QY1CGpN7u0vG8W1W/CNM6hpPTtMyQVIDro/o0AAAAgJkMI3BN1KmyYP6+7ONOerPOGaGzZcoeni/mDON3vvE/pQsf/v0Ybi3eiTF4IW9intPkZo77+13kLE++zZQnMOm6XEF9r8vZxlXONtWPcL0s65f9rL8fvPp4r655ddlUZ8UeuN7Dtv2seJTH8uDbdIcsXrlN8MPXK8vq4vzL7XmMOUG4GBbza76Y0uVhSgdNX+6/ylBuY7mXfcy7dNHl2ZX27i5ThrHLk978aDXpzeUyFe6/3afs9jTM6/XbdIydr0x6A3Dd1J9eAAAAcCDDCFwTdeYnmL8ve6IM42LOrGymdPl0lbKHp4u5rMZ3vvm/xDh9lDKMNxbfjzF4IZ+fmJNG+3fkF/OFkKVJWctSMWPq0zlkXXcvxqDPpTNKprG2XaQM0C6X53jCU+seab2nue3gQes9zW0HD1rvaWx7kY+hYNil7HA5DPsqw1guD4fXPh+705wNLNtOR8z+2M0Zw6Ccw9i98Mdi/OJP/LcxBuvlV2K83ad96Yd5ve4ybe18lbPpMowA10b1ZxEAAADMdBgBAABoMiQVuCauDkndbOZhnPOwuvQd2jxEdbFYDmnZ++/fjrEMrRurMgbTLg3TO+lTWY2b5/8yxuD3fj1NenPnB38nxi/cmoeUXn74UYw3hjTJybS7EWNQhrxOXdrPsc8z4/R3UgzyBDil1EJXDUscdmmbiykNK3wawygf5zbBJ73e09x28KD1nsa2d9XENNtcUuVwmytDUtPQ0DIcuVRN2R+pOe63lY+de3mimv6FXEpj78MxHWPLW2lI6o986b+OMehf+FqM7+/Stpen6bgOVrv0O3FxOx1/b7zxRoz1nxDHw07r36Oir8d7A/BM8M4NAABAkwwjcE0cZzvu/76svBvucjYlKBnG995L2cCSjRyqVFK/SbdZTmlCm9VJlWH8xl+O8c4PfiXG11/MmcK9MWdrzpdpApExT3ZSm7qUURr7nGXq5wzlIi/r84531cQppTRDn7OOTyMr9ji3CT7p9Z7mtoMHrfc0tr3t5xUv+zLhUToO61IqJcNYJjrqSzmNcT52xkXKUK5LFvxkLtfywTZnw2/9kRi/+OX/KsZgdSuV1Xh/k47LaTn/jpwNaft3b6fj73Of+1yMrSxia4Ibk94APLvu/4sJAAAA9mQYgWviaibkakH6pCRL6rfFkmF8990PY1ytUvbmrNreapMLGGy/k2L/9RT3vvubfyXG2+/+kxhfeWHOMG7upGzNeS6yP27rfUrbn0pGMWcTD5nGIJ/fWNJVh2zTXj+Wc9rSsvlct/028t2UZdXpmPcte5T1nua2gwet9zS3HTxovaex7V2VgVvnY27s0jFQZxjLa37IVuascj/mc1b3xikfT/lcyG03X3c3V/M/e+kPx/jjX/4vYgy6l38uxottyqZvqvMN+8ULMd69l86LfP3112Pc7eZzgYuSTayzijKMAM+u+dMAAAAAKjqMAAAANBmSClwTV4ekNubqOCy7MpRu/y948823YizXraohrafrNExv2L6T4upfxRi8+d1/FOO9O9+K8db5fMe7yzSU9TRPcjJVk+0surTNRX83hqmU1ciT4ARj+c4vl87wHeCzq/4gHnOJjKnPx0A3D2Mux3FXjucpHTt9VZKlTHoz5e2M/TwZ0r1tWm91noafvv7GfxBj0J/9oRjvTO/FuC1DnveGPm1/m3flS1/6Uoz1pDflz4nyO6KEBsDzwbs5AAAATTKMwDVRZe+iR/u+bLNOb5Hf+lbKEF5cXMQ4VWUMdvdejHHIk5ScvfBBjMHdeynbOE1p2a0bJRu4Xy9v+2TIGcYxZ5T2DhOdlAzjIbM47/eUM0mLMU1IUhd/3+V9KaUZPhs+i99Rfjaen2Gcn5thTBnBruQdq6xymfRmyq/vopRN2aXSLEnZVrpNt5wzhRe7dPxup1diXPZp8pvgcpEmx7mby8P0Qzr2gltDyhqe5gl5fuZnfibGVhaxZBjrPy9MegPw7PosfnoDAADwGSDDCFwTx5mk+fuy8jbYyoKsL9N63/jGN2K8cycVNd/tUlYw6LsfjXHK5zuenKcsTrBZpBIFXT4H8TSX0AhKNY5SImE1n2pWZRhzEfVDCY05QzlOuVzC7uUYpsW8ge0yl+E4nP9Wfz9YnouyrH5ujpc9ynoPu83D1M93+Sgqy+qPpuNlj3Ob4GHrFZ/U4y0/B4++3lDV41juUtbwcOvqHMaxnNt6vM2qrEZZb7tLJVmWq3n9bZdLZuxSVnrcfDnGYDOmY2uz/F6My1U69oLVZdrWi2cpk/mVr3wlxuVyzmofa/15IdMI8OypP70AAADgQIYRuCbqzE/IEM5vfWWmx2FIGZb6tKxyDuM3v/nNGO/eTed19dXMk6vlzRi3+RzEaZgzjLsppRF3ZaP5nLNgc5nPVcu70g/zPvVdKdifszzlRuN8rto4vpQubF9LsfoOsO/fj7Er27ny/eBxxqt+bo6XPcp6D7vNQ0zVbQ7n5OVl5efgeNnj3CZ42HoHZVm13hM93nrbj7Fetb99LsZfjGWG3L3DuYtFWa9km/fmov7pte+qcxG7IWUYpy4dR/04ZxinLt3veJIyjPU5jJuP0v2+eJ6Oua9+9asx1hnDR/lzQoYR4NlTf3oBAADAgQ4jAAAATYakAtfE0VC+6vuyufh4WlYPSd3mQudlSOrFvTTEdLmab7TdpqGom02aaGY6TEyyv7zM21ymIYBdLtIfTGO63OX7HXdV+YQ+T3pTJr8ppnnSnEUu1j6NadKbrhrWOOQhqf0irV8PBCxv+mVZ/SFwvOxR1nvkbef9m/KVh6GTe8fLys/B8bLHuU3w0PXycVFuXl318R9vjo+23vzaLfKQ1MM8OFUB/fuHpOYhztVkSOVxrvKhNu7SMNRgt8hDlRfpOOoWb8RY23ZvpTjOk96cTGmSnJs30pDUX/iFX4ixttvN+xnUJTcMRQV4dlWfUAAAADCTYQSupfqt72Fvg5tNmnDkt3/7t2Ncr1P2sM6YrDdXsz5HOaBozmrVmaRyucRqzUMm6WrWZlGVzmhll4pukSdKydvpq4dYMldlWVXR4b5lj7Le09x28KD1nua2gwet9zS3HVWZ4qg5Sc+R43WCw3r1cVUm0Mm3H6uMdVGy24s5Uz4fqWlHf+mXfinGlmFIx2j53QlWq/uPUQCeDY1PGAAAAFjIMAI8zMVFKpFRCvffu5dKFdTnnJ2d3opx7HwHx/NkzkwOOWNdTkv82te+li5Uyp8TJfu+Xs/n5J6czOfuAvBs8dcNAAAATTqMAAAANBmSClx7pRxAKQNQT2izzSUzypDUu3fvxlgPSe26NPnM6Ds4niv1kNT0O3Jyko71RxmSatIbgOeDv24AAABokmEErqW5WP/9GcZSFiAo1x1nGLuuKm8hw8hzqK8yjJt1muzp7CxNXvOLv/iLMS6XubTLXvmdahXpr4v4A/Bs8Q4OAABAkwwjcO3V2cZj5Tys3/qt34rxUFZjrsS/fyct2cb7Myvw7Jr/PDjN5y6uVulY/+mf/ukY62x8+T0qf1bU2UcAnl0yjAAAADTpMAIAANBkSCpA1no7LBN4vPnmmzHOt5m/bzs5Pc+Xinpoarl9WVbfx/GyR1nvaW47eJL1nua2gwet9zS3HTxovae57eBJ1nua214sdtt1vpSGnb7xxhsx1sqQ1DJRVF1Ko/zetCbEAeCzTYYRAACAJhlG4FoqWZCgTPlf3g7rt8Uyqcd6nTIsJyeprEBt9C7K825K2cPLy8sYz8+Ps+oPzzCWZfUkOQA8G2QYAQAAaJJhBMhKFqRkE4PT09MYH5ZZ8SbK866ceVh+D8rvxXa7jbFW/qyQYQR4PsgwAgAA0KTDCAAAQJMhqQAfkzdRnneKYQBcXzKMAAAANOkwAgAA0KTDCAAAQJNzGAEAAGiSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoEmHEQAAgCYdRgAAAJp0GAEAAGjSYQQAAKBJhxEAAIAmHUYAAACadBgBAABo0mEEAACgSYcRAACAJh1GAAAAmnQYAQAAaNJhBAAAoGGx+P8Bz7fWIjqfdu0AAAAASUVORK5CYII="
                                    ></image>
                                    <text
                                        data-name="21:39"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="70"
                                        fontWeight={600}
                                        transform="translate(2495 242)"
                                    >
                                        <tspan x="-95.799" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    {
                                        network === "mid"
                                            ?
                                            <>
                                                <rect
                                                    width="12"
                                                    height="18"
                                                    fill="#3b3b3b"
                                                    data-name="Rectangle 243"
                                                    rx="2"
                                                    transform="translate(3593 219)"
                                                ></rect>
                                                <rect
                                                    width="14"
                                                    height="27"
                                                    fill="#3b3b3b"
                                                    data-name="Rectangle 241"
                                                    rx="2"
                                                    transform="translate(3616 210)"
                                                ></rect>
                                                <rect
                                                    width="13"
                                                    height="39"
                                                    fill="#3b3b3b"
                                                    data-name="Rectangle 239"
                                                    opacity="0.5"
                                                    rx="2"
                                                    transform="translate(3639 198)"
                                                ></rect>
                                                <rect
                                                    width="13"
                                                    height="52"
                                                    fill="#3b3b3b"
                                                    data-name="Rectangle 237"
                                                    opacity="0.5"
                                                    rx="2"
                                                    transform="translate(3663 185)"
                                                ></rect>
                                            </>
                                            :
                                            network === "strong"
                                                ?
                                                <>
                                                    <rect
                                                        width="12"
                                                        height="18"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(3593 220)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="27"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(3616 211)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="39"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(3639 199)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="52"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(3663 186)"
                                                    ></rect>
                                                </>
                                                :
                                                <>
                                                    <rect
                                                        width="12"
                                                        height="18"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 244"
                                                        rx="2"
                                                        transform="translate(3593 220)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="27"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 242"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(3616 211)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="39"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 240"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(3639 199)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="52"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 238"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(3663 186)"
                                                    ></rect>
                                                </>
                                    }

                                    {
                                        net === "5G"
                                            ?
                                            <>
                                                <text
                                                    fill="#3a3a3a"
                                                    data-name="5G"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="63"
                                                    fontWeight="600"
                                                    transform="translate(3716 238)"
                                                >
                                                    <tspan x="0" y="0">
                                                        5G
                                                    </tspan>
                                                </text>
                                            </>
                                            :
                                            net === "4G"
                                                ?
                                                <>
                                                    <text
                                                        fill="#3a3a3a"
                                                        data-name="4G"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="63"
                                                        fontWeight="600"
                                                        transform="translate(3712 234)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            4G
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                <>
                                                    <path
                                                        fill="#3a3a3a"
                                                        d="M99.606 192a52.69 52.69 0 00-35.3 14.074 1.27 1.27 0 00-.048 1.817l4.256 4.447a1.309 1.309 0 001.849.048 42.819 42.819 0 0129.263-11.428 42.819 42.819 0 0129.263 11.428 1.309 1.309 0 001.849-.048l4.256-4.447a1.271 1.271 0 00-.048-1.817A52.831 52.831 0 0099.606 192z"
                                                        data-name="Path 73"
                                                        transform="translate(3656.104 -2)"
                                                    ></path>
                                                    <path
                                                        fill="#3a3a3a"
                                                        d="M221.936 432.967l4.558 4.511a1.307 1.307 0 001.785.048 24.792 24.792 0 0132.8 0 1.307 1.307 0 001.785-.048l4.559-4.511a1.273 1.273 0 00-.048-1.865 33.99 33.99 0 00-45.425 0 1.3 1.3 0 00-.014 1.865zm22.76 7.443a12.987 12.987 0 00-9.468 4.064 1.275 1.275 0 00.032 1.785l8.511 8.4a1.308 1.308 0 001.849 0l8.511-8.4a1.275 1.275 0 00.032-1.785 13.048 13.048 0 00-9.463-4.063z"
                                                        data-name="Path 72"
                                                        transform="translate(3511.015 -214.039)"
                                                    ></path>
                                                </>
                                    }


                                    <rect
                                        width="110"
                                        height="60"
                                        fill="#3a3a3a"
                                        data-name="Rectangle 245"
                                        rx="23"
                                        transform="translate(3827 184)"
                                    ></rect>



                                    {
                                        battery === "25"
                                            ?
                                            <>
                                                <path
                                                    fill="#3a3a3a"
                                                    d="M23 0h64a23 23 0 0123 23v13a23 23 0 01-23 23H23A23 23 0 010 36V23A23 23 0 0123 0z"
                                                    data-name="Path 75"
                                                    transform="translate(3827 185)"
                                                ></path>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                    data-name="Rectangle 248"
                                                    transform="translate(3938 207)"
                                                ></path>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0h57a23 23 0 0123 23v13a23 23 0 01-23 23H0V0z"
                                                    data-name="Rectangle 249"
                                                    transform="translate(3857 185)"
                                                ></path>
                                                <text
                                                    fill="#fff8f6"
                                                    data-name="25"
                                                    fontFamily="SegoeUI-Bold, Segoe UI"
                                                    fontSize="50"
                                                    fontWeight="500"
                                                    transform="translate(3853 232)"
                                                >
                                                    <tspan x="0" y="0">
                                                        25
                                                    </tspan>
                                                </text>
                                            </>
                                            :
                                            battery === "50" ?
                                                <>
                                                    <path
                                                        fill="#3a3a3a"
                                                        d="M23 0h64a23 23 0 0123 23v14a23 23 0 01-23 23H23A23 23 0 010 37V23A23 23 0 0123 0z"
                                                        data-name="Path 74"
                                                        transform="translate(3827 184)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 251"
                                                        transform="translate(3938 208)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h31a23 23 0 0123 23v14a23 23 0 01-23 23H0V0z"
                                                        data-name="Rectangle 247"
                                                        transform="translate(3883 184)"
                                                    ></path>
                                                    <text
                                                        fill="#fff8f6"
                                                        data-name="50"
                                                        fontFamily="SegoeUI-Bold, Segoe UI"
                                                        fontSize="50"
                                                        fontWeight="500"
                                                        transform="translate(3853 232)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            50
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                <>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v3a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 250"
                                                        transform="translate(3938 208)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h5a23 23 0 0123 23v14A23 23 0 015 60H0V0z"
                                                        data-name="Rectangle 246"
                                                        transform="translate(3909 184)"
                                                    ></path>
                                                    <text
                                                        fill="#fff8f6"
                                                        data-name="78"
                                                        fontFamily="SegoeUI-Bold, Segoe UI"
                                                        fontSize="50"
                                                        fontWeight="500"
                                                        transform="translate(3853 232)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            78
                                                        </tspan>
                                                    </text>
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
                        <label>Amount</label>
                        <input
                            type="text"
                            value={data.amount}
                            name="amount"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Date</label>
                        <input
                            type="text"
                            value={data.date}
                            name="date"
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

export default SixtySixPage;