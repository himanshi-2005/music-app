import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MiniPlayer() {
  return (
    <TouchableOpacity style={styles.miniPlayer}>
      <View style={styles.miniPlayerIcon}>
        <Ionicons name="musical-note" size={22} color="#888" />
      </View>
      <Text style={styles.miniPlayerText}>Not Playing</Text>
      <TouchableOpacity style={styles.miniPlayerBtn}>
        <Ionicons name="play" size={22} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.miniPlayerBtn}>
        <Ionicons name="play-forward" size={22} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  miniPlayer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    marginHorizontal: 10,
    marginBottom: 8,
    borderRadius: 14,
    padding: 10,
  },
  miniPlayerIcon: {
    width: 44,
    height: 44,
    backgroundColor: "#2C2C2E",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  miniPlayerText: { flex: 1, color: "white", fontSize: 15 },
  miniPlayerBtn: { padding: 8 },
});
