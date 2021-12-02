import { Dimensions } from 'react-native';

export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;

export const colors = {
  iris: '#674AC9',
  yambukhica: '#2062C3',
  unb: '#6d92d0',
  lsb: '#97B6DD',
  grayscale: {
    5: 'rgb(251, 251, 251)',
    10: 'rgb(236, 238, 238)',
    20: 'rgb(221, 225, 225)',
    30: 'rgb(194, 201, 202)',
    40: 'rgb(159, 168, 172)',
    50: 'rgb(122, 133, 142)',
    60: 'rgb(94, 102, 112)',
    70: 'rgb(87, 92, 105)',
    80: 'rgb(68, 70, 83)',
    90: 'rgb(60, 60, 74)',
    100: 'rgb(3, 3, 4)',
  },
};
