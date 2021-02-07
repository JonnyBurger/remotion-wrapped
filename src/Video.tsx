import {Composition} from 'remotion';
import {Gradient} from './Gradient';
import {GradientCircle} from './GradientCircle';
import {Main} from './Main';
import {Scene1} from './Scene1';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';
import {Wrapped} from './Wrapped';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Gradient"
				component={Gradient}
				width={720}
				height={1280}
				durationInFrames={120}
				fps={30}
			/>
			<Composition
				id="Scene1"
				component={Scene1}
				width={720}
				height={1280}
				durationInFrames={210}
				fps={30}
			/>
			<Composition
				id="Wrapped"
				component={Wrapped}
				width={720}
				height={1280}
				durationInFrames={210}
				fps={30}
			/>
			<Composition
				id="GradientCircle"
				component={GradientCircle}
				width={720}
				height={1280}
				durationInFrames={210}
				fps={30}
			/>
			<Composition
				id="Scene2"
				component={Scene2}
				width={720}
				height={1280}
				durationInFrames={210}
				fps={30}
				defaultProps={{
					ranking: [
						'Rap',
						'Pop',
						'Underground\nHip Hop',
						'Alternative R&B',
						'Neo Soul',
					] as [string, string, string, string, string],
				}}
			/>
			<Composition
				id="Scene3"
				component={Scene3}
				width={720}
				height={1280}
				durationInFrames={150}
				fps={30}
				defaultProps={{
					topSongName: 'All I Talk Is Money',
					topSongArtistName: 'Albusta',
					topSongCover:
						'https://i.scdn.co/image/ab67616d00001e02d0108ee3b4a64bddfa7e6cc2',
				}}
			/>
			<Composition
				id="Main"
				component={Main}
				width={720}
				height={1280}
				durationInFrames={360 + 210}
				fps={30}
				defaultProps={{
					artists: [
						'weeknd.jpg',
						'maryjblige.jpg',
						'roots.jpg',
						'samsmith.jpg',
					],
					topSongName: 'All I Talk Is Money',
					topSongArtistName: 'Albusta',
					topSongCover:
						'https://i.scdn.co/image/ab67616d00001e02d0108ee3b4a64bddfa7e6cc2',
					ranking: [
						'Rap',
						'Pop',
						'Underground\nHip Hop',
						'Alternative R&B',
						'Neo Soul',
					] as [string, string, string, string, string],
				}}
			/>
		</>
	);
};
