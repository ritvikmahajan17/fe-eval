/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './EventCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faBookmark,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { convertTZ, getFormattedDateFromUtcDate } from '../../utils/common';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_EVENT_BOOKMARK_BY_ID } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';

export const EventCard = ({
  id,
  name,
  desc,
  venue,
  datetime,
  timezone,
  seatsAvailable,
  isRegistered,
  isBookmarked,
  imgUrl,
}) => {
  const [isBookmark, setIsBookmark] = useState(isBookmarked);
  const navigate = useNavigate();

  const handleBookmarkClick = async () => {
    await makeRequest(UPDATE_EVENT_BOOKMARK_BY_ID(id), {
      data: { isBookmarked: !isBookmark },
    });
    setIsBookmark(!isBookmark);
  };

  const handleCardClick = () => {
    navigate(`/events/${id}`);
  };

  return (
    <div onClick={handleCardClick} className="eventcard-main">
      <div className="eventcard-image">
        <img src={imgUrl} id="main-img" alt="event" />
      </div>
      <div className="eventcard-content">
        <div className="eventcard-details">
          <div className="eventcard-name">{name}</div>
          <div className="eventcard-description">{desc}</div>
        </div>
        <div className="eventcard-venue">
          <div className="eventcard-name">VENUE:{venue}</div>
          <div className="eventcard-description">
            DATE:{getFormattedDateFromUtcDate(datetime)}
            {/* {console.log(convertTZ(datetime, timezone).toString())} */}
          </div>
        </div>
        {isRegistered && (
          <div className="eventcard-icons">
            <div className="icon-register">
              <FontAwesomeIcon icon={faCircleCheck} color="#A0F3AD" />
              <a>Registered</a>
            </div>
            {isBookmark ? (
              <div onClick={handleBookmarkClick} className="icon">
                <i className="fa-solid fa-bookmark fa-2x"></i>
              </div>
            ) : (
              <div onClick={handleBookmarkClick} className="icon">
                <i className="fa-regular fa-bookmark fa-2x"></i>
              </div>
            )}
          </div>
        )}
        {!seatsAvailable && (
          <div className="eventcard-icons">
            <div className="icon-seats">
              <FontAwesomeIcon icon={faCircleXmark} color="#ECECAB" />
              <a>NO SEATS AVAILABLE</a>
            </div>
            {isBookmark ? (
              <div onClick={handleBookmarkClick} className="icon">
                <i className="fa-solid fa-bookmark fa-2x"></i>
              </div>
            ) : (
              <div onClick={handleBookmarkClick} className="icon">
                <i className="fa-regular fa-bookmark fa-2x"></i>
              </div>
            )}
          </div>
        )}
        {!isRegistered && seatsAvailable && (
          <div className="eventcard-icons-solo">
            {isBookmark ? (
              <div onClick={handleBookmarkClick} className="icon">
                <i className="fa-solid fa-bookmark fa-2x"></i>
              </div>
            ) : (
              <div onClick={handleBookmarkClick} className="icon">
                <i className="fa-regular fa-bookmark fa-2x"></i>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  seatsAvailable: PropTypes.bool.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
