import { Dimensions } from "react-native";

export default {
    SplashContaner: {
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

      },
      BottomContainer: {
       width:20,
       height:20,
       
      
        alignItems: 'center',
      },
    
      textCon: {
        marginTop:0
      },
      text: {
        color: 'Black',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 150,
        fontFamily: 'AmericanTypewriter-Light' 
      },
    
    }