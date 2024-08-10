import { StyleSheet, View } from 'react-native';
import React from 'react';
import Mapbox, { Camera, LocationPuck, MapView, ShapeSource, SymbolLayer } from '@rnmapbox/maps';
import markersData from '../mock/Markes/data.json'; // Importing the markers data

Mapbox.setAccessToken(process.env.ACCES_TOKKEN|| '');

export default function Map() {
  const features:any = markersData.map((marker:any) => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [marker.longitude, marker.latitude],
    },
    properties: {
      id: marker.id,
      title: marker.title,
      description: marker.description,
    },
  }));


  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        styleURL='mapbox://styles/mapbox/dark-v11'
      >
        <Camera followUserLocation followZoomLevel={14} />
        <LocationPuck puckBearingEnabled puckBearing='course' pulsing={{isEnabled:true}} />
        <ShapeSource id="markers" shape={{ type: 'FeatureCollection', features }}>
          <SymbolLayer
            id="markerLayer"
            style={{
              iconImage: 'pin', 
              iconSize: 1.5,
              iconAllowOverlap: true,
              iconIgnorePlacement: true,
            }}
          />
        </ShapeSource>
      </MapView>
    </View>
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
