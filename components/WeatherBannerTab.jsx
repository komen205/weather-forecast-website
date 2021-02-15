/* eslint-disable react/jsx-props-no-spreading */
import 'react-tabs/style/react-tabs.css';
import 'rc-slider/assets/index.css';
import { Line } from 'react-chartjs-2';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import styled from 'styled-components';
import WeatherBanner from './WeatherBanner';

const { Handle } = Slider;

const WeatherBannerTab = ({
  location,
  forecastOfDay,
  locale,
  forecastIdx,
  forecast,
  unit,
  onLocationClick,
}) => {
  const [tabIndex, setTabIndex] = useState(0);
  //sempre que o slicer muda-se
  // não muda a TAB pq o forestidx cotninua a 0 e o tabIndex é mudado

  const renderTabPanel = (item, displayUnit) => {
    return (
      <TabPanel key={`tp${item.dt}`}>
        <WeatherBanner forecastNow={item} unit={displayUnit} />
      </TabPanel>
    );
  };

  const renderTab = (item, displayLocale) => {
    const localeRegion = displayLocale || 'zh-tw';
    if (item) {
      return (
        <Tab key={`t${item.dt}`}>
          {moment.unix(item.dt).locale(localeRegion).format('a h:mm')}
        </Tab>
      );
    }
    return <div />;
  };

  const handle = (params) => {
    const { value, dragging, index, ...restProps } = params;

    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };
  const data = {
    labels: ['Morning', 'Day', 'Evening', 'Night'],
    datasets: [
      {
        label: 'Temperature',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [forecast[forecastIdx].temp.morn,forecast[forecastIdx].temp.day,forecast[forecastIdx].temp.eve,forecast[forecastIdx].temp.night]
      }
    ],
    options: {
      legend: {
        display: false
      }, tooltips: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      }


    }
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    }
  };

const marks = {};
forecastOfDay.forEach((item, index) => {
  marks[index] = item.moment.locale(locale).format('a h:mm');
});
return (
  <Container>
    <LocationText onClick={onLocationClick}>{location}</LocationText>
    <Tabs selectedIndex={0} onSelect={false}>
      {renderTabPanel(forecast[forecastIdx])}

    </Tabs>
    <TabContainer>
      <Line
        data={data}
        width={100}
        height={100}
        options={options}
        legend={{ display: false }}
      />
    </TabContainer>
  </Container >
);
};

WeatherBannerTab.defaultProps = {
  unit: 'metric',
  locale: 'zh-tw',
  forecastOfDay: [],
};

WeatherBannerTab.propTypes = {
  location: PropTypes.string.isRequired,
  forecastOfDay: PropTypes.arrayOf(
    PropTypes.shape({
      dt: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      clouds: PropTypes.number.isRequired,
      wind: PropTypes.number.isRequired,
    }),
  ),
  unit: PropTypes.string,
  locale: PropTypes.string,
};

export default WeatherBannerTab;

const LocationText = styled.div`
  font-size: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TabContainer = styled.div`
  margin: 0.8rem 0.8rem;
  padding-bottom: 1.5rem;
`;
