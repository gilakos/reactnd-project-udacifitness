import React from 'react'
import { View, Text, Slider } from 'react-native'

export default function UdacitySlider ({ max, unit, step, value, onChange }) {
  return (
    <View>
      <slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={min}
        onChange={onChange}
      />
      <Text>UdacitySlider</Text>
    </View>
  )
}
