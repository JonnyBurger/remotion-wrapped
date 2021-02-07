import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {ScalingFace} from './ScalingFace';

export const FourFaces: React.FC<{
	image: string;
}> = ({image}) => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const progress = spring({
		frame,
		fps,
		config: {
			mass: 2.5,
			damping: 1000,
		},
	});
	const offsetX = Math.max(0, interpolate(progress, [0, 1], [width / 3, -50]));
	const offsetY = Math.max(0, interpolate(progress, [0, 1], [height / 3, -50]));
	const opacity = interpolate(progress, [0, 1], [0, 1]);
	const clipPath = `inset(${offsetY}px ${offsetX}px ${offsetY}px ${offsetX}px)`;
	return (
		<AbsoluteFill
			style={{
				clipPath,
				opacity,
			}}
		>
			<AbsoluteFill
				style={{width: width / 2, height: height / 2, transform: `scaleX(-1)`}}
			>
				<ScalingFace image={image} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{width: width / 2, height: height / 2, left: width / 2}}
			>
				<ScalingFace image={image} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					width: width / 2,
					height: height / 2,
					top: height / 2,
					transform: `scale(-1)`,
				}}
			>
				<ScalingFace image={image} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					width: width / 2,
					height: height / 2,
					left: width / 2,
					top: height / 2,
					transform: `scaleY(-1)`,
				}}
			>
				<ScalingFace image={image} />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
