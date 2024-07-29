import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <main className="auth-page py-6 md:py-14">
        <SignIn />
    </main>
  )
}

export default SignInPage