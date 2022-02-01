import Panels from './Panels.js';
import Btns from './Btns.js';
import { useRef } from 'react';

function Main(){
    let frame = useRef(null);
    return (
        <figure id="visual">
            <section ref={frame}>
                <Panels />
            </section>

            <div className="deco">
                <p>I wanna go to</p>
                <span>(favorite: )</span>
            </div>

            <Btns frame={frame} />
        </figure>
    )
}
export default Main;