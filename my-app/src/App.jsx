import { Welcome } from './Welcome.jsx'
import { Button } from './Button.jsx'
import { Hello } from './Hello.jsx'
import { Product } from './Product.jsx'
import './App.css'

function App() {

  return (
    <div>

      <Hello />
      <Welcome name='kalvani' alias="Ranger" />
      <Welcome name='diana' alias="Guard" />
      <Welcome name='neymer' alias="Defender" />
      <Product title="GaminingLaptop" Price={1299.56} inStock={true} Categories={("Electronics", "Computers", "Gaming")} />
      <Button />
    </div>
  )
}

export default App
