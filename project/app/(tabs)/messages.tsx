import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Search, Plus } from 'lucide-react-native';

export default function MessagesScreen() {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Messages</Text>
          <TouchableOpacity style={styles.newChatButton}>
            <Plus size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Search size={20} color="#6B7280" />
          <Text style={styles.searchPlaceholder}>Rechercher une conversation...</Text>
        </View>

        <View style={styles.conversationList}>
          {/* Conversation active */}
          <TouchableOpacity style={styles.conversationItem}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' }}
              style={styles.avatar}
            />
            <View style={styles.conversationContent}>
              <View style={styles.conversationHeader}>
                <Text style={styles.conversationName}>Thomas Martin</Text>
                <Text style={styles.conversationTime}>14:30</Text>
              </View>
              <View style={styles.conversationFooter}>
                <Text style={styles.lastMessage} numberOfLines={1}>
                  Les travaux avancent bien, nous serons dans les temps.
                </Text>
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadCount}>2</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* Conversation lue */}
          <TouchableOpacity style={styles.conversationItem}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' }}
              style={styles.avatar}
            />
            <View style={styles.conversationContent}>
              <View style={styles.conversationHeader}>
                <Text style={styles.conversationName}>Sophie Dubois</Text>
                <Text style={styles.conversationTime}>Hier</Text>
              </View>
              <Text style={[styles.lastMessage, styles.readMessage]} numberOfLines={1}>
                Merci pour les photos du jardin, c'est exactement ce que...
              </Text>
            </View>
          </TouchableOpacity>

          {/* Autre conversation */}
          <TouchableOpacity style={styles.conversationItem}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' }}
              style={styles.avatar}
            />
            <View style={styles.conversationContent}>
              <View style={styles.conversationHeader}>
                <Text style={styles.conversationName}>Pierre Durand</Text>
                <Text style={styles.conversationTime}>Lun</Text>
              </View>
              <Text style={[styles.lastMessage, styles.readMessage]} numberOfLines={1}>
                Parfait, à la semaine prochaine alors !
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  header: {
    padding: 24,
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#1B4332',
  },
  newChatButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2D6A4F',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2D6A4F',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  searchContainer: {
    margin: 24,
    padding: 12,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchPlaceholder: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#6B7280',
  },
  conversationList: {
    gap: 24,
    paddingHorizontal: 24,
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  conversationContent: {
    flex: 1,
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  conversationName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1B4332',
  },
  conversationTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
  },
  conversationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#1B4332',
  },
  readMessage: {
    color: '#6B7280',
  },
  unreadBadge: {
    backgroundColor: '#2D6A4F',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  unreadCount: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
  },
});