import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MiniPlayer from "../../components/miniPlayer";

const FAMILY_PLANS = [
  {
    id: "1",
    title: "Music for the whole family",
    subtitle: "1 month free, then $16.99/month",
  },
  {
    id: "2",
    title: "Student plan",
    subtitle: "1 month free, then $5.99/month",
  },
  {
    id: "3",
    title: "Individual plan",
    subtitle: "1 month free, then $10.99/month",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Home</Text>
          <Ionicons name="person-circle" size={36} color="#FF2D55" />
        </View>

        {/* Banner */}
        <View style={styles.heroBanner}>
          <View style={styles.heroContent}>
            <Text style={styles.heroSubtitle}>Music just for you.</Text>
            <Text style={styles.heroSubtitle}>1 month free.</Text>

            <View style={styles.appleMusicLogo}>
              <Ionicons name="logo-apple" size={28} color="white" />
              <Text style={styles.musicText}>Music</Text>
            </View>

            <View style={styles.trialButton}>
              <Text style={styles.trialButtonText}>Accept Free Trial</Text>
              <Ionicons
                name="chevron-forward-circle"
                size={18}
                color="white"
                style={{ marginLeft: 6 }}
              />
            </View>

            <Text style={styles.trialSubtext}>
              1 month free, then $10.99/month
            </Text>
          </View>
        </View>

        {/* Plan Cards */}
        {FAMILY_PLANS.map((plan) => (
          <View key={plan.id} style={styles.planCard}>
            <View style={styles.planContent}>
              <Text style={styles.planTitle}>{plan.title}</Text>
              <Text style={styles.planSubtitle}>{plan.subtitle}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#888" />
          </View>
        ))}
      </View>

      <MiniPlayer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000" },
  container: { flex: 1, backgroundColor: "#000" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
  },

  headerTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
  },

  heroBanner: {
    marginHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#FF2D55",
    overflow: "hidden",
    marginBottom: 16,
  },

  heroContent: {
    padding: 24,
    alignItems: "center",
    minHeight: 300,
    justifyContent: "center",
  },

  heroSubtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },

  appleMusicLogo: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  musicText: {
    fontSize: 36,
    fontWeight: "300",
    color: "white",
    marginLeft: 4,
  },

  trialButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  trialButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  trialSubtext: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    marginTop: 6,
  },

  planCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
  },

  planContent: { flex: 1 },

  planTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },

  planSubtitle: {
    color: "#888",
    fontSize: 13,
  },
});
