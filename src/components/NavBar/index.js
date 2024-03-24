// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentscore, isgameinprogress, topscore} = props

  return (
    <nav className="container">
      <div className="titlewithscore">
        <div className="logoandtitle">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isgameinprogress && (
          <div className="scorecontainer">
            <p className="score">Score: {currentscore}</p>
            <p className="score">Top Score: {topscore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
