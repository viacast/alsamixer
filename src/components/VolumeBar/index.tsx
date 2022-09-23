import React from 'react';
import { Mixer } from 'services/alsamixer/typings';

export interface VolumeBarsProps {
  volume: Mixer['volume'];
  range: Mixer['range'];
  mute: Mixer['mute'];
}

const VolumeBars: React.FC<VolumeBarsProps> = ({ volume, range, mute }) => {
  return null;
};

export default VolumeBars;
