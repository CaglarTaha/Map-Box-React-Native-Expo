import { StyleSheet, View } from 'react-native';
import React from 'react';
import Mapbox, { MapView } from '@rnmapbox/maps';
import { SafeAreaView } from 'react-native-safe-area-context';


const Tokken:any = process.env.ACCES_TOKKEN || null

Mapbox.setAccessToken(Tokken);

export default function Map() {
  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
