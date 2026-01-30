import React, { useMemo } from 'react'
import HomeLayout from '../components/HomeLayout'
import { Outlet, useLocation } from 'react-router-dom'
import JobBrowsePage from '../../jobs/pages/JobBrowsePage'

const HomePage = () => {
  const navigat = useLocation();
  const pathName = useMemo(() => navigat.pathname, [navigat]);
  return (
     <HomeLayout>
      <Outlet></Outlet>
      {pathName==="/"&&<JobBrowsePage/>}
    </HomeLayout>
  )
}

export default React.memo(HomePage);