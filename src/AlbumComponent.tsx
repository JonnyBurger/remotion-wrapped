import {Img} from 'remotion';
import styled from 'styled-components';

export const COVER_SIZE = 400;

const Cover = styled.div`
	width: ${COVER_SIZE}px;
	height: ${COVER_SIZE}px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
`;

export const Album: React.FC<{
	imageSrc: string;
}> = ({imageSrc}) => {
	return (
		<Cover>
			<Img src={imageSrc} style={{height: COVER_SIZE, width: COVER_SIZE}} />
		</Cover>
	);
};
