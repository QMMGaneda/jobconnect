import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
// import Full from "./Full"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Text >
        <Image style = {styles.image}source={require('./assets/Location.png')}/>
          <Text style = {styles.subtitle}>
          QUEZON CITY
          </Text>
        </Text>
        <Text style = {styles.title}>Dish Washer</Text>
        <Text style = {styles.subtitle}>RATE: 16,000</Text>
      </View>

      <View style={styles.tab}>
        <Text >
        <Image style = {styles.image}source={require('./assets/Location.png')}/>
          <Text style = {styles.subtitle}>
          QUEZON CITY
          </Text>
        </Text>
        <Text style = {styles.title}>House Cleaner</Text>
        <Text style = {styles.subtitle}>RATE: 16,000</Text>
        
      </View>

      <View style={styles.tab}>
        <Text >
        <Image style = {styles.image}source={require('./assets/Location.png')}/>
          <Text style = {styles.subtitle}>
          MANILA
          </Text>
        </Text>
        <Text style = {styles.title}>Window Wiper</Text>
        <Text style = {styles.subtitle}>RATE: 16,000</Text>
      </View>

      <View style={styles.tab}>
        <Text >
        <Image style = {styles.image}source={require('./assets/Location.png')}/>
          <Text style = {styles.subtitle}>
          MANILA
          </Text>
        </Text>
        <Text style = {styles.title}>Helper</Text>
        <Text style = {styles.subtitle}>RATE: 18,000</Text>
      </View>

      <View style={styles.tab}>
        <Text >
        <Image style = {styles.image}source={require('./assets/Location.png')}/>
          <Text style = {styles.subtitle}>
          SJDM Bulacan
          </Text>
        </Text>
        <Text style = {styles.title}>Deathbed Companion</Text>
        <Text style = {styles.subtitle}>RATE: 5,000</Text>
      </View>

      <View style={styles.tab}>
        <Text >
        <Image style = {styles.image}source={require('./assets/Location.png')}/>
          <Text style = {styles.subtitle}>
          SJDM Bulacan
          </Text>
        </Text>
        <Text style = {styles.title}>Cuddler</Text>
        <Text style = {styles.subtitle}>RATE: 16,000</Text>
      </View>

    
    </View>
  );
}
//<Image style = {styles.image}source={require('./iconGrp.jpg')}/>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#FFBB5C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    flexBox: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },
    title: {
    fontFamily: 'DMSans_Medium',
    letterSpacing: 2.4,
    //padding: 5,
    color: '#FB6C00',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'DMSans_Medium',
    fontSize: 14,
    letterSpacing: 1.7,
    //padding: 5,
    color: '#FB6C00',
    //fontWeight: 'bold',
  },
  names: {
    fontSize: 20,
    color: '#000000',
  },
  image: {
    width: 16,
    height: 16,
    //padding: 10,
    //borderWidth: 3,
    //borderRadius: 10,
    borderColor: '#332211',
  },
});
