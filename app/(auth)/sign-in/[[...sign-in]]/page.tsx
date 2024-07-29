import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <main className="auth-page py-4 sm:py-8">
        <SignIn />
    </main>
  )
}

export default SignInPage