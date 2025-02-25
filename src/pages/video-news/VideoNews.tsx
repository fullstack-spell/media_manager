import { Button, Form, Input, Modal, Select, Switch, Table, TableColumnsType, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const VideoNews = () => {
    const columns: TableColumnsType = [
        {
            title: 'S.N',
            width: 100,
            dataIndex: 'sn',
            key: 'sn',
        },
        {
            title: 'Title',
            width: 100,
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Slug',
            dataIndex: 'slug',
            key: 'slug',
            width: 150,
        },
        {
            title: 'Hastag',
            dataIndex: 'hastag',
            key: 'hastag',
            width: 150,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            width: 150,
        },
        {
            title: 'Featured?',
            dataIndex: 'featured',
            key: 'featured',
            width: 150,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 150,
        },
        {
            title: 'Action',
            key: 'operation',
            width: 100,
            render: () => <div className="flex items-center  gap-2"><FaEdit size={25} className="text-green-500" /> <MdDelete size={25} className="text-red-500" /> </div>,
        },
    ];


    const dataSource = Array.from({ length: 100 }).map((_, i) => ({
        key: i,
        name: `Edward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    }));
    const [form] = Form.useForm();
    const [modelOpen, setModelOpen] = useState(false)

    return (
        <div className="h-full space-y-3">
            <h5>Filter:</h5>
            <div className="flex items-end gap-2 flex-wrap w-full border-2 border-spell-purple rounded-lg p-4">
                <FormItem label={<p className="text-base font-medium">Filter one</p>} layout="vertical" className="!m-0">
                    <Input size="large" className="!w-[200px]" />
                </FormItem>
                <FormItem label={<p className="text-base font-medium">Filter two</p>} layout="vertical" className="!m-0 w-[200px]">
                    <Select className="custom-select" options={[{ label: 'one', value: 'one value' }]} value={'one value'} size="large" />
                </FormItem>
                <button className="bg-spell-yellow">Search</button>
            </div>

            <button onClick={() => setModelOpen(true)} className="bg-spell-purple">Add Video News</button>

            <Table
                className="h-full overflow-hidden mb-5"
                columns={columns}
                dataSource={dataSource}
                scroll={{ x: 1500 }}
                sticky={{ offsetHeader: 0 }}
            />

            <Modal
                centered
                okText={'Add'}
                open={modelOpen}
                title="Manage News Category"
                onOk={async () => {
                    await form.validateFields()
                    form.resetFields()
                    setModelOpen(false)
                }}
                onCancel={() => setModelOpen(false)}
            >
                <Form form={form} size="large" layout="vertical" autoComplete="off">
                    <Form.Item className="!mb-3" name="title" label="Title" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item className="!mb-3" name="slug" label="Slug" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item className="!mb-3" name="short_description" label="Short Description" rules={[{ required: true }]}>
                        <TextArea />
                    </Form.Item>
                    <Form.Item className="!mb-3" name="video_link" label="Video Link" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item className="!mb-3" name="feature_image" label="Featured Image" rules={[{ required: true }]} >
                        <Upload
                            listType="picture"
                        >
                            <Button type="primary" icon={<IoAdd />}>
                                Upload
                            </Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item className="!mb-3" name="featured" label="Featured?" >
                        <Switch />
                    </Form.Item>
                    <Form.Item className="!mb-3" name="with_image" label="With Image?" rules={[{ required: true }]}>
                        <Switch />
                    </Form.Item>
                    <Form.Item className="!mb-3" name="position" label="Postition" rules={[{ required: true }]}>
                        <Select className="w-full" options={[{ label: 1, value: 1 }, { label: 2, value: 2 }, { label: 3, value: 3 }]} />
                    </Form.Item>
                    <Form.Item className="!mb-3" name="status" label="Status" rules={[{ required: true }]}>
                        <Switch />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default VideoNews