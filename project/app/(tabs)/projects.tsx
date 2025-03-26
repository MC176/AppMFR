import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Clock, CalendarCheck, MapPin } from 'lucide-react-native';

export default function ProjectsScreen() {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Mes Chantiers</Text>
          <Text style={styles.subtitle}>Suivez l'avancement de vos projets</Text>
        </View>

        <View style={styles.projectList}>
          {/* Projet en cours */}
          <View style={styles.projectCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1558904541-efa843a96f01' }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <View style={styles.statusBadge}>
                <Clock size={14} color="#2D6A4F" />
                <Text style={styles.statusText}>En cours</Text>
              </View>
              <Text style={styles.projectTitle}>Jardin Zen Moderne</Text>
              <Text style={styles.projectAddress}>
                <MapPin size={14} color="#6B7280" /> 123 Rue des Fleurs, 75001 Paris
              </Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '60%' }]} />
              </View>
              <Text style={styles.progressText}>60% complété</Text>
              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>Voir les détails</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Projet planifié */}
          <View style={styles.projectCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1598902108854-10e335adac99' }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <View style={[styles.statusBadge, styles.plannedBadge]}>
                <CalendarCheck size={14} color="#0369A1" />
                <Text style={[styles.statusText, styles.plannedText]}>Planifié</Text>
              </View>
              <Text style={styles.projectTitle}>Terrasse Bois</Text>
              <Text style={styles.projectAddress}>
                <MapPin size={14} color="#6B7280" /> 456 Avenue du Parc, 75016 Paris
              </Text>
              <Text style={styles.dateText}>Début prévu : 15 Mars 2024</Text>
              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>Voir les détails</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  },
  title: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#1B4332',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  projectList: {
    padding: 24,
    gap: 24,
  },
  projectCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  projectImage: {
    width: '100%',
    height: 200,
  },
  projectContent: {
    padding: 16,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    gap: 6,
  },
  plannedBadge: {
    backgroundColor: '#E0F2FE',
  },
  statusText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#2D6A4F',
  },
  plannedText: {
    color: '#0369A1',
  },
  projectTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#1B4332',
    marginTop: 12,
  },
  projectAddress: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E8F5E9',
    borderRadius: 3,
    marginTop: 16,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2D6A4F',
    borderRadius: 3,
  },
  progressText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginTop: 8,
  },
  dateText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 16,
  },
  detailsButton: {
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  detailsButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#2D6A4F',
  },
});