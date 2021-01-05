import HomePage from './pages/hompage/hompage.componet'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </div>
  )
}
const HatsPage = () => (
  <div>
    <h1>Hello Hats</h1>
  </div>
)

export default App
