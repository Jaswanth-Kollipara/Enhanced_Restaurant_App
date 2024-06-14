import './index.css'

const Category = props => {
  const {productDetails, isAct, changeActive} = props
  const {menuCategory, menuCategoryId} = productDetails
  const activeTabClassName = isAct ? 'active-tab' : ''
  const activebuttonClassName = isAct ? 'active-button' : ''
  const onClickTabItem = () => {
    changeActive(menuCategoryId)
  }

  return (
    <li
      id={menuCategoryId}
      onClick={onClickTabItem}
      className={`tab ${activeTabClassName}`}
    >
      <button type="button" className={`b1 ${activebuttonClassName}`}>
        {menuCategory}
      </button>
    </li>
  )
}

export default Category
