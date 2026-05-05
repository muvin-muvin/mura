import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type UserRole = "candidate" | "recruiter" | null;

export default function Register() {
  const [step, setStep] = useState<1 | 2>(1);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // TODO: Implement actual registration
    console.log("Register attempt", { userRole, ...formData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-400 via-gray-350 to-gray-400">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  {/* Head - Human face shape */}
                  <ellipse cx="12" cy="13" rx="7" ry="8" opacity="0.9"></ellipse>
                  {/* Left binoculars lens */}
                  <circle cx="7" cy="11" r="4" fill="white" opacity="0.9" stroke="white" strokeWidth="1"></circle>
                  <circle cx="7" cy="11" r="2.3" fill="white" opacity="0.4"></circle>
                  {/* Right binoculars lens */}
                  <circle cx="17" cy="11" r="4" fill="white" opacity="0.9" stroke="white" strokeWidth="1"></circle>
                  <circle cx="17" cy="11" r="2.3" fill="white" opacity="0.4"></circle>
                  {/* Bridge */}
                  <rect x="10.5" y="9.5" width="3" height="2.5" rx="1.2" fill="white" opacity="0.8"></rect>
                  {/* Mouth */}
                  <path d="M10 16 Q12 18 14 16" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round"></path>
                  {/* Nose */}
                  <line x1="12" y1="13.5" x2="12" y2="15.5" stroke="white" strokeWidth="0.8" opacity="0.7"></line>
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">mura</h1>
          <p className="text-gray-600">Intelligent Skill-Based Talent Matching</p>
        </div>

        {/* Registration Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-300 p-8">
          {step === 1 ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Join mura</h2>
              <p className="text-gray-600 mb-6">Select your role to get started</p>

              {/* Role Selection */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleRoleSelect("candidate")}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    userRole === "candidate"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        userRole === "candidate"
                          ? "border-primary bg-primary"
                          : "border-gray-300"
                      }`}
                    >
                      {userRole === "candidate" && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Job Seeker</div>
                      <p className="text-sm text-gray-600">
                        Find your perfect job match
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleRoleSelect("recruiter")}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    userRole === "recruiter"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        userRole === "recruiter"
                          ? "border-primary bg-primary"
                          : "border-gray-300"
                      }`}
                    >
                      {userRole === "recruiter" && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Recruiter</div>
                      <p className="text-sm text-gray-600">
                        Find talented candidates
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {/* Next Button */}
              <Button
                onClick={() => userRole && setStep(2)}
                disabled={!userRole}
                className="w-full h-11 bg-primary text-white font-semibold hover:bg-primary/90 transition-all rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </Button>

              {/* Sign In Link */}
              <p className="text-center mt-6 text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-primary hover:text-primary/90 transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-6">
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ←
                </button>
                <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="pl-10 h-11 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 h-11 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 h-11 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 h-11 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>

                {/* Terms */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    required
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the Terms of Service and Privacy Policy
                  </span>
                </label>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-11 bg-primary text-white font-semibold hover:bg-primary/90 transition-all rounded-lg"
                >
                  Create Account
                </Button>
              </form>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            <Link to="#" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            {" • "}
            <Link to="#" className="hover:text-gray-700 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
