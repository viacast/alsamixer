import React, { useEffect, useState } from 'react';
import { Mixer } from 'services/alsamixer/typings';
import Picker from 'components/Picker';
import {
  BarContainer,
  Container,
  GroupBars,
  Rule,
  Slider,
  SliderBar,
  Values,
} from './styles';
import { MuteSwitch } from '..';

export interface VolumeBarsProps {
  volume: Mixer['volume'];
  range: Mixer['range'];
  mute: Mixer['mute'];
  position: [number, number];
  muteSwitch: boolean;
  setVolume: (v: [number, number]) => void;
  setState: (s: [boolean, boolean]) => void;
}

const VolumeBars: React.FC<VolumeBarsProps> = ({
  volume,
  setVolume,
  range,
  mute,
  position,
  setState,
  muteSwitch,
}) => {
  const marks = Math.round(679 * 0.8616) / range.max;

  const [internalState, setInternalState] = useState([mute[0], mute[1]]);

  const [barValue, setBarValue] = useState({
    left:
      Math.round(679 * 0.8616) - (Math.round(679 * 0.8616) / 100) * volume[0],
    right:
      Math.round(679 * 0.8616) - (Math.round(679 * 0.8616) / 100) * volume[1],
  });

  useEffect(() => {
    setVolume([barValue.left, barValue.right]);
  }, [barValue, setVolume]);

  return (
    <>
      <Container top={`${position[0]}px`} left={`${position[1]}px`}>
        <Slider invert={false} className="soundmixer-slider-container">
          <Picker
            setValue={val => setBarValue({ left: barValue.left, right: val })}
            value={barValue.left}
            step={marks}
          />
        </Slider>
        <Slider invert className="soundmixer-slider-container">
          <Picker
            setValue={val => setBarValue({ left: val, right: barValue.right })}
            value={barValue.right}
            step={marks}
          />
        </Slider>
        <Rule range={`${String(marks)}px`} left="10%" />
        <Rule range={`${String(marks)}px`} />
        <BarContainer>
          <GroupBars>
            <SliderBar
              mute={internalState[0] ? 'grayscale(90%)' : 'none'}
              size={`${Math.round(679 * 0.8616) - barValue.left}px`}
            />
            <SliderBar
              mute={internalState[1] ? 'grayscale(90%)' : 'none'}
              size={`${Math.round(679 * 0.8616) - barValue.right}px`}
            />
          </GroupBars>
        </BarContainer>
        {barValue && !muteSwitch && (
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
      {muteSwitch && (
        <MuteSwitch
          mute={mute}
          position={position}
          setState={setState}
          barValue={barValue}
          internalState={internalState}
          setInternalState={setInternalState}
        />
      )}
    </>
  );
};

export default VolumeBars;
