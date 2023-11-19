import { StatusBar } from 'expo-status-bar';
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { mainStyle } from './src/styles/styles';
import { useFonts } from 'expo-font';
import { fontConfig } from './src/config/fontConfig';

 
export default function App() {
  const [fontsLoaded] = useFonts(fontConfig);

  if (!fontsLoaded) return null;
  else return (
    <View style={mainStyle.container}>
      <StatusBar hidden />
      <View style={mainStyle.header}>
        <View style={mainStyle.header__left}>
          <TouchableOpacity>
            <Icon type='font-awesome' name='bars' color={mainStyle.icon_color} size={26} />
          </TouchableOpacity>
        </View> 
        <View style={mainStyle.header_center}>
          <Text style={mainStyle.header__title}>
            SMART WATER
          </Text>
        </View>
        <View style={mainStyle.header__right}>  
        </View>
      </View>
      <View style={mainStyle.title}>
        <Text style={mainStyle.title__text}>
          Registrar nueva venta
        </Text>
      </View>
      <View style={mainStyle.input}>
        <View style={mainStyle.input__icon}>
          <Icon type='font-awesome' name='user-circle-o' color={mainStyle.icon_color} size={24} />
        </View>
        <TextInput
          style={mainStyle.input__text}
          placeholderTextColor={mainStyle.input__text_placeholder}
          placeholder='Numero de cliente'
        />
      </View>
      <View style={mainStyle.input}>
        <View style={mainStyle.input__icon}>
          <Icon type='font-awesome-5' name='wine-bottle' color={mainStyle.icon_color} size={24} />
        </View>
        <TouchableOpacity style={mainStyle.input__button}>
          <Text style={mainStyle.input__button_text}>
            Producto
          </Text>
          <Icon type='font-awesome-5' name='chevron-down' color={mainStyle.icon_color} size={20} />
        </TouchableOpacity>
      </View>
      <View style={mainStyle.input}>
        <View style={mainStyle.input__icon}>
          <Icon type='font-awesome-5' name='sort-amount-up-alt' color={mainStyle.icon_color} size={24} />
        </View>
        <View style={mainStyle.input__buttons}>
          <Text style={mainStyle.input__button_text}>
            Cantidad
          </Text>
          <View style={mainStyle.input__buttons_containers}>
            <TouchableOpacity style={mainStyle.input__button_icon}>
              <Icon type='font-awesome-5' name='minus' color={mainStyle.icon_color} size={15} />
            </TouchableOpacity>
            <Text>
              01
            </Text>
            <TouchableOpacity style={mainStyle.input__button_icon}>
              <Icon type='font-awesome-5' name='plus' color={mainStyle.icon_color} size={15} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={mainStyle.input}>
        <View style={mainStyle.input__icon}>
          <Icon type='font-awesome-5' name='dollar-sign' color={mainStyle.icon_color} size={24} />
        </View>
        <TextInput
          style={mainStyle.input__text}
          placeholderTextColor={mainStyle.input__text_placeholder}
          placeholder='Agregar precio'
        />
      </View>
      <View style={mainStyle.otherProduct}>
        <TouchableOpacity style={mainStyle.otherProduct__button}>
          <Icon type='font-awesome-5' name='plus' color={mainStyle.icon_color} size={24} />
        </TouchableOpacity>
        <Text style={mainStyle.button__icon_text}>
          Agregar otro producto
        </Text>
      </View>
      <View>
        <TouchableOpacity style={mainStyle.button__text}>
          <Text style={mainStyle.button__text_title}>
            Vender
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
