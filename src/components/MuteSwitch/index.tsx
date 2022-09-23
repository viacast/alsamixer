import React from 'react';
import { Mixer } from 'services/alsamixer/typings';

export interface MuteSwitchProps {
  mute: Mixer['mute'];
}

const MuteSwitch: React.FC<MuteSwitchProps> = ({ mute }) => {
  return null;
};

export default MuteSwitch;
