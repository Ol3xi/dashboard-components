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
  Sun,
  Target,
  Zap,
  Award,
  CheckCircle2,
  Clock
} from 'lucide-react';
import StatsCard from './components/StatsCard';
import ProgressCard from './components/ProgressCard';

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

          {/* Stats Cards Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📊 Stats Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </section>

          {/* Progress Cards Section - Linear */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📈 Progress Cards - Linear
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProgressCard
                title="Project Completion"
                value={75}
                type="linear"
                icon={Target}
                variant="green"
                description="On track for deadline"
              />

              <ProgressCard
                title="Storage Used"
                value={62}
                type="linear"
                icon={Package}
                variant="blue"
                description="38% remaining"
              />

              <ProgressCard
                title="Task Progress"
                value={45}
                type="linear"
                icon={CheckCircle2}
                variant="purple"
                description="15 of 33 tasks done"
              />
            </div>
          </section>

          {/* Progress Cards Section - Circular */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              ⭕ Progress Cards - Circular
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProgressCard
                title="Goal Achievement"
                value={85}
                type="circular"
                icon={Award}
                variant="green"
                label="Complete"
                description="Excellent progress!"
              />

              <ProgressCard
                title="Speed Test"
                value={92}
                type="circular"
                icon={Zap}
                variant="orange"
                label="Fast"
                description="Above average"
              />

              <ProgressCard
                title="Time Remaining"
                value={35}
                type="circular"
                icon={Clock}
                variant="blue"
                label="Hours"
                description="2 days left"
              />

              <ProgressCard
                title="Quality Score"
                value={68}
                type="circular"
                icon={Activity}
                variant="purple"
                label="Good"
                description="Keep improving"
              />
            </div>
          </section>

          {/* Progress Cards Section - Stepped */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              👣 Progress Cards - Stepped
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProgressCard
                title="Onboarding Progress"
                value={60}
                type="stepped"
                icon={CheckCircle2}
                variant="blue"
                totalSteps={5}
                currentStep={3}
                description="3 steps completed"
              />

              <ProgressCard
                title="Course Completion"
                value={80}
                type="stepped"
                icon={Award}
                variant="green"
                totalSteps={5}
                currentStep={4}
                description="Almost done!"
              />
            </div>
          </section>

          {/* Size Variants */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📐 Size Variants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProgressCard
                title="Small Size"
                value={45}
                type="linear"
                icon={Activity}
                variant="blue"
                size="sm"
              />

              <ProgressCard
                title="Medium Size (Default)"
                value={65}
                type="linear"
                icon={Activity}
                variant="green"
                size="md"
              />

              <ProgressCard
                title="Large Size"
                value={85}
                type="linear"
                icon={Activity}
                variant="purple"
                size="lg"
              />
            </div>
          </section>

          {/* Color Variants */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🎨 All Color Variants
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <ProgressCard title="Blue" value={70} type="circular" variant="blue" size="sm" showPercentage={true} />
              <ProgressCard title="Green" value={85} type="circular" variant="green" size="sm" showPercentage={true} />
              <ProgressCard title="Purple" value={60} type="circular" variant="purple" size="sm" showPercentage={true} />
              <ProgressCard title="Orange" value={75} type="circular" variant="orange" size="sm" showPercentage={true} />
              <ProgressCard title="Red" value={45} type="circular" variant="red" size="sm" showPercentage={true} />
              <ProgressCard title="Gray" value={55} type="circular" variant="gray" size="sm" showPercentage={true} />
            </div>
          </section>

          {/* Advanced Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              ⚡ Advanced Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProgressCard
                title="Download Progress"
                value={78}
                type="linear"
                icon={Package}
                variant="blue"
                description="Downloading..."
                footer={
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">234 MB of 300 MB</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">2 min left</span>
                  </div>
                }
              />

              <ProgressCard
                title="Monthly Goal"
                value={92}
                type="circular"
                icon={Target}
                variant="green"
                label="Achieved"
                description="Fantastic work!"
                footer={
                  <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                    View Details
                  </button>
                }
              />
            </div>
          </section>

          {/* Combined Dashboard View */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🎯 Combined Dashboard View
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Stats */}
              <div className="space-y-6">
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

              {/* Right Column - Progress */}
              <div className="space-y-6">
                <ProgressCard
                  title="Quarterly Target"
                  value={87}
                  type="linear"
                  icon={Target}
                  variant="green"
                  description="Exceeding expectations"
                />

                <ProgressCard
                  title="Server Load"
                  value={45}
                  type="circular"
                  icon={Activity}
                  variant="blue"
                  label="Normal"
                  description="All systems operational"
                />

                <ProgressCard
                  title="Deployment Pipeline"
                  value={60}
                  type="stepped"
                  icon={CheckCircle2}
                  variant="purple"
                  totalSteps={5}
                  currentStep={3}
                  description="Building stage"
                />
              </div>
            </div>
          </section>

          {/* Info Footer */}
          <div className="p-8 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              ✨ Component Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600 dark:text-gray-400">
              <div>
                <strong className="text-gray-900 dark:text-white">StatsCard:</strong>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>✅ 6 color variants</li>
                  <li>✅ 3 size options</li>
                  <li>✅ Change indicators</li>
                  <li>✅ Custom icons</li>
                  <li>✅ Click handlers</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">ProgressCard:</strong>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>✅ 3 progress types</li>
                  <li>✅ Linear bars</li>
                  <li>✅ Circular progress</li>
                  <li>✅ Stepped indicators</li>
                  <li>✅ Animated transitions</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">General:</strong>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>✅ TypeScript typed</li>
                  <li>✅ Dark mode</li>
                  <li>✅ Responsive</li>
                  <li>✅ Accessible</li>
                  <li>✅ Production ready</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;