import { createContext, useState } from "react"

export const Active = createContext()

const Context = ({ children }) => {

    const [personalInfoActive, setPersonalInfoActive] = useState(true)
    const [billingInfoActive, setBillingInfoActive] = useState(false)
    const [confirmPaymentActive, setConfirmPaymentActive] = useState(false)

  return (
    <Active.Provider value={{personalInfoActive, setPersonalInfoActive, billingInfoActive, setBillingInfoActive, confirmPaymentActive, setConfirmPaymentActive}}>
        {children}
    </Active.Provider>
  )
}

export default Context