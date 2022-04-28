# Change App Language As Per Device Language in React_Native

### Change App Language As per Device/Mobile Language in React-Native App(Android &amp; iOS).

![Screenshot_1651093829](https://user-images.githubusercontent.com/39656382/165633188-d4aa0305-456f-412c-8692-a860a7e02913.png)
![Screenshot_1651094428](https://user-images.githubusercontent.com/39656382/165633201-df5b2765-5a6b-4d78-b1f3-c8b579ad9cb6.png)

## Adding Dependencies :

### > To add Internationalization and Localization add the required dependencies by running the below commands:
###  npm install i18next —save
###  npm install react-i18next

## Create Translation Files :

### > Create JSON files for the languages ,which our app will support inside i18n folder
### > Here we have created en.json and hi.json files for English and Hindi respectively.

### > Inside en.json add translations like below:
      
  ###  {
  ###    "translation": {
  ###      "dummyText":"Check the Text Language"
  ###    }
  ###  }
  
  ### > Inside hi.json add translations like below:
      
  ###  {
  ###    "translation": {
  ###      "dummyText":"टेक्स्ट भाषा की जाँच करें"
  ###    }
  ###  }
  
  
  ## Configuring i18next :
  
  ### > Create i18n.tsx file inside assets > i18n
  
  ## Add configurations inside i18n.tsx like below : 
  ### >  Here we have configured “en” as default language and fallback language.So if translation is not available for any language it will show in English.

  ## Import the translations and library inside App.tsx  as below:

  ###    import '././src/assets/i18n/i18n';
  ###    import { t } from "i18next";
  ###    import {useTranslation} from 'react-i18next';

  ## To detect the  device language add the below imports:

  ### import {NativeModules, Platform } from 'react-native';
 
 ## Add the below before return() :

 ###   useEffect(() => {
 ###       fetchAppLang();
 ###    },[]);

 ### In fetchAppLang() we will get the device language and set as app Language .

 ###     const { i18n } = useTranslation()
 ###      const fetchAppLang = async () => {
 ###         const appLang = await getAppLang();
 ###         const locale = Platform.select({
 ###           ios: NativeModules.SettingsManager?.settings?.AppleLocale || NativeModules.SettingsManager?.settings?.AppleLanguages[0],
 ###           android: NativeModules.I18nManager.localeIdentifier,
 ###         });

 ###             if(locale.includes('en')){
 ###               i18n.changeLanguage('en');
 ###               } else if(locale.includes('hi')){
 ###               i18n.changeLanguage('hi');
 ###             } else{
 ###               i18n.changeLanguage('en');
 ###             }
 ###        }
 
 
 ### >  Here we are getting device language and setting as app language if the device language is other than English or Hindi, the app language will be English.

 ## Add translation to the components. Below is an Example :

 ###  <Text>{t("dummyText")}</Text>

 ### > Now Change the Device Language and Check, according to the device language, here the text content of “dummyText” will change.

 ### > To use localization, we can also keep an option inside app to change the app language according to the available  translations.

