import type { FC, SVGProps } from 'react';

const EyeOnIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  fill = '#f1f2f3',
  ...rest
}) => {
  return (
    <svg
      fill='none'
      height={height}
      viewBox='0 0 24 24'
      width={width}
      {...rest}
    >
      <path
        d='M12,8.75c-1.795,0-3.25,1.455-3.25,3.25s1.455,3.25,3.25,3.25s3.25-1.455,3.25-3.25S13.795,8.75,12,8.75z M10.25,12
	c0-0.967,0.783-1.75,1.75-1.75s1.75,0.783,1.75,1.75s-0.783,1.75-1.75,1.75S10.25,12.967,10.25,12z'
        fill={fill}
      />
      <path
        d='M12,5.25c-4.898,0-7.491,4.079-8.332,5.696c-0.346,0.664-0.346,1.444,0,2.109C4.509,14.671,7.102,18.75,12,18.75
	c4.898,0,7.491-4.079,8.332-5.696c0.346-0.664,0.346-1.444,0-2.109C19.491,9.329,16.898,5.25,12,5.25z M4.998,11.638
	C5.809,10.081,8.024,6.75,12,6.75c3.976,0,6.191,3.331,7.001,4.888c0.12,0.23,0.12,0.493,0,0.724
	c-0.81,1.557-3.025,4.888-7.001,4.888c-3.976,0-6.191-3.331-7.002-4.888C4.879,12.132,4.879,11.868,4.998,11.638z'
        fill={fill}
      />
    </svg>
  );
};

export default EyeOnIcon;
