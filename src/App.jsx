import profile from "./assets/profile.jpg"
import './App.css'
import ProfilePicture from "./components/ProfilePicture"
import Details from "./components/Details"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Buttons from "./components/Buttons"

function App() {
  return (
    <div className="App">
     <div className="card-container">
       <div className="card">
         <ProfilePicture />
         <Details />
         <Buttons />
         <Content />
         <Footer />
       </div>
     </div>
    </div>
  )
}

export default App
