import Boards from './Boards.js';
import Btn from './Btn.js';
import { useRef } from 'react';

function Main(){
    let frame = useRef(null);
    return (
        <>
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
            <section className='market'>
                <div className="inner">

                </div>
            </section>
            <section className='banner'>
                <div className="inner">

                </div>
            </section>
            <section className='timedeal'>
                <div className="inner">
                    
                </div>
            </section>
        </>
    )
}
export default Main;