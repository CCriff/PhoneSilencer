package com.expobaretypescript;

import android.content.Context;
import android.media.AudioManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class PhoneStatusModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    PhoneStatusModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "PhoneStatusModule";
    }

    @ReactMethod
    public void getPhoneStatus(Promise promise) {
        try {
            AudioManager audioManager = (AudioManager) reactContext.getSystemService(Context.AUDIO_SERVICE);
            int ringerMode = audioManager.getRingerMode();

            String phoneStatus;
            if (ringerMode == AudioManager.RINGER_MODE_SILENT) {
                phoneStatus = "silent";
            } else if (ringerMode == AudioManager.RINGER_MODE_VIBRATE) {
                phoneStatus = "vibrate";
            } else {
                phoneStatus = "ring";
            }

            promise.resolve(phoneStatus);
        } catch (Exception e) {
            promise.reject("PHONE_STATUS_ERROR", e);
        }
    }
}
