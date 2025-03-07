import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TimePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";

function CardTimePicker({ onPress, hours, minutes }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>Horário</Text>
            <View style={styles.timeContainer}>
                <View style={styles.timeBox}>
                    <Text style={styles.timeText}>{hours}</Text>
                </View>
                <Text style={styles.separator}>:</Text>
                <View style={styles.timeBox}>
                    <Text style={styles.timeText}>{minutes}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

function TimePicker() {
    const [visible, setVisible] = React.useState(false)
    const [hours, setHours] = React.useState("00")
    const [minutes, setMinutes] = React.useState("00")

    const onDismiss = React.useCallback(() => {
        setVisible(false)
    }, [setVisible])

    const onConfirm = React.useCallback(
        ({ hours, minutes }) => {
            setVisible(false);
            setHours(hours)
            setMinutes(minutes)
        },
        [setVisible]
    );
    return (
        <SafeAreaProvider>
            <CardTimePicker onPress={() => setVisible(true)} hours={hours} minutes={minutes} />
            <TimePickerModal
                visible={visible}
                onDismiss={onDismiss}
                onConfirm={onConfirm}
                hours={12}
                minutes={14}
            />
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItemns: "center",
        justifyContent: "space-between",
        backgroundColor: "#E7F5FE",
        padding: 29,
        borderRadius: 5,
        width: 380,
    },
    title: {
        fontSize: 16,
        fontWeight: "medium",
        color: "#001133",
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    timeBox: {
        backgroundColor: "#87CFFD",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 3,
    },
    timeText: {
        fontSize: 32,
        fontWeight: "regular",
        color: "#001133",
        textAlign: "center",
    },
    separator: {
        fontSize: 32,
        fontWeight: "medium",
        color: "#001133",
        marginHorizontal: 10,
    },
});

export default TimePicker