import { animated } from '@react-spring/web'
import React from 'react'

export default function HeroText() {
  return (
    <animated.div
    style={{
      width: 80,
      height: 80,
      background: '#ff6d6d',
      borderRadius: 8,
    }}
  />
  )
}
