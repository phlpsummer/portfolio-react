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

            {/* <div className="deco">
                <p>I wanna go to</p>
                <span>(favorite: )</span>
            </div> */}

            <Btn frame={frame} />
        </figure>
    )
}
export default Main;