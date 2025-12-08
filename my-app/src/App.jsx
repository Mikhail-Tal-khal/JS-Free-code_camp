import { Welcome } from './Welcome.jsx'
import { Button } from './Button.jsx'
import { Hello } from './Hello.jsx'
import { Product } from './Product.jsx'
import { Greeting } from './Greeting.jsx'
import { CardWrapper } from './CardWrapper.jsx'
import { UserDetail } from './UserDetail.jsx'
import { ProductList } from './ProductList.jsx'
import { Alert } from './Alert.jsx'
import { CustomButton } from './CustomButton.jsx'

import './App.css'

function App() {

  return (
    <div>

      

      <Hello />
      <CustomButton />

      <Alert>This is an alert message!</Alert>
      <Alert type='error'>Something went wrong!</Alert>

      <ProductList />
      <UserDetail name="Khlyan" isOnline={true} isPremium={true} isNewUser={true} role="admin" />
      <UserDetail name="Ahmed" isOnline={true} hideOffline={true} role="Vip" />

      <Greeting name="Brown" message="Goodmorning" />
      <Greeting name="Kelvin" />
      <Greeting message="GoodAfternoon" />
      <Greeting />

      <CardWrapper title="User Information Card">
        <h3>Bruce Wayne</h3>
        <p>Batman@jmail.com</p>
        <button>Edit profile</button>
      </CardWrapper>

      <Welcome name='kalvani' alias="Ranger" />
      <Welcome name='diana' alias="Guard" />
      <Welcome name='neymer' alias="Defender" />
      <Product title="GamingLaptop" Price={1299.56} inStock={true} categories={["Electronics", "Computers", "Gaming"]} />
      <Button />
    </div>
  )
}

export default App;
