import { FC } from 'react'
import { getDataFromSheet } from '../../services/googleSheets'

const AboutMe: FC = () => {
	return (
		<div>
			<button
				onClick={() => {
					getDataFromSheet()
				}}
			>
				asdj
			</button>
		</div>
	)
}
export default AboutMe
