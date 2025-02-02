import React from "react"
import { Provider } from "react-redux"
import { store } from "./store/store"
import OnboardingProcess from "./components/OnboardingProcess"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Provider store={store}>
      <div className="">
        {/* <Navbar /> */}
        <OnboardingProcess />
      </div>
    </Provider>
  )
}

export default App

