import React from 'react';
import googleLogo from '../assets/Google Logo.svg';
import logo from '../assets/logo.svg';
import FormInput from './FormInput';
import CheckboxInput from './CheckboxInput';
import AppStoreButtons from './AppStoreButtons';
import Button from './Button';

const MainContent: React.FC = () => {
  return (
    <main className="pt-[5.2vh] pl-[5.2vw]">
      {/* Logo */}
      <div className="flex items-center gap-2.5 text-heading-color text-center">
        <img alt="Logo" src={logo} className="w-[3.06vw] h-[6.25vh]" />
        <p className=" text-lg leading-[1.35rem] font-semibold tracking-tight">Capzul</p>
      </div>

      {/* Heading */}
      <div className="mt-[4.8vh] grid gap-2 text-heading-color w-[15.15vw]">
        <h1 className="text-2xl font-semibold leading-8 tracking-tight">Create account</h1>
        <p className="text-sm font-normal tracking-tight text-text-color">
          For business, band or celebrity.
        </p>
      </div>

      {/* Form */}
      <form className="mt-[4.81vh] grid gap-[2.08vh] w-[41.87vw] text-sm leading-[1.225rem] tracking-tight text-text-color">
        <div className="flex justify-between">
          <FormInput label="First name" type="text" />
          <FormInput label="Last name" type="text" />
        </div>
        <div className="flex justify-between">
          <FormInput label="Email or phone number" type="text" />
          <FormInput label="Date of birth (MM/DD/YY)" type="date" />
        </div>
        <div className="flex justify-between">
          <FormInput label="Password" type="password" />
          <FormInput label="Confirm Password" type="password" />
        </div>
        <div className="flex justify-between">


        {/* Checkbox Fields */}
        <div className="grid gap-[2.08vh]">
          <CheckboxInput label="Remember me" />
          <CheckboxInput
            label={
              <>
                I agree to all the{' '}
                <a href="#" className="text-form-link-color">Terms</a> and{' '}
                <a href="#" className="text-form-link-color">Privacy Policy</a>.
              </>
            }
          />
            </div>
            <a href="#" className="text-form-link-color underline">Forgot Password?</a>
        </div>

        <div className="flex justify-between">
        {/* Submit Button */}
        <Button type="button" label="Create Account" customStyles="bg-form-link-color" />

        {/* Google Button */}
        <Button
          type="button"
          label="Sign Up with Google"
          customStyles="bg-text-color flex items-center justify-center gap-3"
          icon={googleLogo} // Google logo icon
        />
        </div>
      </form>

      {/* Login Link */}
      <div className="mt-[3.125vh] text-sm leading-[1.225rem] tracking-tight text-text-color text-center">
        Don't have an account? {' '}
        <a href="#" className="text-form-link-color">Log in</a>
      </div>

      {/* App Store Buttons */}
      <AppStoreButtons />
    </main>
  );
};

export default MainContent;
