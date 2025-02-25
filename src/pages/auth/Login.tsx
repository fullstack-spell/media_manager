import { Form, Input } from 'antd';
import Password from 'antd/es/input/Password';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {
    const [form] = Form.useForm();

    return (
        <div className='my-20 flex justify-center  items-center flex-col gap-10'>
            <div className='text-center space-y-10 max-w-[500px] bg-white shadow-lg w-full border pt-5 rounded'>
                <h4>LOGIN</h4>
                <Form form={form} size="large" layout="vertical" autoComplete="off" className='w-full '>
                    <div className='px-5'>
                        <Form.Item name="login" rules={[{ required: true }]}>
                            <Input addonBefore={<FaUser />} placeholder='client number or login' />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true }]}>
                            <Password addonBefore={<FaLock />} placeholder='password' />
                        </Form.Item>
                    </div>
                    <div className='px-5 py-5 bg-spell-gray'>
                        <Form.Item className="!mb-5">
                            <button className='bg-spell-yellow w-full text-lg text-black'>LOGIN</button>
                        </Form.Item>

                        <Link to={'/forgot-password'} className='!text-white font-semibold border-b-2 text-base border-white'>Forgot Password</Link>
                    </div>

                </Form>


            </div>

            <div className='text-center flex items-center flex-col gap-3 '>
                <p className='text-lg'>Do you not have an account?</p>
                <Link to={'/register'} className='font-medium bg-spell-purple text-white shadow rounded-sm px-4 py-2'>REGISTER NOW</Link>
            </div>

        </div>

    )
}

export default Login