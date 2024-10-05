import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const SignUpForm: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default SignUpForm;
 