import * as axios from 'axios';

const instance = axios.create({
	// withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	// header: {
	// 	"API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
	// }
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(instance.defaults.baseURL + `users?page=${currentPage}&count=${pageSize}`) // вторым параметров в get должен прийти { withCredentials: true}
			.then(response => response.data);
	}
}
