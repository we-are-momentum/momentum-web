import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Group {
  round: string
  time: string
  actors: string[]
}

interface Schedule {
  date: string
  day: string
  groups: Group[]
}

interface Staff {
  role: string
  name: string[]
}

interface SnapShot {
  image: string
  title: string
  description: string
}

interface Performance {
  id: number
  title: string
  company: string
  date: string
  location: string
  image: string
  supportInfo: string
  accountNumber: string
  synopsis: string
  schedule: Schedule[]
  snapshots: SnapShot[]
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
