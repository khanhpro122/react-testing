import { Types } from "./types";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  isSignIned: false,
  isSignUped: false,
  isLogOuted: false,
};

export const userReducer = (state = initialState, action) => {
  console.log({ action });
  switch (action.type) {
    case Types.initialData: {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    }
    case Types.resetData: {
      return {
        ...initialState,
      };
    }
    case Types.pendingStatus: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSignIned: false,
        isSignUped: false,
        isLogOuted: false,
      };
    }
    case Types.sucessStatus: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        ...action.payload,
      };
    }
    case Types.errorStatus: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
