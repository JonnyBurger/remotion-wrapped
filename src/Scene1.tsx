import {AbsoluteFill, Sequence, useVideoConfig} from 'remotion';
import {FourFaces} from './FourFaces';
import {Gradient} from './Gradient';
import {GradientCircle} from './GradientCircle';
import {Wrapped} from './Wrapped';

export const Scene1: React.FC<{sources: string[]}> = ({sources}) => {
	const images = sources.map((i) => require('./' + i));
	const {height} = useVideoConfig();
	return (
		<AbsoluteFill>
			<Gradient height={height} />
			{images.map((image, i) => {
				return (
					<Sequence durationInFrames={Infinity} from={30 * i}>
						<FourFaces image={image} />
					</Sequence>
				);
			})}
			<Sequence durationInFrames={Infinity} from={120}>
				<GradientCircle />
			</Sequence>
			<Sequence durationInFrames={Infinity} from={160}>
				<Wrapped />
			</Sequence>
		</AbsoluteFill>
	);
};
