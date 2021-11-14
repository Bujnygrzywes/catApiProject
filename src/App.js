import React, {useState} from "react";
// import './App.css';
const catImage = "https://imgr.search.brave.com/BoJz0YTDWVhZ4lR8Mz4FU3OQx2B84A9zq0TVs4JflZg/fit/1200/1200/ce/1/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY4Lzc0/LzM1LzY4NzQzNTBi/ZjE4MzlkNzdiZDlm/MDA1NWFiMzE3Yzlj/LmpwZw"
const catApiUrl = "https://api.thecatapi.com/v1/images/search"

function App() {
  const [image, setImage] = useState(catImage)
  const [isDisabled, setIsDisabled] = useState(false)


  const setCatImage = () => {
    setIsDisabled(true);

    fetch(catApiUrl)
    .then(response => response.text())
    .then(result => {
      const catsDataArray = JSON.parse(result);
      const catsObject = catsDataArray[0];
      const catUrl = catsObject.url;
      setImage(catUrl);
      setIsDisabled(false)
    })
    .catch(error => console.log(error))
  }

  

  return (
    <div className="app">
      <div className="app-main">
        <button onClick={setCatImage} disabled={isDisabled}>Chodz zobaczyc kotka w piwnicy :3</button>
        <div></div>
        <img src={image} alt="cos" width="300px"/> 
      </div>
    </div>
  );
}

export default App;
