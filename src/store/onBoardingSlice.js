import { createSlice } from "@reduxjs/toolkit"

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState: {
    step: 1,
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
  },
})

export const { setStep } = onboardingSlice.actions
export default onboardingSlice.reducer

