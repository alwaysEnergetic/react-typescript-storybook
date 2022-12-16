import type { FC, SVGProps } from 'react';

const ScienceBasicBoldIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  fill = '#f1f2f3',
  ...rest
}) => {
  return (
    <svg
      enableBackground='new 0 0 24 24'
      fill='none'
      height={height}
      viewBox='0 0 24 24'
      width={width}
      xmlSpace='preserve'
      {...rest}
    >
      <path
        d='M20.93,9.152c-0.012-0.033-0.028-0.062-0.044-0.093c-0.039-0.077-0.086-0.148-0.143-0.213
	c-0.021-0.024-0.039-0.049-0.063-0.071c-0.082-0.077-0.173-0.144-0.279-0.191l-0.01-0.005c-0.001,0-0.001-0.001-0.002-0.001
	l-7.987-3.494c-0.255-0.112-0.546-0.112-0.802,0l-8,3.5C3.235,8.743,3,9.103,3,9.5s0.235,0.757,0.599,0.916L6,11.467V15.5
	c0,0.527,0.17,1.139,0.661,1.595C7.423,17.803,9.145,19,12,19s4.577-1.197,5.339-1.905C17.83,16.639,18,16.027,18,15.5v-4.033
	l1-0.438V15c0,0.552,0.448,1,1,1s1-0.448,1-1V9.5C21,9.378,20.971,9.262,20.93,9.152z M12,7.091L17.505,9.5L12,11.909L6.495,9.5
	L12,7.091z M16,15.5c0,0.057-0.009,0.096-0.017,0.116c-0.003,0.008-0.006,0.013-0.007,0.015C15.496,16.077,14.241,17,12,17
	c-2.241,0-3.496-0.923-3.976-1.369c-0.001-0.002-0.004-0.007-0.007-0.015C8.009,15.596,8,15.557,8,15.5v-3.158l3.599,1.575
	c0.255,0.112,0.546,0.112,0.802,0L16,12.342V15.5z'
        fill={fill}
      />
    </svg>
  );
};

export default ScienceBasicBoldIcon;
