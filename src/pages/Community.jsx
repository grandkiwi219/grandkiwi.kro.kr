export default function Page() {
    return (
        <gk-community>

            <div id="grand_kiwis_party" className="text_box" style={{
                paddingTop:'3px',
                marginTop: '20px'
            }}>
                <h2>grand kiwi's party!</h2>
                <hr />
                <p>키위 커뮤니티입니다!</p>
                <a className="button_design shadow" href="/invite" target="_blank">디스코드</a>
                {/* <a className="button_design shadow" href="https://www.grandkiwi.kro.kr">사이트</a> */}<br /><br />
                <iframe src="https://discord.com/widget?id=467097011011977236&theme=dark" width="85%" height="400" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>

            {/* <div id="koma" className="text_box" style={{
                paddingTop: '3px',
                marginTop: '30px'
            }}>
                <h2>코마공화국</h2>
                <hr />
                <p>코마공화국입니다!</p>
                <a className="button_design shadow" href="https://discord.gg/qtkoma" style={{ borderColor: '#FEAD76' }}>디스코드</a>
                <a className="button_design shadow" href="/koma" style={{ borderColor: '#FEAD76' }}>사이트</a><br /><br />
                <iframe src="https://discord.com/widget?id=469414615667703808&theme=dark" width="85%" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div> */}

        </gk-community>
  );
}
