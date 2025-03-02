/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Modal } from "antd"
import { useState } from "react"
import { IoAdd } from "react-icons/io5"
import MediaManager from "../pages/media-manager/MediaManager"

const MediaSelectOnUpload = ({ setValue, type, selectMultiple }: { selectMultiple?: boolean, setValue?: (e: any) => void, type?: 'Image' | 'Video' }) => {
    const [openMenuSelect, setOpenMenuSelect] = useState(false)

    return (
        <>
            <Button type="primary" onClick={() => setOpenMenuSelect(!openMenuSelect)} icon={<IoAdd />}>
                Upload
            </Button>

            <Modal
                footer={[]}
                className="!w-screen"
                centered
                okText={'Add'}
                open={openMenuSelect}
                onOk={() => setOpenMenuSelect(false)}
                onCancel={() => setOpenMenuSelect(false)}
            >
                <MediaManager type={type}
                    setValue={setValue}
                    selectMultiple={selectMultiple} />
            </Modal>
        </>
    )
}

export default MediaSelectOnUpload