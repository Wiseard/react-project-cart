import logo from '../logo.svg'
import { BsCartPlusFill } from 'react-icons/bs'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { totalAmount } = useGlobalContext()
  return (
    <nav className="nav">
      <div className="nav-center">
        <img src={logo} alt="logo" />
        <div className="nav-button-container">
          <button type="button" className="btn-cart">
            <BsCartPlusFill className="cart-icon" />
          </button>
          <div className="cart-amount">
            <p>{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
