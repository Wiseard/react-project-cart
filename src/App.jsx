import { useGlobalContext } from './context'
import Navbar from './components/Navbar'
import PhoneList from './components/PhoneList'

const App = () => {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <main className="loading" style={{ marginTop: '6rem' }}>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <PhoneList />
    </main>
  )
}

export default App
