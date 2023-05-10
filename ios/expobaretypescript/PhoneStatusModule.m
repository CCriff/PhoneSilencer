#import "PhoneStatusModule.h"
#import <AVFoundation/AVFoundation.h>

@implementation PhoneStatusModule

RCT_EXPORT_MODULE(PhoneStatusModule)

RCT_EXPORT_METHOD(getPhoneStatus:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  AVAudioSession *audioSession = [AVAudioSession sharedInstance];
  AVAudioSessionCategory category = [audioSession category];
  NSString *phoneStatus;

  if ([category isEqualToString:AVAudioSessionCategoryAmbient]) {
    phoneStatus = @"silent";
  } else if ([category isEqualToString:AVAudioSessionCategorySoloAmbient]) {
    phoneStatus = @"vibrate";
  } else {
    phoneStatus = @"ring";
  }

  resolve(phoneStatus);
}

@end
