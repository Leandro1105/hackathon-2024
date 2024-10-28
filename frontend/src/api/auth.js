import axios from "./index";

class AuthApi {
  //End-points Company
  static Login = (cpf, password) => {
    return axios.get(`user/login`, {
      params: {
        cpf,
        password
      }
    });
  };

  static Register = (data) => {
    return axios.post(`user`, data);
  };

  static Logout = (data) => {
    return axios.post(`user`, data, { headers: { Authorization: `${data.token}` } });
  };
  //
  //End-points People
  static RegisterQuestion = (data) => {
    return axios.post(`question`, data);
  }

  static GetQuestions = () => {
    return axios.get(`question`);
  }

}

//let base = "user";

export default AuthApi;
