import React from 'react';

export default function AiHelperModal({ title, content, isLoading, onClose }) {
    if (!title) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                <div className="p-4 border-b flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
                </div>
                <div className="p-6 overflow-y-auto">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center h-48">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
                            <p className="mt-4 text-gray-600">✨ Our AI is thinking...</p>
                        </div>
                    ) : (
                        <p className="text-gray-700 whitespace-pre-wrap">{content}</p>
                    )}
                </div>
                 <div className="p-4 border-t text-right">
                    <button onClick={onClose} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">Close</button>
                </div>
            </div>
        </div>
    );
};