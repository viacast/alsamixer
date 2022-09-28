import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import VolumeBars from 'components/VolumeBar';
import MuteSwitch from 'components/MuteSwitch';
import { Container } from './styles';

const Home: React.FC = () => {
  const { t } = useTranslation();
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
      />
      <VolumeBars
        position={[100, 400]}
        volume={volume}
        setVolume={setVolume}
        mute={state}
        setState={setState}
        range={{
          min: 0,
          max: 4,
        }}
      />
      <MuteSwitch
        position={[100, 700]}
        mute={state}
        setState={setState}
        internalState={state}
        setInternalState={setState}
      />
      <VolumeBars
        position={[100, 1000]}
        volume={volume}
        setVolume={setVolume}
        mute={state}
        setState={setState}
        range={{
          min: 0,
          max: 14,
        }}
      />
      <VolumeBars
        position={[100, 1300]}
        volume={volume}
        setVolume={setVolume}
        mute={state}
        setState={setState}
        range={{
          min: 0,
          max: 24,
        }}
      />
    </Container>
  );
};

export default Home;
