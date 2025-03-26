import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { Link } from 'expo-router';
import { ArrowRight, Leaf, Users, Clock } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Bienvenue chez</Text>
          <Text style={styles.companyName}>Éco Paysage</Text>
        </View>

        <View style={styles.heroSection}>
          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.mainButtonText}>Suivre mon chantier</Text>
            <ArrowRight color="#FFF" size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Demander un devis</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.valueProps}>
          <View style={styles.valueProp}>
            <View style={styles.iconContainer}>
              <Leaf color="#2D6A4F" size={24} />
            </View>
            <Text style={styles.valuePropTitle}>Éco-responsable</Text>
            <Text style={styles.valuePropText}>Pratiques respectueuses de l'environnement</Text>
          </View>

          <View style={styles.valueProp}>
            <View style={styles.iconContainer}>
              <Users color="#2D6A4F" size={24} />
            </View>
            <Text style={styles.valuePropTitle}>Formation</Text>
            <Text style={styles.valuePropText}>Collaboration avec MFR pour former les jeunes</Text>
          </View>

          <View style={styles.valueProp}>
            <View style={styles.iconContainer}>
              <Clock color="#2D6A4F" size={24} />
            </View>
            <Text style={styles.valuePropTitle}>Suivi en temps réel</Text>
            <Text style={styles.valuePropText}>Visualisez l'avancement de votre projet</Text>
          </View>
        </View>

        <View style={styles.recentProjects}>
          <Text style={styles.sectionTitle}>Nos dernières réalisations</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.projectsScroll}>
            <View style={styles.projectCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1558904541-efa843a96f01' }}
                style={styles.projectImage}
              />
              <BlurView intensity={80} style={styles.projectInfo}>
                <Text style={styles.projectTitle}>Jardin Zen Moderne</Text>
                <Text style={styles.projectDescription}>Aménagement complet</Text>
              </BlurView>
            </View>
            <View style={styles.projectCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1598902108854-10e335adac99' }}
                style={styles.projectImage}
              />
              <BlurView intensity={80} style={styles.projectInfo}>
                <Text style={styles.projectTitle}>Terrasse Bois</Text>
                <Text style={styles.projectDescription}>Installation sur-mesure</Text>
              </BlurView>
            </View>
            <View style={styles.projectCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d' }}
                style={styles.projectImage}
              />
              <BlurView intensity={80} style={styles.projectInfo}>
                <Text style={styles.projectTitle}>Jardin Méditerranéen</Text>
                <Text style={styles.projectDescription}>Création complète</Text>
              </BlurView>
            </View>
          </ScrollView>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 Éco Paysage</Text>
          <Text style={styles.footerSubtext}>Créateur de jardins durables</Text>
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
  welcomeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#6B7280',
  },
  companyName: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#1B4332',
    marginTop: 4,
  },
  heroSection: {
    padding: 24,
    gap: 12,
  },
  mainButton: {
    backgroundColor: '#2D6A4F',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#2D6A4F',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  mainButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#E8F5E9',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#2D6A4F',
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  },
  valueProps: {
    padding: 24,
    gap: 24,
  },
  valueProp: {
    gap: 8,
    alignItems: 'center',
    textAlign: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  valuePropTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1B4332',
  },
  valuePropText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  recentProjects: {
    padding: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1B4332',
    marginBottom: 16,
  },
  projectsScroll: {
    marginLeft: -24,
    paddingLeft: 24,
  },
  projectCard: {
    width: 280,
    height: 320,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  projectImage: {
    width: '100%',
    height: '100%',
  },
  projectInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  projectTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1B4332',
  },
  projectDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#2D6A4F',
    marginTop: 4,
  },
  footer: {
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },
  footerText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1B4332',
  },
  footerSubtext: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
});