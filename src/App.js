import HomePage from './pages/hompage/hompage.componet'
import { Route } from 'react-router-dom'
import ShopPage from './pages/shoppage/shoppage.component'

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  )
}

export default App
