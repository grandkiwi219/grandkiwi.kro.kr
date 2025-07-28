export default function Page() {
    return (
        <gk-404>
            <div style={{
                marginLeft: '15px',
                marginRight: '15px'
            }}>
    
                <h2 style={{
                    fontSize: '50px',
                    marginTop: '60px'
                }}>
                    <b>
                        <span style={{
                            fontSize: '70px'
                        }}>404</span>
                        <br />
                        Not Found
                    </b>
                </h2>
    
                <p style={{
                    fontSize: '15px',
                    marginBottom: '90px'
                }}>
                    주소를 잘못 입력하셨거나 페이지를 찾을 수 없어요.. :(
                    <br />
                    위쪽 사이드바를 통해 페이지를 이동해주세요!
                </p>
    
            </div>
        </gk-404>
  );
}
