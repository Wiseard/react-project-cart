import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { useGlobalContext } from '../context'

const PhoneItem = ({ id, title, price, img, amount }) => {
  const { remove, increase, decrease } = useGlobalContext()
  return (
    <article className="phone-item">
      <img src={img} alt={title} />
      <div className="phone-info">
        <h4>{title}</h4>
        <p>${price}</p>
        {/* remove button */}
        <button onClick={() => remove(id)} className="btn-remove" type="button">
          remove
        </button>
      </div>
      <div className="amount">
        {/* increase button */}
        <button
          onClick={() => increase(id)}
          className="btn-increase-amount"
          type="button"
        >
          <FiChevronUp className="icon-increase" />
        </button>
        <p>{amount}</p>
        {/* decrease button */}
        <button
          onClick={() => decrease(id)}
          className="btn-decrease-amount"
          type="button"
        >
          <FiChevronDown className="icon-decrease" />
        </button>
      </div>
    </article>
  )
}

export default PhoneItem
