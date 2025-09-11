import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  MessageCircle, 
  Phone, 
  User, 
  BookOpen, 
  Calendar, 
  Filter,
  Plus,
  Home,
  Users,
  Bell,
  Settings,
  Heart,
  ThumbsUp,
  Send,
  X,
  CheckCircle,
  AlertCircle,
  GraduationCap,
  Building
} from 'lucide-react';

// Enhanced demo data based on the screenshots
const demoTuitions = [
  {
    id: 1,
    poster: {
      name: "Bushra Muntaha BM",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      department: "Computer Science & Engineering",
      year: "4th Year",
      rating: 4.8,
      completedTuitions: 15
    },
    title: "Male tutor needed",
    description: "Apatoto #booked",
    studentLevel: "Inter 2nd year",
    location: "Andarkilla",
    preferredTutor: "3rd or 4th year preferable",
    subjects: ["Math", "Physics"],
    salary: "Negotiable",
    additionalInfo: "(Local preferable)",
    timePosted: "11h",
    status: "booked",
    likes: 3,
    comments: 8,
    likedBy: ["Maheea Chowdhury", "8 others"],
    contactInfo: {
      phone: "+880 1712-345678",
      email: "bushra.muntaha@student.cuet.ac.bd"
    }
  },
  {
    id: 2,
    poster: {
      name: "Salsabil Nirjona",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      department: "Electrical & Electronic Engineering",
      year: "3rd Year",
      rating: 4.9,
      completedTuitions: 22
    },
    title: "Female tutor needed",
    description: "Engineering Admission",
    studentLevel: "HSC candidate",
    location: "জামাল খান, লিচুবাগান (সেইন)",
    preferredTutor: "Female tutor preferred",
    subjects: ["Physics", "Chemistry", "Math"],
    salary: "Negotiable",
    additionalInfo: "Weekly 3 days",
    timePosted: "6 September at 17:32",
    status: "available",
    likes: 6,
    comments: 5,
    likedBy: ["Maheea Chowdhury", "5 others"],
    contactInfo: {
      phone: "+880 1812-345679",
      email: "salsabil.nirjona@student.cuet.ac.bd"
    }
  },
  {
    id: 3,
    poster: {
      name: "মো সুহেল আকফজাল",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      department: "Civil Engineering",
      year: "2nd Year",
      rating: 4.6,
      completedTuitions: 8
    },
    title: "Female Tutor Needed",
    description: "Looking for experienced tutor",
    studentLevel: "Class-9",
    location: "Chandgaon Abasik",
    preferredTutor: "Female preferred",
    subjects: ["Physics", "Math", "Chemistry", "Biology"],
    salary: "Negotiable",
    additionalInfo: "Student: 1 (Class-9)",
    timePosted: "28 August at 14:24",
    status: "available",
    likes: 8,
    comments: 7,
    likedBy: ["Chittra Chowdhury", "7 others"],
    contactInfo: {
      phone: "+880 1912-345680",
      email: "suhel.akfzal@student.cuet.ac.bd"
    }
  },
  {
    id: 4,
    poster: {
      name: "Abdullah Zunaid",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      department: "Mechanical Engineering",
      year: "3rd Year",
      rating: 4.7,
      completedTuitions: 12
    },
    title: "Female Tutor Needed",
    description: "#booked",
    studentLevel: "HSC 26 (English Version)",
    location: "South Khulshi (Opposite of Basket)",
    preferredTutor: "Experienced female tutor",
    subjects: ["Math", "Physics"],
    salary: "Negotiable",
    additionalInfo: "Address: South Khulshi (Opposite of Basket)",
    timePosted: "6 September at 12:07",
    status: "booked",
    likes: 3,
    comments: 2,
    likedBy: ["3 people"],
    contactInfo: {
      phone: "+880 1612-345681",
      email: "abdullah.zunaid@student.cuet.ac.bd"
    }
  },
  {
    id: 5,
    poster: {
      name: "Fatima Rahman",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      department: "Architecture",
      year: "4th Year",
      rating: 4.9,
      completedTuitions: 28
    },
    title: "Math & English Tutor Required",
    description: "Looking for dedicated tutor for SSC preparation",
    studentLevel: "SSC candidate",
    location: "Agrabad Commercial Area",
    preferredTutor: "Any experienced tutor",
    subjects: ["Mathematics", "English", "General Science"],
    salary: "8,000-12,000 BDT/month",
    additionalInfo: "5 days a week, 2 hours daily",
    timePosted: "2 days ago",
    status: "available",
    likes: 12,
    comments: 15,
    likedBy: ["Ahmed Hassan", "14 others"],
    contactInfo: {
      phone: "+880 1712-345682",
      email: "fatima.rahman@student.cuet.ac.bd"
    }
  },
  {
    id: 6,
    poster: {
      name: "Mohammad Ali Khan",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      department: "Chemical Engineering",
      year: "3rd Year",
      rating: 4.5,
      completedTuitions: 18
    },
    title: "Chemistry & Physics Tutor Needed",
    description: "University admission preparation required",
    studentLevel: "HSC 2nd year",
    location: "Nasirabad Housing",
    preferredTutor: "Engineering student preferred",
    subjects: ["Chemistry", "Physics", "Higher Math"],
    salary: "Negotiable",
    additionalInfo: "3 days per week, flexible timing",
    timePosted: "1 day ago",
    status: "available",
    likes: 7,
    comments: 9,
    likedBy: ["Sarah Khan", "6 others"],
    contactInfo: {
      phone: "+880 1812-345683",
      email: "mohammad.ali@student.cuet.ac.bd"
    }
  },
  {
    id: 7,
    poster: {
      name: "Rashida Begum",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      department: "Economics",
      year: "2nd Year",
      rating: 4.4,
      completedTuitions: 6
    },
    title: "Primary Level Tutor Required",
    description: "Need caring tutor for young student",
    studentLevel: "Class 5",
    location: "Halishahar Housing Estate",
    preferredTutor: "Female tutor only",
    subjects: ["All subjects", "English", "Math", "Bangla"],
    salary: "5,000-7,000 BDT/month",
    additionalInfo: "Daily 1.5 hours, patient teacher needed",
    timePosted: "3 hours ago",
    status: "available",
    likes: 5,
    comments: 3,
    likedBy: ["Fatima Rahman", "4 others"],
    contactInfo: {
      phone: "+880 1912-345684",
      email: "rashida.begum@student.cuet.ac.bd"
    }
  },
  {
    id: 8,
    poster: {
      name: "Tanvir Ahmed",
      avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      department: "Petroleum & Mining Engineering",
      year: "4th Year",
      rating: 4.8,
      completedTuitions: 25
    },
    title: "Advanced Math Tutor Available",
    description: "Offering tutoring services for HSC students",
    studentLevel: "HSC 1st & 2nd year",
    location: "Chittagong University Area",
    preferredTutor: "I am offering tutoring",
    subjects: ["Higher Mathematics", "Physics", "Chemistry"],
    salary: "10,000-15,000 BDT/month",
    additionalInfo: "Proven track record, flexible schedule",
    timePosted: "5 hours ago",
    status: "offering",
    likes: 18,
    comments: 12,
    likedBy: ["Abdullah Zunaid", "17 others"],
    contactInfo: {
      phone: "+880 1612-345685",
      email: "tanvir.ahmed@student.cuet.ac.bd"
    }
  }
];

const demoUsers = [
  {
    email: "ahmed.hassan@student.cuet.ac.bd",
    password: "demo123",
    name: "Ahmed Hassan",
    department: "Computer Science & Engineering",
    year: "3rd Year",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    email: "fatima.rahman@student.cuet.ac.bd",
    password: "demo123",
    name: "Fatima Rahman",
    department: "Architecture",
    year: "4th Year",
    avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    email: "mohammad.ali@student.cuet.ac.bd",
    password: "demo123",
    name: "Mohammad Ali Khan",
    department: "Chemical Engineering",
    year: "3rd Year",
    avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    email: "sarah.khan@student.cuet.ac.bd",
    password: "demo123",
    name: "Sarah Khan",
    department: "Civil Engineering",
    year: "2nd Year",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedTuition, setSelectedTuition] = useState(null);
  const [activeContactTab, setActiveContactTab] = useState('info');
  const [message, setMessage] = useState('');
  const [showPostModal, setShowPostModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerType, setRegisterType] = useState('tutor');

  // Login function
  const handleLogin = (email, password) => {
    const user = demoUsers.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      setCurrentPage('dashboard');
      return true;
    }
    return false;
  };

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentPage('landing');
  };

  const handleRegister = (formData) => {
    // In a real app, this would make an API call to register the user
    console.log('Registration data:', { ...formData, type: registerType });
    alert(`Registration successful! Welcome to Mentor Wave CUET as a ${registerType}.`);
    setShowRegisterModal(false);
  };

  // Filter tuitions
  const filteredTuitions = demoTuitions.filter(tuition => {
    const matchesSearch = tuition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tuition.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         tuition.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || tuition.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesSubject = !selectedSubject || tuition.subjects.some(subject => subject.toLowerCase().includes(selectedSubject.toLowerCase()));
    const matchesLevel = !selectedLevel || tuition.studentLevel.toLowerCase().includes(selectedLevel.toLowerCase());
    
    return matchesSearch && matchesLocation && matchesSubject && matchesLevel;
  });

  // Contact tutor function
  const handleContactTutor = (tuition) => {
    setSelectedTuition(tuition);
    setShowContactModal(true);
    setActiveContactTab('info');
    setMessage('');
  };

  // Send message function
  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Message sent to ${selectedTuition.poster.name}:\n\n"${message}"`);
      setMessage('');
      setShowContactModal(false);
    }
  };

  // Quick message templates
  const quickMessages = [
    "Hi! I'm interested in this tuition opportunity. Could we discuss the details?",
    "Hello! I have experience teaching these subjects. When can we meet?",
    "I'm available for this tuition. Please let me know your requirements.",
    "Hi! I'd like to know more about the schedule and expectations."
  ];

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Mentor Wave CUET
                </h1>
                <p className="text-xs text-gray-500">Connect • Learn • Excel</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('login')}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setRegisterType('tutor');
                  setShowRegisterModal(true);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Register as Tutor
              </button>
              <button
                onClick={() => {
                  setRegisterType('guardian');
                  setShowRegisterModal(true);
                }}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Register as Guardian
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-green-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building className="w-4 h-4" />
              <span>Chittagong University of Engineering & Technology</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to Mentor Wave CUET
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with experienced tutors, find the perfect learning partner, and excel in your academic journey. Join the premier tutoring community for CUET students and guardians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setRegisterType('tutor');
                  setShowRegisterModal(true);
                }}
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Join as Tutor
              </button>
              <button
                onClick={() => {
                  setRegisterType('guardian');
                  setShowRegisterModal(true);
                }}
                className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Join as Guardian
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CUET Tuition Hub?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built by CUET students, for CUET students. Experience the difference.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verified CUET Students</h3>
              <p className="text-gray-600 leading-relaxed">
                All tutors are verified CUET students with proven academic excellence and teaching experience.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Matching</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced search and filtering to find the perfect tutor match for your specific needs.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect directly with tutors through our secure messaging system and coordinate easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Active Tutors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-blue-100">Students Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Departments</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CUET Tuition Hub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering CUET students through collaborative learning
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 CUET Tuition Hub. Built with ❤️ by CUET students.
            </p>
          </div>
        </div>
      </footer>

      {/* Registration Modal */}
      {showRegisterModal && (
        <RegistrationModal 
          type={registerType}
          onClose={() => setShowRegisterModal(false)} 
          onSubmit={handleRegister} 
        />
      )}
    </div>
  );

  // Login Page Component
  const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (handleLogin(email, password)) {
        setError('');
      } else {
        setError('Invalid email or password');
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Sign in to your CUET Tuition Hub account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CUET Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.name@student.cuet.ac.bd"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-800 font-medium mb-2">Demo Accounts:</p>
              <div className="space-y-1 text-xs text-blue-700">
                <p>📧 ahmed.hassan@student.cuet.ac.bd</p>
                <p>🔑 demo123</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setCurrentPage('landing')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Post Tuition Modal Component
  const PostTuitionModal = () => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      studentLevel: '',
      location: '',
      subjects: [],
      salary: '',
      additionalInfo: '',
      preferredTutor: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Tuition posted successfully!');
      setShowPostModal(false);
      setFormData({
        title: '',
        description: '',
        studentLevel: '',
        location: '',
        subjects: [],
        salary: '',
        additionalInfo: '',
        preferredTutor: ''
      });
    };

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Post New Tuition</h3>
              <button
                onClick={() => setShowPostModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Math & Physics Tutor Needed"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                placeholder="Brief description of requirements..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Level *
                </label>
                <select
                  value={formData.studentLevel}
                  onChange={(e) => setFormData({...formData, studentLevel: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Level</option>
                  <option value="Class 1-5">Class 1-5</option>
                  <option value="Class 6-8">Class 6-8</option>
                  <option value="Class 9-10">Class 9-10</option>
                  <option value="HSC 1st year">HSC 1st year</option>
                  <option value="HSC 2nd year">HSC 2nd year</option>
                  <option value="University Admission">University Admission</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Agrabad, Nasirabad"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subjects *
              </label>
              <input
                type="text"
                value={formData.subjects.join(', ')}
                onChange={(e) => setFormData({...formData, subjects: e.target.value.split(', ').filter(s => s.trim())})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Math, Physics, Chemistry"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Salary
                </label>
                <input
                  type="text"
                  value={formData.salary}
                  onChange={(e) => setFormData({...formData, salary: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 8,000-12,000 BDT/month"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Tutor
                </label>
                <select
                  value={formData.preferredTutor}
                  onChange={(e) => setFormData({...formData, preferredTutor: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">No preference</option>
                  <option value="Male tutor preferred">Male tutor preferred</option>
                  <option value="Female tutor preferred">Female tutor preferred</option>
                  <option value="Engineering student preferred">Engineering student preferred</option>
                  <option value="Senior student preferred">Senior student preferred</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="3"
                placeholder="Schedule, special requirements, etc..."
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setShowPostModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200"
              >
                Post Tuition
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Contact Modal Component
  const ContactModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">Contact Tutor</h3>
            <button
              onClick={() => setShowContactModal(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex space-x-1 mt-4">
            <button
              onClick={() => setActiveContactTab('info')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeContactTab === 'info'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Tutor Info
            </button>
            <button
              onClick={() => setActiveContactTab('message')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeContactTab === 'message'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Send Message
            </button>
          </div>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeContactTab === 'info' && selectedTuition && (
            <div className="space-y-6">
              {/* Tutor Profile */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                <img
                  src={selectedTuition.poster.avatar}
                  alt={selectedTuition.poster.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">{selectedTuition.poster.name}</h4>
                  <p className="text-gray-600">{selectedTuition.poster.department}</p>
                  <p className="text-sm text-gray-500">{selectedTuition.poster.year}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{selectedTuition.poster.rating}</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{selectedTuition.poster.completedTuitions} completed</span>
                  </div>
                </div>
              </div>

              {/* Tuition Details */}
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Tuition Details</h5>
                  <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <div>
                        <span className="font-medium">Subjects:</span>
                        <span className="ml-2 text-gray-700">{selectedTuition.subjects.join(', ')}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-green-600" />
                      <div>
                        <span className="font-medium">Student Level:</span>
                        <span className="ml-2 text-gray-700">{selectedTuition.studentLevel}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-red-600" />
                      <div>
                        <span className="font-medium">Location:</span>
                        <span className="ml-2 text-gray-700">{selectedTuition.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-purple-600" />
                      <div>
                        <span className="font-medium">Salary:</span>
                        <span className="ml-2 text-gray-700">{selectedTuition.salary}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Requirements</h5>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-amber-800">{selectedTuition.preferredTutor}</p>
                    {selectedTuition.additionalInfo && (
                      <p className="text-amber-700 mt-2">{selectedTuition.additionalInfo}</p>
                    )}
                  </div>
                </div>

                {/* Contact Options */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Message</span>
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Call</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeContactTab === 'message' && (
            <div className="space-y-6">
              <div className="text-center">
                <img
                  src={selectedTuition?.poster.avatar}
                  alt={selectedTuition?.poster.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                />
                <h4 className="text-lg font-bold text-gray-900">{selectedTuition?.poster.name}</h4>
                <p className="text-gray-600">{selectedTuition?.poster.department}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="4"
                  placeholder="Type your message here..."
                />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">Quick Templates:</p>
                <div className="space-y-2">
                  {quickMessages.map((template, index) => (
                    <button
                      key={index}
                      onClick={() => setMessage(template)}
                      className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors"
                    >
                      {template}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Tuition Card Component
  const TuitionCard = ({ tuition }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={tuition.poster.avatar}
            alt={tuition.poster.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-gray-900">{tuition.poster.name}</h3>
            <p className="text-sm text-gray-600">{tuition.poster.department}</p>
            <p className="text-xs text-gray-500">{tuition.timePosted}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {tuition.status === 'booked' && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
              #booked
            </span>
          )}
          {tuition.status === 'offering' && (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
              Offering
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3 mb-4">
        <h4 className="text-lg font-bold text-gray-900">{tuition.title}</h4>
        {tuition.description && (
          <p className="text-gray-700">{tuition.description}</p>
        )}
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <GraduationCap className="w-4 h-4" />
            <span>Student: {tuition.studentLevel}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>Location: {tuition.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4" />
            <span>Subjects: {tuition.subjects.join(', ')}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <DollarSign className="w-4 h-4" />
            <span>Salary: {tuition.salary}</span>
          </div>
          {tuition.preferredTutor && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <User className="w-4 h-4" />
              <span>{tuition.preferredTutor}</span>
            </div>
          )}
          {tuition.additionalInfo && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <AlertCircle className="w-4 h-4" />
              <span>{tuition.additionalInfo}</span>
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm">{tuition.likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{tuition.comments}</span>
          </button>
          <span className="text-xs text-gray-500">{tuition.likedBy[0]}</span>
        </div>
        
        {tuition.status !== 'booked' && (
          <button
            onClick={() => handleContactTutor(tuition)}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact</span>
          </button>
        )}
      </div>
    </div>
  );

  // Dashboard Component
  const Dashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CUET Tuition Hub</h1>
                <p className="text-xs text-gray-500">Connect • Learn • Excel</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowPostModal(true)}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Post Tuition</span>
              </button>
              
              <div className="flex items-center space-x-3">
                <img
                  src={currentUser?.avatar}
                  alt={currentUser?.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{currentUser?.name}</p>
                  <p className="text-xs text-gray-500">{currentUser?.department}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Filters</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Search tuitions..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Locations</option>
                    <option value="Agrabad">Agrabad</option>
                    <option value="Nasirabad">Nasirabad</option>
                    <option value="Halishahar">Halishahar</option>
                    <option value="Andarkilla">Andarkilla</option>
                    <option value="Khulshi">Khulshi</option>
                    <option value="Chandgaon">Chandgaon</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Subjects</option>
                    <option value="Math">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Level
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Levels</option>
                    <option value="Class">Primary (Class 1-5)</option>
                    <option value="Class">Secondary (Class 6-10)</option>
                    <option value="HSC">Higher Secondary (HSC)</option>
                    <option value="Admission">University Admission</option>
                  </select>
                </div>

                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Tuitions</h2>
              <p className="text-gray-600">
                {filteredTuitions.length} tuition{filteredTuitions.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="space-y-6">
              {filteredTuitions.map((tuition) => (
                <TuitionCard key={tuition.id} tuition={tuition} />
              ))}
            </div>

            {filteredTuitions.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tuitions found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or post a new tuition request.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modals */}
      {showContactModal && <ContactModal />}
      {showPostModal && <PostTuitionModal />}
    </div>
  );

  // Registration Modal Component
  const RegistrationModal = ({ type, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      department: '',
      studentId: '',
      year: '',
      location: '',
      subjects: '',
      experience: '',
      qualification: '',
      preferredAreas: '',
      childAge: '',
      childClass: '',
      requirements: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      onSubmit(formData);
    };

    const handleChange = (e) => {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Register as {type === 'tutor' ? 'Tutor' : 'Guardian'}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 mt-2">
              {type === 'tutor' 
                ? 'Join as a tutor to share your knowledge and help students excel'
                : 'Register to find the perfect tutor for your child'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="your.email@student.cuet.ac.bd"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Create a strong password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="+880 1XXX-XXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g., Andarkilla, Chittagong"
                />
              </div>
            </div>

            {/* Tutor-specific fields */}
            {type === 'tutor' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select Department</option>
                      <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                      <option value="Electrical & Electronic Engineering">Electrical & Electronic Engineering</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                      <option value="Architecture">Architecture</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Economics">Economics</option>
                      <option value="Business Administration">Business Administration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Student ID *
                    </label>
                    <input
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="e.g., 1904XXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Year *
                    </label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select Year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Teaching Experience
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="e.g., 2 years"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subjects You Can Teach *
                  </label>
                  <input
                    type="text"
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., Mathematics, Physics, Chemistry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Qualifications & Achievements
                  </label>
                  <textarea
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Describe your academic achievements, certifications, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Teaching Areas
                  </label>
                  <input
                    type="text"
                    name="preferredAreas"
                    value={formData.preferredAreas}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., Andarkilla, Khulshi, GEC More"
                  />
                </div>
              </>
            )}

            {/* Guardian-specific fields */}
            {type === 'guardian' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Child's Age
                    </label>
                    <input
                      type="number"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="e.g., 16"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Child's Class/Level *
                    </label>
                    <select
                      name="childClass"
                      value={formData.childClass}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select Class/Level</option>
                      <option value="Class 6">Class 6</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                      <option value="HSC 1st Year">HSC 1st Year</option>
                      <option value="HSC 2nd Year">HSC 2nd Year</option>
                      <option value="University Admission">University Admission</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Required Subjects *
                  </label>
                  <input
                    type="text"
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., Mathematics, Physics, Chemistry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requirements
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Any specific requirements for the tutor (gender preference, experience level, etc.)"
                  />
                </div>
              </>
            )}

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`flex-1 px-4 py-2 text-white rounded-lg transition-colors ${
                  type === 'tutor' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                Register as {type === 'tutor' ? 'Tutor' : 'Guardian'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Main App Render
  if (currentPage === 'landing') {
    return <LandingPage />;
  } else if (currentPage === 'login') {
    return <LoginPage />;
  } else if (currentPage === 'dashboard' && isLoggedIn) {
    return <Dashboard />;
  }

  return <LandingPage />;
}

export default App;