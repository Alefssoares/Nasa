// src/NasaImage.jsx
import React, { useEffect, useState } from 'react';
import './NasaImage.css';

const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

function NasaImage() {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0); // Índice da imagem atual

  useEffect(() => {
    fetch(`${API_URL}&date=${getFormattedDate(index)}`)
      .then(response => response.json())
      .then(data => {
        setImageData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [index]);

  // Função para obter a data formatada para a API
  const getFormattedDate = (offset) => {
    const today = new Date();
    today.setDate(today.getDate() - offset);
    return today.toISOString().split('T')[0];
  };

  // Navegar para a imagem anterior
  const handlePrevious = () => {
    setIndex(prevIndex => Math.max(prevIndex - 1, 0)); // Não permitir índice negativo
  };

  // Navegar para a próxima imagem
  const handleNext = () => {
    setIndex(prevIndex => prevIndex + 1); // Aumentar o índice
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="nasa-container">
      <h1 className="title">{imageData.title}</h1>
      <img src={imageData.url} alt={imageData.title} className="nasa-image" />
      <p className="explanation">{imageData.explanation}</p>
      <div className="button-container">
        <button onClick={handlePrevious} className="nav-button">Previous</button>
        <button onClick={handleNext} className="nav-button">Next</button>
      </div>
    </div>
  );
}

export default NasaImage;
