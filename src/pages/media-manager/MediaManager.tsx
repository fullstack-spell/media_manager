/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Select } from "antd"
import Search from "antd/es/input/Search"
import { useState } from "react"
import { CiGrid41 } from "react-icons/ci"
import { FaCheckCircle } from "react-icons/fa"
import { IoIosList } from "react-icons/io"

const MediaManager = ({ type, setValue, selectMultiple }: { selectMultiple?: boolean, setValue?: (e: any) => void, type?: 'Image' | 'Video' }) => {

    const [selectImage, setSelectImage] = useState<any>(selectMultiple ? [] : '')

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <h3>Media Manager</h3>
                <button className="bg-spell-purple">Add Media</button>
            </div>
            <div className="flex flex-col gap-2  border-2 border-spell-purple p-5 rounded-lg">
                <div className="flex items-center gap-3">
                    <CiGrid41 size={30} />
                    <IoIosList size={30} />
                    <Select size="large" className="!w-[150px]" options={[{ label: 'Image', value: 'Image' }, { label: 'Video', value: 'Video' }]} value={type ? type : 'Image'} />
                    <DatePicker size="large" className="!w-[200px]" />
                    <div className="flex-1 flex justify-end">
                        <Search size="large" className="max-w-[500px] w-full" placeholder="search by name" />
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                    <div className={`${selectImage?.includes('https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg') ? 'border-spell-purple' : ''} cursor-pointer border-2 relative size-[150px]`}>
                        <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill h-full h-full" onClick={() => {
                            if (selectImage?.includes('https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg')) {
                                if (selectMultiple) {

                                    setSelectImage((prev: [string]) => prev?.filter(e => e !== 'https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg'))
                                } else {
                                    setSelectImage('')
                                }
                            } else if (selectMultiple) {
                                setSelectImage((prev: [string]) => [...prev, 'https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg'])
                            } else {
                                setSelectImage('https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg')
                            }
                        }} />
                        {selectImage?.includes('https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg') && <FaCheckCircle className='text-spell-purple absolute bg-white -top-2 -left-2 text-xl' />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaManager