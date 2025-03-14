import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Group {
  members: string[]
}

interface Schedule {
  round: string
  groups: Group[]
}

interface Member {
  role: string
  name: string
}

interface Performance {
  id: number
  title: string
  company: string
  date: string
  location: string
  image: string
  supportInfo: string
  synopsis: string
  schedule: Schedule[]
  members: Member[]
}

interface PerformancesState {
  performances: Performance[]
}

const initialState: PerformancesState = {
  performances: [],
}

const performancesSlice = createSlice({
  name: 'performances',
  initialState,
  reducers: {
    setPerformances: (state, action: PayloadAction<Performance[]>) => {
      state.performances = action.payload
    },
  },
})

export const { setPerformances } = performancesSlice.actions

export default performancesSlice.reducer
