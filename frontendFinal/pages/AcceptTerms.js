import React , {Component} from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
};
class AcceptTerms extends Component{

  state = {
      accepted: false
  }
  
  render(){
    return (
     <View style={styles.container}>
            <Text style={styles.title}>Contract Terms and conditions</Text>
            <ScrollView 
            style={styles.tcContainer}
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                  this.setState({
                      accepted: true
                  })
                }
              }}
            >
                <Text style={styles.tcP}>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern LYRNIFY’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</Text>
                <Text style={styles.tcP}>The term ‘LRNIFY’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is GUC. Our company registration number is 123 GUC. The term ‘you’ refers to the user or viewer of our website.</Text>
                    <Text style={styles.tcL}>{'\u2022'} The content of the pages of this website is for your general information and use only. It is subject to change without notice.</Text>
                    <Text style={styles.tcL}>{'\u2022'} This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [usernae,password,email].</Text>
                    <Text style={styles.tcL}>{'\u2022'} Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</Text>
                    <Text style={styles.tcL}>{'\u2022'} Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</Text>
                    <Text style={styles.tcL}>{'\u2022'} This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</Text>
                    <Text style={styles.tcL}>{'\u2022'} All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</Text>
                    <Text style={styles.tcL}>{'\u2022'} From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</Text>
                    <Text style={styles.tcL}>{'\u2022'} Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.</Text>
               
                    <Text style={styles.tcL}>{'\u2022'} By accepting you're agreeing to give LRNIFY all the rights to your posted videos and material as well as the percentage taken by us on each video per registered trainee  .</Text>

               
               
               
                <Text style={styles.tcP}>The use of this website is subject to the following terms of use</Text>
            </ScrollView>
            <div>

                <p>

                </p>
            </div>
        <div>
          
            <Link to = '/' style={styles.title}> I ACCEPT</Link>
            </div>
      </View>
    );
  }

}

const { width , height } = Dimensions.get('window');

const styles = {
   
  container:{
    marginTop: 100,
    marginLeft: 300,
    marginRight: 1000
  },
  title: {
      fontSize: 35,
      alignSelf: 'center'
    
  },
  tcP: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 20
  },
  tcP:{
      marginTop: 10,
      fontSize: 20
  },
  tcL:{
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 20
  },
  tcContainer: {
    fontSize: 22,
    alignSelf: 'center'
  },

  button:{
     // backgroundColor: '#136AC7',
      alignSelf: 'center',
      borderRadius: 5

  },

  buttonDisabled:{
    backgroundColor: '#999',
    borderRadius: 5,
    padding: 10
 },

  buttonLabel:{
      fontSize: 14,
      color: '#FFF',
      alignSelf: 'center'
  }

}

export default AcceptTerms;