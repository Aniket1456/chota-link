import Layout from "../components/Layout";
import LinkForm from "../components/LinkForm";
import { Zap } from "lucide-react";

const CreateLinkPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Zap size={14} />
            URL Shortener
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
            Shorten your long links <br />
            <span className="text-indigo-600">instantly.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto font-medium">
            Create fast, secure, and customizable short links with built-in analytics and QR code support.
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-indigo-100/50 border border-gray-100">
          <LinkForm />
        </div>
      
      </div>
    </Layout>
  );
};

export default CreateLinkPage;
