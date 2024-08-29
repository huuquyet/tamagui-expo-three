import { themeAtom } from '@/Provider'
import { Atom, AudioWaveform, Monitor, Moon, Sun } from '@tamagui/lucide-icons'
import { Link, Tabs } from 'expo-router'
import { useAtom } from 'jotai'
import { Button, XStack, useTheme } from 'tamagui'

const icons = {
  dark: <Moon />,
  light: <Sun />,
  system: <Monitor />,
}

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Buffergeometry',
          tabBarIcon: ({ color }) => <Atom color={color} />,
          headerRight: () => <ThemeButton />,
        }}
      />
      <Tabs.Screen
        name="flower"
        options={{
          title: 'Flower Field',
          tabBarIcon: ({ color }) => <AudioWaveform color={color} />,
          headerRight: () => <ThemeButton />,
        }}
      />
    </Tabs>
  )
}

const ThemeButton = () => {
  const [theme, toggle] = useAtom(themeAtom)

  return (
    <XStack mr="$4" gap="$2">
      <Button icon={icons[theme]} onPress={() => toggle()} circular />
    </XStack>
  )
}
