import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MiniPlayer from "../../components/miniPlayer";

const RADIO_STATIONS = [
  {
    id: "1",
    name: "Apple Music 1",
    tagline: "The new music that matters.",
    liveTime: "1–3 AM",
    description: "The world's best new music is on Apple Music 1.",
    bgColor: "#F5F5F7",
    accentColor: "#FF2D55",
    numberLabel: "1",
  },
  {
    id: "2",
    name: "Apple Music Hits",
    tagline: "Songs you know and love.",
    liveTime: "LIVE",
    description: "The biggest hits spanning every era.",
    bgColor: "#0071E3",
    accentColor: "white",
    numberLabel: "H",
  },
  {
    id: "3",
    name: "Apple Music Country",
    tagline: "The heart of country music.",
    liveTime: "LIVE",
    description: "Country music old and new.",
    bgColor: "#6E4C1E",
    accentColor: "#FFD60A",
    numberLabel: "C",
  },
];

export default function RadioScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Radio</Text>
          <Ionicons name="person-circle" size={36} color="#FF2D55" />
        </View>

        {/* Radio Stations */}
        {RADIO_STATIONS.map((station) => (
          <View key={station.id} style={styles.stationSection}>
            <View style={styles.stationHeader}>
              <View>
                <View style={styles.stationNameRow}>
                  <Ionicons name="logo-apple" size={18} color="white" />
                  <Text style={styles.stationName}>
                    {station.name.replace("Apple Music ", "")}
                  </Text>
                </View>
                <Text style={styles.stationTagline}>{station.tagline}</Text>
              </View>

              <View style={styles.scheduleBtn}>
                <Ionicons name="calendar" size={18} color="white" />
              </View>
            </View>

            <View
              style={[styles.stationCard, { backgroundColor: station.bgColor }]}
            >
              <View style={styles.stationCardInner}>
                <Text
                  style={[styles.stationNumber, { color: station.accentColor }]}
                >
                  {station.numberLabel}
                </Text>
                <Text style={styles.stationLogoText}>Music Radio</Text>
              </View>

              <View style={styles.liveSection}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.liveTag}>
                    LIVE · {station.liveTime}
                  </Text>
                  <Text style={styles.liveStationName}>
                    {station.name}
                  </Text>
                  <Text style={styles.liveDescription}>
                    {station.description}
                  </Text>
                </View>

                <Ionicons
                  name="play-circle"
                  size={44}
                  color="rgba(255,255,255,0.8)"
                />
              </View>
            </View>
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

  stationSection: { marginBottom: 24 },

  stationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  stationNameRow: { flexDirection: "row", alignItems: "center" },

  stationName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 4,
  },

  stationTagline: {
    color: "#888",
    fontSize: 13,
    marginTop: 2,
  },

  scheduleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#2C2C2E",
    justifyContent: "center",
    alignItems: "center",
  },

  stationCard: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: "hidden",
  },

  stationCardInner: {
    padding: 20,
    alignItems: "center",
    minHeight: 160,
    justifyContent: "center",
  },

  stationNumber: {
    fontSize: 100,
    fontWeight: "900",
    lineHeight: 110,
  },

  stationLogoText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1C1C1E",
  },

  liveSection: {
    backgroundColor: "rgba(0,0,0,0.35)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },

  liveTag: {
    color: "#CCC",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 4,
  },

  liveStationName: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  liveDescription: {
    color: "#DDD",
    fontSize: 13,
    marginTop: 2,
  },
});