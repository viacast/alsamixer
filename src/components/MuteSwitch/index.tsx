import React from 'react';
import { Mixer } from 'services/alsamixer/typings';
import {
  OptionsContainer,
  Options,
  Values,
  Container,
  BarContainer,
} from './styles';

export interface MuteSwitchProps {
  name: Mixer['name'];
  mute: Mixer['mute'];
  position: [number, number];
  setState: (s: [boolean, boolean]) => void;
  barValue?: {
    left: number;
    right: number;
  };
  internalState: boolean[];
  setInternalState: (s: [boolean, boolean]) => void;
}

const MuteSwitch: React.FC<MuteSwitchProps> = ({
  name,
  mute,
  position,
  setState,
  barValue,
  internalState,
  setInternalState,
}) => {
  return (
    <Container top={`${position[0]}px`} left={`${position[1]}px`}>
      <BarContainer />
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
      {(barValue && (
        <Values>
          L - R
          <br />
          {`${Math.round(((585 - barValue.right) * 100) / 585)}%` +
            ` - ${Math.round(((585 - barValue.left) * 100) / 585)}%`}
          <br />
          <p>{name}</p>
        </Values>
      )) ||
        (!barValue && (
          <Values>
            <span>Disabled</span>
          </Values>
        ))}
    </Container>
  );
};

MuteSwitch.defaultProps = {
  barValue: undefined,
};

export default MuteSwitch;
