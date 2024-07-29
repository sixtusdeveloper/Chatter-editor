import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <main className="auth-page py-4 sm:py-8">
        <SignUp />
    </main>
  )
}

export default SignUpPage