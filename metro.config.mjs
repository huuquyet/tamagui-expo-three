import { resolve } from 'node:path'
// Learn more https://docs.expo.io/guides/customizing-metro
/** @type {import('expo/metro-config').MetroConfig} */
import { getDefaultConfig } from 'expo/metro-config'

const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
})

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
})

config.resolver.sourceExts.concat(['js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs'])
config.resolver.assetExts.concat(['glb', 'gltf', 'png', 'jpg'])

// Enable Tamagui and add nice web support with optimizing compiler + CSS extraction
import { withTamagui } from '@tamagui/metro-plugin'
export default withTamagui(config, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css',
})
