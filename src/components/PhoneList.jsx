import { useGlobalContext } from '../context'
import PhoneItem from './PhoneItem'

const PhoneList = () => {
  const { cart, clearCart, totalCost } = useGlobalContext()

  const cartArray = Array.from(cart.entries())
  if (cartArray.length === 0) {
    return (
      <section>
        <header>
          <h1>your bag</h1>
          <h4>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section>
      {/* cart header */}
      <header>
        <h1>your bag</h1>
      </header>
      {/* cart items */}
      <div className="phones-container">
        {cartArray.map((cartItem) => {
          // console.log(item)
          const [id, item] = cartItem
          return <PhoneItem key={id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer className="total-container">
        <div className="underline"></div>
        <div className="total">
          <h4>total</h4>
          <p>${totalCost.toFixed(2)}</p>
        </div>
        <button onClick={clearCart} type="button">
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default PhoneList
