// Write your code here.
import './index.css'

const CardItem = props => {
  const {item} = props
  const {title, description, imgUrl, className} = item
  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-paragraph">{description}</p>
      <img src={imgUrl} className="image-sizing" alt={title} />
    </li>
  )
}

export default CardItem
