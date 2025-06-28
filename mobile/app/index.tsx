import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import Tab1 from './screens/TabOne';
import Tab2 from './screens/TabTwo';

export default function TabViewScreen() {
  const layout = useWindowDimensions();
  const router = useRouter();
  const params = useLocalSearchParams();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Tab 1' },
    { key: 'second', title: 'Tab 2' },
  ]);

  const renderScene = SceneMap({
    first: Tab1,
    second: Tab2,
  });

  useEffect(() => {
    if (params?.tabIndex !== undefined) {
      setIndex(Number(params.tabIndex));
    }
  }, [params]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
