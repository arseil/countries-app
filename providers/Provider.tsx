"use client"

import { persistor, store } from "@/store"
import { FC } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

interface ProvidersProps{
  children: React.ReactNode
}

export const Providers:FC<ProvidersProps> = ({children}) => {
  return (
    <Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						{children}
					</PersistGate>
		</Provider>
  )
}