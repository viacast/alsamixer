import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import VolumeBars from 'components/VolumeBar';
import { Container } from './styles';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [volume, setVolume] = useState([100, 100]);
  const [state, setState] = useState([false, false]);

  return (
    <Container>
      <VolumeBars
        volume={volume}
        setVolume={setVolume}
        mute={state}
        setState={setState}
        range={{
          min: 0,
          max: 64,
        }}
      />
    </Container>
  );
};

export default Home;
