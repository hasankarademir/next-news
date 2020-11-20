import React from 'react'
import { IconContext } from "react-icons";

import '../styles/variables.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
      <Component {...pageProps} />
    </IconContext.Provider>

  )
}