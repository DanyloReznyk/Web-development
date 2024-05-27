import React, { useState } from 'react';
import axios from 'axios';
import {Button} from "react-bootstrap";

const RandomCat = () => {
    const [imageUrl, setImageUrl] = useState('');

    const getRandomImage = async () => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search');
            setImageUrl(response.data[0].url);
        } catch (error) {
            console.error('Error fetching random image:', error);
        }
    };

    return (
        <div className="row justify-content-center align-items-center ">
            {imageUrl && <img src={imageUrl} alt="Random Cat" width={400} height={300}/>}
            <Button className="btn-success mt-1" onClick={getRandomImage}>Get Random Image</Button>
        </div>
    );
};


export default RandomCat;
