import axios from 'axios'
import { IProject } from '../shared/types'

export async function getDataFromSheet() {
	const link: string = import.meta.env.VITE_SHEET_JSON_LINK

	return axios.get<IProject[]>(link).then((res) => res.data)
}
