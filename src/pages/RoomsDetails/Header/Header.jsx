import Heading from './../../../components/Shared/Heading';


const Header = ({ room}) => {
    return (
      <>
        <Heading title={room.title} subtitle={room.location} />
        <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
          <img
            className='object-cover w-full mt-5'
            src={room.image}
            alt='header image'
          />
        </div>
      </>
    )
  }
  
  export default Header