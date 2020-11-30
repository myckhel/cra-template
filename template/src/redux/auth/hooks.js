import {useDispatch} from 'react-redux';
import {useMemoSelector} from 'use-redux-state-hook';

import {logoutUser} from './'
import {selectIsAuth} from './selectors'

export const useLogout = () => {
  const dispatch = useDispatch()
  return () => {
    dispatch(logoutUser())
  }
}

export const useIsLoggedIn = () => useMemoSelector(selectIsAuth)
