import React from "react"
import {CreateDrawerNavigator} from "@react-navigation/drawer"
import TabNavigator from "./TabNavigator"
import Profile from "../screens/Profile"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
     return (
         <Drawer.Navigator>
             <Drawer.Screen name ="Home" component = {TabNavigator}/>
             <Drawer.Screen name = "Profile" component = {profile}/>
         </Drawer.Navigator>
     );
}

export default drawerNavigator