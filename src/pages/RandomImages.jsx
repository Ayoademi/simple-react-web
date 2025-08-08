import axios from 'axios';
import { useState, useEffect } from 'react';
import "../styles/RandomImages.css";

function RandomImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const fetchRandomImages = async () => {
  try {
     setLoading(true);
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
        key: '36504224-2157301ab72b9e996f2145652', // Pixabay API key
        q: 'car', // Search query
        image_type: 'photo', // Photos only
        per_page: 200, // I have more results to choose from
        webformatWidth: '640',
        webformatHeight: '360',
      }
    });
    
    if (response.data.hits && response.data.hits.length > 0) {
      const randomImage = response.data.hits[
        Math.floor(Math.random() * response.data.hits.length)
      ];
      setImages(randomImage.webformatURL); // Using webformatURL for smaller size
      console.log(randomImage);
      setLoading(false);
    } else {
      console.log("No images found");
    }
  } catch (error) {
    console.error("Error fetching random images:", error);
  }
};
  useEffect(() => {
    fetchRandomImages();
  }, []);


  return (
    <>
      <div className="random-images-page">

        <div className="random-images-container">
        <h1>Random Images</h1>
        <p>Here you can find random images just by clicking the <code>generate</code> button</p>
        <button onClick={fetchRandomImages}>
        <code>Generate Random Images</code>
        </button>
      </div>
      <div className="random-images">
        {loading && <p>Loading...</p>}
        {images && !loading && (
            <img src={images} alt="Random Image" className="random-image" />
        )}
        {!loading && !images && (
          <p>No images found. Please fetch random images.</p>
        )}
             
      </div>

      </div>
    </>
  )
}
export default RandomImages;