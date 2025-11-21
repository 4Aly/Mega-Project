import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCog, FaBars, FaHome } from "react-icons/fa";
import { MdLogout, MdBrightness4, MdNotifications, MdLock, MdLanguage } from "react-icons/md";

const Settings = () => {
  const [settings, setSettings] = useState({
    // Application Preferences
    darkMode: false,
    startupOption: "last",
    defaultView: "trips",

    // Notification Options
    emailNotifications: true,
    inAppNotifications: true,
    soundAlerts: false,

    // Privacy Settings
    shareAnonymousData: false,
    profileVisibility: true,

    // Language & Region
    language: "English",
    dateTimeFormat: "MM/DD/YYYY HH:MM",
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = (field: keyof typeof settings) => {
    setSettings({ ...settings, [field]: !settings[field] });
  };

  const handleSelectChange = (
    field: keyof typeof settings,
    value: string
  ) => {
    setSettings({ ...settings, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Title */}
      <div className="bg-white border-b px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars className="text-xl" />
          </button>
          <h1 className="text-lg sm:text-xl font-normal text-gray-700">Settings</h1>
        </div>
        <div className="avatar">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <div className="flex relative">
        {/* Sidebar - Mobile Drawer */}
        <div
          className={`fixed lg:relative inset-y-0 left-0 z-50 w-64 lg:w-48 bg-white border-r transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="py-6">
            <div className="lg:hidden px-6 pb-4 border-b">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕ Close
              </button>
            </div>
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 text-gray-700"
            >
              <FaHome className="text-sm" />
              <span className="text-sm font-medium">Home</span>
            </Link>
            <Link
              to="/profile"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 text-gray-700"
            >
              <FaUser className="text-sm" />
              <span className="text-sm font-medium">User Profile</span>
            </Link>
            <Link
              to="/settings"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-6 py-3 bg-gray-100 border-r-2 border-orange-500 text-gray-900"
            >
              <FaCog className="text-sm" />
              <span className="text-sm font-medium">Settings</span>
            </Link>
          </div>

          {/* Logout at bottom */}
          <div className="absolute bottom-8 left-0 w-full px-6">
            <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <MdLogout className="text-base" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Settings Card */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">Settings</h2>
                <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
                  Manage your application preferences, notifications, privacy, and
                  language settings.
                </p>

                {/* Application Preferences */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-sm sm:text-base font-semibold mb-1">
                    Application Preferences
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 sm:mb-6">
                    Configure default application settings and behavior.
                  </p>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start gap-3">
                      <MdBrightness4 className="text-gray-400 mt-1 flex-shrink-0" />
                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">Dark Mode</div>
                          <div className="text-xs text-gray-500 mt-1">
                            Toggle between light and dark themes for the application
                            interface
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          className="toggle toggle-sm border-1 border-orange-200 bg-gray-300 checked:bg-orange-500 hover:bg-gray-400"
                          checked={settings.darkMode}
                          onChange={() => handleToggle("darkMode")}
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 mt-1 flex-shrink-0"></div>
                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">Startup Option</div>
                          <div className="text-xs text-gray-500 mt-1">
                            Choose what the app does when it starts up
                          </div>
                        </div>
                        <select
                          className="select select-bordered select-sm w-full sm:w-48"
                          value={settings.startupOption}
                          onChange={(e) =>
                            handleSelectChange("startupOption", e.target.value)
                          }
                        >
                          <option value="last">Open last trip</option>
                          <option value="home">Home page</option>
                          <option value="new">New trip</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 mt-1 flex-shrink-0"></div>
                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">Default Home View</div>
                          <div className="text-xs text-gray-500 mt-1">
                            Set your preferred starting view after login
                          </div>
                        </div>
                        <select
                          className="select select-bordered select-sm w-full sm:w-48"
                          value={settings.defaultView}
                          onChange={(e) =>
                            handleSelectChange("defaultView", e.target.value)
                          }
                        >
                          <option value="trips">Current Trips</option>
                          <option value="saved">Saved Places</option>
                          <option value="explore">Explore</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horizontal Divider */}
                <div className="border-t my-6 sm:my-8"></div>

                {/* Notification Options */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-sm sm:text-base font-semibold mb-1">
                    Notification Options
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 sm:mb-6">
                    Control how you receive alerts and updates.
                  </p>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            Email Notifications
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Receive content and alerts via email
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          className="toggle toggle-sm border-1 border-orange-200 bg-gray-300 checked:bg-orange-500 hover:bg-gray-400"
                          checked={settings.emailNotifications}
                          onChange={() => handleToggle("emailNotifications")}
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MdNotifications className="text-gray-400 mt-1 flex-shrink-0" />
                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            In-App Notifications
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Display real-time alerts within the application
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          className="toggle toggle-sm border-1 border-orange-200 bg-gray-300 checked:bg-orange-500 hover:bg-gray-400"
                          checked={settings.inAppNotifications}
                          onChange={() => handleToggle("inAppNotifications")}
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 mt-1 flex-shrink-0"></div>
                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">Sound Alerts</div>
                          <div className="text-xs text-gray-500 mt-1">
                            Play a sound when a new notification arrives
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          className="toggle toggle-sm border-1 border-orange-200 bg-gray-300 checked:bg-orange-500 hover:bg-gray-400"
                          checked={settings.soundAlerts}
                          onChange={() => handleToggle("soundAlerts")}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horizontal Divider */}
                <div className="border-t my-6 sm:my-8"></div>

                {/* Privacy Settings */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-sm sm:text-base font-semibold mb-1">Privacy Settings</h3>
                  <p className="text-xs text-gray-500 mb-4 sm:mb-6">
                    Manage your data sharing and security features.
                  </p>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            Share Anonymous Data
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Help improve Mini Trip Planner by sharing anonymous usage data
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          className="toggle toggle-sm border-1 border-orange-200 bg-gray-300 checked:bg-orange-500 hover:bg-gray-400"
                          checked={settings.shareAnonymousData}
                          onChange={() => handleToggle("shareAnonymousData")}
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 mt-1 flex-shrink-0"></div>
                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            Profile Visibility
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Control who can view your profile within the app's
                            community
                          </div>
                        </div>
                        <input
                          type="checkbox"
                          className="toggle toggle-sm border-1 border-orange-200 bg-gray-300 checked:bg-orange-500 hover:bg-gray-400"
                          checked={settings.profileVisibility}
                          onChange={() => handleToggle("profileVisibility")}
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MdLock className="text-gray-400 mt-1 flex-shrink-0" />
                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            Two-Factor Authentication (2FA)
                          </div>
                        </div>
                        <button className="text-sm text-orange-500 hover:underline self-start">
                          Manage 2FA
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horizontal Divider */}
                <div className="border-t my-6 sm:my-8"></div>

                {/* Language & Region */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-sm sm:text-base font-semibold mb-1">Language & Region</h3>
                  <p className="text-xs text-gray-500 mb-4 sm:mb-6">
                    Select your preferred language and regional formats.
                  </p>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start gap-3">
                      <MdLanguage className="text-gray-400 mt-1 flex-shrink-0" />
                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            Application Language
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Change the language used throughout the application
                            interface
                          </div>
                        </div>
                        <select
                          className="select select-bordered select-sm w-full sm:w-48"
                          value={settings.language}
                          onChange={(e) =>
                            handleSelectChange("language", e.target.value)
                          }
                        >
                          <option value="English">English</option>
                          <option value="Arabic">Arabic</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 mt-1 flex-shrink-0"></div>
                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            Date & Time Format
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Set your preferred display format for dates and times
                          </div>
                        </div>
                        <select
                          className="select select-bordered select-sm w-full sm:w-48"
                          value={settings.dateTimeFormat}
                          onChange={(e) =>
                            handleSelectChange("dateTimeFormat", e.target.value)
                          }
                        >
                          <option value="MM/DD/YYYY HH:MM">MM/DD/YYYY HH:MM</option>
                          <option value="DD/MM/YYYY HH:MM">DD/MM/YYYY HH:MM</option>
                          <option value="YYYY-MM-DD HH:MM">YYYY-MM-DD HH:MM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center text-xs text-gray-500 mt-6 sm:mt-8 pt-6 border-t">
                  © 2025 Mini Trip Planner. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
