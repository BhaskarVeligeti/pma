import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal, ActivityIndicator
} from 'react-native';


const Loader = ({ loading, ...attributes }) => {
  return (
    <Modal
      transparent={true}
      animationType={'fade'}
      visible={loading}
      onRequestClose={() => { console.log('close modal') }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={loading}
            size='large' 
            color={"#6f42c1"}
            /> 
            {/* <Text>Loading...</Text> */}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000080',
    
  },
  activityIndicatorWrapper: {
    backgroundColor: 'white',
    height: 100,
    width: 200,
    borderRadius: 10,
    borderColor: "#6f42c1",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: "#6f42c1",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
  }
});
export default Loader;
