import React from 'react';
import { Rnd } from 'react-rnd';

export interface Props {
  value: number;
  setValue: (val: number) => void;
  disable: boolean;
  step: number;
}

const Picker: React.FC<Props> = ({ value, setValue, disable, step }) => {
  return (
    <Rnd
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        cursor: 'drag',
        resize: 'none',
      }}
      default={{
        x: 0,
        y: value,
        width: 50,
        height: 50,
      }}
      onDragStop={(e, d) => {
        setValue(d.lastY);
      }}
      dragAxis="y"
      dragGrid={[step, step]}
      bounds=".soundmixer-slider-container"
      enableResizing={false}
      disableDragging={disable}
    >
      <svg
        width="25"
        height="27"
        viewBox="0 0 25 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="slider"
      >
        <path
          d="M24.1962 12.763C24.6284 13.1593 24.6284 13.8407 24.1962 14.237L13.9258 23.6546C13.2845 24.2428 12.25 23.7878 12.25 22.9176L12.25 4.0824C12.25 3.21221 13.2845 2.75724 13.9258 3.34535L24.1962 12.763Z"
          fill="#808080"
        />
        <rect
          x="14"
          y="24"
          width="14"
          height="21"
          rx="1"
          transform="rotate(-180 14 24)"
          fill="#808080"
        />
      </svg>
    </Rnd>
  );
};

export default Picker;
