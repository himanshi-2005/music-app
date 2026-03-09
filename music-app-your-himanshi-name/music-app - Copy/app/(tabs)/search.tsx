import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MiniPlayer from "../../components/miniPlayer";

const CATEGORIES = [
  { id: "1", label: "Hip-Hop", color: "#6E3CB4" },
  { id: "2", label: "Nature", color: "#2D7A2D" },
  { id: "3", label: "Pop", color: "#E3501E" },
  { id: "4", label: "R&B/Soul", color: "#A52A2A" },
  { id: "5", label: "Dance", color: "#0071E3" },
  { id: "6", label: "Alternative", color: "#5C5C8A" },
  { id: "7", label: "Country", color: "#8B6914" },
  { id: "8", label: "Rock", color: "#2C2C2E" },
  { id: "9", label: "Latin", color: "#FF6B35" },
  { id: "10", label: "Classical", color: "#4A4A6A" },
];

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Search</Text>
          <TouchableOpacity>
            <Ionicons name="person-circle" size={36} color="#FF2D55" />
          </TouchableOpacity>
        </View>

        {/* Fake Search Bar (No Keyboard) */}
        <TouchableOpacity style={styles.searchBar} activeOpacity={0.8}>
          <Ionicons
            name="search"
            size={18}
            color="#888"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.searchPlaceholder}>Search</Text>
          <Ionicons name="mic" size={18} color="#888" />
        </TouchableOpacity>

        {/* Browse Categories */}
        <Text style={styles.browseTitle}>Browse Categories</Text>

        <View style={styles.categoriesGrid}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[styles.categoryCard, { backgroundColor: cat.color }]}
            >
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
    paddingBottom: 10,
  },

  headerTitle: { fontSize: 34, fontWeight: "bold", color: "white" },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    marginHorizontal: 16,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 20,
  },

  searchPlaceholder: {
    flex: 1,
    color: "#888",
    fontSize: 16,
  },

  browseTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginBottom: 12,
  },

  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },

  categoryCard: {
    width: "47%",
    height: 90,
    borderRadius: 10,
    padding: 12,
    justifyContent: "flex-end",
    marginBottom: 12,
  },

  categoryLabel: {
    fontSize: 17,
    fontWeight: "700",
    color: "white",
  },
});