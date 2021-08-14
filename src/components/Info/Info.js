import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { infoData } from '../../data/dataStore';
import { styles } from 'ansi-colors';

const Info = () => (
  <Container>
    <h1 className={styles.title}>{infoData.title}</h1>
    <h2 className={styles.subtitle}>{infoData.subtitle}</h2>
    <Hero titleText={infoData.imageTitle} image={infoData.image} />
    <p className={infoData.content}>{infoData.content} </p>
  </Container>
);

export default Info;