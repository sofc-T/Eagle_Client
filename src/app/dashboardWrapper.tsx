"user client";

import { Store } from 'lucide-react'
import React, { Children } from 'react'
import StoreProvider from './redux'

type Props = {}

const DashboarLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>DashboardWrapper {children}</div>
  )
}


const DashboardWrapper = ({ children } : {children: React.ReactNode}) => {
  return (
    <StoreProvider>
      <DashboarLayout>{children}</DashboarLayout>
    </StoreProvider>
  );
}

export default DashboardWrapper