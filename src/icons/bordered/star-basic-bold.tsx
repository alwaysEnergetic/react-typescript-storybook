import type { FC, SVGProps } from 'react';

const StarBasicBoldIcon: FC<SVGProps<SVGSVGElement>> = ({
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
        d='M12,6.449L10.58,9.31c-0.292,0.589-0.855,0.996-1.506,1.09L5.91,10.856l2.286,2.212c0.475,0.46,0.693,1.125,0.58,1.777
	l-0.54,3.131l3.214-1.68c0.349-0.182,0.764-0.182,1.113,0l3.201,1.677l-0.54-3.129c-0.112-0.652,0.105-1.317,0.58-1.777l2.286-2.212
	l-3.163-0.456c-0.651-0.094-1.214-0.501-1.506-1.09L12,6.449z M10.746,4.477c0.515-1.037,1.993-1.037,2.508,0l1.958,3.944
	l4.374,0.63c1.152,0.166,1.61,1.583,0.774,2.392l-3.165,3.063l0.746,4.326c0.197,1.143-1.002,2.017-2.029,1.478l-3.906-2.047
	l-3.918,2.048c-1.028,0.537-2.225-0.336-2.028-1.479l0.747-4.327l-3.165-3.063c-0.836-0.809-0.378-2.226,0.774-2.392l4.374-0.63
	L10.746,4.477z'
        fill={fill}
      />
    </svg>
  );
};

export default StarBasicBoldIcon;
