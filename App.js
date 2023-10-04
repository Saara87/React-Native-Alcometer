import { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { ScrollView, Switch, TextInput, Alert, Pressable, Text, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { BasicTheme, DarkTheme } from './style/style';

export default function App () {
  const [isdark, setDark] = useState(false)
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState();
  const theme = isdark ? DarkTheme : BasicTheme;

  
  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];

  function changeTheme () {
    setDark(prev => !prev)
  }

  function checkWeight () {
    if (weight < 1) {
      Alert.alert(
        'Insert weight',
        'You have to insert weight before calculating the blood alcohol level.',
        [
          {
            text: 'Ok'
          }
        ]
      )
    } else {
      calculate();
    }
  }

  function calculate () {
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const grams_left = grams - burning * time
    let level = 0

    if (gender === 'male') {
        level = grams_left / (weight * 0.7)
    } else {
        level = grams_left / (weight * 0.6)
    }
    if (level < 0) {
        setResult(0);
    } else if (level <= 0.5 && level >= 0) {
        setResult(<Text style={theme.low}>{level.toFixed(2)}</Text>);
    } else if (level > 0.5 && level < 1.2) {
        setResult(<Text style={theme.moderate}>{level.toFixed(2)}</Text>);
    } else {
        setResult(<Text style={theme.high}>{level.toFixed(2)}</Text>);
    }
  }


  return (
    <ScrollView contentContainerStyle={theme.container}>
      <View style={theme.change}>
        <Text style={theme.swithctext}>Switch theme</Text>
        <Switch
          style={theme.changer}
          value={isdark}
          onValueChange={changeTheme}
          trackColor={{ false: '#9e8b30', true: '#78735e' }}
        />
      </View>
      <View style={theme.main}>
        <Text style={theme.title}>Alcometer</Text>
        <Text style={theme.label}>Weight</Text>
        <TextInput
          style={theme.numbers}
          keyboardType={'number-pad'}
          placeholder='kg'
          value={weight}
          onChangeText={number => setWeight(number)}
        />
        <Text style={theme.label}>Bottles</Text>
        <View style={theme.choice}>
        <NumericInput
          onChange={number => setBottles(number)}
          value={bottles}
          totalWidth={250}
          totalHeight={55}
          rounded
          rightButtonBackgroundColor='#aea153'
          leftButtonBackgroundColor='#aea153'
          iconStyle={{ color: '#FFFFFF' }}
          step={1}
          minValue={0}
          maxValue={40}
        >
        </NumericInput>
        </View>
        <Text style={theme.label}>Time</Text>
        <View style={theme.choice}>
        <NumericInput
          onChange={time => setTime(time)}
          value={time}
          totalWidth={250}
          totalHeight={55}
          rounded
          rightButtonBackgroundColor='#aea153'
          leftButtonBackgroundColor='#aea153'
          iconStyle={{ color: '#FFFFFF' }}
          step={1}
          minValue={0}
          maxValue={48}
        >
        </NumericInput>
        </View>
        <Text style={theme.label}>Gender</Text>
        <View style={theme.radio}>
          <RadioForm
            buttonSize={40}
            buttonColor={'#040404'}
            selectedButtonColor={'#040404'}
            style={{ marginVertical: 5 }}
            formHorizontal={false}
            labelHorizontal={true}
            radio_props={genders}
            initial={0}
            onPress={value => {
            setGender(value)
          }}
          />
        </View>
        <Text style={theme.results}>{result}</Text>
        <Pressable style={theme.button} onPress={checkWeight}>
          <Text style={theme.label}>Calculate</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}




