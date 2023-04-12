import React from "react"
import { View, StyleSheet} from 'react-native'
import StyledText from "./StyledText"
import Constants from 'expo-constants'
import theme from "../theme"

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 15,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.textPrimary,
        fontSize: 22
    }
})

const AppBar = () => {
    return(
        <View style={styles.container}>
            <StyledText fontWeight='bold' style={styles.text}>
                GitHub Repositories App
            </StyledText>
        </View>
    )
}

export default AppBar