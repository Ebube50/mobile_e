import { Image, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index () {
  return(
    <SafeAreaView style={{
      backgroundColor:'white', paddingHorizontal:10,
      flex:1
    }}>
      <Image source={require('../assets/images/larrow.png')} style={{height:15, width:20,}}/>

      <Text style={{textAlign:"center", color:'grey'}}>English (US)</Text>

      <Image source={require('../assets/images/facebook.png')} style={{height:50, width:50, 
        alignSelf:"center", marginTop:70}}/>

        <TextInput placeholder="Mobile number or email" placeholderTextColor={'grey'}
        style={{marginTop:100, alignSelf:"center", borderRadius:20, 
          borderColor:'grey', borderWidth:.5, width:300, paddingHorizontal:15, }}/>
          <TextInput placeholder="Password" placeholderTextColor={'grey'} style={{marginTop:10, alignSelf:"center", borderRadius:20, 
          borderColor:'grey', borderWidth:.5, width:300, paddingHorizontal:15 }}/>

 
      <TouchableOpacity style={{alignSelf:"center", justifyContent:"center", margin:10, borderRadius:20,
        backgroundColor:'#1877F2', width:300, height:40}}>
        <Text style={{alignSelf:"center", color:'white'}}>Log in</Text>
      </TouchableOpacity>
      <Text style={{textAlign:"center", color:'#1d1c1c', marginTop:10,}}>Forgot password?</Text>

      <TouchableOpacity style={{alignSelf:"center", justifyContent:"center", marginTop:170, borderRadius:20,
         borderColor:'#1877F2', borderWidth:1,width:300, height:40}}>
        <Text style={{alignSelf:"center", color:'#1877F2'}}>Create new account</Text>
      </TouchableOpacity>
      <Image source={require('../assets/images/meta.png')} style={{height:50, width:50, alignSelf:"center",}}/>

      

    </SafeAreaView>
  )
}
