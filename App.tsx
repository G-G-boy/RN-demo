/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {Text, Button, SafeAreaView} from 'react-native';

const App = () => {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log('init....')
        return () => {
            console.log('update count')
        }
    }, [count])

    const handleClick = () => {
        setCount(count+1)
    }
  return (
    <>
        <SafeAreaView>
            <Text>count: {count}</Text>
            <Button title={'click'} onPress={handleClick}/>
        </SafeAreaView>
    </>
  );
};

export default App;
