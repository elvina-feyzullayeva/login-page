import { Avatar, Button, Layout } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';


const Dashboard = () => {
  const navigate = useNavigate()
  const { user, error, loading } = useSelector((state) => state.user)
  if (!user){
    navigate('/')
  }

  return (
    <>
      <Navbar />
      <div>
        <h1>Добро пожаловать, {user?.firstName}!</h1>
        <p>Email: {user?.email}</p>
        <button >Выйти</button>
      </div>
    </>
      
    
  )
}

export default Dashboard