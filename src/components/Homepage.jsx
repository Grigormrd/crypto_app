import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if(isFetching) return 'Loading...';

  return (
    <>
      <Title level={2} className="heading" >Globale Krypto-Statistik</Title>
      <Row>
        <Col span={12}><Statistic title="Kryptowährungen insgesamt" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Alle Börsen" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Gesamte Marktkapitalisierung" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="24-Stunden-Gesamtvolumen" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Gesamte Märkte" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title" >Top 10 Kryptowährungen</Title>
        <Title level={3} className="show-more" ><Link to="/cryptocurrencies">Mehr anzeigen</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title" >Die neusten Krypto-News</Title>
        <Title level={3} className="show-more" ><Link to="/news">Mehr anzeigen</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage