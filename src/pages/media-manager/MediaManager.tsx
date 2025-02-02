import { DatePicker, Select } from "antd"
import Search from "antd/es/input/Search"
import { CiGrid41 } from "react-icons/ci"
import { IoIosList } from "react-icons/io"

const MediaManager = () => {
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
                    <Select size="large" className="!w-[150px]" options={[{ label: 'Image', value: 'Image' }]} value={'image'} />
                    <DatePicker size="large" className="!w-[150px]" />
                    <button className="bg-spell-yellow">Bulk Select</button>
                    <div className="flex-1 flex justify-end">
                        <Search size="large" className="max-w-[500px] w-full" placeholder="search by name" />
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                    <img src='https://i.ytimg.com/vi/ab4-Q5MMss8/maxresdefault.jpg' alt="image" className="object-fill border size-[150px]" />
                </div>
            </div>
        </div>
    )
}

export default MediaManager