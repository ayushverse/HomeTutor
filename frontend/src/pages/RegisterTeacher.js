import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const RegisterTeacher = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center space-x-2">
                        <BookOpen className="w-10 h-10 text-primary" />
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">HomeTutor</span>
                    </Link>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Register as a Teacher
                    </p>
                </div>

                <div className="card text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Teacher Registration
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        This page is under construction. Teacher registration with qualification upload, video recording, and availability scheduling will be available soon.
                    </p>
                    <Link to="/login" className="btn btn-primary">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterTeacher;
