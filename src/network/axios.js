import originAxios from 'axios'

export default function axios(option) {
	return new Promise((resolve, reject) => {
		// 1.创建axios的实例
		const instance = originAxios.create({
			baseURL: 'http://localhost:5000/api',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			timeout: 5000
		});
		// 2.传入对象进行网络请求
		instance(option).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}
