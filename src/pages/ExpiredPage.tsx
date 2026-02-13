import { Link } from "react-router-dom";
import { Clock, ArrowLeft, Home } from "lucide-react";

const ExpiredPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl shadow-orange-100/20 border border-gray-100 text-center">
        <div className="w-20 h-20 bg-orange-50 text-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 rotate-3">
          <Clock size={40} />
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Link Expired</h2>
        <p className="text-gray-500 font-medium mb-8 leading-relaxed">
          This short link has reached its expiration date and is no longer available for redirection.
        </p>
        <div className="flex flex-col gap-3">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition active:scale-[0.98]"
          >
            <Home size={18} />
            Create New Link
          </Link>
          <Link 
            to="/dashboard" 
            className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-200 transition active:scale-[0.98]"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpiredPage;
