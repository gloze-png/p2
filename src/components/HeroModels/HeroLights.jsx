import React from 'react'

const HeroLights = () => {
  return (
    <>
      <spotLight
      position={[2,5,6]}
      angle={0.15}
      intensity={0.2}
      penumbra={0.2}
      castShadow={true}
      color="white"/>

      <spotLight
      position={[4,2,6]}
      angle={3.15}
      intensity={50}
      penumbra={2}
      castShadow={true}
      color="blue"/>

      <spotLight
      position={[2,5,6]}
      angle={2.15}
      intensity={30}
      penumbra={0.2}
      castShadow={true}
      color="red"/>
    </>
  )
}

export default HeroLights
