// services/AppEnabledService.ts
class AppEnabledService {
  private static instance: AppEnabledService
  private appEnabled: boolean

  private constructor() {
    this.appEnabled = true
  }

  public static getInstance(): AppEnabledService {
    if (!AppEnabledService.instance) {
      AppEnabledService.instance = new AppEnabledService()
    }

    return AppEnabledService.instance
  }

  public async setAppEnabled(enabled: boolean): Promise<void> {
    this.appEnabled = enabled
  }

  public getAppEnabled(): boolean {
    return this.appEnabled
  }
}

export default AppEnabledService
