/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Path, Svg} from 'react-native-svg';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: StyleProp<ViewStyle> = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          backgroundColor: 'red',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <Svg
          // height="50%"
          // width="50%"
          style={{}}
          viewBox=" 0 0 100 100">
          {/* <Path
            d="M20 5 L200 5 a10,10 0 0 1 10,10 L210 80 a10,10 0 0 0 10,10 L400 90 a10,10 0 0 1 10,10 L410 220 a10,10 0 0 0 10,10 a5,5 0 0 1 5,5 L425 280 a10,10 0 0 1 -10,10 L155 290 a30,30 0 0 1 -30,-30 L125 180 a10,10 0 0 0 -10,-10 L30 170 a10,10 0 0 1 -10,-10 z"
            strokeWidth={3}
            stroke={'#000'}
          /> */}
          <Path
            d="M-50 5 L70 5 a10,10 0 0 1 10,10 L80 40 a10,10 0 0 1 -10,10 L30 50z"
            fill={'none'}
            stroke="black"></Path>
        </Svg>
      </View>
      <View
        style={{
          backgroundColor: 'pink',
          alignItems: 'center',
          gap: 10,
        }}>
        {/* <Text style={{fontSize: 29, color: '#000000'}}>V1</Text>
        <TouchableOpacity
          onPress={() => getGetFileData()}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#164fca',
            backgroundColor: '#164fca88',
          }}>
          <Text style={{fontSize: 18, color: '#ffffff'}}>
            Install Next Update
          </Text>
        </TouchableOpacity> */}
      </View>
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
