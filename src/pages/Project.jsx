import './Project.css'

export default function Page() {
   return (
      <>
         <div id="website" className="text_box" style={{
            paddingTop: '3px',
            marginTop: '20px'
         }}>
            <h2>Website</h2>
            <p style={{ color: 'silver' }}>grand kiwi's site!</p>
            <hr />
            <p>지금 현재 사이트입니다!</p>
            <a className="button_design shadow" target='_blank' href="/">사이트</a><br /><br />
            <iframe src="https://grandkiwi.kro.kr" width="85%" height="400" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" style={{ borderRadius: '12px' }}></iframe>
         </div >

         {/* <div id="gk-website" className="text_box" style={{
            paddingTop: '3px',
            marginTop: '20px'
         }}>
            <h2>Website</h2>
            <p style={{ color: 'silver' }}>gk-website</p>
            <hr />
            <p>현재 개발 중인 두번째 사이트입니다</p>
            <a className="button_design shadow" rel="noreferrer" target='_blank' href="https://gk219.kro.kr">사이트</a><br /><br />
            <iframe src="https://gk219.kro.kr" width="85%" height="400" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" style={{ borderRadius: '12px' }}></iframe>
         </div> */}

         <div id="grandkiwi_bot" className="text_box" style={{
            paddingTop: '3px',
            marginTop: '30px'
         }}>
            <h2>Discord Bot</h2>
            <p style={{ color: 'silver' }}>grand kiwi 🥝</p>
            <hr />
            <p>저가 만든 봇입니다!</p>
            <a className="button_design shadow" rel="noreferrer" target='_blank' href="https://discordapp.com/oauth2/authorize?client_id=467239643667234824&scope=bot&permissions=2147483639">초대</a>
            <a className="button_design shadow" target='_blank' href="/bot">사이트</a>
         </div>

         <div id="maple" className="text_box" style={{
            paddingTop: '3px',
            marginTop: '30px'
         }}>
            <h2>Discord Bot</h2>
            <p style={{ color: 'silver' }}>단풍이 🍁</p>
            <hr />
            <p style={{ color: 'silver' }}><i>개발자: <span className="sc">Oasics</span> / <span className="sc">grand kiwi</span> / <span className="sc">BlueBear</span></i></p>
            <a className="button_design shadow" rel="noreferrer" target='_blank' href="https://discordapp.com/oauth2/authorize?client_id=556068518928318475&scope=bot&permissions=271969527" style={{ borderColor: '#FFB56C' }}>초대</a>
         </div>
      </>
   );
}