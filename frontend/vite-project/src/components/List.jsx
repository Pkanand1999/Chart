

function List() {
  return (
    <>
    {/* list  */}
    <div className=" flex justify-around items-center w-full h-[18%] p-2 gap-8">
        <div className="w-[19%] h-full rounded-2xl bg-[#DDEFE0]">
          <div className="w-full flex justify-end pr-4 pt-4 text-xl">
          <i className="fa-solid fa-wallet"></i>
          </div>
          <div className="pl-4">
            <p>Total Revenues</p>
            <p className="text-2xl font-bold">$ 456,436</p>
          </div>
        </div>
        <div className="w-[19%] h-full rounded-2xl bg-[#F4ECDD]">
        <div className="w-full flex justify-end pr-4 pt-4 text-xl">
        <i className="fa-solid fa-tags"></i>
          </div>
          <div className="pl-4">
            <p>Total Transactions</p>
            <p className="text-2xl font-bold">6,436</p>
          </div>
        </div>
        <div className="w-[19%] h-full rounded-2xl bg-[#EFDADA]">
        <div className="w-full flex justify-end pr-4 pt-4 text-xl">
        <i className="fa-regular fa-thumbs-up"></i>
          </div>
          <div className="pl-4">
            <p>Total Likes</p>
            <p className="text-2xl font-bold">56,436</p>
          </div>
        </div>
        <div className="w-[19%] h-full rounded-2xl bg-[#DEE0EF]">
        <div className="w-full flex justify-end pr-4 pt-4 text-xl">
        <i className="fa-solid fa-user-group"></i>
          </div>
          <div className="pl-4">
            <p>Total Users</p>
            <p className="text-2xl font-bold">6,436</p>
          </div>
        </div>
      </div>
      {/* list  */}
    </>
  )
}

export default List