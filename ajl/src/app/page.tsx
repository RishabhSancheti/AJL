import CategoryList from "@/components/CategoryList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-l text-center">EXPLORE THE COLLECTIONS</h1>
        <CategoryList />
      </div>
    </div>
  )
}

export default HomePage