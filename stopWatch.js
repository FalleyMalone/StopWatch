//- Features we should have -
//Buttons: Start, Pause, Reset, Lap 
//Convert our time into hours:minutes:seconds ~ maybe days?
//Something to keep track of our lap times ~ maybe something to keep track of best/worst lap
//Expanding UI, so things like laps and bigger time periods only show up when they need to

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [LapTimer, setLapTimer] = useState([0, 0, 0]);
  const [intervalId, setIntervalId] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{milliseconds}</Text>
      <Text>{seconds}</Text>
      <Text>{minutes}</Text>
      {!isTimerRunning && (
        <Button
          title='Start'
          onPress={() => {
            setIsTimerRunning(true);
            setIntervalId(
              setInterval(() => {
                setMilliseconds((milliseconds) => {
                  if (milliseconds === 99) {
                    setSeconds((seconds) => {
                      if (seconds === 59) {
                        setMinutes((minutes) => minutes + 1);
                        return 0;
                      }
                      return seconds + 1;
                    });
                    return 0;
                  }
                  return milliseconds + 1;
                });
              }, 1),
            );
          }}
        />
      )}
      {isTimerRunning && (
        <Button
          title='Pause'
          onPress={() => {
            setIsTimerRunning(false);
            clearInterval(intervalId);
          }}
        />
      )}
      {!isTimerRunning && (
        <Button
          title='Reset'
          onPress={() => {
            setMilliseconds(0);
            setSeconds(0);
            setMinutes(0);
          }}
        />
      )}
      <Button
        title='Lap'
        onPress={() => {
          setLapTimer([milliseconds, seconds, minutes]);
        }}
      />
      <View>
        <Text>
          Lap 1: {LapTimer[0]}
          {LapTimer[1]}
          {LapTimer[2]}
        </Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
