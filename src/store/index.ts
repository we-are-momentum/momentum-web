import { configureStore } from '@reduxjs/toolkit'
import performancesReducer from './performancesSlice'

export const store = configureStore({
  reducer: {
    performances: performancesReducer,
  },
})

// 스토어의 상태 타입을 추론합니다.
export type RootState = ReturnType<typeof store.getState>
// 디스패치 타입을 추론합니다.
export type AppDispatch = typeof store.dispatch
