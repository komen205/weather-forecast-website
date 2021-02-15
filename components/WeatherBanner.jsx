import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import iconCodeMapping from './WeatherIcon';

/**
 * Render a primary display of the current forecast, including a date time, a weather icon,
 * current temperature, humidity, cloud density and wind
 *
 * @param {object} forecastNow the current forecast
 * @param {string} unit the unit format for figures, only accepting 'metric' for now
 * @param {locale} locale locale for time formating
 */
const WeatherBanner = ({ forecastNow, unit, locale }) => (
  <div>
    <h5>
      { new Date(forecastNow.dt * 1000).toDateString()}
    </h5>
    <BannerContainer>
      <BannerIcon src={iconCodeMapping[forecastNow.weather[0].icon]} />
      <Temperature>{forecastNow.temp.eve}</Temperature>
      <Unit>
        &deg;
        {unit === 'metric' ? 'C' : 'F'}
      </Unit>
      <div style={{ flex: '1' }} />
      <DetailContainer>
        <InfoText>
          Clouds:
          <b>{forecastNow.clouds} %</b>
        </InfoText>
        <InfoText>
          Humidity: <b>{forecastNow.humidity} %</b>
        </InfoText>
        <InfoText>
          Wind:{' '}
          <b>
            {forecastNow.wind_speed} 
            {unit === 'metric' ? 'm/s' : 'mph'}
          </b>
        </InfoText>
      </DetailContainer>
    </BannerContainer>
    
  </div>
);

WeatherBanner.defaultProps = {
  unit: 'metric',
  locale: 'zh-tw',
};


export default WeatherBanner;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BannerIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;

const Temperature = styled.div`
  font-size: 3rem;
  margin-left: 0.5rem;
  font-weight: bold;
`;

const Unit = styled.div`
  font-size: 1rem;
  margin-top: 0.7rem;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoText = styled.div`
  text-align: right;
`;
