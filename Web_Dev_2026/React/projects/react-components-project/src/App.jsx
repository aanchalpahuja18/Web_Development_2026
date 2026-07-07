import './App.css'
// import ProfileCard from './components/ProfileCard'
// import aanchal from "./assets/aanchal-image.jpg"
import ProductCard from './components/ProductCard'
import camera from "./assets/camera.jpg"
import headphone from "./assets/headphone.jpg"
import keyboard from "./assets/keyboard.jpg"
import laptop from "./assets/laptop.jpg"
import smartwatch from "./assets/smartwatch.jpg"
import mobile from "./assets/mobile.jpg"

function App() {
  const items = [
    {
      id: 1,
      name: "Sony High Quality Camera",
      price: 20000,
      category: "CAMERA",
      image_url: camera,
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: "Sony Noise Cancellation Headphone",
      price: 35000,
      category: "HEADPHONE",
      image_url: headphone,
      rating: 4.9,
      inStock: true
    },
    {
      id: 3,
      name: "Iphone 16 pro max",
      price: 100000,
      category: "MOBILE",
      image_url: mobile,
      rating: 4.2,
      inStock: true
    },
    {
      id: 4,
      name: "Fastrack touch smart watch",
      price: 5000,
      category: "WATCH",
      image_url: smartwatch,
      rating: 5.0,
      inStock: true
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 15000,
      category: "KEYBOARD",
      image_url: keyboard,
      rating: 4.2,
      inStock: true
    },
    {
      id: 6,
      name: "Macbook Air M2 Chip",
      price: 105000,
      category: "LAPTOP",
      image_url: laptop,
      rating: 4.3,
      inStock: false
    }
  ]
  return (
    // <div className='container'>
    //   <ProfileCard name="Aanchal Pahuja" role = "Software Engineer" bio = "A passionate software engineer with an experience of almost a year" avatar_url = {aanchal}/>
    //   <ProfileCard name="Riya Pahuja" role = "Professor" bio = "A passionate hindi professor with more than 10 years of experience" avatar_url = {aanchal}/>
    //   <ProfileCard name="Parv Pahuja" role = "Engineering Student" bio = "A passionate software engineer pursuing Computer Science Engineering" avatar_url = {aanchal}/>
    //   <ProfileCard name="Praveen Pahuja" role = "Businessman" bio = "A passionate business man having tons of knowledge about running a business" avatar_url = {aanchal}/>
    // </div>
    <div className='container'>
      {
        items.map((el) => {
          return <ProductCard image = {el.image_url} name = {el.name} category={el.category} price={el.price} rating={el.rating} inStock={el.inStock} key={el.id}/>
        })
      }
      {/* <ProductCard image = {camera} name = "Sony High Quality Camera" category = "CAMERA" price = "Rs. 20,000" rating = {4.8} instock = {true}/>
      <ProductCard image = {headphone} name = "Sony Noise Cancellation Headphone" category = "HEADPHONE" price = "Rs. 35,000" rating = {4.9} instock = {true}/>
      <ProductCard image = {mobile} name = "Iphone 16 pro max" category = "MOBILE" price = "Rs. 100,000" rating = {4.2} instock = {true}/>
      <ProductCard image = {smartwatch} name = "Fastrack touch smart watch" category = "WATCH" price = "Rs. 5,000" rating = {5.0} instock = {true}/>
      <ProductCard image = {keyboard} name = "Mechanical Keyboard" category = "KEYBOARD" price = "Rs. 15,000" rating = {4.2} instock = {false}/>
      <ProductCard image = {laptop} name = "Macbook Air M2 Chip" category = "LAPTOP" price = "Rs. 105,000" rating = {4.3} instock = {true}/> */}
    </div>
  )
}

export default App
