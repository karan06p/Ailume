import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp appearance={{
    elements: {
        footerAction: {
            display: 'none'
        }
    }
  }}/>
}