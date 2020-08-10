import React from 'react';
import { } from 'react-native';

import AppText from '../../AppText';

import styles from './styles';

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return (
    <AppText style={styles.error}>{error}</AppText>
  )
}

export default ErrorMessage;
