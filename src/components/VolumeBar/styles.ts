import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 100px;
  left: 100px;
  padding-inline: 40px;
`;

export const BarContainer = styled.div`
  width: 50px;
  height: 615px;
  border: 3px solid var(--color-primary-2);
`;

export const GroupBars = styled.div`
  width: 34px;
  height: 589px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  position: relative;
  margin-inline: 5px;
  margin-block: 10px;
  transform: rotateZ(180deg);
`;

export const SliderBar = styled.div<{
  mute: string;
  size: string;
}>`
  width: 16px;
  height: ${({ size }) => size || '589px'};
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, #c11e0f 0%, #f2921b 16%, #75b831 100%);
  background-size: 16px 589px;
  filter: ${({ mute }) => mute || 'none'};
`;

export const Rule = styled.div<{ left?: string; range: string }>`
  width: 16px;
  height: 589px;
  position: absolute;
  top: 14px;
  left: ${({ left }) => left || 'calc(100% - 16px)'};
  transform: rotate(180deg);
  background: linear-gradient(
    0deg,
    #fcfcfc 0%,
    transparent 1px,
    transparent 100%
  );
  background-size: 16px ${({ range }) => range || '191px'};
`;

export const LeftSlider = styled.div<{ drag: string }>`
  position: absolute;
  left: -50px;
  top: -11.78px;
  height: calc(100% - 44px);
  cursor: ${({ drag }) => drag || 'grabbing'};
`;

export const RightSlider = styled.div<{ drag: string }>`
  position: absolute;
  right: -50px;
  top: -11.78px;
  height: calc(100% - 44px);
  transform: rotateY(180deg);
  cursor: ${({ drag }) => drag || 'grabbing'};
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
