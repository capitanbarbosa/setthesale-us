"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const AdsDashboard = () => {
  const [adsData, setAdsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [adType, setAdType] = useState("ALL");
  const [country, setCountry] = useState("US");

  // Mock data for demonstration - replace with actual API calls
  const mockAdsData = [
    {
      id: "1",
      page_name: "SaaS Growth Solutions",
      ad_creative_body: "Transform your sales pipeline with AI-powered lead qualification. 60% more qualified appointments guaranteed.",
      impressions: "2.3M",
      spend_estimate: "$45,000",
      ctr: "3.2%",
      engagement_rate: "8.5%",
      ad_delivery_start_time: "2024-01-15",
      publisher_platforms: ["facebook", "instagram"],
      category: "SaaS",
      performance_score: 92
    },
    {
      id: "2",
      page_name: "Marketing Automation Pro",
      ad_creative_body: "Stop wasting time on unqualified leads. Our AI does the heavy lifting so you can focus on closing deals.",
      impressions: "1.8M",
      spend_estimate: "$32,000",
      ctr: "2.9%",
      engagement_rate: "7.2%",
      ad_delivery_start_time: "2024-02-01",
      publisher_platforms: ["facebook"],
      category: "Marketing Tools",
      performance_score: 87
    },
    {
      id: "3",
      page_name: "Revenue Accelerator",
      ad_creative_body: "From cold leads to hot appointments in 24 hours. See how top companies are scaling without hiring more sales reps.",
      impressions: "3.1M",
      spend_estimate: "$58,000",
      ctr: "4.1%",
      engagement_rate: "9.8%",
      ad_delivery_start_time: "2024-01-20",
      publisher_platforms: ["facebook", "instagram"],
      category: "Sales Tools",
      performance_score: 95
    },
    {
      id: "4",
      page_name: "Lead Generation Masters",
      ad_creative_body: "Turn your website visitors into paying customers. Our proven system has generated over $50M in revenue for clients.",
      impressions: "1.5M",
      spend_estimate: "$28,000",
      ctr: "3.8%",
      engagement_rate: "6.9%",
      ad_delivery_start_time: "2024-02-10",
      publisher_platforms: ["facebook", "instagram"],
      category: "Marketing Tools",
      performance_score: 89
    },
    {
      id: "5",
      page_name: "Conversion Optimization Hub",
      ad_creative_body: "Double your conversion rates without spending more on ads. Free audit reveals your biggest opportunities.",
      impressions: "2.7M",
      spend_estimate: "$41,000",
      ctr: "2.6%",
      engagement_rate: "7.8%",
      ad_delivery_start_time: "2024-01-25",
      publisher_platforms: ["facebook"],
      category: "Optimization",
      performance_score: 84
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setAdsData(mockAdsData);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredAds = adsData.filter(ad => 
    ad.ad_creative_body.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ad.page_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const topPerformingAds = [...filteredAds].sort((a, b) => b.performance_score - a.performance_score);

  const getPerformanceColor = (score) => {
    if (score >= 90) return "text-green-600 bg-green-100";
    if (score >= 75) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-center text-4xl font-bold py-8">Ads Dashboard - Design 1</h1>
      {/* Header */}
      <section className="bg-blue-950 text-white py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Facebook Ads Intelligence Dashboard</h1>
          <p className="text-xl text-gray-300">
            Discover high-performing ad strategies and content ideas from the Facebook Ads Library
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Keywords
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search ads by content or page name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ad Type
              </label>
              <select
                value={adType}
                onChange={(e) => setAdType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="ALL">All Ad Types</option>
                <option value="POLITICAL_AND_ISSUE_ADS">Political & Issue</option>
                <option value="REGULAR">Regular Ads</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-gray-500">Total Ads Analyzed</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">{filteredAds.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-gray-500">Avg Performance Score</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {filteredAds.length > 0 ? Math.round(filteredAds.reduce((acc, ad) => acc + ad.performance_score, 0) / filteredAds.length) : 0}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-gray-500">Total Estimated Spend</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">
                ${filteredAds.reduce((acc, ad) => acc + parseInt(ad.spend_estimate.replace(/[$,]/g, '')), 0).toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-sm font-medium text-gray-500">Avg CTR</h3>
              <p className="text-3xl font-bold text-orange-600 mt-2">
                {filteredAds.length > 0 ? (filteredAds.reduce((acc, ad) => acc + parseFloat(ad.ctr), 0) / filteredAds.length).toFixed(1) : 0}%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Performing Ads */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Performing Ads</h2>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid gap-6">
              {topPerformingAds.slice(0, 10).map((ad) => (
                <div key={ad.id} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{ad.page_name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPerformanceColor(ad.performance_score)}`}>
                          Score: {ad.performance_score}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {ad.category}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{ad.ad_creative_body}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>Impressions: <strong>{ad.impressions}</strong></span>
                        <span>Spend: <strong>{ad.spend_estimate}</strong></span>
                        <span>CTR: <strong>{ad.ctr}</strong></span>
                        <span>Engagement: <strong>{ad.engagement_rate}</strong></span>
                        <span>Started: <strong>{new Date(ad.ad_delivery_start_time).toLocaleDateString()}</strong></span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    {ad.publisher_platforms.map((platform) => (
                      <span key={platform} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content Ideas Section */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">High-Converting Content Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg border">
              <h3 className="font-semibold text-blue-900 mb-3">Problem-Solution Hook</h3>
              <p className="text-sm text-gray-600 mb-3">
                "Stop wasting time on..." → "Our AI does the heavy lifting"
              </p>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Used in 85% of top ads</span>
            </div>
            <div className="p-6 bg-green-50 rounded-lg border">
              <h3 className="font-semibold text-green-900 mb-3">Specific Results Promise</h3>
              <p className="text-sm text-gray-600 mb-3">
                "60% more qualified appointments guaranteed"
              </p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">92% success rate</span>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg border">
              <h3 className="font-semibold text-blue-900 mb-3">Time-Based Urgency</h3>
              <p className="text-sm text-gray-600 mb-3">
                "From cold leads to hot appointments in 24 hours"
              </p>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">High engagement</span>
            </div>
            <div className="p-6 bg-yellow-50 rounded-lg border">
              <h3 className="font-semibold text-yellow-900 mb-3">Social Proof Pattern</h3>
              <p className="text-sm text-gray-600 mb-3">
                "Generated over $50M in revenue for clients"
              </p>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Trust builder</span>
            </div>
            <div className="p-6 bg-red-50 rounded-lg border">
              <h3 className="font-semibold text-red-900 mb-3">Free Value Offer</h3>
              <p className="text-sm text-gray-600 mb-3">
                "Free audit reveals your biggest opportunities"
              </p>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Lead magnet</span>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg border">
              <h3 className="font-semibold text-indigo-900 mb-3">Outcome Without Input</h3>
              <p className="text-sm text-gray-600 mb-3">
                "Double conversion rates without spending more"
              </p>
              <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Efficiency focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Performance Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Categories</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Sales Tools</span>
                  <span className="text-green-600 font-semibold">95 avg score</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">SaaS</span>
                  <span className="text-green-600 font-semibold">92 avg score</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Marketing Tools</span>
                  <span className="text-yellow-600 font-semibold">88 avg score</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Optimization</span>
                  <span className="text-yellow-600 font-semibold">84 avg score</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Facebook + Instagram</span>
                  <span className="text-green-600 font-semibold">Higher engagement</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Facebook Only</span>
                  <span className="text-blue-600 font-semibold">Lower cost</span>
                </div>
                <div className="text-sm text-gray-500 mt-4">
                  Multi-platform campaigns show 23% higher engagement rates but cost 15% more per impression.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-blue-950 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Apply These Insights?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Let us help you implement these proven strategies in your campaigns
        </p>
        <Link
          href="https://calendly.com/setthesale/strategy-call"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
            Book Strategy Call
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AdsDashboard;
