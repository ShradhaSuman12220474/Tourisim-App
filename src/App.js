import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home.jsx';

const stateData = {
    bihar: {
        image: "https://www.google.com/imgres?q=bihar%20map&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F74%2Ffe%2F3c%2F74fe3cdff2544d54fceca7ac44ab8fcb.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fediting-background--870039221742133716%2F&docid=Z6a6bpDnRMoI5M&tbnid=46Os7I1KwsQBwM&vet=12ahUKEwji_p3EgpmIAxXQTWwGHVoCHS4QM3oECHcQAA..i&w=735&h=520&hcb=2&ved=2ahUKEwji_p3EgpmIAxXQTWwGHVoCHS4QM3oECHcQAA",
        food: ["Bihar Litti Chokha", "Bihari Khichdi"],
        festival: ["Chhath Puja", "Sama Chakeva"],
        places: ["Bodh Gaya", "Patna"],
        history: "Bihar has a rich history.",
    },
    maharashtra: {
        image: "URL_TO_MAHARASHTRA_IMAGE",
        food: ["Puran Poli", "Vada Pav"],
        festival: ["Ganesh Chaturthi", "Diwali"],
        places: ["Mumbai", "Pune"],
        history: "Maharashtra is known for its diverse culture.",
    },
    karnataka: {
        image: "URL_TO_KARNATAKA_IMAGE",
        food: ["Bisi Bele Bath", "Mysore Pak"],
        festival: ["Karaga", "Ugadi"],
        places: ["Bangalore", "Mysore"],
        history: "Karnataka has a rich heritage.",
    },
    // Add more states as needed
};

function App() {
  
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
