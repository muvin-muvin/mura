import { Users, Briefcase, BarChart3, Settings, LogOut, Bell, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-400">
      {/* Navigation */}
      <nav className="bg-gray-300 border-b border-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  {/* Head - Human face shape */}
                  <ellipse cx="12" cy="13" rx="6" ry="7" opacity="0.9"></ellipse>
                  {/* Left binoculars lens */}
                  <circle cx="7.5" cy="11" r="3.2" fill="white" opacity="0.9" stroke="white" strokeWidth="0.8"></circle>
                  <circle cx="7.5" cy="11" r="2" fill="white" opacity="0.4"></circle>
                  {/* Right binoculars lens */}
                  <circle cx="16.5" cy="11" r="3.2" fill="white" opacity="0.9" stroke="white" strokeWidth="0.8"></circle>
                  <circle cx="16.5" cy="11" r="2" fill="white" opacity="0.4"></circle>
                  {/* Bridge */}
                  <rect x="10.5" y="10" width="3" height="2" rx="1" fill="white" opacity="0.8"></rect>
                  {/* Mouth */}
                  <path d="M10 16 Q12 17.5 14 16" stroke="white" strokeWidth="0.8" fill="none" strokeLinecap="round"></path>
                  {/* Nose */}
                  <line x1="12" y1="14" x2="12" y2="15.5" stroke="white" strokeWidth="0.6" opacity="0.7"></line>
                </svg>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">mura</span>
          </Link>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Settings className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar + Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-300 border-r border-gray-500 p-6 min-h-[calc(100vh-64px)]">
          <nav className="space-y-2">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium"
            >
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              to="/admin/users"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Users className="w-5 h-5" />
              Manage Users
            </Link>
            <Link
              to="/admin/jobs"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              Job Listings
            </Link>
            <Link
              to="/admin/security"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Shield className="w-5 h-5" />
              Security
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-300 p-6">
                <p className="text-gray-600 text-sm mb-2">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">15,234</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-300 p-6">
                <p className="text-gray-600 text-sm mb-2">Active Job Postings</p>
                <p className="text-3xl font-bold text-primary">892</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-300 p-6">
                <p className="text-gray-600 text-sm mb-2">Flagged Accounts</p>
                <p className="text-3xl font-bold text-red-500">3</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-300 p-6">
                <p className="text-gray-600 text-sm mb-2">Platform Revenue</p>
                <p className="text-3xl font-bold text-green-600">$45.2K</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-300 p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Admin Control Panel
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Monitor platform activity, manage users and job listings, review
                security alerts, and view platform analytics. Use the sidebar to
                navigate through different admin sections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/admin/users">
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    Manage Users
                  </Button>
                </Link>
                <Link to="/admin/security">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Security Overview
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
