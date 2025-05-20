import React from "react";

const page = () => {
  return (
    <main>
      <section className="py-16 h-screen">
        <form className=" py-8 px-6 mx-auto max-w-2xl space-y-6 flex flex-col items-center justify-center shadow-2xl">
          <h1 className="font-bold text-2xl text-center">
            Login to your account
          </h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="bg-white w-full rounded-lg p-2 border border-green-200"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="bg-white w-full rounded-lg p-2 border border-green-200"
          />
          <div className="flex flex-row items-center justify-between md:flex-row gap-2">
            <button type="submit" className="bg-green-600 px-10 p-2 rounded-lg text-white cursor-pointer">Login</button>
            <button type="submit" className="bg-green-600 px-10 p-2 rounded-lg text-white cursor-pointer">Signup</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default page;
