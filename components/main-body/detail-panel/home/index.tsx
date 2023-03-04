import { FC, useEffect } from 'react';
import { HomeProps } from 'lib/types/common'
const Home: FC<HomeProps> = () => {
    let num = 1;
    function getPositions(x: number, y: number) {
        const canvas = document.getElementById("canvas");
        let _x = x - canvas.getBoundingClientRect().left;
        let _y = y - canvas.getBoundingClientRect().top;
        setPointer(_x, _y)
    }
    function setPointer(x: number, y: number) {
        let ctx = document.getElementById("canvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.textAlign = "center";
        ctx.fillStyle = "#fff";
        ctx.globalCompositeOperation = 'destination-over';
        ctx.strokeText(num++, x, y + 2);
        ctx.fill();
    }
    return (
        <div>
            <canvas onClick={(e) => { getPositions(e.clientX, e.clientY) }} id="canvas" width="700" height="500" style={{ backgroundImage: `url(https://designingminds.files.wordpress.com/2016/03/lorem-ipsum.jpg)` }}></canvas>
        </div>
    )
}

export default Home;