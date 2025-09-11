import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Star, ArrowRight, Menu, X, User, LogOut, Search, Filter, MapPin, Clock, DollarSign, GraduationCap, MessageCircle, Heart } from 'lucide-react';

// Types
interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'tutor';
  department?: string;
  year?: number;
  subjects?: string[];
  rating?: number;
  hourlyRate?: number;
  bio?: string;
  avatar?: string;
}

interface Tutor {
  id: string;
  name: string;
  department: string;
  subjects: string[];
  rating: number;
  reviews: number;
  hourlyRate: number;
  experience: string;
  bio: string;
  avatar: string;
  availability: string[];
  location: string;
}

// Sample data
const sampleTutors: Tutor[] = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    department: 'Computer Science & Engineering',
    subjects: ['Data Structures', 'Algorithms', 'Programming'],
    rating: 4.9,
    reviews: 127,
    hourlyRate: 800,
    experience: '3 years',
    bio: 'Final year CSE student with expertise in competitive programming and software development.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    availability: ['Mon 2-6 PM', 'Wed 3-7 PM', 'Fri 1-5 PM'],
    location: 'CUET Campus'
  },
  {
    id: '2',
    name: 'Rafiq Hassan',
    department: 'Electrical & Electronic Engineering',
    subjects: ['Circuit Analysis', 'Electronics', 'Control Systems'],
    rating: 4.8,
    reviews: 89,
    hourlyRate: 750,
    experience: '2 years',
    bio: 'EEE student passionate about electronics and helping others understand complex circuits.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    availability: ['Tue 4-8 PM', 'Thu 2-6 PM', 'Sat 10 AM-2 PM'],
    location: 'CUET Campus'
  },
  {
    id: '3',
    name: 'Fatima Khan',
    department: 'Mathematics',
    subjects: ['Calculus', 'Linear Algebra', 'Statistics'],
    rating: 4.9,
    reviews: 156,
    hourlyRate: 700,
    experience: '4 years',
    bio: 'Mathematics graduate student with a passion for making complex concepts simple.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    availability: ['Mon 10 AM-2 PM', 'Wed 1-5 PM', 'Fri 3-7 PM'],
    location: 'CUET Campus'
  }
];

const departments = [
  'Computer Science & Engineering',
  'Electrical & Electronic Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Economics',
  'English'
];

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'find' | 'become' | 'dashboard'>('find');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [isLoading, setIsLoading] = useState(true);

  // Authentication persistence
  useEffect(() => {
    const savedUser = localStorage.getItem('cuet_tuition_user');
    const loginTime = localStorage.getItem('cuet_tuition_login_time');
    
    if (savedUser && loginTime) {
      const timeDiff = Date.now() - parseInt(loginTime);
      const dayInMs = 24 * 60 * 60 * 1000; // 24 hours
      
      // Keep user logged in for 30 days
      if (timeDiff < 30 * dayInMs) {
        setCurrentUser(JSON.parse(savedUser));
      } else {
        // Session expired, clear storage
        localStorage.removeItem('cuet_tuition_user');
        localStorage.removeItem('cuet_tuition_login_time');
      }
    }
    
    setIsLoading(false);
  }, []);

  const handleLogin = (email: string, password: string, role: 'student' | 'tutor') => {
    // Simulate login - in real app, this would be an API call
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      email,
      role,
      department: role === 'student' ? 'Computer Science & Engineering' : undefined,
      year: role === 'student' ? 3 : undefined,
      subjects: role === 'tutor' ? ['Programming', 'Data Structures'] : undefined,
      rating: role === 'tutor' ? 4.8 : undefined,
      hourlyRate: role === 'tutor' ? 800 : undefined,
      bio: role === 'tutor' ? 'Experienced tutor passionate about teaching.' : undefined
    };
    
    setCurrentUser(user);
    
    // Save to localStorage with timestamp
    localStorage.setItem('cuet_tuition_user', JSON.stringify(user));
    localStorage.setItem('cuet_tuition_login_time', Date.now().toString());
    
    setIsLoginOpen(false);
    setActiveTab(role === 'student' ? 'find' : 'dashboard');
  };

  const handleSignup = (name: string, email: string, password: string, role: 'student' | 'tutor', department?: string, year?: number) => {
    // Simulate signup - in real app, this would be an API call
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role,
      department: role === 'student' ? department : undefined,
      year: role === 'student' ? year : undefined,
      subjects: role === 'tutor' ? [] : undefined,
      rating: role === 'tutor' ? 0 : undefined,
      hourlyRate: role === 'tutor' ? 0 : undefined,
      bio: role === 'tutor' ? '' : undefined
    };
    
    setCurrentUser(user);
    
    // Save to localStorage with timestamp
    localStorage.setItem('cuet_tuition_user', JSON.stringify(user));
    localStorage.setItem('cuet_tuition_login_time', Date.now().toString());
    
    setIsSignupOpen(false);
    setActiveTab(role === 'student' ? 'find' : 'dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('cuet_tuition_user');
    localStorage.removeItem('cuet_tuition_login_time');
    setActiveTab('find');
  };

  const filteredTutors = sampleTutors.filter(tutor => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutor.subjects.some(subject => subject.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDepartment = !selectedDepartment || tutor.department === selectedDepartment;
    const matchesSubject = !selectedSubject || tutor.subjects.includes(selectedSubject);
    const matchesPrice = tutor.hourlyRate >= priceRange[0] && tutor.hourlyRate <= priceRange[1];
    
    return matchesSearch && matchesDepartment && matchesSubject && matchesPrice;
  });

  const allSubjects = Array.from(new Set(sampleTutors.flatMap(tutor => tutor.subjects)));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading CUET Tuition Hub...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CUET Tuition Hub</h1>
                <p className="text-xs text-gray-500">Connect • Learn • Excel</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setActiveTab('find')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'find' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Find Tutors
              </button>
              <button
                onClick={() => setActiveTab('become')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'become' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Become a Tutor
              </button>
              {currentUser && (
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'dashboard' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  Dashboard
                </button>
              )}
            </nav>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              {currentUser ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{currentUser.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Logout"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setIsSignupOpen(true)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setActiveTab('find');
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  activeTab === 'find' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Find Tutors
              </button>
              <button
                onClick={() => {
                  setActiveTab('become');
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  activeTab === 'become' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Become a Tutor
              </button>
              {currentUser && (
                <button
                  onClick={() => {
                    setActiveTab('dashboard');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    activeTab === 'dashboard' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  Dashboard
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'find' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Find Your Perfect Tutor</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with experienced CUET students and alumni who can help you excel in your studies
              </p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search by tutor name or subject..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <button className="lg:w-auto w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Search</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>

                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">All Subjects</option>
                  {allSubjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>

                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="flex-1"
                  />
                  <span className="text-sm text-gray-600">৳{priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Tutors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutors.map((tutor) => (
                <div key={tutor.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={tutor.avatar}
                      alt={tutor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
                      <p className="text-sm text-gray-600">{tutor.department}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{tutor.rating}</span>
                        <span className="text-sm text-gray-500">({tutor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Subjects:</p>
                      <div className="flex flex-wrap gap-1">
                        {tutor.subjects.map((subject, index) => (
                          <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{tutor.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{tutor.experience}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-indigo-600">
                        ৳{tutor.hourlyRate}/hour
                      </div>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>Contact</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredTutors.length === 0 && (
              <div className="text-center py-12">
                <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tutors found</h3>
                <p className="text-gray-600">Try adjusting your search criteria to find more tutors.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'become' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Become a Tutor</h2>
              <p className="text-xl text-gray-600">
                Share your knowledge, help fellow students, and earn money while making a difference
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center space-y-4">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Share Knowledge</h3>
                <p className="text-gray-600">Help fellow CUET students succeed in their academic journey</p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Earn Money</h3>
                <p className="text-gray-600">Set your own rates and work on your own schedule</p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Make Impact</h3>
                <p className="text-gray-600">Build meaningful connections and contribute to the community</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to get started?</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Requirements:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span>Current CUET student or recent graduate</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span>Strong academic performance in your subjects</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span>Passion for teaching and helping others</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span>Good communication skills</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Benefits:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>Flexible scheduling</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>Competitive hourly rates (৳500-2000/hour)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>Build your teaching portfolio</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>Connect with fellow students</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => setIsSignupOpen(true)}
                    className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Join as a Tutor</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dashboard' && currentUser && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Welcome back, {currentUser.name}!</h2>
                <p className="text-gray-600 capitalize">Your {currentUser.role} dashboard</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{currentUser.name}</p>
                    <p className="text-sm text-gray-500">{currentUser.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {currentUser.role === 'student' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <BookOpen className="h-8 w-8 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">My Sessions</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">12</p>
                  <p className="text-sm text-gray-600">Total sessions completed</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Active Tutors</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">3</p>
                  <p className="text-sm text-gray-600">Currently learning from</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="h-8 w-8 text-yellow-500" />
                    <h3 className="text-lg font-semibold text-gray-900">Average Rating</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">4.8</p>
                  <p className="text-sm text-gray-600">From your tutors</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-8 w-8 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Students</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">24</p>
                  <p className="text-sm text-gray-600">Total students taught</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-8 w-8 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">156</p>
                  <p className="text-sm text-gray-600">Total teaching hours</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="h-8 w-8 text-yellow-500" />
                    <h3 className="text-lg font-semibold text-gray-900">Rating</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{currentUser.rating || 4.9}</p>
                  <p className="text-sm text-gray-600">Average from students</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <DollarSign className="h-8 w-8 text-purple-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Earnings</h3>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">৳45,600</p>
                  <p className="text-sm text-gray-600">Total earned</p>
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">New message from Sarah Ahmed</p>
                    <p className="text-sm text-gray-600">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Session completed with Rafiq Hassan</p>
                    <p className="text-sm text-gray-600">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Received 5-star rating</p>
                    <p className="text-sm text-gray-600">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
              <button
                onClick={() => setIsLoginOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              handleLogin(
                formData.get('email') as string,
                formData.get('password') as string,
                formData.get('role') as 'student' | 'tutor'
              );
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your.email@cuet.ac.bd"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">I am a:</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="role" value="student" defaultChecked className="text-indigo-600" />
                    <span>Student</span>
                  </label>
                  <label className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="role" value="tutor" className="text-indigo-600" />
                    <span>Tutor</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={() => {
                    setIsLoginOpen(false);
                    setIsSignupOpen(true);
                  }}
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Join CUET Tuition Hub</h2>
              <button
                onClick={() => setIsSignupOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              handleSignup(
                formData.get('name') as string,
                formData.get('email') as string,
                formData.get('password') as string,
                formData.get('role') as 'student' | 'tutor',
                formData.get('department') as string,
                parseInt(formData.get('year') as string)
              );
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your.email@cuet.ac.bd"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Create a strong password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">I am a:</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="role" value="student" defaultChecked className="text-indigo-600" />
                    <span>Student</span>
                  </label>
                  <label className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="role" value="tutor" className="text-indigo-600" />
                    <span>Tutor</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select
                  name="department"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select your department</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year of Study</label>
                <select
                  name="year"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="5">Graduate</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => {
                    setIsSignupOpen(false);
                    setIsLoginOpen(true);
                  }}
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;