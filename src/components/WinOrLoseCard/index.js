// Write your code here.
import './index.css'

const loseurl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonurl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {iswon, onclickplayagain, score} = props
  const imageurl = iswon ? wonurl : loseurl
  const gamestatus = iswon ? 'You Won' : 'You Lose'
  const scorelabel = iswon ? 'Best Score' : 'Score'

  return (
    <div className="card">
      <div className="section">
        <h1 className="status">{gamestatus}</h1>
        <p className="label">{scorelabel}</p>
        <p className="value">{score}/12</p>
        <button type="button" className="playagain" onClick={onclickplayagain}>
          Play Again
        </button>
      </div>
      <div className="imagesection">
        <img className="image" src={imageurl} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
