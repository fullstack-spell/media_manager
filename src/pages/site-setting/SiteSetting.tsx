import { Form, Input, Spin, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import { FaPlus } from "react-icons/fa";

const SiteSetting = () => {
    const [form] = Form.useForm();
    // const [loading, setLoading] = useState(false);

    return (
        <Form layout='vertical' className='w-full  border-2 border-spell-purple !p-10 rounded-lg' form={form}
        // onFinish={async (values) => {
        //     try {
        //         setLoading(true);
        //         values = { ...values, status: "contact" }
        //         await localaxios.post(`/leads`, values);
        //         toast.success('Lead Successfully Created')
        //         form.resetFields()
        //         setLoading(false);
        //     } catch (e: any) {
        //         setLoading(false);
        //         toast.error(e?.response?.data?.message)
        //     }
        // }}
        >
            <div className="grid md:grid-cols-2 gap-5 grid-cols-1 lg:grid-cols-4">
                <FormItem
                    name='title_image' className='mb-3' label={<span className='text-spell-purple font-bold'>Title Image</span>}>
                    <Upload
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture-card"
                    >
                        <div className="flex flex-col gap-2 items-center">
                            <FaPlus />
                            16  X 16  pixel
                        </div>
                    </Upload>
                </FormItem>
                <FormItem
                    name='homepage_logo' className='mb-3' label={<span className='text-spell-purple font-bold'>Homepage Logo</span>}>
                    <Upload
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture-card"
                    >
                        <div className="flex flex-col gap-2 items-center">
                            <FaPlus />
                        </div>
                    </Upload>
                </FormItem>
                <FormItem
                    name='footer_logo' className='mb-3' label={<span className='text-spell-purple font-bold'>Footer Logo</span>}>
                    <Upload
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture-card"
                    >
                        <div className="flex flex-col gap-2 items-center">
                            <FaPlus />
                        </div>
                    </Upload>
                </FormItem>
                <FormItem
                    name='dashboard_logo' className='mb-3' label={<span className='text-spell-purple font-bold'>Dashboard Logo</span>}>
                    <Upload
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        listType="picture-card"
                    >
                        <div className="flex flex-col gap-2 items-center">
                            <FaPlus />
                        </div>
                    </Upload>
                </FormItem>
                <FormItem
                    name='title' className='mb-3' label={<span className='text-spell-purple font-bold'>Title</span>}>
                    <Input placeholder="title" size='large' className="rounded-md p-3" />
                </FormItem>
                <FormItem
                    name='company_name' className='mb-3' label={<span className='text-spell-purple font-bold'>Company Name</span>}>
                    <Input placeholder="spell" size='large' className="rounded-md p-3" />
                </FormItem>
                <FormItem
                    name='chief_editor' className='mb-3' label={<span className='text-spell-purple font-bold'>Chief Editor</span>}>
                    <Input placeholder="hari" size='large' className="rounded-md p-3" />
                </FormItem>
                <FormItem
                    name='chief_editor_number' className='mb-3' label={<span className='text-spell-purple font-bold'>Chief Editor Number</span>}>
                    <Input type="number" placeholder="9855632001" size='large' className="rounded-md p-3" />
                </FormItem>

                <FormItem
                    name='advertiser' className='mb-3' label={<span className='text-spell-purple font-bold'>Advertiser</span>}>
                    <Input placeholder="hari" size='large' className="rounded-md p-3" />
                </FormItem>
                <FormItem
                    name='advertiser_number' className='mb-3' label={<span className='text-spell-purple font-bold'>Advertiser Number</span>}>
                    <Input type="number" placeholder="9855632001" size='large' className="rounded-md p-3" />
                </FormItem>

                <FormItem
                    name='news_registration_number' className='mb-3' label={<span className='text-spell-purple font-bold'>News Registration Number</span>}>
                    <Input type="number" size="large" placeholder='68686515673157867221571' className="rounded-md p-3" />
                </FormItem>
                <FormItem
                    name='chairman' className='mb-3' label={<span className='text-spell-purple font-bold'>Chairman</span>}>
                    <Input placeholder="hari" size='large' className="rounded-md p-3" />
                </FormItem>
                <FormItem
                    name='company_number' className='mb-3' label={<span className='text-spell-purple font-bold'>Company Phone Number</span>}>
                    <Input type="number" size="large" placeholder='9855632001' className="rounded-md p-3" />
                </FormItem>
                <FormItem
                    name='company_email' className='mb-3' label={<span className='text-spell-purple font-bold'>Company Email</span>}>
                    <Input type="email" size="large" placeholder='9855632001' className="rounded-md p-3" />
                </FormItem>
                <FormItem
                    name='company_address' className='mb-3' label={<span className='text-spell-purple font-bold'>Company Address</span>}>
                    <Input size="large" placeholder='9855632001' className="rounded-md p-3" />
                </FormItem>
            </div>
            <FormItem className='mb-0'>
                <Spin spinning={false}>
                    <button type='submit' className='text-white font-bold bg-spell-purple px-6 py-2.5 rounded-md'>Submit</button>
                </Spin>
            </FormItem>
        </Form>
    )
}

export default SiteSetting