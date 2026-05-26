import './App.css'

import pandaImg from './assets/desktop_01.png'
import pandaImg2 from './assets/desktop_05.png'

import itemImg from './assets/desktop_02.png'
import SearchImg from './assets/desktop_03.png'
import registerImg from './assets/desktop_04.png'

import lastImg from './assets/footer.png'
import bannerImg from './assets/gnb.png'

function App() {
  return (
    <div>

      {/* 위 배너 */}
      <div className="banner">
        <img src={bannerImg}  />
      </div>

      {/* 메인 이미지 */}
      <div className="main">
        <img src={pandaImg} />
      </div>

      {/* 중간 카드 부분 */}
      <div className="content">

        <div className="left">

          <div className="card">
            <img src={itemImg} />
          </div>

          <div className="card">
            <img src={registerImg}  />
          </div>

        </div>

        <div className="right">
          <img src={SearchImg}  />
        </div>

      </div>

      {/* 아래 배너 */}
      <div className="middle">
        <img src={pandaImg2}  />
      </div>

      {/* 마지막 푸터 */}
      <div className="footer">
        <img src={lastImg}  />
      </div>

    </div>
  )
}

export default App
