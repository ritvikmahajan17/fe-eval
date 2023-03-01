import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EventCard, Header } from '../../components';
import { GET_EVENT_BY_ID } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './Cardpage.css';

export const Cardpage = () => {
  const [cardData, setCardData] = useState({});
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    makeRequest(GET_EVENT_BY_ID(id))
      .then((res) => {
        setCardData(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  console.log(cardData, 'cardData');

  if (error) {
    // const msg = error.status;
    navigate('/error/500');
  }

  return (
    <div>
      <Header />
      <div className="card-container">
        <EventCard
          key={cardData.id}
          id={cardData.id}
          name={cardData.name}
          desc={cardData.description}
          venue={cardData.venue}
          datetime={cardData.datetime}
          timezone={cardData.timezone}
          seatsAvailable={cardData.areSeatsAvailable}
          isRegistered={cardData.isRegistered}
          isBookmarked={cardData.isBookmarked}
          imgUrl={cardData.imgUrl}
          size="large"
        />
      </div>
    </div>
  );
};
