//- Features we should have -
//Buttons: Start, Pause, Reset, Lap
//Convert our time into hours:minutes:seconds ~ maybe days?
//Something to keep track of our lap times ~ maybe something to keep track of best/worst lap
//Expanding UI, so things like laps and bigger time periods only show up when they need to

import StopWatch from './components/StopWatch';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StopWatch/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});