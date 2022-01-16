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

            <Btns frame={frame} />
        </figure>
    )
}
export default Main;