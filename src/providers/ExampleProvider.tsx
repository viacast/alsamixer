import React, { createContext, useContext, useMemo, useState } from 'react';
import { WithChildren } from 'utils';

interface ProviderContextData {
  state: string;
  setState: (arg: string) => void;
}

const ProviderContext = createContext<ProviderContextData>(
  {} as ProviderContextData,
);

const ExampleProvider: React.FC<WithChildren> = ({ children }) => {
  const [state, setState] = useState('');

  const providerValue = useMemo(() => ({ state, setState }), [state]);

  return (
    <ProviderContext.Provider value={providerValue}>
      {children}
    </ProviderContext.Provider>
  );
};

const useExampleProvider = (): ProviderContextData => {
  return useContext(ProviderContext);
};

export { ExampleProvider, useExampleProvider };
