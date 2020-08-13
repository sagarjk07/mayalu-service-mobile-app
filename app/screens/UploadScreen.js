import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';
import * as Progress from 'react-native-progress';

import AppText from '../components/AppText';
import colors from '../config/colors';

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {
          progress < 1 ? (
            <Progress.Bar
              width={200}
              progress={progress}
              color={colors.primary}
            />
          ) : (
              <LottieView
                autoPlay
                loop={false}
                style={styles.animation}
                onAnimationFinish={onDone}
                source={require('../assets/lottieAnimation/done.json')}
              />
            )
        }
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation: {
    width: 150
  }
})

export default UploadScreen;
