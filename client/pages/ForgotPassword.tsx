import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    console.log("Password reset requested for:", email);
    setSubmitted(true);
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

        {/* Reset Password Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-300 p-8">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Reset Your Password
              </h2>
              <p className="text-gray-600 mb-6">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-11 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-11 bg-primary text-white font-semibold hover:bg-primary/90 transition-all rounded-lg"
                >
                  Send Reset Link
                </Button>
              </form>

              {/* Back to Login */}
              <div className="mt-6">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/90 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Sign In
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Check Your Email
                </h2>
                <p className="text-gray-600 mb-6">
                  We've sent a password reset link to <strong>{email}</strong>. Click
                  the link in your email to reset your password.
                </p>

                <p className="text-sm text-gray-500 mb-6">
                  Didn't receive the email? Check your spam folder or{" "}
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary hover:text-primary/90 font-medium"
                  >
                    try again
                  </button>
                </p>

                {/* Back to Login */}
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/90 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Sign In
                </Link>
              </div>
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
