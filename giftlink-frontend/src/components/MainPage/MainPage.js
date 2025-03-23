import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {urlConfig} from '../../config';
import './MainPage.css';


function MainPage() {
    const [gifts, setGifts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        // fetch all gifts
        const fetchGifts = async () => {
            try {
                let url = `${urlConfig.backendUrl}/api/gifts`
                const response = await fetch(url);
                if (!response.ok) {
                    //something went wrong
                    throw new Error(`HTTP error; ${response.status}`)
                }
                const data = await response.json();
                setGifts(data);
            } catch (error) {
                console.log('Fetch error: ' + error.message);
            }
        };

        fetchGifts();
    }, []);

    const goToDetailsPage = (productId) => {
        navigate(`/app/product/${productId}`);
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    const getConditionClass = (condition) => {
        return condition === "New" ? "list-group-item-success" : "list-group-item-warning";
    };

    return (
        <div className="container">
            <div className="d-flex flex-wrap justify-content-center gap-4">
                {gifts.map((gift) => (
                <div key={gift.id} className="gift-card">
                    <div className="image-placeholder">
                    {gift.image ? (
                        <img className="gift-image" src={gift.image} alt={gift.name} />
                    ) : (
                        <div className="no-image-available">No Image Available</div>
                    )}
                    </div>
                    <div className="card-body">
                    <h5 className="card-title">{gift.name}</h5>
                    <p className="card-text">{gift.condition}</p>
                    <p className="card-text">{formatDate(gift.date_added)}</p>
                    </div>
                    <div className="card-footer">
                    <button
                        onClick={() => goToDetailsPage(gift.id)}
                        className="btn btn-primary w-100"
                    >
                        View Details
                    </button>
                    </div>
                </div>
                ))}
            </div>
        </div>

    );
}
export default MainPage;
