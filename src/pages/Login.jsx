import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
import loginImg from '../assets/Login.png';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/userSlice';

const Login = () => {
  // const onFinish = values => {
  //   console.log('Received values of form: ', values);
  // };
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const result = await dispatch(
      loginUser({ username, password })
    );

    if (loginUser.fulfilled.match(result)) {
      // navigate("/dashboard");
      console.log('works');

    }
  };
  return (
    <section className='grid grid-cols-2 h-screen items-center'>
      <div className='image px-10 flex items-center h-screen max-w-[720px]'>
        <img src={loginImg} alt="Login page" className='w-full rounded-2xl' />
      </div>
      <div className='login-col flex flex-col items-center justify-center rounded-l-[10%] bg-blue-50 h-screen'>
        <h1 className='text-4xl font-bold mb-4 text-[#3879e9]'>Login</h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          className='w-full max-w-[360px]'
        // onFinish={onFinish}
        >
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
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            or <a href="">Register now!</a>
          </Form.Item>
        </Form>
      </div>
    </section>
  )
}

export default Login