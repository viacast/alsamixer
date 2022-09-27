import React from 'react';
import { Mixer } from 'services/alsamixer/typings';
import { OptionsContainer, Options, Values } from './styles';

export interface MuteSwitchProps {
  mute: Mixer['mute'];
  setState: (s: [boolean, boolean]) => void;
  barValue: {
    left: number;
    right: number;
  };
  internalState: boolean[];
  setInternalState: (s: [boolean, boolean]) => void;
}

const MuteSwitch: React.FC<MuteSwitchProps> = ({
  mute,
  setState,
  barValue,
  internalState,
  setInternalState,
}) => {
  return (
    <>
      <OptionsContainer display>
        <Options
          onClick={() => {
            setInternalState([!mute[0], mute[1]]);
            setState([!mute[0], mute[1]]);
          }}
        >
          {internalState[0] ? 'M' : 'O'}
        </Options>
        <Options
          onClick={() => {
            setInternalState([mute[0], !mute[1]]);
            setState([mute[0], !mute[1]]);
          }}
        >
          {internalState[1] ? 'M' : 'O'}
        </Options>
      </OptionsContainer>
      <Values>
        L - R
        <br />
        {`${Math.round(((589 - barValue.right) * 100) / 589)}%` +
          ` - ${Math.round(((589 - barValue.left) * 100) / 589)}%`}
      </Values>
    </>
  );
};

export default MuteSwitch;
