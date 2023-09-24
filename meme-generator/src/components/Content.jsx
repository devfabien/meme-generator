import React from "react"
import memesData from "./memesData"
// import MemesData from "./MemesData"

export default function Content() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1ur9b0.jpg" 
    })
    const [memeImage, setMemeImage] = React.useState(memesData)
  function getMemeImage(){
    const memeArray=memesData.data.memes;
    const randomNumber=Math.floor(Math.random() *memeArray.length)
    const urls=memeArray[randomNumber].url
    setMeme(prevMeme=>({...prevMeme,randomImage: urls}))
  
  }
  console.log(meme)
  function handleChange(event){
setMeme(preveData=>{
    return {
        ...preveData,[event.target.name] : event.target.value
    }
})
  }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme--body">
                <h3 className="meme--text top">{meme.topText}</h3>
                <h3 className="meme--text bottom">{meme.bottomText}</h3>
            <img src={meme.randomImage} alt=""  className="meme--image"/>
            </div>
        </main>
    )
}