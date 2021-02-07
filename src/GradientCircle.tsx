import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Gradient} from './Gradient';

export const GradientCircle: React.FC = () => {
	const frame = useCurrentFrame();
	const {height, width, fps} = useVideoConfig();
	const progress = spring({
		frame,
		fps,
		config: {
			mass: 4,
			damping: 1000,
		},
	});
	const size = height * 1.5;
	return (
		<AbsoluteFill>
			<div
				style={{
					height: size,
					width: size,
					borderRadius: size / 2,
					left: -(size - width) / 2,
					top: -(size - height) / 2,
					position: 'absolute',
					overflow: 'hidden',
					transform: `scale(${progress})`,
					opacity: progress,
				}}
			>
				<Gradient height={height} />
			</div>
		</AbsoluteFill>
	);
};
