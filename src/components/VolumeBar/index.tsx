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
  setVolume: (v: [number, number]) => void;
  setState: (s: [boolean, boolean]) => void;
}

const VolumeBars: React.FC<VolumeBarsProps> = ({
  volume,
  setVolume,
  range,
  mute,
  setState,
}) => {
  const marks = `${String(589 / range.max)}px`;

  const [internalState, setInternalState] = useState([mute[0], mute[1]]);

  const [barValue, setBarValue] = useState({
    left: 589 - 5.89 * volume[0],
    right: 589 - 5.89 * volume[1],
  });

  useEffect(() => {
    setVolume([barValue.left, barValue.right]);
  }, [barValue, setVolume]);

  return (
    <Container>
      <LeftSlider className="soundmixer-slider-container">
        <Picker
          setValue={val => setBarValue({ left: barValue.left, right: val })}
          value={barValue.left}
          disable={internalState[1]}
        />
      </LeftSlider>
      <RightSlider className="soundmixer-slider-container">
        <Picker
          setValue={val => setBarValue({ left: val, right: barValue.right })}
          value={barValue.right}
          disable={internalState[0]}
        />
      </RightSlider>
      <Rule range={marks} left="36.9%" />
      <Rule range={marks} />
      <BarContainer>
        <GroupBars>
          <SliderBar
            mute={internalState[0] ? 'grayscale(90%)' : 'none'}
            size={`${589 - barValue.left}px`}
          />
          <SliderBar
            mute={internalState[1] ? 'grayscale(90%)' : 'none'}
            size={`${589 - barValue.right}px`}
          />
        </GroupBars>
      </BarContainer>
      <MuteSwitch
        mute={mute}
        setState={setState}
        barValue={barValue}
        internalState={internalState}
        setInternalState={setInternalState}
      />
    </Container>
  );
};

export default VolumeBars;
