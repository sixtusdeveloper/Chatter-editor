import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <main className="auth-page py-6 sm:py-12">
        <SignIn />
    </main>
  )
}

export default SignInPage