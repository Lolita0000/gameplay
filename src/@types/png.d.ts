// Permite importar imagens .png no TypeScript (import Img from './img.png')
declare module '*.png' {
  import { ImageSourcePropType } from 'react-native';
  const value: ImageSourcePropType;
  export default value;
}
