import Layout from "../components/Layout";
import LinkTable from "../components/LinkTable";
import { useLinks } from "../context/LinkContextShared";
import { BarChart3, MousePointer2, Link2, Calendar } from "lucide-react";

const DashboardPage = () => {
  const { links } = useLinks();

  const totalClicks = links.reduce((acc, link) => acc + link.clicks, 0);
  const activeLinks = links.filter(link => !link.expiryDate || new Date(link.expiryDate) > new Date()).length;
  const expiredLinks = links.length - activeLinks;

  const stats = [
    { label: "Total Links", value: links.length, icon: Link2, color: "bg-indigo-500" },
    { label: "Total Clicks", value: totalClicks, icon: MousePointer2, color: "bg-emerald-500" },
    { label: "Active", value: activeLinks, icon: BarChart3, color: "bg-blue-500" },
    { label: "Expired", value: expiredLinks, icon: Calendar, color: "bg-orange-500" },
  ];

  return (
    <Layout>
      <div className="space-y-10">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Dashboard</h2>
          <p className="text-gray-500 font-medium mt-1">Manage and track your shortened links performance.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">Your Links</h3>
            <span className="text-sm font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
              {links.length} total
            </span>
          </div>
          <LinkTable />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
