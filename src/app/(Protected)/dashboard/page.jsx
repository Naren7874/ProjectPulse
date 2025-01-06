"use client"

import { useUser } from "@clerk/nextjs"

const Dashboard = () => {
const {user } = useUser()
  return (
    <div>{
        user? `Welcome, ${user.firstName} ${user.lastName}!` : "You are not logged in."
    }</div>
  )
}

export default Dashboard 