import {Sequence, useCurrentFrame} from 'remotion';
import {Scene1} from './Scene1';
import {Scene2} from './Scene2';
import {Scene3} from './Scene3';

export const Main: React.FC<{
	topSongName: string;
	topSongArtistName: string;
	topSongCover: string;
	ranking: [string, string, string, string, string];
	artists: string[];
}> = ({topSongName, topSongArtistName, topSongCover, ranking, artists}) => {
	const frame = useCurrentFrame();
	return (
		<>
			<Sequence from={0} durationInFrames={210}>
				<Scene1 sources={artists} />
			</Sequence>
			<Sequence from={210} durationInFrames={210}>
				<Scene2 ranking={ranking} />
			</Sequence>
			<Sequence from={420} durationInFrames={150}>
				<Scene3
					topSongName={topSongName}
					topSongArtistName={topSongArtistName}
					topSongCover={topSongCover}
				/>
			</Sequence>
			{frame}
		</>
	);
};
