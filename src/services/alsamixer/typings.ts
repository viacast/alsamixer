/* eslint-disable no-shadow */
export enum MixerSwitchCapability {
  MUTE = 'MUTE',
  JOINED_MUTE = 'JOINED_MUTE',
  PLAYBACK_MUTE = 'PLAYBACK_MUTE',
  JOINED_PLAYBACK_MUTE = 'JOINED_PLAYBACK_MUTE',
  CAPTURE_MUTE = 'CAPTURE_MUTE',
  JOINED_CAPTURE_MUTE = 'JOINED_CAPTURE_MUTE',
  CAPTURE_EXCLUSIVE = 'CAPTURE_EXCLUSIVE',
}

export enum MixerVolumeCapability {
  VOLUME = 'VOLUME',
  JOINED_VOLUME = 'JOINED_VOLUME',
  PLAYBACK_VOLUME = 'PLAYBACK_VOLUME',
  JOINED_PLAYBACK_VOLUME = 'JOINED_PLAYBACK_VOLUME',
  CAPTURE_VOLUME = 'CAPTURE_VOLUME',
  JOINED_CAPTURE_VOLUME = 'JOINED_CAPTURE_VOLUME',
}

export type MixerCapability = MixerSwitchCapability | MixerVolumeCapability;

export interface Mixer {
  name: string;
  recording: boolean;
  mute: boolean[];
  volume: number[]; // value in range [0, 100] (always a percentage)
  range: {
    // used to calculate how many steps. e.g.: [0, 3] means there are 4 valid positions
    min: number;
    max: number;
  };
  capabilities: MixerCapability[];
}

export interface SoundCard {
  name: string;
  mixers: Mixer[];
}
