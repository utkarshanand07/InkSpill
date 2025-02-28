import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import React from 'react'
import { Button } from '@/components/ui/button'

const Dashboard = () => {
  return (
    <div>Dashboard
    <Button>
      <LogoutLink>Logout</LogoutLink>
    </Button>
    </div>
  )
}

export default Dashboard