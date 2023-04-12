import React from "react"
import {Text, View} from 'react-native'
import RepositoryList from "./RepositoryList"
import AppBar from "./AppBar"

const Main = () => {
   return(
    <View style={{ flexGrow: 1}}>
        <AppBar/>
        <RepositoryList/>
    </View>
   )
   
}
export default Main