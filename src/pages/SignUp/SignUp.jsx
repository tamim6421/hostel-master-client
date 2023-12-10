import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import signUp from '../../assets/register_blue.svg'
import toast from 'react-hot-toast'
import { imageUpload } from '../../api/uploadImage'
import useAuth from '../../hooks/useAuth'
import { getToken, saveUser } from '../../api/utils'

const SignUp = () => {
  const navigate = useNavigate()
  const {createUser, updateUserProfile, signInWithGoogle, loading} = useAuth()



  const handleSubmit = async event =>{


    event.preventDefault()
    const form = event.target 
    const name = form.name.value 
    const email = form.email.value 
    const password = form.password.value 
    const image = form.image.files[0]

    console.log({name, email, password, image})

   
    try {
      // 1. for upload image 
      const imageData = await imageUpload(image)
      // console.log(imageData)


      // 2. for singUp user 
      const user = await createUser(email, password)
      console.log(user)


      // 3. for update profile 
      await updateUserProfile(name, imageData?.data?.display_url)



      // 4. save user data to the database 
      const dbResponse = await saveUser(user?.user)
      console.log(dbResponse)


      // 5. get token 
      await getToken(user?.user?.email)

      toast.success('user created successful')
      navigate('/')

      
    } catch (error) {
      console.log(error)
      toast.error(error?.message)
    }

   



   
  }






  return (

    <div className="hero min-h-screen ">
    <div className="hero-content flex-col lg:flex-row">
      <img src={signUp} className="max-w-sm rounded-lg " />
      <div>
      <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10  text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl text-orange-400 font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to HostelMaster</p>
        </div>
        <form
        onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-blue-500 w-full rounded-md py-3 text-white'
            >
              Continue
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Sign Up with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div className='flex justify-center items-center space-x-2 border btn btn-outline m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p >Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-blue-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
      </div>
    </div>
  </div>

   
  )
}

export default SignUp
