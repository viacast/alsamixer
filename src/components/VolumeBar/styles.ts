import styled, { css } from 'styled-components';

export const Container = styled.div<{ top: string; left: string }>`
  width: fit-content;
  height: 679px;
  position: absolute;
  top: ${({ top }) => top || '100px'};
  left: ${({ left }) => left || '100px'};
  padding-inline: 40px;
`;

export const BarContainer = styled.div`
  width: 50px;
  height: calc(100% - 64px);
  border: 3px solid var(--color-primary-2);
`;

export const GroupBars = styled.div`
  width: 34px;
  height: calc(100% - 30px);
  display: flex;
  flex: 1;
  justify-content: space-between;
  position: relative;
  margin-inline: 5px;
  margin-block: 17px;
  transform: rotateZ(180deg);
`;

export const SliderBar = styled.div<{
  mute: string;
  size: string;
}>`
  width: 16px;
  height: ${({ size }) => size || '100%'};
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, #c11e0f 0%, #f2921b 16%, #75b831 100%);
  background-size: 16px 585px;
  filter: ${({ mute }) => mute || 'none'};
`;

export const Rule = styled.div<{ left?: string; range: string }>`
  width: 16px;
  height: calc(100% - 94px);
  position: absolute;
  top: 14px;
  left: ${({ left }) => left || '80%'};
  background: linear-gradient(
    0deg,
    var(--color-neutral-2) 0%,
    transparent 1px,
    transparent 100%
  );
  background-size: 16px ${({ range }) => range || '292.5px'};
  border-top: 1px solid var(--color-neutral-2);
  border-bottom: 1px solid var(--color-neutral-2);
`;

export const Slider = styled.div<{ invert: boolean }>`
  position: absolute;
  top: -11.78px;
  height: calc(100% - 44px);
  ${({ invert }) =>
    (invert &&
      css`
        right: -50px;
        transform: rotateY(180deg);
      `) ||
    (!invert &&
      css`
        left: -50px;
      `)}
  cursor: grab;
  :active {
    cursor: grabbing;
  }
`;

export const Values = styled.div`
  position: absolute;
  top: 675px;
  left: 0px;
  width: 130px;
  user-select: none;
  padding-block: 15px;
  p {
    color: var(--color-system-3);
  }
`;
