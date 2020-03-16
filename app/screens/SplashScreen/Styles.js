import { Dimensions } from "react-native";

export default {
    SplashContaner: {
      width:'100%',
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
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 150,
        fontFamily: 'AmericanTypewriter-Light' 
      },
    
    }