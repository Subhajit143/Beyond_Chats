import { configureStore } from "@reduxjs/toolkit"
import onboardingReducer from "./onboardingSlice"

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
})