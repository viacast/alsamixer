import React, { useState } from 'react';
import VolumeBars from 'components/VolumeBar';
import MuteSwitch from 'components/MuteSwitch';
import { useWindowSize } from 'hooks';
import {
  Container,
  Field,
  FieldsContainer,
  FieldTitle,
  PageTitle,
  Select,
  SelectOption,
} from './styles';

const Home: React.FC = () => {
  const [volume, setVolume] = useState([100, 100]);
  const [state, setState] = useState([false, false]);

  const dimension = useWindowSize();
  const num = 7;
  const x = (230 * num + 300 * (num - 1)) / 2;

  return (
    <>
      <PageTitle>Soundmixer v0.0.0</PageTitle>
      <FieldsContainer>
        <Field>
          <FieldTitle>Card:</FieldTitle> &nbsp;{' '}
          <Select>
            <SelectOption value="0">HDA Intel PCH</SelectOption>
            <SelectOption value="1">HDA Nvidia</SelectOption>
          </Select>
        </Field>
        <Field>
          <FieldTitle>Chip:</FieldTitle> &nbsp; Realtek ALC3246
        </Field>
        <Field>
          <FieldTitle>Item:</FieldTitle> &nbsp; Master [dB gain: -4,50]
        </Field>
      </FieldsContainer>
      <Container>
        <VolumeBars
          name="Master"
          position={[200, dimension.width - x]}
          volume={volume}
          setVolume={setVolume}
          mute={state}
          setState={setState}
          range={{
            min: 0,
            max: 64,
          }}
          muteSwitch
        />
        <MuteSwitch
          name="Headphone"
          position={[200, dimension.width - x + 200]}
          mute={state}
          setState={setState}
          internalState={state}
          setInternalState={setState}
        />
        <VolumeBars
          name="Headphone Mic"
          position={[200, dimension.width - x + 400]}
          volume={volume}
          setVolume={setVolume}
          mute={state}
          setState={setState}
          range={{
            min: 0,
            max: 3,
          }}
          muteSwitch={false}
        />
        <MuteSwitch
          name="Speaker"
          position={[200, dimension.width - x + 600]}
          mute={state}
          setState={setState}
          internalState={state}
          setInternalState={setState}
        />
        <VolumeBars
          name="Bass Speak"
          position={[200, dimension.width - x + 800]}
          volume={volume}
          setVolume={setVolume}
          mute={state}
          setState={setState}
          range={{
            min: 0,
            max: 58,
          }}
          muteSwitch
        />
        <VolumeBars
          name="PCM"
          position={[200, dimension.width - x + 1100]}
          volume={volume}
          setVolume={setVolume}
          mute={state}
          setState={setState}
          range={{
            min: 0,
            max: 10,
          }}
          muteSwitch={false}
        />
        <VolumeBars
          name="Front"
          position={[200, dimension.width - x + 1400]}
          volume={volume}
          setVolume={setVolume}
          mute={state}
          setState={setState}
          range={{
            min: 0,
            max: 25,
          }}
          muteSwitch={false}
        />
      </Container>
    </>
  );
};

export default Home;
