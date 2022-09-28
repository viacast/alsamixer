import React, { useEffect, useState } from 'react';
import { Mixer } from 'services/alsamixer/typings';
import Picker from 'components/Picker';
import {
  BarContainer,
  Container,
  GroupBars,
  LeftSlider,
  RightSlider,
  Rule,
  SliderBar,
} from './styles';
import { MuteSwitch } from '..';

export interface VolumeBarsProps {
  volume: Mixer['volume'];
  range: Mixer['range'];
  mute: Mixer['mute'];
  position: [number, number];
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
}) => {
  const marks = 585 / range.max;

  const [internalState, setInternalState] = useState([mute[0], mute[1]]);

  const [barValue, setBarValue] = useState({
    left: 585 - 5.85 * volume[0],
    right: 585 - 5.85 * volume[1],
  });

  useEffect(() => {
    setVolume([barValue.left, barValue.right]);
  }, [barValue, setVolume]);

  return (
    <>
      <Container top={`${position[0]}px`} left={`${position[1]}px`}>
        <LeftSlider className="soundmixer-slider-container">
          <Picker
            setValue={val => setBarValue({ left: barValue.left, right: val })}
            value={barValue.left}
            disable={internalState[1]}
            step={marks}
          />
        </LeftSlider>
        <RightSlider className="soundmixer-slider-container">
          <Picker
            setValue={val => setBarValue({ left: val, right: barValue.right })}
            value={barValue.right}
            disable={internalState[0]}
            step={marks}
          />
        </RightSlider>
        <Rule range={`${String(marks)}px`} left="10%" />
        <Rule range={`${String(marks)}px`} />
        <BarContainer>
          <GroupBars>
            <SliderBar
              mute={internalState[0] ? 'grayscale(90%)' : 'none'}
              size={`${585 - barValue.left}px`}
            />
            <SliderBar
              mute={internalState[1] ? 'grayscale(90%)' : 'none'}
              size={`${585 - barValue.right}px`}
            />
          </GroupBars>
        </BarContainer>
      </Container>
      <MuteSwitch
        mute={mute}
        position={position}
        setState={setState}
        barValue={barValue}
        internalState={internalState}
        setInternalState={setInternalState}
      />
    </>
  );
};

export default VolumeBars;
