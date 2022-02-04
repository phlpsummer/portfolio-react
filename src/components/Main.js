import Boards from './Boards.js';
import Btn from './Btn.js';
import { useRef } from 'react';

function Main(){
    let frame = useRef(null);
    return (
        <figure id="visual">
            <section ref={frame}>
                <Boards />
            </section>

            <div className="deco_left">
                <p>Explore</p>
                <span>we can go anywhere.</span>
            </div>
            
            <div className="deco_right">
                <p>kr</p>
            </div>

            <Btn frame={frame} />
        </figure>
    )
}
export default Main;