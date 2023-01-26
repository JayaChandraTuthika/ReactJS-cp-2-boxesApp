import './index.css'

const CardItem = props => {
  const {title, description, imgUrl, cls} = props
  return (
    <li className={cls}>
      <h2 className="card-heading">{title}</h2>
      <p className="card-description">{description}</p>
      <img src={imgUrl} alt={`${title}`} className="card-image" />
    </li>
  )
}

export default CardItem
