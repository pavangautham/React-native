
import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import ImagePicker from 'react-native-image-crop-picker'

const App = () => {
  /* constructor(props) {
    super(props);
    this.state = {
      avatarSrc:{}
    }
  }; */

  const [avatarSrc, setAvatarSrc] = useState({});

  _openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      /* this.setState({
        avatarSrc: image
      }) */
      setAvatarSrc({...image})
    });
  }

  

    const sourceUri = avatarSrc.path ? { uri: avatarSrc.path }
        : require('./src/img/teju.jpg');

  return (
    <>
      
      <View>
        <ScrollView>
          
          <View style={styles.body}>
            
            <View style={{alignItems: "center"}}>
              <TouchableHighlight onPress={_openGallery}>
              <Image 
                source={ sourceUri } 
                indicator={ProgressBar} 
                style={{
                  margin: 30,
                  width: 250, 
                  height: 250, 
                }}/>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
  
};

const styles = StyleSheet.create({
  
  body: {
    backgroundColor: 'white',
  },
  
});

export default App;
