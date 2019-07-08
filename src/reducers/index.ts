import AxiosService from '../utils/AxiosService';
import { CHECK_IN,LOG_IN } from "../constants";


const rootReducer = async (state: any = {}, action: any) => {
  try {
    if (action.type === CHECK_IN) {
      await AxiosService.post('teacher/check-in', {
        pin_code: action.payload.pin_code
      });
      return state;
    }
    if (action.type === LOG_IN) {
      const user = await login(action.payload.username, action.payload.password);
      return {
        ...state,
        user: user
      }
    }
    return state;
  } catch(e) {
    console.error(e);
  }

};


const login = async (email: string, password: string) : Promise<any> => {
  const request = await AxiosService.post('user/login', {
    email: email,
    password: password,
  });
  localStorage.setItem("user", JSON.stringify(request.data));
  return request.data;

}
export default rootReducer;
