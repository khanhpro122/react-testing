import { logOutUser, loginUser, signUpUser } from "../services";
import { Types } from "./types";

export const initialData = (data) => {
  return {
    type: Types.initialData,
    payload: data
  }
}

export const pendingStatus = (data) => {
  return {
    type: Types.pendingStatus,
    payload: data,
  };
};

export const sucessStatus = (data) => {
  return {
    type: Types.sucessStatus,
    payload: data,
  };
};

export const errorStatus = (data) => {
  return {
    type: Types.errorStatus,
    payload: data,
  };
};

export const resetData = () => {
  return {
    type: Types.resetData,
  };
};

export const loginUserAsync = (data) => async (dispatch) => {
  dispatch(pendingStatus());
  const res = await loginUser(data);
  localStorage.setItem(
    "authUser",
    JSON.stringify({
      accessToken: res?.accessToken,
      refreshToken: res?.refreshToken,
      firstName: res?.user?.firstName,
      lastName: res?.user?.lastName,
      id: res?.user?.id,
    })
  );
  if (res?.accessToken) {
    dispatch(sucessStatus({user: res?.user,isSignIned: true}));
  } else {
    dispatch(errorStatus());
  }
};

export const signUpUserAsync = (data) => async (dispatch) => {
  dispatch(pendingStatus());
  const res = await signUpUser(data);
  if (res?.id) {
    dispatch(sucessStatus({isSignUped: true}));
  } else {
    dispatch(errorStatus());
  }
};

export const logOutUserAsync = (data) => async (dispatch) => {
  dispatch(pendingStatus());
  const {refreshToken, accessToken } = data
  const res = await logOutUser(accessToken, refreshToken);
  if (res?.status === 204) {
    dispatch(sucessStatus({isLogOuted: true}));
    localStorage.removeItem('authUser');
  } else {
    dispatch(errorStatus());
  }
};

