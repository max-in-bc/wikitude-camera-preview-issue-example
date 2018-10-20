Cordova Camera Preview and Wikitude Plugin Issue Example App
------------------------------------------------------------

To run this app:
1. Do an npm install
2. Do an ionic serve
3. Add cordova-android@6.4.0 as a platform
4. ionic cordova run android --livereload

To see the issue:
1. Go to Wikitude page and start wikitude
2. Click the camera icon to open the Camera Preview plugin
3. Wikitude is hidden, camera preview is started but the preview is frozen
4. Upon pressing back button, wikitude.show does not work and a logcat shows the following errors:
```
  3411 D SecCameraHardware: release E
10-20 04:23:48.772  1958  3411 I CameraFlashlight: Destroying camera 0
10-20 04:23:48.772  1958  3411 I SecCameraHardware: camera device closed 0
10-20 04:23:48.775  1958  3411 I CameraService: disconnect: Disconnected client for camera 0 for PID 18444
10-20 04:23:48.783 18444 18444 E Preview : java.lang.RuntimeException: Camera is being used after Camera.release() was called
10-20 04:23:48.783 18444 18444 E Preview : 	at android.hardware.Camera._stopPreview(Native Method)
10-20 04:23:48.783 18444 18444 E Preview : 	at android.hardware.Camera.stopPreview(Camera.java:809)
10-20 04:23:48.783 18444 18444 E Preview : 	at com.cordovaplugincamerapreview.Preview.surfaceDestroyed(Preview.java:233)
```
