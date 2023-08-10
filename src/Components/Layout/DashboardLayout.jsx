import DashboardMenu from '../DashboardComponent/DashboardMenu/DashboardMenu'

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex">
        {/* dashboard menu */}
        <div className="w-[20%] min-h-screen sticky top-0 bg-[#212529]">
          <DashboardMenu />
        </div>
        {/* dashboard main section */}
        <div className="h-screen bg-red-400 w-full "></div>
      </div>
    </div>
  )
}

export default DashboardLayout
