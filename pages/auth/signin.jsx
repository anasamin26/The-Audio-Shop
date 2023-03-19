import React, { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";
import Link from "next/link";
const Signin = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  console.log(providers);
  return (
    <>
      {/* <div className="Maincontainer">
        <div className="simple-text-input">Enter your Email</div>
        <input
          type={"email"}
          className="email-input"
          placeholder="abc@example.com"
        />
        <div className="simple-text-input">Enter you password</div>
        <input type={"password"} className="password-input" /> */}
      <div class="signin-container">
        <h1 class="signin-heading">Sign In</h1>
        <div className="signin-form">
          <form>
            <div class="form-group">
              <label class="form-label" for="email">
                Email
              </label>
              <input
                class="form-input"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="password">
                Password
              </label>
              <input
                class="form-input"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <button class="form-btn" type="submit">
              Sign In
            </button>
            <div class="signin-signup-link">
              Don`&apos;`t have an account? <Link href="/signup">Sign Up</Link>
            </div>
          </form>
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="butttn"
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Signin;
// export const getServerSideProps = async () => {
//   const providers = await getProviders();
//   console.log("hi");
//   console.log(providers);
//   return {
//     props: { providers },
//   };
// };
