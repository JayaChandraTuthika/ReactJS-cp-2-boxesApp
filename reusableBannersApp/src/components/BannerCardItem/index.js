import './index.css'

const BannerCardItem = props => {
  const {cls, headerText, description, align} = props
  console.log(headerText)

  return (
    <li className={`${cls}`}>
      <div className={`inner ${align}`}>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="showmore-btn">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
