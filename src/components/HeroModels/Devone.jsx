import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Devone(props) {
  const { nodes, materials } = useGLTF('models/devone.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.wire_086086086} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.wire_086086086} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.wire_086086086} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.wire_086086086} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.wire_086086086} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.wire_086086086} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.wire_086086086} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.wire_086086086} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.wire_086086086} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_51.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_55.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_57.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.wire_088144225} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.wire_204204204} />
        <mesh geometry={nodes.Object_62.geometry} material={materials.wire_204204204} />
        <mesh geometry={nodes.Object_63.geometry} material={materials.wire_204204204} />
        <mesh geometry={nodes.Object_64.geometry} material={materials.wire_204204204} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.wire_204204204} />
      </group>
    </group>
  )
}

useGLTF.preload('models/devone.glb')
