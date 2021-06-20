import fetch from '@/config/fetch'

export const testapi =() => {
	return axios.request({
		method:'get',
		url:'http://127.0.0.1:8000/api/test',
	})
}


