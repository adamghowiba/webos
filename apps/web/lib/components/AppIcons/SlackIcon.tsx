import React, { FC } from 'react';

export interface SlackIconProps {}

const SlackIcon: FC<SlackIconProps> = ({ ...props }) => {
  return (
    <>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={50}
        height={50}
        viewBox="0 0 270 270"
        enableBackground="new 0 0 270 270;"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              className="st0"
              d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"
            />
            <path
              className="st0"
              d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9
			s-12.9-5.8-12.9-12.9V151.2z"
            />
          </g>
          <g>
            <path
              className="st1"
              d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"
            />
            <path
              className="st1"
              d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9
			s5.8-12.9,12.9-12.9H118.8z"
            />
          </g>
          <g>
            <path
              className="st2"
              d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"
            />
            <path
              className="st2"
              d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9
			c7.1,0,12.9,5.8,12.9,12.9V118.8z"
            />
          </g>
          <g>
            <path
              className="st3"
              d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"
            />
            <path
              className="st3"
              d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9
			c0,7.1-5.8,12.9-12.9,12.9H151.2z"
            />
          </g>
        </g>
      </svg>

      <style jsx>{`
        .st0 {
          fill: #e01e5a;
        }
        .st1 {
          fill: #36c5f0;
        }
        .st2 {
          fill: #2eb67d;
        }
        .st3 {
          fill: #ecb22e;
        }
      `}</style>
    </>
  );
};

export default SlackIcon;
