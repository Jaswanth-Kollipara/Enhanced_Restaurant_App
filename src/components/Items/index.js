import './index.css'

const Items = props => {
  const {productDetails, count, increment, decrement} = props
  const {
    dishId,
    dishName,
    dishPrice,
    dishImage,
    dishCurrency,
    dishCalories,
    dishDescription,
    dishAvailability,
    addonCat,
  } = productDetails
  const c = count.find(item => item.id === dishId)
  let co
  if (c === undefined) {
    co = 0
  } else {
    co = c.quantity
  }
  const disp = addonCat.length
  const disp1 = disp !== 0 ? true : false
  const inc = () => {
    increment(dishId)
  }
  const dec = () => {
    decrement(dishId)
  }

  return (
    <li className="li">
      <div className="main1">
        <h1 className="h1 margin">{dishName}</h1>
        <h1 className="h1 margin">{`${dishCurrency} ${dishPrice}`}</h1>
        <p className="margin">{dishDescription}</p>
        {dishAvailability && (
          <div className="con margin">
            <button className="b2" onClick={dec}>
              -
            </button>
            <p className="margin">{co}</p>
            <button className="b2" onClick={inc}>
              +
            </button>
          </div>
        )}
        {!dishAvailability && <p className="margin p3">Not Available</p>}
        {disp1 && <p className="p1 margin">Customizations available</p>}
      </div>
      <div className="p2 margin">{`${dishCalories} calories`}</div>
      <img className="img margin" src={dishImage} />
    </li>
  )
}

export default Items
