import { UserButton, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      {/* Mount the UserButton component for signed-in users */}
      <SignedIn>
        <UserButton />
      </SignedIn>
      
      {/* Redirect signed-out users to the sign-in page */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
