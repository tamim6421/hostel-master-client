import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { ImSpinner9 } from 'react-icons/im'
import useAuth from '../../hooks/useAuth'
import { getToken, saveUser } from '../../api/utils'
import toast from 'react-hot-toast'

const Login = () => {

const location = useLocation()
  const navigate = useNavigate()
  const {signIn, signInWithGoogle, loading} = useAuth()
const from = location?.state?.from?.pathname || '/'

  const handleSubmit = async event =>{
    event.preventDefault()
    const form = event.target 
    const email = form.email.value 
    const password = form.password.value 

    console.log({ email, password})

   
    try {
    
      // 1. for signIn user 
      const user = await signIn(email, password)
      console.log(user)


      // 2. get token 
      await getToken(user?.user?.email)

      toast.success('Login successful')
      navigate(from, {replace: true})

      
    } catch (error) {
      console.log(error)
      toast.error(error?.message)
    }
   
  }


  // handle google sign in 
  const handleGoogleSignIn =async () =>{
    try {

      // 1. for singUp user with google
      const user = await signInWithGoogle()
      console.log(user)
     

      // 2. save user data to the database 
      const dbResponse = await saveUser(user?.user)
      console.log(dbResponse)


      // 5. get token 
      await getToken(user?.user?.email)

      toast.success('Login successful')
      navigate(from, {replace: true})

      
    } catch (error) {
      console.log(error)
      toast.error(error?.message)
    }
  }



  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl text-orange-400 drop-shadow-lg  font-bold'>Sign In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
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
                autoComplete='current-password'
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
                  {loading ? <ImSpinner9 className='animate-spin m-auto text-white' />: "Sign Up"}
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-blue-500 text-gray-400'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
        onClick={handleGoogleSignIn}
        className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 hover:bg-blue-400 hover:text-white  border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-blue-500 text-gray-600'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login
