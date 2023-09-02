import { Types } from '../types';
import { userReducer } from '../userReducer';

describe('Test userReducer', () => {
  it('check action initial data', () => {
    const initialState = {
      user: {},
      isLoading: false,
      isError: false,
      isSignIned: false,
      isSignUped: false,
      isLogOuted: false,
    };

    const action = {
      type: Types.initialData,
      payload: {
        firstName: 'Khanh',
        lastName: 'Nguyen',
        id: 1,
      },
    };

    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      user: {
        firstName: 'Khanh',
        lastName: 'Nguyen',
        id: 1,
      },
    });
  });

  it('check action reset data', () => {
    const initialState = {
      user: {
        firstName: 'Khanh',
        lastName: 'Nguyen',
        id: 1,
      },
      isLoading: false,
      isError: false,
      isSignIned: true,
      isSignUped: false,
      isLogOuted: false,
    };

    const action = {
      type: Types.resetData,
    };

    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      user: {},
      isLoading: false,
      isError: false,
      isSignIned: false,
      isSignUped: false,
      isLogOuted: false,
    });
  });

  it('check action pending status', () => {
    const initialState = {
      user: {},
      isLoading: false,
      isError: false,
      isSignIned: false,
      isSignUped: false,
      isLogOuted: false,
    };

    const action = {
      type: Types.pendingStatus,
    };

    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      isLoading: true,
      isError: false,
      isSignIned: false,
      isSignUped: false,
      isLogOuted: false,
    });
  });

  it('check action success status', () => {
    const initialState = {
      user: {},
      isLoading: true,
      isError: false,
      isSignIned: false,
      isSignUped: false,
      isLogOuted: false,
    };

    const action = {
      type: Types.sucessStatus,
      payload: {
        isSignIned: true,
      },
    };

    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      isLoading: false,
      isError: false,
      isSignIned: true,
      isSignUped: false,
      isLogOuted: false,
    });
  });

  it('check action error status', () => {
    const initialState = {
      user: {},
      isLoading: true,
      isError: false,
      isSignIned: true,
      isSignUped: false,
      isLogOuted: false,
    };

    const action = {
      type: Types.errorStatus,
    };

    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      isLoading: false,
      isError: true,
    });
  });
});