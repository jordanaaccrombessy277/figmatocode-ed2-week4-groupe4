import React from 'react'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div>
       dashboard layout
       <Outlet />
    </div>
  )
}

export default DashboardLayout
