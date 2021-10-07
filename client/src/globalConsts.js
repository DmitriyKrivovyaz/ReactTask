import nightBgImage from '../public/images/nightBgImage.png';
import sunnyBgImage from '../public/images/sunnyBgImage.png';

const urls = {
  accessToken: '/getAccessToken'
};

const themes = {
  light: 'light',
  dark: 'dark'
};

const bgImages = {
  dark: nightBgImage,
  light: sunnyBgImage
};

export { themes, bgImages, urls };
