import './index.css'

const Category = props => {
  const {productDetails, isAct, changeActive} = props
  const {menuCategory, menuCategoryId} = productDetails
  const activeTabClassName = isAct ? 'active-tab' : ''
  const onClickTabItem = () => {
    changeActive(menuCategoryId)
  }

  return (
    <li
      id={menuCategoryId}
      onClick={onClickTabItem}
      className={`tab ${activeTabClassName}`}
    >
      <h1>{menuCategory}</h1>
    </li>
  )
}

export default Category
