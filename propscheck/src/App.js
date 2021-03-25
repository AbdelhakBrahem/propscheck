import Profile from './profile/Profile'
import './App.css';


function App() {
    var firstName = "Abdelhak"
    var lastName="BRAHEM"
    var profession="Web Developer"
    

  return (
    <div className="App">
      <Profile fname={firstName} lname={lastName} pro={profession}><img src="/profilPic.jpg"></img></Profile>
    </div>
  );
}

export default App;
