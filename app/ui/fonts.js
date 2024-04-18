import localFont from 'next/font/local';
import { Road_Rage, Montserrat, Nunito_Sans } from 'next/font/google';

// const ValorantFont = localFont({ src: './fonts/Valorant_Font.ttf'});

const road_rage = Road_Rage({
    weight: '400',
    subsets: [],
    display: 'swap',
  });
  
  const nunito_sans = Nunito_Sans({
    subsets: [],
    display: 'swap',
  });

  const montserrat = Montserrat({
    weight: '400',
    subsets: [],
    display: 'swap',
  });

export {
    road_rage,
    nunito_sans,
    montserrat
}