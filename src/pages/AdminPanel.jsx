import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLock,
  FaUnlock,
  FaPalette,
  FaBell,
  FaTools,
  FaTrash,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPanel = () => {
  const navigate = useNavigate();

  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockoutTime, setLockoutTime] = useState(null);

  // Admin features
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "default"
  );
  const [updateText, setUpdateText] = useState("");
  const [updateDays, setUpdateDays] = useState(1);
  const [updates, setUpdates] = useState(
    JSON.parse(localStorage.getItem("updates")) || []
  );
  const [maintenanceMode, setMaintenanceMode] = useState(
    JSON.parse(localStorage.getItem("maintenance")) || false
  );
  const [activeTab, setActiveTab] = useState("updates");
  const [editUpdateId, setEditUpdateId] = useState(null);
  const [editUpdateText, setEditUpdateText] = useState("");

  // Cleanup expired updates on load
  useEffect(() => {
    const now = Date.now();
    const filtered = updates.filter((u) => now < u.expiry);
    if (filtered.length !== updates.length) {
      setUpdates(filtered);
      localStorage.setItem("updates", JSON.stringify(filtered));
    }
  }, []);

  // Check for lockout
  useEffect(() => {
    if (lockoutTime) {
      const timer = setInterval(() => {
        if (Date.now() > lockoutTime) {
          setLockoutTime(null);
          setLoginAttempts(0);
          clearInterval(timer);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [lockoutTime]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Check lockout
    if (lockoutTime) {
      toast.error(
        `Account locked. Try again in ${Math.ceil(
          (lockoutTime - Date.now()) / 1000
        )} seconds.`
      );
      setIsLoading(false);
      return;
    }

    // Only password check
    if (password === "admin123") {
      setIsLoggedIn(true);
      setLoginAttempts(0);
      toast.success("Login successful!");
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);

      if (newAttempts >= 3) {
        setLockoutTime(Date.now() + 30000); // 30 second lockout
        toast.error("Too many attempts. Account locked for 30 seconds.");
      } else {
        toast.error("Incorrect password");
      }
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword("");
    toast.info("Logged out successfully");
    navigate("/");
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    toast.success(`Theme changed to ${newTheme}`);
  };

  const handleAddUpdate = () => {
    if (!updateText.trim()) {
      toast.error("Update text cannot be empty");
      return;
    }

    const expiry = Date.now() + updateDays * 24 * 60 * 60 * 1000;
    const newUpdate = {
      id: Date.now(),
      text: updateText,
      expiry,
      date: new Date().toISOString(),
    };

    const newUpdates = [...updates, newUpdate];
    setUpdates(newUpdates);
    localStorage.setItem("updates", JSON.stringify(newUpdates));
    setUpdateText("");
    setUpdateDays(1);
    toast.success("Update added successfully!");
  };

  const handleEditUpdate = (id) => {
    const updateToEdit = updates.find((u) => u.id === id);
    if (updateToEdit) {
      setEditUpdateId(id);
      setEditUpdateText(updateToEdit.text);
    }
  };

  const handleSaveEdit = () => {
    const updatedUpdates = updates.map((u) =>
      u.id === editUpdateId ? { ...u, text: editUpdateText } : u
    );
    setUpdates(updatedUpdates);
    localStorage.setItem("updates", JSON.stringify(updatedUpdates));
    setEditUpdateId(null);
    setEditUpdateText("");
    toast.success("Update edited successfully!");
  };

  const handleDeleteUpdate = (id) => {
    const filtered = updates.filter((u) => u.id !== id);
    setUpdates(filtered);
    localStorage.setItem("updates", JSON.stringify(filtered));
    toast.success("Update deleted successfully!");
  };

  const toggleMaintenance = () => {
    const newStatus = !maintenanceMode;
    setMaintenanceMode(newStatus);
    localStorage.setItem("maintenance", JSON.stringify(newStatus));
    toast.info(`Maintenance mode ${newStatus ? "enabled" : "disabled"}`);
  };

  if (!isLoggedIn) {
    // Get time-based greeting with admin name
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return `Good Morning, Kundan Singh`;
      if (hour < 17) return `Good Afternoon, Kundan Singh`;
      return `Good Evening, Kundan Singh`;
    };
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
        <ToastContainer position="top-center" />
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4"
        >
          <div className="flex justify-center mb-6">
            <FaLock className="text-4xl text-primary" />
          </div>

          <h1 className="text-xl font-semibold text-center text-gray-700 mb-1">
            {getGreeting()}
          </h1>
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Admin Portal
          </h2>

          {/* Username Optional */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Admin Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              disabled={!!lockoutTime}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
              isLoading || lockoutTime
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-primary-dark"
            }`}
            disabled={isLoading || !!lockoutTime}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Authenticating...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <FaLock className="mr-2" />
                {lockoutTime ? "Account Locked" : "Login"}
              </span>
            )}
          </button>

          {lockoutTime && (
            <p className="mt-3 text-sm text-center text-red-500">
              Try again in {Math.ceil((lockoutTime - Date.now()) / 1000)}{" "}
              seconds
            </p>
          )}

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              ← Back to Home
            </button>
          </div>
        </motion.form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" />

      {/* Admin Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <FaUnlock className="mr-2 text-primary" />
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            <FaSignOutAlt className="mr-1" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("updates")}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                activeTab === "updates"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <FaBell className="mr-2" />
              Updates
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                activeTab === "settings"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <FaTools className="mr-2" />
              Settings
            </button>
          </nav>
        </div>

        {/* Updates Tab */}
        {activeTab === "updates" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow rounded-lg p-6 mb-6"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaBell className="mr-2 text-primary" />
              Website Updates
            </h2>

            <div className="mb-6">
              <label
                htmlFor="updateText"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                New Update
              </label>
              <input
                type="text"
                id="updateText"
                placeholder="What's new?"
                value={updateText}
                onChange={(e) => setUpdateText(e.target.value)}
                className="border border-gray-300 p-3 rounded-lg w-full mb-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              />

              <div className="flex items-center mb-4">
                <label
                  htmlFor="updateDays"
                  className="block text-sm font-medium text-gray-700 mr-3"
                >
                  Expires in:
                </label>
                <input
                  type="number"
                  id="updateDays"
                  min="1"
                  value={updateDays}
                  onChange={(e) => setUpdateDays(Number(e.target.value))}
                  className="border border-gray-300 p-2 rounded-lg w-20 text-center"
                />
                <span className="ml-2 text-sm text-gray-600">days</span>
              </div>

              <button
                onClick={handleAddUpdate}
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors"
              >
                Add Update
              </button>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-medium mb-3">Active Updates</h3>
              {updates.length === 0 ? (
                <p className="text-gray-500">No active updates</p>
              ) : (
                <ul className="space-y-3">
                  {updates.map((u) => (
                    <li
                      key={u.id}
                      className="bg-gray-50 p-4 rounded-lg shadow-sm"
                    >
                      {editUpdateId === u.id ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={editUpdateText}
                            onChange={(e) => setEditUpdateText(e.target.value)}
                            className="border border-gray-300 p-2 rounded-lg flex-grow mr-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                          <button
                            onClick={handleSaveEdit}
                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditUpdateId(null)}
                            className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded-lg text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{u.text}</p>
                            <p className="text-sm text-gray-500 mt-1">
                              Expires: {new Date(u.expiry).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEditUpdate(u.id)}
                              className="text-blue-500 hover:text-blue-700"
                              title="Edit"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDeleteUpdate(u.id)}
                              className="text-red-500 hover:text-red-700"
                              title="Delete"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FaPalette className="mr-2 text-primary" />
                Theme Settings
              </h2>

              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Change the visual appearance of the website
                </p>

                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => handleThemeChange("default")}
                    className={`p-4 rounded-lg border-2 ${
                      theme === "default"
                        ? "border-primary bg-primary bg-opacity-10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="h-8 bg-gray-200 rounded mb-2"></div>
                    <div className="text-sm font-medium">Default</div>
                  </button>

                  <button
                    onClick={() => handleThemeChange("blue")}
                    className={`p-4 rounded-lg border-2 ${
                      theme === "blue"
                        ? "border-primary bg-primary bg-opacity-10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="h-8 bg-blue-500 rounded mb-2"></div>
                    <div className="text-sm font-medium">Blue</div>
                  </button>

                  <button
                    onClick={() => handleThemeChange("green")}
                    className={`p-4 rounded-lg border-2 ${
                      theme === "green"
                        ? "border-primary bg-primary bg-opacity-10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="h-8 bg-green-500 rounded mb-2"></div>
                    <div className="text-sm font-medium">Green</div>
                  </button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Current Theme: <span className="font-medium">{theme}</span>
                </p>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FaTools className="mr-2 text-primary" />
                System Settings
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Maintenance Mode</h3>
                    <p className="text-sm text-gray-600">
                      {maintenanceMode
                        ? "Website is currently in maintenance mode"
                        : "Website is live and accessible to all users"}
                    </p>
                  </div>
                  <button
                    onClick={toggleMaintenance}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      maintenanceMode ? "bg-red-500" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        maintenanceMode ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-medium mb-2">Backup & Restore</h3>
                  <div className="flex space-x-3">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm transition-colors">
                      Create Backup
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm transition-colors">
                      Restore Backup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
