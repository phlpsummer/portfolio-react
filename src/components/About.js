function About(){
    return (
        <main className="content about">
            <div className="titBanner" >
                <h2>About</h2>
                <img src={process.env.PUBLIC_URL + '/img/sub_board.jpg'} />
            </div>

            <div className="inner">
                <section className="intro">
                    <h3>Saturday 이야기</h3>
                    <div className="left">
                        <h4>WE CREATE<br/>VALUES<br/>OF ALL TOUR.</h4>
                        <p>행복한 여행, 뜻깊은 여행 그리고 훌륭한 여행!<br/>우리 삶에서 중요한 여행의 새로운 가치를 알리겠습니다.</p>
                    </div>
                    <div className="right">
                        <div className="wrap">
                            <h4>TRUST</h4>
                            <p>고객의, 고객에 의한, 고객을 위한 시스템 정착을 통해 고객 중심의 신뢰 경영을 실현합니다.</p>
                        </div>
                        <div className="wrap">
                            <h4>JOYFUL</h4>
                            <p>일상에서 가장 반짝이는 순간으로 기억될 수 있도록 Saturday가 함께합니다.</p>
                        </div>
                        <div className="wrap">
                            <h4>INNOVATION</h4>
                            <p>모두가 같은 곳에서 똑같은 경험만을 할 수 없기에, 다양한 여행상품 개발로 여행 문화를 선도합니다.</p>
                        </div>
                    </div>
                </section>
                <section className="values">
                    <h3>Values</h3>
                    <div className="wrap">
                        <article>
                            <div className="txt">
                                <span>WILL :<br />THRIST FOR CREATIVITY</span>
                                <h4>BE ORIGINAL,<br/>STAY CREATIVE</h4>
                                <div className="subtitle">독보적인<br/>정체성의 지속적인 추구</div>
                                <div className="arrow"></div>
                                <p>우리의 크리에이티브 아이덴티티는 스튜디오 각자가 지니고 있는 고유한 개성과 이를 실현해 내는 기술의 결합으로 이루어집니다. 여기에 펜을 중심으로 한 사고와 창작을 향한 열망이 촉매제가 되어 오래도록 창작을 지속하여 사랑 받는 회사가 될 것입니다.</p>
                            </div>
                        </article>
                        <article>
                            <div className="txt">
                                <span>WAY :<br/>CROWTH THROUCH CHALLENGES</span>
                                <h4>BE BOLD,<br/>LEARN AND WIN</h4>
                                <div className="subtitle">문제해결을 위한<br/>과감한 시도</div>
                                <div className="arrow"></div>
                                <p>도전이란 새롭고 예측 불가능한 것을 하되, 최선을 다하며, 배움이 있어야 합니다. 반드시 성공하지 못하더라도 끊임없는 시도가 필요하며, 실패가 밑거름이 될 수 있는 가치 있는 도전을 합니다. 성공은 노력 끝에 따라오는 결과이지 우리의 목표가 아닙니다.</p>
                            </div>
                        </article>
                        <article>
                            <div className="txt">
                                <span>SPIRIT :<br/>ALIGNED ON ONE VISION</span>
                                <h4>ONE TEAM,<br/>ONE DREAM</h4>
                                <div className="subtitle">공동의 목표를 향한<br/>팀워크</div>
                                <div className="arrow"></div>
                                <p>우리의 업은 열정을 기반으로 합니다. 회사는 이 열정을 바탕으로 비전에 동의하고 이를 이루기 위해 모인 사람들이 함께 노력하는 공동체입니다. 나와 다른 생각과 문화를 가진 동료를 존중하는 유연한 소통으로 문제를 해결하고 충돌을 조절하는 과정에서 우리만의 특별한 결과물이 만들어 질 것입니다.</p>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="department">
                    <ul className="divi_tree">
                        <li>
                            <div className="ceo">
                                <p>Saturday 대표</p>
                                <span>김선형</span>
                            </div>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <div className="member">
                                        <div className="wrap">
                                            <span className="name">이남개</span>
                                            <span className="depart">총무과</span>
                                        </div>
                                        <span className="num">02-7750-7030</span>
                                        <p>총무과 업무 총괄<br/>개관 및 운영기반 조성</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="member">
                                        <div className="wrap">
                                            <span className="name">정만호</span>
                                            <span className="depart">총무과</span>
                                        </div>
                                        <span className="num">02-7750-7031</span>
                                        <p>감사, 조직관련 업무<br/>주요업무계획 수립 및 운영</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="member">
                                        <div className="wrap">
                                            <span className="name">장수영</span>
                                            <span className="depart">총무과</span>
                                        </div>
                                        <span className="num">02-7750-7032</span>
                                        <p>시설물 유지관리<br/>기계시설공사 감독</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="member">
                                        <div className="wrap">
                                            <span className="name">류재운</span>
                                            <span className="depart">총무과</span>
                                        </div>
                                        <span className="num">02-7750-7033</span>
                                        <p>방송,통신설비 유지관리<br/>정보보호 운영관리</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="member">
                                        <div className="wrap">
                                            <span className="name">이다혜</span>
                                            <span className="depart">기획과</span>
                                        </div>
                                        <span className="num">02-7750-7040</span>
                                        <p>공간 디자인 및 제작 설치 감독<br/>상설 전시 유지관리</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="member">
                                        <div className="wrap">
                                            <span className="name">이효림</span>
                                            <span className="depart">기획과</span>
                                        </div>
                                        <span className="num">02-7750-7041</span>
                                        <p>전시물 제작 설치 감리용역 감독<br/>시민소통 프로젝트 기획,운영</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="member">
                                        <div className="wrap">
                                            <span className="name">전가희</span>
                                            <span className="depart">기획과</span>
                                        </div>
                                        <span className="num">02-7750-7042</span>
                                        <p>교육 프로그램 기획 및 운영<br/>아카이브 특별전 기획</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="member">
                                        <div className="wrap">
                                            <span className="name">신동준</span>
                                            <span className="depart">홍보과</span>
                                        </div>
                                        <span className="num">02-7750-7050</span>
                                        <p>홍보콘텐츠 기획 및 제작<br/>홍보마케팅 및 언론 협력</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="member">
                                        <div className="wrap">
                                            <span className="name">장문선</span>
                                            <span className="depart">홍보과</span>
                                        </div>
                                        <span className="num">02-7750-7051</span>
                                        <p>리플렛 발간업무<br/>지원 인력 관리</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="member">
                                        <div className="wrap">
                                            <span className="name">이경남</span>
                                            <span className="depart">홍보과</span>
                                        </div>
                                        <span className="num">02-7750-7052</span>
                                        <p>어린이 문화행사 기획 및 운영<br/>관련기관 교류 및 업무 협약</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
export default About;