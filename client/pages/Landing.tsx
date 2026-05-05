import { Link } from "react-router-dom";
import {
  Briefcase,
  Users,
  Zap,
  TrendingUp,
  Shield,
  ArrowRight,
  Star,
  CheckCircle2,
  BarChart3,
  MessageSquare,
  Target,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
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
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:inline">
              mura
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-gray-700 font-medium hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link to="/register">
              <Button className="bg-primary text-white hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            <Zap className="w-4 h-4" />
            The Future of Talent Matching
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Professional Match
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            mura connects talented job seekers with recruiters through
            intelligent skill analysis. Discover opportunities that align with your
            expertise and grow your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button className="h-12 px-8 text-base bg-primary text-white hover:bg-primary/90 rounded-lg">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="h-12 px-8 text-base rounded-lg border-gray-300"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              50K+
            </div>
            <p className="text-gray-600 text-sm">Active Candidates</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              10K+
            </div>
            <p className="text-gray-600 text-sm">Job Postings</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              95%
            </div>
            <p className="text-gray-600 text-sm">Success Rate</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to find the right opportunity or the perfect candidate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Cards */}
          {[
            {
              icon: Target,
              title: "Smart Matching",
              description:
                "AI-powered algorithms match candidates with opportunities based on skills and experience",
            },
            {
              icon: Zap,
              title: "Quick Applications",
              description: "Apply to jobs in seconds with one-click profile matching",
            },
            {
              icon: MessageSquare,
              title: "Direct Communication",
              description:
                "Connect directly with recruiters and discuss opportunities in real-time",
            },
            {
              icon: BarChart3,
              title: "Analytics & Insights",
              description:
                "Track application progress and gain insights into your career growth",
            },
            {
              icon: Award,
              title: "Skill Verification",
              description:
                "Showcase verified skills and certifications to stand out to employers",
            },
            {
              icon: Shield,
              title: "Secure & Private",
              description:
                "Your data is protected with enterprise-grade security standards",
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-300 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* For Candidates Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-300">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
              <Briefcase className="w-4 h-4" />
              For Job Seekers
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Next Opportunity Awaits
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Discover jobs perfectly matched to your skills and career goals. Build
              your professional profile, showcase your expertise, and land your dream
              role.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Create a comprehensive skill-based profile",
                "Get intelligent job recommendations",
                "Track application status in real-time",
                "Connect with top companies",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/register">
              <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8">
                Find Jobs <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <Briefcase className="w-24 h-24 text-primary mx-auto mb-4 opacity-50" />
              <p className="text-gray-600">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Recruiters Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <Users className="w-24 h-24 text-secondary mx-auto mb-4 opacity-50" />
              <p className="text-gray-600">Recruiter Dashboard Preview</p>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-4">
              <Users className="w-4 h-4" />
              For Recruiters
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Build Your Dream Team
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Find and hire the best talent efficiently. Post jobs, review candidates,
              and manage your hiring pipeline with powerful tools.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Post jobs and get matched with qualified candidates",
                "Advanced filtering and candidate search",
                "Streamlined application tracking",
                "Interview scheduling and collaboration",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/register">
              <Button className="bg-secondary text-white hover:bg-secondary/90 h-12 px-8">
                Post a Job <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-300">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Loved by Users
          </h2>
          <p className="text-xl text-gray-600">
            See what professionals are saying about mura
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Johnson",
              role: "Software Engineer",
              text: "mura helped me find the perfect job that matched my exact skill set. The process was seamless!",
            },
            {
              name: "Michael Chen",
              role: "Hiring Manager",
              text: "We found top talent 3x faster using mura. The matching algorithm is incredibly accurate.",
            },
            {
              name: "Emma Rodriguez",
              role: "Product Manager",
              text: "Best platform for connecting with the right opportunities. Highly recommend!",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have found success on mura
          </p>
          <Link to="/register">
            <Button className="bg-white text-primary hover:bg-gray-100 h-12 px-8 text-base font-semibold">
              Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
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
                <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">mura</span>
              </div>
              <p className="text-sm text-gray-600">
                Intelligent skill-based talent matching platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">For Candidates</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                    Find Jobs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                    Build Profile
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">For Recruiters</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                    Post Jobs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                    Browse Talent
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 mura. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link to="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
