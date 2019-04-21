SECON 2019
==========

Демонстрационное мобильное приложение для доклада на [SECON 2019](https://2019.secon.ru/).

```bash
brew install watchman # инструмент от Facebook для наблюдением за изменениями в файловой системе 
npm i -g react-native-cli
npm i
react-native eject
react-native link
```

####Запуск под iOS
```bash
react-native run-ios
```

Открыть проект в xCode
```bash
open ios/todo.xcodeproj/
```
и запустить его на эмуляторе.  

**CMD + R** - перерендерить приложение в эмуляторе.  

####Запуск под Android
[Скачать Android Studio](https://developer.android.com/studio/)  

Зайти в настройки -> *Appearance & Behavior -> System Settings -> Android SDK*  

**SDK Platforms** - выкачивать все Android SDK (все галки).  
**SDK Tools** - галка возле *Android SDK Tools*  

Теперь в Terminal создаём новое виртуальное устройсвто:
```bash
# проверяем, что у нас всё удачно установилось
android

# переходим в папку с SDK Android/sdk/tools/bin
cd /Users/[username]/Library/Android/sdk/tools/bin

# подготавливаем 23 версию SDK 
./sdkmanager "system-images;android-23;google_apis;x86"

# принимаем лицензию
./sdkmanager --licenses

# создаём виртуальное устройство
./avdmanager create avd -n test -k "system-images;android-23;google_apis;x86" -b x86 -c 100M -d 7 -f

# возврщаемся на уровень выше
cd ..

# стартуем эмулятор
emulator -avd test
```

Находясь в папке с проектом, можно запустить проект под Android:
```bash
react-native run-android
```
Но при этом эмулятор должен быть запущен. Либо реальное устройство Android должно быть подключено к компьютеру.
```bash
# проверка наличия подключенных устройств
adb devices
```

Управление эмуляторами доступно через AndroidStudio.
