/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_EVENTS_DATA } from '../../constants/apiEndPoints';
// import { convertTZ } from '../../utils/common';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { EventCard } from '../EventCard';
import './Events.css';

export const Events = ({ filterValue }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [filterData, setFilterData] = useState([]);
  const navigate = useNavigate();

  console.log(filterValue, 'filterValue');

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

  //   console.log(filterValue, 'data');

  useEffect(() => {
    if (filterValue === 'ALL') {
      setFilterData(data);
    }
    if (filterValue === 'BOOKMARKED') {
      setFilterData(data.filter((item) => item.isBookmarked === true));
    } else if (filterValue === 'REGISTERED') {
      setFilterData(data.filter((item) => item.isRegistered === true));
    } else if (filterValue === 'SEATS-AVAILABLE') {
      setFilterData(data.filter((item) => item.areSeatsAvailable === true));
    }
  }, [filterValue]);

  //   console.log(data, 'data');

  return (
    <div className="events-main">
      {filterData
        // .sort(
        //   (a, b) =>
        //     convertTZ(a.datetime, a.timezone) >
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

Events.propTypes = {
  filterValue: PropTypes.string,
};
