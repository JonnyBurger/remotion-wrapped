import {AbsoluteFill, useCurrentFrame} from 'remotion';

export const Gradient: React.FC<{
	height: number;
}> = ({height}) => {
	const frame = useCurrentFrame();
	const duration = 4 * 30;
	const offset = height * 1.5 * ((frame % duration) / duration);
	return (
		<AbsoluteFill>
			<AbsoluteFill
				style={{
					height: height * 1.5,
					background:
						'linear-gradient(to bottom, #92a77d, #ccd56a, #e6b417, #e37e10, #dc2407, #470905, #090416, #2f0199, #736bdb, #adc1d3, #aecdbf, #92a77d)',
					transform: `translateY(-${offset}px)`,
				}}
			/>
			<AbsoluteFill
				style={{
					height: height * 1.5,
					top: height * 1.5 - 1,
					background:
						'linear-gradient(to bottom, #92a77d, #ccd56a, #e6b417, #e37e10, #dc2407, #470905, #090416, #2f0199, #736bdb, #adc1d3, #aecdbf, #92a77d)',
					transform: `translateY(-${offset}px)`,
				}}
			/>
		</AbsoluteFill>
	);
};
