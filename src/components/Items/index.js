import './index.css'

const Items = props => {
  const {productDetails} = props
  const {
    dishName,
    dishPrice,
    dishImage,
    dishCurrency,
    dishCalories,
    dishDescription,
    dishAvailability,
    addonCat,
    quantity,
  } = productDetails
  const disp = addonCat.length
  const disp1 = disp !== 0

  return (
    <li className="li">
      <div className="main1">
        <h1 className="h1 margin">{dishName}</h1>
        <h1 className="h1 margin">{`${dishCurrency} ${dishPrice}`}</h1>
        <p className="margin">{dishDescription}</p>
        {dishAvailability && (
          <>
            <div className="con margin">
              <button type="button" className="b2">
                -
              </button>
              <p className="margin">{quantity}</p>
              <button type="button" className="b2">
                +
              </button>
            </div>
            <button type="button">ADD TO CART</button>
          </>
        )}
        {!dishAvailability && <p className="margin p3">Not Available</p>}
        {disp1 && <p className="p1 margin">Customizations available</p>}
      </div>
      <div className="p2 margin">{`${dishCalories} calories`}</div>
      <img className="img margin" src={dishImage} alt="dishImage" />
    </li>
  )
}

export default Items
