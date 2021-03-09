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
const WeatherBanner = ({ forecastNow, unit, locale, city }) => (
  <div>
    <BannerContainer>
      <Temperature>{forecastNow.temp.eve.toFixed(0)}</Temperature>
      <Unit>
        {unit === 'metric' ? 'º' : 'F'}
      </Unit>
      <TextContainer>
        <CityText>{city}</CityText>
        <HourText>{new Date(forecastNow.dt * 1000).toDateString()}</HourText>
      </TextContainer>

      <BannerIcon width={100} height={100} src={iconCodeMapping[forecastNow.weather[0].icon]} />



    </BannerContainer>

    <DetailContainer>
      <DetailsTitle>Weather Details</DetailsTitle>
      <InfoText>
        Clouds:
          <DetailsText>{forecastNow.clouds} %</DetailsText>
      </InfoText>
      <InfoText>
        Humidity: <DetailsText>{forecastNow.humidity} %</DetailsText>
      </InfoText>
      <InfoText>
        Wind:<DetailsText>
          {forecastNow.wind_speed}
          {unit === 'metric' ? 'm/s' : 'mph'}</DetailsText>

      </InfoText>
      <Line></Line>
      <DetailsTitle>Temperature</DetailsTitle>
    </DetailContainer>

  </div>
);

WeatherBanner.defaultProps = {
  unit: 'metric',
  locale: 'zh-tw',
};


export default WeatherBanner;
const Line = styled.hr``;
const CityText = styled.div`
  font-size:50px;
  margin-top: 1.0rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;
const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BannerIcon = styled.img`
  margin-top: 1.0rem;
  margin-left:auto;
  text-align:left;
  aspect-ratio: attr(width) / attr(height);

`;

const Temperature = styled.div`
  font-size: 96px;
  margin-left: 0.5rem;
`;

const Unit = styled.div`
  font-size: 96px;
`;
const HourText = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const DetailContainer = styled.div`
  display: block;
  flex-direction: column;
`;

const InfoText = styled.div`
  font-weight: 300;
  display:flex;
  justify-content:space-between;
  padding-bottom:24px;
  font-size:20px;
`;
const DetailsText = styled.div`
  text-align: right;
`;
const DetailsTitle = styled.div`
  font-size: 24px;
  font-weight:500;
  padding-bottom:40px;
`;

