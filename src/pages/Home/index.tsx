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
        position={[100, 45]}
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
        position={[100, 245]}
        mute={state}
        setState={setState}
        internalState={state}
        setInternalState={setState}
      />
      <VolumeBars
        position={[100, 445]}
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
        position={[100, 645]}
        mute={state}
        setState={setState}
        internalState={state}
        setInternalState={setState}
      />
      <VolumeBars
        position={[100, 845]}
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
        position={[100, 1145]}
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
        position={[100, 1445]}
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
  );
};

export default Home;
