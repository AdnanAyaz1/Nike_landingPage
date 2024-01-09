
import { reviews } from '../Constants'
import { star } from '../assets/icons'
const CustomerReviews = () => {
  return (
    <div className='bg-pale-blue py-24 mb-28'>
     <div className='max-container padding-x '>
      <h1 className='text-4xl font-bold font-palanquin text-center'>What Our <span className='text-coral-red'>Customers</span> Say?</h1>
      <p className='info-text text-center mt-4 mb-20 max-w-lg mx-auto'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className='flex flex-col gap-16 lg:flex-row justify-center '>
        {
            reviews.map((rev)=>{
              return <div key={rev.feedback} className='flex flex-col items-center justify-center gap-4 lg:w-1/2'>
                    <img src={rev.imgURL} alt="" className='rounded-full h-[130px] w-[130px]'/>
                    <p className='text-center info-text max-w-md'>{rev.feedback}</p>
                    <div className="flex justify-start items-center gap-2 font-montserrat">
                    <img src={star} alt="" />
                    <p className="text-xl text-slate-gray  ">( 4.5 )</p>
                  </div>
                  <h1 className='text-2xl font-montserrat font-bold'>{rev.customerName}</h1>
              </div>
            })
        }
      </div>
     </div>
    </div>
  )
}

export default CustomerReviews