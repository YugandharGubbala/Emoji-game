// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojidetails, clickemoji} = props
  const {id, emojiName, emojiUrl} = emojidetails

  const onclickemojicard = () => {
    clickemoji(id)
  }
  return (
    <li className="emoji-item">
      <button type="button" className="btn" onClick={onclickemojicard}>
        <img className="icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
