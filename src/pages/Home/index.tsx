import React, { useState } from 'react';
import VolumeBars from 'components/VolumeBar';
import MuteSwitch from 'components/MuteSwitch';
import { Container } from './styles';

const Home: React.FC = () => {
  const [volume, setVolume] = useState([100, 100]);
  const [state, setState] = useState([false, false]);

  return (
    <Container>
      <VolumeBars
        position={[100, 100]}
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
        position={[100, 300]}
        mute={state}
        setState={setState}
        internalState={state}
        setInternalState={setState}
      />
      <VolumeBars
        position={[100, 500]}
        volume={volume}
        setVolume={setVolume}
        mute={state}
        setState={setState}
        range={{
          min: 0,
          max: 4,
        }}
        muteSwitch={false}
      />
      <MuteSwitch
        position={[100, 700]}
        mute={state}
        setState={setState}
        internalState={state}
        setInternalState={setState}
      />
      <VolumeBars
        position={[100, 900]}
        volume={volume}
        setVolume={setVolume}
        mute={state}
        setState={setState}
        range={{
          min: 0,
          max: 14,
        }}
        muteSwitch
      />
      <VolumeBars
        position={[100, 1200]}
        volume={volume}
        setVolume={setVolume}
        mute={state}
        setState={setState}
        range={{
          min: 0,
          max: 24,
        }}
        muteSwitch={false}
      />
    </Container>
  );
};

export default Home;
