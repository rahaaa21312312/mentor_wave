import React, { useState } from 'react';
import { User, BookOpen, MapPin, Clock, DollarSign, Star, Search, Filter, Plus, Menu, X, Home, Users, Settings, LogOut } from 'lucide-react';

interface Tuition {
  id: string;
  title: string;
  subject: string;
  level: string;
  location: string;
  schedule: string;
  fee: string;
  tutor: {
    name: string;
    department: string;
    year: string;
    rating: number;
    avatar: string;
  };
  description: string;
  requirements: string[];
  postedDate: string;
}

interface TutorProfile {
  id: string;
  name: string;
  email: string;
  department: string;
  year: string;
  avatar: string;
  rating: number;
  totalStudents: number;
  subjects: string[];
  bio: string;
}

const mockTuitions: Tuition[] = [
  {
    id: '1',
    title: 'Advanced Mathematics Tutoring',
    subject: 'Mathematics',
    level: 'HSC',
    location: 'Chittagong',
    schedule: 'Mon, Wed, Fri - 7:00 PM',
    fee: '3000 BDT/month',
    tutor: {
      name: 'Ahmed Hassan',
      department: 'CSE',
      year: '4th Year',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    description: 'Comprehensive mathematics tutoring for HSC students focusing on calculus, algebra, and geometry.',
    requirements: ['HSC level student', 'Basic calculator', 'Notebook'],
    postedDate: '2 days ago'
  },
  {
    id: '2',
    title: 'Physics Problem Solving',
    subject: 'Physics',
    level: 'HSC',
    location: 'Online/Chittagong',
    schedule: 'Tue, Thu, Sat - 6:00 PM',
    fee: '2500 BDT/month',
    tutor: {
      name: 'Fatima Rahman',
      department: 'EEE',
      year: '3rd Year',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b829?w=150&h=150&fit=crop&crop=face'
    },
    description: 'Expert physics tutoring with focus on mechanics, thermodynamics, and electromagnetism.',
    requirements: ['HSC Physics book', 'Graph paper', 'Scientific calculator'],
    postedDate: '1 week ago'
  },
  {
    id: '3',
    title: 'Chemistry Lab Techniques',
    subject: 'Chemistry',
    level: 'HSC',
    location: 'CUET Campus',
    schedule: 'Weekend - 10:00 AM',
    fee: '4000 BDT/month',
    tutor: {
      name: 'Mohammad Ali',
      department: 'ChE',
      year: '4th Year',
      rating: 4.7,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    description: 'Hands-on chemistry tutoring with laboratory techniques and theoretical concepts.',
    requirements: ['Chemistry textbook', 'Lab notebook', 'Safety goggles'],
    postedDate: '3 days ago'
  },
  {
    id: '4',
    title: 'English Literature & Communication',
    subject: 'English',
    level: 'HSC',
    location: 'Online',
    schedule: 'Daily - 8:00 PM',
    fee: '2000 BDT/month',
    tutor: {
      name: 'Sarah Khan',
      department: 'CE',
      year: '2nd Year',
      rating: 4.6,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    description: 'Improve your English skills with literature analysis and communication techniques.',
    requirements: ['English textbook', 'Good internet connection', 'Microphone'],
    postedDate: '5 days ago'
  }
];

const mockUser: TutorProfile = {
  id: '1',
  name: 'Ahmed Hassan',
  email: 'ahmed.hassan@student.cuet.ac.bd',
  department: 'Computer Science & Engineering',
  year: '4th Year',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  rating: 4.8,
  totalStudents: 25,
  subjects: ['Mathematics', 'Programming', 'Data Structures'],
  bio: 'Passionate about teaching and helping fellow students excel in their academic journey.'
};

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'login' | 'register' | 'dashboard' | 'post-tuition' | 'profile'>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<TutorProfile | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Demo login credentials
  const demoCredentials = [
    { email: 'ahmed.hassan@student.cuet.ac.bd', password: 'demo123' },
    { email: 'fatima.rahman@student.cuet.ac.bd', password: 'demo123' },
    { email: 'mohammad.ali@student.cuet.ac.bd', password: 'demo123' },
    { email: 'sarah.khan@student.cuet.ac.bd', password: 'demo123' }
  ];

  const handleLogin = (email: string, password: string) => {
    const validCredential = demoCredentials.find(cred => cred.email === email && cred.password === password);
    if (validCredential) {
      setIsLoggedIn(true);
      setUser(mockUser);
      setCurrentPage('dashboard');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCurrentPage('landing');
  };

  const filteredTuitions = mockTuitions.filter(tuition => {
    const matchesSearch = tuition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tuition.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tuition.tutor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'All' || tuition.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const subjects = ['All', ...Array.from(new Set(mockTuitions.map(t => t.subject)))];

  const renderLanding = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                CUET Tuition Hub
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('login')}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => setCurrentPage('register')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect, Learn, and
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Excel Together</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The premier tutoring platform for CUET students. Find experienced tutors, offer your expertise, 
            and build a thriving academic community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setCurrentPage('register')}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Tutoring
            </button>
            <button
              onClick={() => setCurrentPage('login')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-200"
            >
              Find a Tutor
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Active Tutors</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">1,200+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Subjects Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose CUET Tuition Hub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <User className="h-12 w-12 text-blue-600" />,
                title: "Verified CUET Students",
                description: "All tutors are verified CUET students with proven academic excellence"
              },
              {
                icon: <BookOpen className="h-12 w-12 text-green-600" />,
                title: "Wide Subject Range",
                description: "From basic subjects to advanced engineering topics, we cover it all"
              },
              {
                icon: <MapPin className="h-12 w-12 text-purple-600" />,
                title: "Flexible Locations",
                description: "Choose between online sessions or in-person meetings in Chittagong"
              },
              {
                icon: <DollarSign className="h-12 w-12 text-orange-600" />,
                title: "Affordable Rates",
                description: "Student-friendly pricing that won't break the bank"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderLogin = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center">
            <BookOpen className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-gray-600">Sign in to your CUET Tuition account</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            const success = handleLogin(email, password);
            if (!success) {
              alert('Invalid credentials. Please use demo credentials.');
            }
          }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@student.cuet.ac.bd"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Demo Login Credentials:</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <p><strong>Email:</strong> ahmed.hassan@student.cuet.ac.bd</p>
                <p><strong>Password:</strong> demo123</p>
                <p className="text-xs mt-2">Or use any other demo email with password: demo123</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => setCurrentPage('register')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign up here
              </button>
            </p>
            <button
              onClick={() => setCurrentPage('landing')}
              className="mt-2 text-gray-500 hover:text-gray-700 text-sm"
            >
              ← Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRegister = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="text-center">
            <BookOpen className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Join CUET Tuition Hub</h2>
            <p className="mt-2 text-gray-600">Create your account to start tutoring or learning</p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  required
                  placeholder="Ahmed"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Hassan"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CUET Email</label>
              <input
                type="email"
                required
                placeholder="your.name@student.cuet.ac.bd"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                  <option>CSE</option>
                  <option>EEE</option>
                  <option>CE</option>
                  <option>ME</option>
                  <option>ChE</option>
                  <option>Architecture</option>
                  <option>URP</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                required
                placeholder="Create a strong password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                required
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Create Account
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => setCurrentPage('login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign in here
              </button>
            </p>
            <button
              onClick={() => setCurrentPage('landing')}
              className="mt-2 text-gray-500 hover:text-gray-700 text-sm"
            >
              ← Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                CUET Tuition Hub
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => setCurrentPage('post-tuition')}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 font-medium"
              >
                <Plus className="h-4 w-4" />
                <span>Post Tuition</span>
              </button>
              <button
                onClick={() => setCurrentPage('profile')}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 font-medium"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-600"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => {setCurrentPage('dashboard'); setIsMobileMenuOpen(false);}}
                className="block w-full text-left px-3 py-2 text-blue-600 font-medium"
              >
                Dashboard
              </button>
              <button
                onClick={() => {setCurrentPage('post-tuition'); setIsMobileMenuOpen(false);}}
                className="block w-full text-left px-3 py-2 text-gray-600"
              >
                Post Tuition
              </button>
              <button
                onClick={() => {setCurrentPage('profile'); setIsMobileMenuOpen(false);}}
                className="block w-full text-left px-3 py-2 text-gray-600"
              >
                Profile
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Search and Filters */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tuitions, subjects, or tutors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Available Tuitions</h1>
          <button
            onClick={() => setCurrentPage('post-tuition')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <Plus className="h-5 w-5" />
            <span>Post New Tuition</span>
          </button>
        </div>

        {/* Tuition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTuitions.map((tuition) => (
            <div key={tuition.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{tuition.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {tuition.subject}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{tuition.level}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{tuition.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{tuition.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-semibold text-green-600">
                    <DollarSign className="h-4 w-4" />
                    <span>{tuition.fee}</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{tuition.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={tuition.tutor.avatar}
                      alt={tuition.tutor.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{tuition.tutor.name}</p>
                      <p className="text-xs text-gray-600">{tuition.tutor.department} • {tuition.tutor.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{tuition.tutor.rating}</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium">
                  Contact Tutor
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTuitions.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tuitions found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or post a new tuition.</p>
          </div>
        )}
      </main>
    </div>
  );

  const renderPostTuition = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Same as dashboard */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                CUET Tuition Hub
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 font-medium"
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => setCurrentPage('post-tuition')}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Plus className="h-4 w-4" />
                <span>Post Tuition</span>
              </button>
              <button
                onClick={() => setCurrentPage('profile')}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 font-medium"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a New Tuition</h1>
          <p className="text-gray-600 mb-8">Share your expertise and help fellow students succeed</p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tuition Title</label>
                <input
                  type="text"
                  placeholder="e.g., Advanced Mathematics Tutoring"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>English</option>
                  <option>Programming</option>
                  <option>Engineering</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>HSC</option>
                  <option>SSC</option>
                  <option>University</option>
                  <option>Admission Test</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Online</option>
                  <option>Chittagong</option>
                  <option>CUET Campus</option>
                  <option>Online/Chittagong</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Fee (BDT)</label>
                <input
                  type="number"
                  placeholder="3000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Schedule</label>
              <input
                type="text"
                placeholder="e.g., Mon, Wed, Fri - 7:00 PM"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                rows={4}
                placeholder="Describe your tutoring approach, experience, and what students can expect..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
              <textarea
                rows={3}
                placeholder="List any requirements for students (e.g., textbooks, materials, etc.)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={() => setCurrentPage('dashboard')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Post Tuition
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );

  const renderProfile = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Same as dashboard */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                CUET Tuition Hub
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 font-medium"
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => setCurrentPage('post-tuition')}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 font-medium"
              >
                <Plus className="h-4 w-4" />
                <span>Post Tuition</span>
              </button>
              <button
                onClick={() => setCurrentPage('profile')}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="h-24 w-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
                <p className="text-gray-600">{user?.department}</p>
                <p className="text-sm text-gray-500">{user?.year}</p>
                
                <div className="flex justify-center items-center space-x-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{user?.rating}</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{user?.totalStudents}</div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Subjects</h3>
                <div className="flex flex-wrap gap-2">
                  {user?.subjects.map((subject, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bio</h3>
                <p className="text-gray-600 text-sm">{user?.bio}</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Settings */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="Ahmed"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Hassan"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    rows={4}
                    defaultValue={user?.bio}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjects You Teach</label>
                  <input
                    type="text"
                    defaultValue={user?.subjects.join(', ')}
                    placeholder="Mathematics, Physics, Programming..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  return (
    <div className="App">
      {!isLoggedIn && currentPage === 'landing' && renderLanding()}
      {!isLoggedIn && currentPage === 'login' && renderLogin()}
      {!isLoggedIn && currentPage === 'register' && renderRegister()}
      {isLoggedIn && currentPage === 'dashboard' && renderDashboard()}
      {isLoggedIn && currentPage === 'post-tuition' && renderPostTuition()}
      {isLoggedIn && currentPage === 'profile' && renderProfile()}
    </div>
  );
}

export default App;