import {CHECK_IN, LOG_IN} from '../constants';

export const checkIn = (pinCode: number) => {
  return { type: CHECK_IN, payload:
    {
      pin_code: pinCode
    }
  };
}

export const login = (username: string, password: string) => {
  return {
    type: LOG_IN, payload: {
      username: username,
      password: password
    }
  }
}
