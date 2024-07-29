import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <main className="auth-page py-6 md:py-14">
        <SignUp />
    </main>
  )
}

export default SignUpPage