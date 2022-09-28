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
  height: 615px;
  border: 3px solid var(--color-primary-2);
`;

export const GroupBars = styled.div`
  width: 34px;
  height: 585px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  position: relative;
  margin-inline: 5px;
  margin-block: 11px;
  transform: rotateZ(180deg);
`;

export const SliderBar = styled.div<{
  mute: string;
  size: string;
}>`
  width: 16px;
  height: ${({ size }) => size || '585px'};
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, #c11e0f 0%, #f2921b 16%, #75b831 100%);
  background-size: 16px 585px;
  filter: ${({ mute }) => mute || 'none'};
`;

export const Rule = styled.div<{ left?: string; range: string }>`
  width: 16px;
  height: 585px;
  position: absolute;
  top: 14px;
  left: ${({ left }) => left || '80%'};
  background: linear-gradient(
    0deg,
    var(--color-neutral-2) 0%,
    transparent 1px,
    transparent 100%
  );
  background-size: 16px ${({ range }) => range || '191px'};
  border-top: 1px solid var(--color-neutral-2);
  border-bottom: 1px solid var(--color-neutral-2);
`;

export const LeftSlider = styled.div`
  position: absolute;
  left: -50px;
  top: -11.78px;
  height: calc(100% - 44px);
  cursor: grab;
  :active {
    cursor: grabbing;
  }
`;

export const RightSlider = styled.div`
  position: absolute;
  right: -50px;
  top: -11.78px;
  height: calc(100% - 44px);
  transform: rotateY(180deg);
  cursor: grab;
  :active {
    cursor: grabbing;
  }
`;
