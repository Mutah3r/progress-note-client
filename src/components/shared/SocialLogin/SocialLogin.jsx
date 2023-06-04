const SocialLogin = () => {
    return (
        <div className="mt-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-100 text-gray-500">Or continue with</span>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                    <button
                        className="w-full flex items-center justify-center px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg" />
                    </button>
                </div>
                <div>
                    <button
                        className="w-full flex items-center justify-center px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg" />
                    </button>
                </div>
                <div>
                    <button
                        className="w-full flex items-center justify-center px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;