import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Settings, 
  Bell, 
  Shield, 
  Heart,
  BookOpen,
  Edit3,
  Save,
  X
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Max',
    lastName: 'Mustermann',
    username: 'maxmustermann',
    email: 'max@beispiel.com',
    bio: 'Tech-Enthusiast und Zukunftsforscher aus Berlin'
  });

  const handleSave = () => {
    // Hier würde die API-Anfrage zum Speichern stehen
    setIsEditing(false);
  };

  const stats = [
    { label: 'Gelesene Artikel', value: '127', icon: BookOpen },
    { label: 'Favoriten', value: '23', icon: Heart },
    { label: 'Kommentare', value: '45', icon: User }
  ];

  const recentActivity = [
    {
      type: 'read',
      title: 'Die Zukunft der KI: Jenseits des maschinellen Lernens',
      date: '2 Stunden',
      category: 'KI'
    },
    {
      type: 'liked',
      title: 'Quantencomputing: Die Barrieren durchbrechen',
      date: '1 Tag',
      category: 'Tech'
    },
    {
      type: 'commented',
      title: 'Nachhaltige Technologie: Grüne Innovation',
      date: '3 Tage',
      category: 'Nachhaltigkeit'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-bold mb-2">
              {formData.firstName} {formData.lastName}
            </h1>
            <p className="text-blue-100 text-lg">@{formData.username}</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Profil-Informationen</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                >
                  {isEditing ? <X className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                  <span>{isEditing ? 'Abbrechen' : 'Bearbeiten'}</span>
                </button>
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vorname
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nachname
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Benutzername
                    </label>
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setFormData({...formData, bio: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    <span>Speichern</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Vorname</label>
                      <p className="text-gray-900 font-medium">{formData.firstName}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Nachname</label>
                      <p className="text-gray-900 font-medium">{formData.lastName}</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-500">Benutzername</label>
                    <p className="text-gray-900 font-medium">@{formData.username}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500">E-Mail</label>
                    <p className="text-gray-900 font-medium">{formData.email}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500">Bio</label>
                    <p className="text-gray-900">{formData.bio}</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Letzte Aktivitäten</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      {activity.type === 'read' && <BookOpen className="w-5 h-5 text-blue-600" />}
                      {activity.type === 'liked' && <Heart className="w-5 h-5 text-red-600" />}
                      {activity.type === 'commented' && <User className="w-5 h-5 text-green-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{activity.category}</span>
                        <span>•</span>
                        <span>vor {activity.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Statistiken</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <stat.icon className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{stat.label}</span>
                    </div>
                    <span className="font-bold text-gray-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Einstellungen</h3>
              <div className="space-y-3">
                <button className="flex items-center space-x-3 w-full text-left p-2 hover:bg-gray-50 rounded-lg">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Benachrichtigungen</span>
                </button>
                <button className="flex items-center space-x-3 w-full text-left p-2 hover:bg-gray-50 rounded-lg">
                  <Shield className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Datenschutz</span>
                </button>
                <button className="flex items-center space-x-3 w-full text-left p-2 hover:bg-gray-50 rounded-lg">
                  <Settings className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Konto-Einstellungen</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;