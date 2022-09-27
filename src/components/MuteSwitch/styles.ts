import styled from 'styled-components';

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
  float: right;
  font-family: Nunito, sans-serif;
  font-size: 24;
  font-weight: bold;
  vertical-align: middle;
  text-align: center;
  color: var(--color-neutral-2);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Values = styled.div`
  position: absolute;
  left: 0px;
  width: 130px;
  text-align: center;
  font-family: Nunito, sans-serif;
  font-size: 24;
  font-weight: bold;
  user-select: none;
  padding-block: 15px;
`;
