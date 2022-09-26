import React, { useEffect, useState } from 'react';
import { Mixer } from 'services/alsamixer/typings';
import Picker from 'components/Picker';
import {
  BarContainer,
  Container,
  GroupBars,
  LeftSlider,
  Options,
  OptionsContainer,
  RightSlider,
  Rule,
  SliderBar,
  Values,
} from './styles';

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

  const [barValue, setBarValue] = useState({
    left: 589 - 5.89 * volume[0],
    right: 589 - 5.89 * volume[1],
  });

  const [leftIsDragging, setLeftIsDragging] = useState(false);
  const [rightIsDragging, setRightIsDragging] = useState(false);

  const [stateLeft, setStateLeft] = useState(mute[0]);
  const [stateRight, setStateRight] = useState(mute[1]);

  useEffect(() => {
    setVolume([barValue.left, barValue.right]);
  }, [barValue, setVolume]);

  return (
    <Container>
      <LeftSlider
        className="soundmixer-slider-container"
        onMouseDown={() => setLeftIsDragging(true)}
        onMouseUp={() => setLeftIsDragging(false)}
        drag={leftIsDragging ? 'grabbing' : 'grab'}
      >
        <Picker
          setValue={val => setBarValue({ left: barValue.left, right: val })}
          value={barValue.left}
          disable={stateRight}
        />
      </LeftSlider>
      <RightSlider
        className="soundmixer-slider-container"
        onMouseDown={() => setRightIsDragging(true)}
        onMouseUp={() => setRightIsDragging(false)}
        drag={rightIsDragging ? 'grabbing' : 'grab'}
      >
        <Picker
          setValue={val => setBarValue({ left: val, right: barValue.right })}
          value={barValue.right}
          disable={stateLeft}
        />
      </RightSlider>
      <Rule range={marks} left="0%" />
      <Rule range={marks} />
      <BarContainer>
        <GroupBars>
          <SliderBar
            mute={stateLeft ? 'grayscale(50%)' : 'none'}
            size={`${589 - barValue.left}px`}
          />
          <SliderBar
            mute={stateRight ? 'grayscale(50%)' : 'none'}
            size={`${589 - barValue.right}px`}
          />
        </GroupBars>
      </BarContainer>
      <OptionsContainer display>
        <Options
          onClick={() => {
            setStateLeft(e => !e);
            setState([!mute[0], mute[1]]);
          }}
        >
          {stateLeft ? 'M' : 'O'}
        </Options>
        <Options
          onClick={() => {
            setStateRight(e => !e);
            setState([mute[0], !mute[1]]);
          }}
        >
          {stateRight ? 'M' : 'O'}
        </Options>
      </OptionsContainer>
      <Values>
        L - R
        <br />
        {`${Math.floor(((589 - barValue.right) * 100) / 589)}%` +
          ` - ${Math.floor(((589 - barValue.left) * 100) / 589)}%`}
      </Values>
    </Container>
  );
};

export default VolumeBars;
