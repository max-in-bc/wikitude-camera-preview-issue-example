interface WikitudePlugin {

    isDeviceSupported(successCallback: (success: string) => void,
                      errorCallback: (message: string) => void,
                      requiredFeatures: [string]): void;

    loadARchitectWorld(successCallback: (success: string) => void,
                       errorCallback: (message: string) => void,
                       architectWorldPath: string,
                       requiredFeatures: [string],
                       startupConfiguration: JSON): void;

    close(): void;

    hide(): void;

    show(): void;

    // test type ok?
    callJavaScript(js: any): void;

    setOnUrlInvokeCallback(onUrlInvokeCallback: (success: string) => void): void;
    onJSONObjectReceived(onJSONObjectRecieved: (json: any) => void): void;
    setJSONObjectReceivedCallback(onJSONObjectReceived: (json: any) => void): void;

    setLocation(latitude: any,
                longitude: any,
                altitude: any,
                accuracy: any): void;

    captureScreen(successCallback: (success: string) => void,
                  errorCallback: (message: string) => void,
                  includeWebView: boolean,
                  imagePathInBundleOrNullForPhotoLibraryTrueForBase64: any): void;

    setErrorHandler(errorHandler: (message: string) => void): void;

    setDeviceSensorsNeedCalibrationHandler(startCalibrationHandler: (message: string) => void): void;

    setDeviceSensorsFinishedCalibrationHandler(finishedCalibrationHandler: (message: string) => void): void;

    setBackButtonCallback(onBackButtonCallback: (message: string) => void): void;

    openAppSettings(): void;

    /* Lifecycle updates */

    onResume(): void;
    onBackButton(): void;
    onPause(): void;

    onWikitudeOK(): void;
    onWikitudeError(err:any): void;

    _sdkKey: string;
    FeatureGeo: string;
    Feature2DTracking: string;
    CameraPositionUndefined: number;
    CameraPositionFront: number;
    CameraPositionBack: number;
    CameraFocusRangeNone: number;
    CameraFocusRangeNear: number;
    CameraFocusRangeFar: number;
    PluginStateClosed: number;
    PluginStateHidden: number;
    PluginStateOpen: number;
    CurrentPluginState: number;
}

// declare var WikitudePlugin: WikitudePlugin;