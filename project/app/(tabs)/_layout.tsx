import { Tabs } from 'expo-router';
import { Chrome as Home, ClipboardList, MessageSquare, User } from 'lucide-react-native';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';

function TabBarIcon({ Icon, label, focused }: { Icon: any; label: string; focused: boolean }) {
  return (
    <View style={styles.tabBarItem}>
      <Icon size={24} color={focused ? '#2D6A4F' : '#6B7280'} />
      <Text style={[
        styles.tabBarLabel,
        focused ? styles.tabBarLabelActive : styles.tabBarLabelInactive
      ]}>
        {label}
      </Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          Platform.OS === 'ios' ? (
            <BlurView intensity={80} style={StyleSheet.absoluteFill} />
          ) : (
            <View style={[StyleSheet.absoluteFill, styles.tabBarAndroid]} />
          )
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={Home} label="Accueil" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Chantiers',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={ClipboardList} label="Chantiers" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={MessageSquare} label="Messages" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon Icon={User} label="Profil" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    paddingBottom: Platform.OS === 'ios' ? 24 : 8,
    paddingTop: 12,
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: 'transparent',
  },
  tabBarAndroid: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  tabBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarLabel: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'Inter-Regular',
  },
  tabBarLabelActive: {
    color: '#2D6A4F',
    fontFamily: 'Inter-SemiBold',
  },
  tabBarLabelInactive: {
    color: '#6B7280',
  },
});