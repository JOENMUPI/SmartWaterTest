import { StyleSheet } from 'react-native';
import { styleConfig } from '../config/styleConfig';

export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',    
    minHeight: 640,
    minWidth: 360
  },

  header: {
    height: '10%',
    width: '100%',
    display:'flex',
    flexDirection: 'row',
    alignItems:'center'
  },

  header__left: {
    width: '10%',
    display:'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start' 
  },

  header__right: {
    width: '10%',
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  header_center:  {
    width: '80%',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header__title: {
    color: styleConfig.principalColor,
    fontSize: styleConfig.fontSizeTitle,
    letterSpacing: .5,
    fontFamily: 'OpenSansBold'
  },

  icon_color: styleConfig.principalColor,

  title: {
    width: '100%',
    height: '10%'
  },

  title__text: {
    color: styleConfig.principalColor,
    fontFamily: 'OpenSansBold',
    fontSize: styleConfig.fontSizeTitle
  },

  input: {
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '12%',
    gap: 5

  },

  input__buttons: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },

  input__buttons_containers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width:'30%'
  },

  input__text: {
    display: 'flex',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: styleConfig.fontColorPrincipal,
    fontSize: styleConfig.fontSizeInput,
    height: 24,
    fontFamily: 'OpenSans',
  },

  input__icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    width: 24
  },

  input__text_placeholder: styleConfig.fontColorPrincipal,
  
  input__button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: styleConfig.fontColorPrincipal,
    height: 24
  },

  input__button_icon: {
      backgroundColor: styleConfig.backgroundColor, 
      padding: 5, 
      elevation: 5,
      shadowColor: '#999999',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2, 
  },

  input__button_text: {
    fontSize: styleConfig.fontSizeInput,
    fontFamily: 'OpenSans',
    color: styleConfig.fontColorPrincipal
  },

  otherProduct: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginTop: '11%'
  },

  otherProduct__button: {
    backgroundColor: styleConfig.backgroundColor, 
    padding: 5, 
    elevation: 5,
    shadowColor: '#999999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: 35,
    height: 35, 
    borderRadius: 10000
  },

  button__icon_text: {
    color: styleConfig.fontColorSecondary,
    fontSize: styleConfig.fontSizeInput,
    fontFamily: 'OpenSans'
  },

  button__text: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: '10%',
    shadowColor: '#999999',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 20,
    borderRadius: 1000,
    backgroundColor: styleConfig.principalColor,
    marginTop: '22%', 
    height: '21%' , 
  },

  button__text_title: {
    color: '#fff',
    fontSize: styleConfig.fontSizeTitle,
    fontFamily: 'OpenSansBold' 
  }
});
