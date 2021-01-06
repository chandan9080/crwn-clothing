import HomePage from './pages/hompage/hompage.componet'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shoppage/shoppage.component'
import './App.css'
import Header from './components/header/header.component'
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
