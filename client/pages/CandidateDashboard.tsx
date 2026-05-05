import { Briefcase, User, MessageSquare, Settings, LogOut, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CandidateDashboard() {
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
              to="/candidate/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium"
            >
              <Briefcase className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              to="/candidate/profile"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <User className="w-5 h-5" />
              Profile
            </Link>
            <Link
              to="/candidate/messages"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Messages
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Candidate Dashboard
            </h1>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl border border-gray-300 p-6">
                <p className="text-gray-600 text-sm mb-2">Applications</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-300 p-6">
                <p className="text-gray-600 text-sm mb-2">Interview Invitations</p>
                <p className="text-3xl font-bold text-primary">3</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-300 p-6">
                <p className="text-gray-600 text-sm mb-2">Profile Views</p>
                <p className="text-3xl font-bold text-gray-900">48</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-300 p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to Your Dashboard
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                This is your candidate dashboard where you can manage your profile,
                view job recommendations, track applications, and communicate with
                recruiters. Continue building this section to add more functionality!
              </p>
              <Link to="/candidate/profile">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Complete Your Profile
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
