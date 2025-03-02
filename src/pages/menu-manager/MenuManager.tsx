import React, { useState } from 'react';
import { Checkbox, Drawer, Input, Tree } from 'antd';
import type { TreeDataNode, TreeProps } from 'antd';
import FormItem from 'antd/es/form/FormItem';

const data = [
    {
        "id": 3,
        "name": "Trendgbsdging",
        "slug": "trendgbsdging",
        "position_navbar": null,
        "post_category_id": null,
        "homepage_position": null,
        "created_at": "2025-02-04T08:52:11.000000Z",
        "updated_at": "2025-02-04T08:52:11.000000Z"
    },
    {
        "id": 4,
        "name": "Trendgbsdgin sgsdfgsdfg",
        "slug": "trendgbsdgin-sgsdfgsdfg",
        "position_navbar": null,
        "post_category_id": null,
        "homepage_position": null,
        "created_at": "2025-02-04T08:52:16.000000Z",
        "updated_at": "2025-02-04T08:52:16.000000Z"
    },
    {
        "id": 5,
        "name": "Trendgbsdg ain sgsdfgsdfg",
        "slug": "trendgbsdg-ain-sgsdfgsdfg",
        "position_navbar": null,
        "post_category_id": null,
        "homepage_position": null,
        "created_at": "2025-02-04T08:52:32.000000Z",
        "updated_at": "2025-02-04T08:52:32.000000Z"
    },
    {
        "id": 6,
        "name": "Trend adsf  awdfagbsdg ain sgsdfgsdfg",
        "slug": "trend-adsf-awdfagbsdg-ain-sgsdfgsdfg",
        "position_navbar": null,
        "post_category_id": null,
        "homepage_position": null,
        "created_at": "2025-02-04T08:52:36.000000Z",
        "updated_at": "2025-02-04T08:52:36.000000Z"
    },
    {
        "id": 7,
        "name": "Trend adsf  awdfagbsdg ain sgsdfgsd awfaerf afg",
        "slug": "trend-adsf-awdfagbsdg-ain-sgsdfgsd-awfaerf-afg",
        "position_navbar": null,
        "post_category_id": null,
        "homepage_position": null,
        "created_at": "2025-02-04T08:52:38.000000Z",
        "updated_at": "2025-02-04T08:52:38.000000Z"
    },
    {
        "id": 8,
        "name": "Trend adsf  awd afg",
        "slug": "trend-adsf-awd-afg",
        "position_navbar": null,
        "post_category_id": null,
        "homepage_position": null,
        "created_at": "2025-02-04T08:52:43.000000Z",
        "updated_at": "2025-02-04T08:52:43.000000Z"
    },
    {
        "id": 9,
        "name": "Trend adsf  a casfg awd afg",
        "slug": "trend-adsf-a-casfg-awd-afg",
        "position_navbar": null,
        "post_category_id": null,
        "homepage_position": null,
        "created_at": "2025-02-04T08:52:46.000000Z",
        "updated_at": "2025-02-04T08:52:46.000000Z"
    },
    {
        "id": 10,
        "name": "Trend afg",
        "slug": "trend-afg",
        "position_navbar": null,
        "post_category_id": null,
        "homepage_position": null,
        "created_at": "2025-02-04T08:52:51.000000Z",
        "updated_at": "2025-02-04T08:52:51.000000Z"
    }
]

const defaultValue = data?.map((item) => ({
    key: item?.id,
    title: item?.name,
    children: item?.child_ids?.map((e) => ({
        key: e?.id,
        title: e?.name
    }))
}))

const MenuManager: React.FC = () => {
    const [gData, setGData] = useState(defaultValue);
    const [addMenuDrawer, setAddMenuDrawer] = useState(false);

    const onDrop: TreeProps['onDrop'] = (info) => {
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]); // the drop position relative to the drop node, inside 0, top -1, bottom 1

        const loop = (
            data: TreeDataNode[],
            key: React.Key,
            callback: (node: TreeDataNode, i: number, data: TreeDataNode[]) => void,
        ) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].key === key) {
                    return callback(data[i], i, data);
                }
                if (data[i].children) {
                    loop(data[i].children!, key, callback);
                }
            }
        };
        const data = [...gData];

        // Find dragObject
        let dragObj: TreeDataNode;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
                item.children.unshift(dragObj);
            });
        } else {
            let ar: TreeDataNode[] = [];
            let i: number;
            loop(data, dropKey, (_item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                // Drop on the top of the drop node
                ar.splice(i!, 0, dragObj!);
            } else {
                // Drop on the bottom of the drop node
                ar.splice(i! + 1, 0, dragObj!);
            }
        }
        setGData(data);
    };

    return (
        <div className='space-y-2'>
            <button onClick={() => setAddMenuDrawer(true)} className='bg-spell-purple mb-10'>Add menu</button>

            <h5 className='flex items-center gap-3'>Manage Menu:</h5>

            <Tree
                className="draggable-tree"
                draggable
                blockNode
                defaultExpandAll
                onDrop={onDrop}
                treeData={gData}
            />

            <button className='bg-spell-purple mt-5' onClick={(() => {
                const submitData = gData?.map((item) => ({ parent_id: item?.key, child_ids: item?.children?.map((e) => ({ id: e?.key })) }))
                console.log(submitData);
            })}>Save</button>



            <Drawer title="Add Menu" onClose={() => setAddMenuDrawer(false)} open={addMenuDrawer}>
                <FormItem label={<h5>Menu Name:</h5>} layout='vertical'>
                    <Input size='large' className='py-5' />
                </FormItem>
                <div className='flex flex-col gap-3 items-start'>
                    <h5>Categories:</h5>
                    <Checkbox>Category 1</Checkbox>
                    <Checkbox>Category 2</Checkbox>
                    <Checkbox>Category 3</Checkbox>
                    <Checkbox>Category 4</Checkbox>
                    <Checkbox>Category 5</Checkbox>
                    <Checkbox>Category 6</Checkbox>
                </div>
                <button className='bg-spell-purple mt-5'>Save</button>
            </Drawer>
        </div>
    );
};

export default MenuManager;