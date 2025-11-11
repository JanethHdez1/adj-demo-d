const TestController = {};
const ENV = import.meta.env;

const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}/test`

TestController.callToAPI = async () => {
    await fetch(`${API_URL}`, {method: 'GET', headers:{"Accept":"application/JSON"  }
    }).then(response => response.json()).then(result => {
        console.log(result);
    }).catch(console.log);
}

export default TestController;