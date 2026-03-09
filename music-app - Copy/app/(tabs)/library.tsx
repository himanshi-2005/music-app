import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MiniPlayer from "../../components/miniPlayer";

type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

const LIBRARY_SECTIONS: { id: string; icon: IoniconsName; label: string }[] = [
  { id: "1", icon: "list", label: "Playlists" },
  { id: "2", icon: "person", label: "Artists" },
  { id: "3", icon: "disc", label: "Albums" },
  { id: "4", icon: "musical-notes", label: "Songs" },
  { id: "5", icon: "tv", label: "Music Videos" },
  { id: "6", icon: "headset", label: "Genres" },
  { id: "7", icon: "download", label: "Downloaded" },
];

export default function LibraryScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        <View style={styles.editRow}>
          <TouchableOpacity>
            <Text style={styles.editBtn}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.titleRow}>
          <Text style={styles.headerTitle}>Library</Text>
          <TouchableOpacity>
            <Ionicons name="person-circle" size={36} color="#FF2D55" />
          </TouchableOpacity>
        </View>

        <View style={styles.sectionList}>
          {LIBRARY_SECTIONS.map((section, index) => (
            <TouchableOpacity
              key={section.id}
              style={[
                styles.sectionRow,
                index === LIBRARY_SECTIONS.length - 1 && styles.lastRow,
              ]}
            >
              <Ionicons
                name={section.icon}
                size={22}
                color="#FF2D55"
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionLabel}>{section.label}</Text>
              <Ionicons name="chevron-forward" size={18} color="#555" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.emptyState}>
          <Ionicons name="musical-note" size={50} color="#333" />
          <Text style={styles.emptyText}>
            Music purchased in iTunes or added from{"\n"}your computer will
            appear here.
          </Text>
        </View>
      </View>

      <MiniPlayer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000" },
  container: { flex: 1, backgroundColor: "#000" },

  editRow: { alignItems: "flex-end", paddingHorizontal: 20, paddingTop: 10 },
  editBtn: { color: "#FF2D55", fontSize: 17 },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 16,
  },

  headerTitle: { fontSize: 34, fontWeight: "bold", color: "white" },

  sectionList: {
    marginHorizontal: 16,
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    overflow: "hidden",
  },

  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#333",
  },

  lastRow: { borderBottomWidth: 0 },

  sectionIcon: { marginRight: 12 },

  sectionLabel: { flex: 1, color: "white", fontSize: 17 },

  emptyState: {
    alignItems: "center",
    marginTop: 80,
    paddingHorizontal: 40,
  },

  emptyText: {
    color: "#555",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
    marginTop: 16,
  },
});
