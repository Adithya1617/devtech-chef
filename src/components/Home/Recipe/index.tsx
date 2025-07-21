"use client";
import Image from 'next/image';

const features = [
  {
    title: "🎯 Proven Track Record",
    description: "500+ successful AI implementations across various industries with measurable ROI."
  },
  {
    title: "⚡Rapid Deployment",
    description: "Accelerated development cycles with our proven methodologies and pre-built components."
  },
  {
    title: "🛡️ Enterprise Security",
    description: "Bank-level security protocols and compliance with industry standards and regulations."
  },
  {
    title: "👨‍💻 Expert Team",
    description: "PhD-level data scientists, ML engineers, and industry specialists dedicated to your success."
  }
];

const FeaturesSection = () => {
  return (
    <section className='relative' id="features-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 gap-10'>
          {/* LEFT COLUMN – Dashboard Card */}
          <div className='col-span-6 flex justify-center items-center'>
            <div className="w-full max-w-xl gap-10">
              <div className="bg-gradient-to-br from-orange-300 to-yellow-200 rounded-3xl p-1 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="bg-white/30 backdrop-blur-md rounded-3xl p-12 border border-white/20">
                  <div className="space-y-8">
                    <h3 className="text-xl font-semibold text-orange-800 text-center">AI Performance Dashboard</h3>

                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { label: "Accuracy", value: "97.3%" },
                        { label: "Response Time", value: "1.2ms" },
                        { label: "Uptime", value: "99.9%" },
                        { label: "Processed", value: "2.1M" }
                      ].map((item, i) => (
                        <div key={i} className="backdrop-blur-md bg-orange-200/30 border border-white/20 rounded-xl p-6 shadow-md hover:scale-105 transition-all duration-300">
                          <div className="text-3xl font-bold text-orange-600">{item.value}</div>
                          <div className="text-sm text-orange-500 mt-1">{item.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm text-orange-700">
                        <span>Model Training</span>
                        <span className="font-semibold">Complete</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – Features */}
          <div className='col-span-6 flex flex-col justify-center'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start'>
              Why choose us
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
              Built for Excellence
            </h2>
            <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-6 text-start mt-2'>
              Our AI solutions combine cutting-edge technology with practical business applications to deliver measurable results.
            </p>

            <div className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-black dark:text-white flex items-center gap-2">
                    {feature.title}
                  </h3>
                  <p className="text-black/50 dark:text-white/50 text-md">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
