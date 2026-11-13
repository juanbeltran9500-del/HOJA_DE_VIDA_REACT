
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#64748B',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 65,
          paddingTop: 5,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
        },
      }}
    >
      {/* PANTALLA 1: INICIO */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              size={size}
          color={String(color ?? '#2563EB')}
            />
          ),
        }}
      />

      {/* PANTALLA 2: ESTUDIOS */}
      <Tabs.Screen
        name="estudios"
        options={{
          title: 'Estudios',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="school-outline"
              size={size}
           color={String(color ?? '#2563EB')}
            />
          ),
        }}
      />

      {/* PANTALLA 3: EXPERIENCIA */}
      <Tabs.Screen
        name="experiencia"
        options={{
          title: 'Experiencia',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="briefcase-outline"
              size={size}
             color={String(color ?? '#2563EB')}
            />
          ),
        }}
      />

      {/* PANTALLA 4: HOBBIES */}
      <Tabs.Screen
        name="hobbies"
        options={{
          title: 'Hobbies',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="heart-outline"
              size={size}
              color={String(color ?? '#2563EB')}
            />
          ),
        }}
      />
    </Tabs>
  );
}
