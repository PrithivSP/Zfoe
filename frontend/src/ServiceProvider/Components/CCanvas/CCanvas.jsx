import React from 'react'
import "./CCanvas.css"
import CanvasSvg from "../../../assets/Canvas.svg"
import CanvasThunderSvg from "../../../assets/CanvasThunder.svg"
const CCanvas = () => {
  return (
    <div className='ccanvas'>
        <div className="left">
            <div>
                <img src={CanvasThunderSvg} alt="" />
            </div>
            <h2 className='title'>Sweet Work Community <br />
            for YOU
            </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eum numquam voluptates incidunt, adipisci  Ipsam ducimus neque sequi similique accusantium! Voluptatibus aut adipisci vero a quos aperiam. Qui, aliquid?</p>
            <div className="btn-cont">
                <button className='shop'>Shop now</button><button>Learn more</button>
            </div>
        </div>
        <div className="right">
            <img src={CanvasSvg} alt="canvas" />
        </div>
    </div>
  )
}

export default CCanvas