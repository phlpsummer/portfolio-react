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
                    <h2 className='title'>Ideas for your next trip?</h2>
                    <div className="productSlide">
                        <article>
                            <div className="productPhoto">
                                <img src={process.env.PUBLIC_URL + '/img/sub_board.jpg'} />
                            </div>
                            <div className="con">
                                <p>#미서부 완전일주 #4대캐년 #8/9/10일</p>
                                <div className="price">
                                    <span>2,990,000원~</span>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="productPhoto">
                                <img src={process.env.PUBLIC_URL + '/img/sub_board.jpg'} />
                            </div>
                            <div className="con">
                                <p>#사이판 아쿠아리조트 디럭스가든뷰 #4/5일 #오전출발</p>
                                <div className="price">
                                    <div className='tag'>28%</div><span>849,800원~</span>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="productPhoto">
                                <img src={process.env.PUBLIC_URL + '/img/sub_board.jpg'} />
                            </div>
                            <div className="con">
                                <p>#미서부 완전일주 #4대캐년 #8/9/10일</p>
                                <div className="price">
                                    <div className='tag'>28%</div><span>849,800원~</span>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="productPhoto">
                                <img src={process.env.PUBLIC_URL + '/img/sub_board.jpg'} />
                            </div>
                            <div className="con">
                                <p>#시드니 완전일주 #자유여행으로 내맘대로</p>
                                <div className="price">
                                    <div className="tag">11%</div><span>1,977,200원~</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className='banner'>
                <div className="inner">
                    <p>여행, 예술이 되다.</p>
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