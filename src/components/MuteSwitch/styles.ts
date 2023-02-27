import styled from 'styled-components';

export const Container = styled.div<{ top: string; left: string }>`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: ${({ top }) => top || '100px'};
  left: ${({ left }) => left || '100px'};
  padding-inline: 40px;
`;

export const BarContainer = styled.div`
  width: 50px;
  height: calc(679px - 64px);
  border: 3px solid var(--color-primary-2);
  border-bottom: 0px solid transparent;
  border-style: dashed;
`;

export const OptionsContainer = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? 'inline-block' : 'none')};
  width: 50px;
  height: 60px;
  border: 3px solid var(--color-primary-2);
  user-select: none;
`;

export const Options = styled.button`
  width: 50%;
  height: 100%;
  position: relative;
  color: var(--color-neutral-2);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Values = styled.div`
  position: absolute;
  left: 0px;
  width: 130px;
  user-select: none;
  padding-block: 15px;
  p {
    color: var(--color-system-3);
  }
  span {
    color: var(--color-neutral-3);
  }
`;
