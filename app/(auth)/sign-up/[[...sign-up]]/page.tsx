import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <main className="auth-page py-6 sm:py-12">
        <SignUp />
    </main>
  )
}

export default SignUpPage