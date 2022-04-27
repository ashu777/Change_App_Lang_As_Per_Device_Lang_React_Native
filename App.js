/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 * Copyright 2022  https://github.com/ashu777, Inc. All rights reserved.
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  Platform 
} from 'react-native';
import '././src/i18n/i18n';
import {useTranslation} from 'react-i18next';

const App = ()=>{
    const { t,i18n } = useTranslation()
    const fetchAppLang = async () => {
      const locale = Platform.select({
        ios: NativeModules.SettingsManager?.settings?.AppleLocale || NativeModules.SettingsManager?.settings?.AppleLanguages[0],
        android: NativeModules.I18nManager.localeIdentifier,
      });

      if(locale.includes('en')){
        i18n.changeLanguage('en');
      } else if(locale.includes('hi')){
        i18n.changeLanguage('hi');
      } else{
        i18n.changeLanguage('en');
      }
    }

  useEffect(() => {
    fetchAppLang();
  },[]);

  return(
      <View style = {stylesApp.container}>
         <Text>{t("dummyText")}</Text>
      </View>
  )
}

export default App;

const stylesApp = StyleSheet.create({
  container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  }
});
