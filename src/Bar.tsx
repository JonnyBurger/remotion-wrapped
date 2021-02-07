import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
const BAR_HEIGHT = 160;

type BarProps = {
	color: string;
	endWidth: number;
};

type Props = BarProps & {
	rank: number;
	genre: string;
};

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: white;
	font-size: 28px;
	font-family: --Arial, Helvetica, sans-serif;
	font-weight: bold;
	line-height: 1.4;
	text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
`;

export const BarContainer = styled.div<BarProps>`
	height: ${BAR_HEIGHT}px;
	background-color: ${(props) => props.color};
	border-radius: ${BAR_HEIGHT / 2}px;
	margin-top: 10px;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`;

const TOTAL_RANKS = 5;

export const Bar: React.FC<Props> = ({endWidth, color, genre, rank}) => {
	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();
	const opacity = interpolate(
		frame - (TOTAL_RANKS - rank) * 3 - 10,
		[0, 12],
		[0, 1]
	);
	const animatedWidthProgress = spring({
		frame: frame - 60 - rank * 3,
		fps,
		config: {
			damping: 200,
		},
	});
	const animatedWidth = interpolate(
		animatedWidthProgress,
		[0, 1],
		[BAR_HEIGHT, endWidth + 100]
	);
	const left = interpolate(
		animatedWidthProgress,
		[0, 1],
		[width / 2 - BAR_HEIGHT / 2, -60]
	);
	const labelProgress = spring({
		frame: frame - 90 - rank * 20,
		fps,
		config: {
			damping: 200,
			mass: 0.6,
		},
	});
	return (
		<Row style={{width: 2000}}>
			<BarContainer
				style={{
					opacity,
					width: animatedWidth,
					marginLeft: left,
				}}
				endWidth={endWidth}
				color={color}
			/>
			<div style={{width: 40}} />
			<div
				style={{
					opacity: labelProgress,
					transform: `translateY(${interpolate(
						labelProgress,
						[0, 1],
						[40, 0]
					)}px)`,
				}}
			>
				#{rank} <br />
				{genre}
			</div>
		</Row>
	);
};
