import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_EVENTS_DATA } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import { EventCard } from '../EventCard';
import './Events.css';

export const Events = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_EVENTS_DATA)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    // const msg = error.status;
    navigate('/error/500');
  }

  //   console.log(data, 'data');

  return (
    <div className="events-main">
      {data
        // .sort(
        //   (a, b) =>
        //     convertTZ(a.datetime, a.timezone) <
        //     convertTZ(b.datetime, b.timezone)
        // )
        .map((item) => {
          return (
            <EventCard
              key={item.id}
              id={item.id}
              name={item.name}
              desc={item.description}
              venue={item.venue}
              datetime={item.datetime}
              timezone={item.timezone}
              seatsAvailable={item.areSeatsAvailable}
              isRegistered={item.isRegistered}
              isBookmarked={item.isBookmarked}
              imgUrl={item.imgUrl}
              size="small"
            />
          );
        })}
    </div>
  );
};
