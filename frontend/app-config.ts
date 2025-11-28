export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  // for LiveKit Cloud Sandbox
  sandboxId?: string;
  agentName?: string;
}

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Zepto',
  pageTitle: 'Zepto Voice Shopping',
  pageDescription: 'Order groceries in 10 minutes using just your voice',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/lk-logo.svg',
  accent: '#9333ea',
  logoDark: '/lk-logo-dark.svg',
  accentDark: '#a855f7',
  startButtonText: 'START SHOPPING',

  // for LiveKit Cloud Sandbox
  sandboxId: undefined,
  agentName: undefined,
};
