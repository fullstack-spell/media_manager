import { Form, Input, Modal, Select, Switch, Table, TableColumnsType } from "antd";
import { useState } from "react";
import FormItem from "antd/es/form/FormItem";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const NewsCategory = () => {
    const columns: TableColumnsType = [
        {
            title: 'S.N',
            width: 100,
            dataIndex: 'sn',
            key: 'sn',
        },
        {
            title: 'Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Slug',
            dataIndex: 'slug',
            key: 'slug',
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
                    <Select options={[{ label: 'one', value: 'one value' }]} value={'one value'} size="large" />
                </FormItem>
                <button className="bg-spell-yellow">Search</button>
            </div>

            <button onClick={() => setModelOpen(true)} className="bg-spell-purple">Add News Category</button>

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
                onOk={() => setModelOpen(false)}
                onCancel={() => setModelOpen(false)}
            >
                <Form form={form} size="large" layout="vertical" autoComplete="off">
                    <Form.Item className="!mb-3" name="name" label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item className="!mb-3" name="slug" label="Slug" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item className="!mb-3" name="status" label="Status" rules={[{ required: true }]}>
                        <Switch />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default NewsCategory