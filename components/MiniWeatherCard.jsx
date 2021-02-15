import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import iconCodeMapping from './WeatherIcon';

/**
 * Render a daily cards containing a weather icon and the minimum and maximum temperature
 *
 * @param {function} onClick clicking callback
 * @param {object[]} forecastList forecast data to render
 * @param {boolean} isSelected render whether it's selected or not
 * @param {string} unit the unit format for figures, only accepting 'metric' for now
 * @param {string} locale locale for time formating
 */
const MiniWeatherCard = ({
  onClick,
  forecastList,
  isSelected,
  unit,
  locale,
  selected
}) => {
  if (forecastList !== undefined && forecastList.length > 0) {

    const first = forecastList[0];
    const date =  new Date(first.dt * 1000).toDateString();

    // find maximum and minimum temperature of the given list
    const tempMaxAndMin = forecastList.reduce(
      (acc, current) => {
        if (current.temp_max > acc.max) {
          acc.max = current.temp_max;
        }
        if (current.temp_min < acc.min) {
          acc.min = current.temp_min;
        }
        return acc;
      },
      { max: Number.MIN_VALUE, min: Number.MAX_VALUE },
    );
    return (
      <Root>
        <Container onClick={onClick} isSelected={isSelected}>
          <Text>{date}</Text>
          <Icon src={iconCodeMapping[first.weather[0].icon]} />
          <Text>
            {first.temp.max}
            &deg;
            {unit === 'metric' ? 'C' : 'F'}
          </Text>
          <Text>
            {first.temp.min}
            &deg;
            {unit === 'metric' ? 'C' : 'F'}
          </Text>
        </Container>
      </Root>
    );
  }
  return <div />;
};

MiniWeatherCard.defaultProps = {
  onClick: () => {},
  isSelected: false,
  unit: 'metric',
  locale: 'zh-tw',
  forecastList: [],
};


export default MiniWeatherCard;

const Root = styled.div`
  min-width: 20%;
`;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  background: ${(props) => (props.isSelected ? '#F9F9F9' : 'inherit')};
  border: ${(props) => (props.isSelected ? '1px solid #DDDDDD' : 'none')};
`;

const Text = styled.div`
  text-align: center;
  line-height: normal;
  padding: 0.5rem 0rem;
`;

const Icon = styled.img`
  align-self: center;
  line-height: normal;
  width: 3rem;
  height: 3rem;
`;
