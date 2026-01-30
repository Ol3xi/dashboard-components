import { useState } from 'react';
import {
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
  Eye,
  CreditCard,
  Package,
  Moon,
  Sun
} from 'lucide-react';
import StatsCard from './components/StatsCard';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Dashboard Components
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Professional React + TypeScript + Tailwind Components
              </p>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:shadow-md transition-all"
            >
              {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatsCard
              title="Total Revenue"
              value="$45,231"
              change="+20.1%"
              changeType="positive"
              description="from last month"
              icon={DollarSign}
              variant="green"
              onClick={() => { }}
              className=''
            />

            <StatsCard
              title="Active Users"
              value="2,350"
              change="+180"
              changeType="positive"
              description="from yesterday"
              icon={Users}
              variant="blue"
              onClick={() => { }}
              className=''
            />

            <StatsCard
              title="Total Sales"
              value="12,234"
              change="-5.2%"
              changeType="negative"
              description="from last week"
              icon={ShoppingCart}
              variant="purple"
              onClick={() => { }}
              className=''
            />

            <StatsCard
              title="Conversion Rate"
              value="3.2%"
              change="+0.5%"
              changeType="positive"
              description="vs last period"
              icon={TrendingUp}
              variant="orange"
              onClick={() => { }}
              className=''
            />
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <StatsCard
              title="Page Views"
              value="128,456"
              change="+12.3%"
              changeType="positive"
              icon={Eye}
              variant="blue"
              onClick={() => { }}
              className=''
            />

            <StatsCard
              title="Orders"
              value="1,429"
              change="+8.7%"
              changeType="positive"
              icon={Package}
              variant="green"
              onClick={() => { }}
              className=''
            />

            <StatsCard
              title="Transactions"
              value="$8,920"
              change="-2.1%"
              changeType="negative"
              icon={CreditCard}
              variant="red"
              onClick={() => { }}
              className=''
            />
          </div>

          {/* Color Variants Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🎨 All Color Variants
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <StatsCard title="Blue" value="123" icon={Activity} variant="blue" size="sm" onClick={() => { }} className='' change='' />
              <StatsCard title="Green" value="456" icon={Activity} variant="green" size="sm" onClick={() => { }} className='' change='' />
              <StatsCard title="Purple" value="789" icon={Activity} variant="purple" size="sm" onClick={() => { }} className='' change='' />
              <StatsCard title="Orange" value="012" icon={Activity} variant="orange" size="sm" onClick={() => { }} className='' change='' />
              <StatsCard title="Red" value="345" icon={Activity} variant="red" size="sm" onClick={() => { }} className='' change='' />
              <StatsCard title="Gray" value="678" icon={Activity} variant="gray" size="sm" onClick={() => { }} className='' change='' />
            </div>
          </div>

          {/* Size Variants */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📐 Size Variants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard
                title="Small"
                value="1,234"
                icon={TrendingUp}
                variant="blue"
                size="sm"
                change="+12%"
                changeType="positive"
                onClick={() => { }}
                className=''
              />
              <StatsCard
                title="Medium (Default)"
                value="5,678"
                icon={TrendingUp}
                variant="green"
                size="md"
                change="+24%"
                changeType="positive"
                onClick={() => { }}
                className=''
              />
              <StatsCard
                title="Large"
                value="9,012"
                icon={TrendingUp}
                variant="purple"
                size="lg"
                change="+36%"
                changeType="positive"
                onClick={() => { }}
                className=''
              />
            </div>
          </div>

          {/* Info Footer */}
          <div className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              ✨ Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-400">
              <div>✅ <strong>TypeScript</strong> - Fully typed</div>
              <div>✅ <strong>Responsive</strong> - Mobile-first</div>
              <div>✅ <strong>Dark Mode</strong> - Native support</div>
              <div>✅ <strong>Accessible</strong> - Production ready</div>
              <div>✅ <strong>Customizable</strong> - 6 colors, 3 sizes</div>
              <div>✅ <strong>Animated</strong> - Smooth transitions</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;