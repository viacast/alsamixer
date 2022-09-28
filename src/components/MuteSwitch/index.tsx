import React from 'react';
import { Mixer } from 'services/alsamixer/typings';
import { OptionsContainer, Options, Values, Container } from './styles';

export interface MuteSwitchProps {
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
  mute,
  position,
  setState,
  barValue,
  internalState,
  setInternalState,
}) => {
  return (
    <Container top={`${position[0] + 612}px`} left={`${position[1]}px`}>
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
      {barValue && (
        <Values>
          L - R
          <br />
          {`${Math.round(
            ((Math.round(679 * 0.8616) - barValue.right) * 100) /
              Math.round(679 * 0.8616),
          )}%` +
            ` - ${Math.round(
              ((Math.round(679 * 0.8616) - barValue.left) * 100) /
                Math.round(679 * 0.8616),
            )}%`}
        </Values>
      )}
    </Container>
  );
};

MuteSwitch.defaultProps = {
  barValue: undefined,
};

export default MuteSwitch;
