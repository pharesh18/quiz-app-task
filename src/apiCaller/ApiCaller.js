class ApiCaller {
    static version = 1.0;

    static sites = {
        1.0: 'https://quizzeriawebapp.onrender.com/v1/api',
        2.0: 'https://quizzeriawebapp.onrender.com/v2/api',
        3.0: 'https://quizzeriawebapp.onrender.com/v3/api',
    };

    // static sites = {
    //     1.0: 'http://localhost:8000/v1/api',
    //     2.0: 'http://localhost:8000/v2/api',
    //     3.0: 'http://localhost:8000/v3/api',
    // };

    static site = ApiCaller.sites[ApiCaller.version] || 'https://quizzeriawebapp.onrender.com/v1/api';

    // static site = ApiCaller.sites[ApiCaller.version] || 'http://localhost:8000/v1/api';

}
export default ApiCaller