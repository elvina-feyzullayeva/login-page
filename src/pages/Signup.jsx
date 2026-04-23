import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
import loginImg from '../assets/Login.png';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../features/authApi';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { user, loading, error } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const onFinish = async (values) => {
    const result = await dispatch(signupUser(values));

    if (signupUser.fulfilled.match(result)) {
      navigate("/")
    }
  };
  const dispatch = useDispatch();

  return (
    <section className='grid grid-cols-2 h-screen items-center bg-[#89aff0]'>
      <div className='login-col flex flex-col items-center justify-center bg-blue-50 h-screen  rounded-r-[10%]' >
        <h1 className='text-4xl font-bold mb-4 text-[#3879e9]'>Signup</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form
          name="signup"
          initialValues={{ remember: true }}
          className='w-full max-w-[360px]'
          onFinish={onFinish}
        >
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: 'Please input your First name!' }]}
          >
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: 'Please input your Last name!' }]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}

          >
            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Sign up
            </Button>
            Already have an account?
            <a onClick={(e) => {
              navigate('/')
            }
            }>Sign in!</a>
          </Form.Item>
        </Form>
      </div>
      <div className='image px-10 flex items-center h-screen max-w-[720px]'>
        <img src={loginImg} alt="Login page" className='w-full' />
      </div>
    </section>
  )
}

export default Signup