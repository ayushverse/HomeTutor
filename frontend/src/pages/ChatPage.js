import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MessageCircle } from 'lucide-react';

const ChatPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
                <div className="container-custom py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/dashboard" className="flex items-center space-x-2">
                            <BookOpen className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">HomeTutor</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="container-custom py-12">
                <div className="card text-center max-w-2xl mx-auto">
                    <MessageCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Chat & Messaging
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Real-time chat functionality with Socket.io will be available here. You'll be able to message teachers, make audio calls, and see online status.
                    </p>
                    <Link to="/dashboard" className="btn btn-primary">
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
