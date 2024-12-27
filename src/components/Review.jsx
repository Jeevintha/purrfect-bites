import cat from '/media/cat-face.jpg'

const Review = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 h-[90vh]">
        <div className='text-xl font-bold text-orange-600'>
            <p>Purrfect Bites combines palatbility with nutritional</p>
            <p>excellence, making it an ideal choice for Cat owners.</p>
        </div>
        <div className='w-96 h-60 rounded-full bg-orange-300 flex justify-center items-center'>
            <img src={`${cat}`} alt="cat face" className='  rounded-full w-5/6 '/>
        </div>

    </div>
  )
}

export default Review