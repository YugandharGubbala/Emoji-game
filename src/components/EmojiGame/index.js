/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedemojilist: [],
    isgameinprogress: true,
    topscore: 0,
  }

  resetgame = () => {
    this.setState({clickedemojilist: [], isgameinprogress: true})
  }

  renderscorecard = () => {
    const {emojilist} = this.props
    const {clickedemojilist} = this.state
    const iswon = clickedemojilist.length === emojilist.length

    return (
      <WinOrLoseCard
        iswon={iswon}
        onclickplayagain={this.resetgame}
        score={clickedemojilist.length}
      />
    )
  }

  finishgame = currentscore => {
    const {topscore} = this.state
    let newtopscore = topscore
    if (currentscore > topscore) {
      newtopscore = currentscore
    }
    this.setState({topscore: newtopscore, isgameinprogress: false})
  }

  clickemoji = id => {
    const {emojilist} = this.props
    const {clickedemojilist} = this.state
    const isemojipresent = clickedemojilist.includes(id)
    const clickedemojilength = clickedemojilist.length

    if (isemojipresent) {
      this.finishgame(clickedemojilength)
    } else {
      if (emojilist.length - 1 === clickedemojilength) {
        this.finishgame(emojilist.length)
      }
      this.setState(prevstate => ({
        clickedemojilist: [...prevstate.clickedemojilist, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojilist} = this.props
    return emojilist.sort(() => Math.random() - 0.5)
  }

  renderemojilist = () => {
    const shuffledEmojisList = this.shuffledEmojisList()
    return (
      <ul className="listcontainer">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            key={each.id}
            emojidetails={each}
            clickemoji={this.clickemoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedemojilist, isgameinprogress, topscore} = this.state

    return (
      <div className="app">
        <NavBar
          currentscore={clickedemojilist.length}
          isgameinprogress={isgameinprogress}
          topscore={topscore}
        />

        <div className="body">
          {isgameinprogress ? this.renderemojilist() : this.renderscorecard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
