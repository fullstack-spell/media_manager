/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Spin } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    return (
        <div className="space-y-2">
            <h3>Social Medias:</h3>
            <Form layout='vertical' className='w-full  border-2 border-spell-purple !p-10 rounded-lg' form={form}
                onFinish={async (values) => {
                    try {
                        setLoading(true);
                        console.log(values);

                        // values = { ...values, status: "contact" }
                        // await localaxios.post(`/leads`, values);
                        // toast.success('Lead Successfully Created')
                        // form.resetFields()
                        setLoading(false);
                    } catch (e: any) {
                        setLoading(false);
                        console.log(e);
                        // toast.error(e?.response?.data?.message)
                    }
                }}
            >
                <h5 className="text-center text-lg text-red-500/50">Note: No need to type url</h5>
                <FormItem
                    name='facebook' className='mb-3'>
                    <Input addonBefore={<FaFacebook size={20} />} placeholder="/spellinnovation" size='large' className="rounded-md p-3" />
                </FormItem>
                <FormItem
                    name='instagram' className='mb-3'>
                    <Input addonBefore={<FaInstagram size={20} />} placeholder="/spellinnovation" size='large' className="rounded-md p-3" />
                </FormItem>
                <FormItem
                    name='linkdin' className='mb-3'>
                    <Input addonBefore={<FaLinkedin size={20} />} placeholder="/spellinnovation" size='large' className="rounded-md p-3" />
                </FormItem>
                <FormItem
                    name='twitter' className='mb-3'>
                    <Input addonBefore={<FaXTwitter size={20} />} placeholder="/spellinnovation" size='large' className="rounded-md p-3" />
                </FormItem>
                <FormItem
                    name='youtube' className='mb-3'>
                    <Input addonBefore={<FaYoutube size={20} />} placeholder="/spellinnovation" size='large' className="rounded-md p-3" />
                </FormItem>
                <FormItem className='mb-0'>
                    <Spin spinning={loading}>
                        <button type='submit' className='text-white font-bold bg-spell-purple px-6 py-2.5 rounded-md'>Submit</button>
                    </Spin>
                </FormItem>
            </Form>
        </div>
    )
}

export default SocialMedia