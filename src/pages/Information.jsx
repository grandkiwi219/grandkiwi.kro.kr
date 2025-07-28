import { useEffect, useRef } from 'react';
import './Information.css'

export default function Page() {
    const didRunRef = useRef(false);

    useEffect(() => {
        if (didRunRef.current) return;
        didRunRef.current = true;

        const info_script = document.createElement('script');
        info_script.textContent = `
    (() => {
        const name_mc = document.getElementById('name-mc');

        if (!name_mc) return;

        var request = new XMLHttpRequest();
        request.open('GET', 'https://api.namemc.com/profile/04932fd4-d4e6-4aed-80a9-da4a0d64f93e/friends', true);
        request.onload = function () {

            var data = JSON.parse(this.response);

            if (!name_mc) return;

            name_mc.innerHTML += '<div class="point" data-aos="fade-up" data-aos-duration="1000"><a href="https://namemc.com/profile/grand_kiwi219.1">grand kiwi NameMC</a></div><br>';

            name_mc.innerHTML += '<div class="point" data-aos="fade-up" data-aos-duration="1000">-<span class="silver"> NameMC 팔로잉 리스트 </span>-</div><br>';

            data.forEach((friend) => {

                name_mc.innerHTML += '<div class="point" data-aos="fade-up" data-aos-duration="1000"><a href="https://namemc.com/profile/'+ friend.name + '">' + friend.name + '</a></div>';

            })

            }
        request.send();
    })();
`
        document.getElementById('info-page').appendChild(info_script);
    }, []);

    return (
        <div id='info-page' className="limit_width">
            <h2 className="point"><b>어서오라구!</b></h2>

            <div className="point">
                자 이제 제 소개를 시작해볼까요?
            </div>

            <hr className="hp" />

            <div className="point">
                <a href="/">홈</a>에서 보셨다시피!<br />
                저는 주로 <a href="https://discord.com">디스코드</a>에서 활동하는 키위라고 해요!
            </div>

            <hr className="hp" />

            <p className="point">
                <a href="https://discord.com">디스코드</a>는 저가 가장 좋아하는 게임인 <a href="https://minecraft.net">마인크래프트</a>에 의해 접하게되었어요<br />
                아! 참고로 제 근본 마크 닉은 <a href="https://namemc.com/profile/grand_kiwi219.1">grand_kiwi219</a>랍니다!<br /><br />
            </p>

            <p className="point">
                그리고 저는 저의 <a href="https://www.youtube.com/channel/UCuWunURhOf0YyxXhX4GF4bA">개인 유튜브</a>도 있어요<br />
            </p>

            <hr className="hp" />



            <div style={{
                border: '0.8px solid silver',
                fontSize: '85%',
                textAlign: 'left',
                marginLeft: '55px',
                paddingLeft: '15px',
                marginTop: '10px',
                paddingTop: '10px',
                marginBottom: '50px',
                paddingBottom: '10px',
                width: '170px'
            }}>

                목차
                <br /><br />

                <a className="ac" href="#game">1</a>. 게임<br />
                &emsp;<a className="ac" href="#minecraft">1-1</a>. 마인크래프트<br />
                &emsp;&emsp;<a className="ac" href="#hypixel">1-1-1</a>. 하이픽셀<br />
                &emsp;&emsp;<a className="ac" href="#namemc">1-1-2</a>. NameMC<br />
                &emsp;<a className="ac" href="#kartrider">1-2</a>. 카트라이더<br />

                <a className="ac" href="#platform">2</a>. 플랫폼<br />
                &emsp;<a className="ac" href="#youtube">2-1</a>. 유튜브<br />
                &emsp;<a className="ac" href="#twitch">2-2</a>. 트위치<br />
                &emsp;<a className="ac" href="#discord-account">2-3</a>. 디스코드<br />

                <a className="ac" href="#community">3</a>. 커뮤니티<br />
                &emsp;<a className="ac" href="#discord-community">3-1</a>. 디스코드<br />

                <a className="ac" href="#other">4</a>. 기타 정보<br />

            </div>



            <div id="information">



                {/* <!--Game Category--> */}

                <div className="mb">
                    <h2 id="game" className="point"><span className="namu">1</span> ) 게임</h2>
                    <hr />
                    <div>
                        <div className="point" data-aos="fade-up" data-aos-duration="1000">저가 주로 하는 게임으로는 <a href="https://minecraft.net">마인크래프트</a>와 <a href="https://kart.nexon.com">카트라이더</a>가 있습니다</div>
                        <div className="point" data-aos="fade-up" data-aos-duration="1000">마인크래프트의 많은 서버 중 <a href="https://hypixel.net">하이픽셀</a>에서의 pvp를 주로 즐깁니다</div>
                    </div>


                    <div>
                        <h3 id="minecraft" className="point"><span className="namu">1-1</span> ) 마인크래프트</h3>
                        <hr />
                        <div>
                            <div className="point" data-aos="fade-up" data-aos-duration="1000">수 많은 컴퓨터 게임 중에서 저가 제일 처음 접한 컴퓨터 게임입니다</div><br />

                            <div className="point" data-aos="fade-up" data-aos-duration="1000">- <span className="silver">마크를 사게 된 계기</span> -</div>
                            <div className="point" data-aos="fade-up" data-aos-duration="1000">처음에 마크를 접하고 세월이 흘러 <span className="silver">커맨드</span>, <span className="silver">회로</span>에 관심을 가지게 됬습니다</div>
                            <div className="point" data-aos="fade-up" data-aos-duration="1000">하지만 정식을 사고서는 <span className="silver">하픽</span>에 빠져들게되었고 <span className="silver">커맨드</span>와 <span className="silver">회로</span>와는 연을 끊게 되었죠</div><br />

                            <div className="point silver" data-aos="fade-up" data-aos-duration="1000"><a href="https://www.mediafire.com/file/bpv05vgvwzxu516">직접 만든 브릿징 연습 맵</a> - 2019/2/5</div><br />

                            <div className="point" data-aos="fade-up" data-aos-duration="1000">- <span className="silver">grand kiwi 닉 유래</span> -</div>
                            <div className="point" data-aos="fade-up" data-aos-duration="1000">처음에 정식을 사기 전 <span className="silver">마크</span>를 플레이 했을 적에 생각나는 닉이 <span className="silver">kiwi</span>였습니다</div>
                            <div className="point" data-aos="fade-up" data-aos-duration="1000">그러다가 <span className="silver">초6</span>때 블로그를 하기전 닉을 <span className="silver">kiwi</span>를 쓰기엔 너무 많았죠</div>
                            <div className="point" data-aos="fade-up" data-aos-duration="1000">그렇게 포기할려는 참에 <span className="silver">클래시 로얄</span>에서 등급을 보는데 <span className="silver">그랜드 챔피언</span>이 있었죠</div>
                            <div className="point" data-aos="fade-up" data-aos-duration="1000">그래서 <span className="silver">grand</span>를 <span className="silver">kiwi</span>앞에 붙히게 되었죠</div>
                        </div>


                        <div>
                            <h4 id="hypixel" className="point"><span className="namu">1-1-1</span> ) 하이픽셀</h4>
                            <hr />
                            <div>
                                <div className="point" data-aos="fade-up" data-aos-duration="1000">작성 중</div>
                            </div>
                        </div>

                        <div>
                            <h4 id="namemc" className="point"><span className="namu">1-1-2</span> ) NameMC</h4>
                            <hr />
                            <p id="name-mc">

                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 id="kartrider" className="point"><span className="namu">1-2</span> ) 카트라이더</h3>
                        <hr />
                        <div>
                            <div className="point" data-aos="fade-up" data-aos-duration="1000">작성 중</div>
                        </div>
                    </div>
                </div>


                {/* <!--Platform Category--> */}

                <div className="mb">
                    <h2 id="platform" className="point"><span className="namu2">2</span> ) 플랫폼</h2>
                    <hr />
                    <div>
                        <div className="point" data-aos="fade-up" data-aos-duration="1000">작성 중</div>
                    </div>


                    <div>
                        <h3 id="youtube" className="point"><span className="namu2">2-1</span> ) 유튜브</h3>
                        <hr />
                        <div>
                            <div className="point" data-aos="fade-up" data-aos-duration="1000">작성 중</div>
                        </div>
                    </div>

                    <div>
                        <h3 id="twitch" className="point"><span className="namu2">2-2</span> ) 트위치</h3>
                        <hr />
                        <div>
                            <div className="point" data-aos="fade-up" data-aos-duration="1000">작성 중</div>
                        </div>
                    </div>

                    <div>
                        <h3 id="discord-account" className="point"><span className="namu2">2-3</span> ) 디스코드</h3>
                        <hr />
                        <div>
                            <div className="point">작성 중</div>
                        </div>
                    </div>
                </div>

                {/* <!--Community Category--> */}

                <div className="mb">
                    <h2 id="community" className="point"><span className="namu3">3</span> ) 커뮤니티</h2>
                    <hr />
                    <div>
                        <div className="point">작성 중</div>
                    </div>


                    <div>
                        <h3 id="discord-community" className="point"><span className="namu3">3-1</span> ) 디스코드</h3>
                        <hr />
                        <div>
                            <div className="point">작성 중</div>
                        </div>
                    </div>
                </div>

                {/* <!--Other Category--> */}

                <div>
                    <h2 id="other" className="point"><span className="namu4">4</span> ) 기타 정보</h2>
                    <hr />
                    <div>
                        <div className="point">작성 중</div>
                    </div>
                </div>



            </div>

        </div>
    );
}