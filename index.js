import React, { useState } from 'react';
import { 
  Music, 
  Activity, 
  Brain, 
  Mic, 
  GraduationCap, 
  DollarSign, 
  Layers, 
  User, 
  Globe, 
  Cpu, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  HeartPulse,
  ExternalLink,
  Zap,
  Monitor,
  Speaker,
  MousePointer2,
  Sparkles,
  X,
  Bot,
  Loader2
} from 'lucide-react';

// --- GEMINI API CONFIGURATION ---
const apiKey = ""; // API Key injected by environment

// --- VISUALIZER COMPONENT (Motion Mechanics) ---
const AudioVisualizer = ({ color = "bg-cyan-400" }) => (
  <div className="flex items-end space-x-1 h-8">
    {[...Array(5)].map((_, i) => (
      <div 
        key={i} 
        className={`w-1.5 rounded-t-sm ${color} animate-pulse`}
        style={{ 
          animationDuration: `${0.4 + Math.random() * 0.5}s`,
          height: `${20 + Math.random() * 80}%` 
        }} 
      />
    ))}
  </div>
);

// --- STYLISH LINK BUTTON ---
const EvidenceLink = ({ label, url, color = "cyan" }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`
      inline-flex items-center space-x-2 px-3 py-1 mt-2 rounded-full 
      text-[10px] font-bold uppercase tracking-wider 
      border border-${color}-500/30 bg-${color}-950/30 text-${color}-300 
      hover:bg-${color}-500 hover:text-black hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] 
      transition-all duration-300 cursor-pointer group
    `}
  >
    <ExternalLink size={10} className="group-hover:rotate-45 transition-transform" />
    <span>{label}</span>
  </a>
);

// --- DATA STRUCTURE (Full Detail A-Z) ---

const contentData = {
  mixed: {
    id: "mixed",
    title: "Version 1: Mixed (English + Easy Bangla)",
    subtitle: "Best for personal clarity and internal use",
    execSummary: {
      intro: "Music Mechanics is not just a department; it is a revolution in Bangladeshi healthcare and entertainment. It serves as the primary operational brand, housing four specialized wings that blend science, art, business, and education.",
      qualifications: [
        { label: "Clinical Authority (COMPLETED)", val: "BPT (Licensed Medical Professional). Gives me the legal right to assess, diagnose, and treat patients immediately.", bangla: "BPT (করা আছে): ডাক্তার হিসেবে প্র্যাকটিস করার লাইসেন্স।", link: { label: "Medical License Info", url: "#" }, icon: <Activity className="text-emerald-400" /> },
        { label: "Specialized Credential (TARGET - Priority 1)", val: "NMTAP (4 Days). Bypasses the 4-year music therapy degree, allowing legal use of RAS for stroke patients.", bangla: "NMTAP (৪ দিন): প্যারালাইসিস রোগীদের মিউজিক থেরাপি দেওয়ার আন্তর্জাতিক লাইসেন্স।", link: { label: "NMT Training Schedule", url: "https://nmtacademy.co/training-schedule/" }, icon: <Brain className="text-pink-400" /> },
        { label: "Global Innovation (TARGET - Priority 2)", val: "Berklee 'Music for Wellness' (12 Weeks). Scientific basis for stress/pain management.", bangla: "Berklee (১২ সপ্তাহ): আন্তর্জাতিক মানের মিউজিক এবং হেলথ সার্টিফিকেট, যা আমার ব্র্যান্ড ভ্যালু বাড়াবে।", link: { label: "Berklee Course Details", url: "https://online.berklee.edu/courses/music-for-wellness" }, icon: <Globe className="text-blue-400" /> },
        { label: "Technical Mastery (TARGET - Priority 3)", val: "Apple Certified Pro (Logic Pro X). Certifies studio as a professional 'Apple-Based Facility'.", bangla: "Logic Pro (২ মাস): অ্যাপল স্টুডিও চালানোর টেকনিক্যাল এক্সপার্ট。", link: { label: "Apple Logic Training", url: "https://www.apple.com/logic-pro/training/" }, icon: <Cpu className="text-gray-400" /> }
      ]
    },
    authority: {
      command: "Jeorge Sourav Roy, BPT, NMTAP (Founder, Purrfect Universe Ltd.)",
      planets: [
        { name: "Motion Mechanics", role: "Neurologic Rehabilitation & Music Therapy Specialist", sub: "নিউরো রিহ্যাবিলিটেশন ও মিউজিক থেরাপি স্পেশালিস্ট", color: "emerald", icon: <Activity /> },
        { name: "Music Mechanics", role: "Founder & Director", sub: "ফাউন্ডার এবং ডিরেক্টর", color: "cyan", icon: <Music /> },
        { name: "NMM Institute BD", role: "Director", sub: "ডিরেক্টর (শিক্ষা এবং ট্রেনিং)", color: "purple", icon: <GraduationCap /> }
      ]
    },
    pillars: [
      {
        id: "clinical",
        title: "Pillar 1: Clinical Wing (NMM)",
        subtitle: "Physio Minds Connect with Music Minds",
        desc: "I prescribe Audio-Pharmaceuticals based on neuroscience.",
        color: "emerald",
        aiFeature: "neuro", // Flag for AI Feature
        services: [
          { name: "Neuro-Sync (Gait)", desc: "Stroke & SCI. Protocol: RAS. Custom beats to match steps.", bangla: "স্ট্রোক রোগীদের হাঁটার গতি এবং ব্যালেন্স ঠিক করা।" },
          { name: "Motor-Melody (Upper Limb)", desc: "Hemiplegic Hands. Protocol: TIMP. Electronic drum pads for exercise.", bangla: "যাদের হাত অবশ, তাদের ড্রামস বাজাতে দিয়ে হাতের মুভমেন্ট বাড়ানো।" },
          { name: "Sensory-Flow (Pain)", desc: "Chronic Pain/Anxiety. Protocol: MAR. Low-freq audio & textures.", bangla: "ব্যথা বা টেনশন কমানোর জন্য শান্ত মিউজিক।" },
          { name: "Rhythmic-Breath (Respiratory)", desc: "Respiratory/Posture. Protocol: OMREX. Vocal toning exercises.", bangla: "শ্বাসকষ্ট কমানোর জন্য এবং মেরুদণ্ড সোজা রাখার জন্য।" }
        ]
      },
      {
        id: "commercial",
        title: "Pillar 2: Commercial Wing (Jam Mechanics)",
        subtitle: "The Passive Income Engine",
        desc: "Professional-grade soundproof space open to ALL musicians. Top-tier Yamaha & Focusrite gear.",
        color: "cyan",
        shifts: [
          { name: "Morning", time: "06:00 AM – 10:00 AM", price: "800 - 1000 BDT" },
          { name: "Midday", time: "10:00 AM – 02:00 PM", price: "800 - 1000 BDT" },
          { name: "Afternoon", time: "02:00 PM – 06:00 PM", price: "800 - 1000 BDT" },
          { name: "Evening", time: "06:00 PM – 10:00 PM", price: "800 - 1000 BDT" }
        ]
      },
      {
        id: "creative",
        title: "Pillar 3: Creative Wing (Sourav Legacy)",
        subtitle: "Headquarters of the Artist",
        desc: "The Headquarters of the Artist.",
        color: "blue",
        aiFeature: "creative", // Flag for AI Feature
        points: [
          { title: "'Sourav' Originals", detail: "Producing Melo-Rock/Pop songs on Logic Pro X." },
          { title: "The Brotherhood Band", detail: "Professional band performing originals. Revenue from Concert Fees." }
        ]
      },
      {
        id: "education",
        title: "Pillar 4: Education Wing (NMM Institute BD)",
        subtitle: "4 Distinct Certification Courses",
        desc: "Based on my 4 distinct qualifications (BPT, NMT, Berklee, Apple).",
        color: "purple",
        courses: [
          { title: "Rhythmic Rehabilitation Basics", target: "Jr Physios", fees: "3k-5k BDT", bangla: "রিদিমিক রিহ্যাব বেসিকস" },
          { title: "Music for Stress Management", target: "Public/Corporate", fees: "2k-3k BDT", bangla: "স্ট্রেস ম্যানেজমেন্ট" },
          { title: "Logic Pro X for Therapy", target: "Musicians", fees: "5k-8k BDT", bangla: "লজিক প্রো প্রোডাকশন" },
          { title: "Home-Based Rhythmic Care", target: "Patient Families", fees: "1k BDT", bangla: "হোম-বেসড কেয়ার" }
        ]
      }
    ],
    roadmap: [
      { phase: "PHASE 1", title: "The Credentialing (Weeks 1-16)", desc: "Securing Authority", steps: [{name: "NMT Certification", act: "4 Days", out: "License", link: {l: "NMT", u: "#"}}, {name: "Berklee Music", act: "12 Weeks", out: "Certificate", link: {l: "Berklee", u: "#"}}, {name: "Apple Logic Pro", act: "Self Paced", out: "Pro Cert", link: {l: "Apple", u: "#"}}] },
      { phase: "PHASE 2", title: "The Apple Mac Infrastructure", desc: "Studio Engine", gear: [{name: "Mac Studio", why: "Power", link: "#", icon: <Monitor/>}, {name: "Focusrite", why: "Interface", link: "#", icon: <Zap/>}, {name: "Yamaha HS8", why: "Audio", link: "#", icon: <Speaker/>}, {name: "DTX8K", why: "Drums", link: "#", icon: <Music/>}, {name: "iPad Pro", why: "Control", link: "#", icon: <MousePointer2/>}], steps: [{name: "Launch Jam Mechanics", act: "Open 4 Shifts", out: "Income", link: {l: "Booking", u: "#"}}] },
      { phase: "PHASE 3", title: "Clinical & Creative Launch", desc: "Operations", steps: [{name: "Launch NMM Clinical", act: "Treat Patients", out: "Income", link: {l: "Services", u: "#"}}, {name: "The Brotherhood Band", act: "Release Music", out: "Brand", link: {l: "Band", u: "#"}}] },
      { phase: "PHASE 4", title: "Educational Expansion", desc: "Growth", steps: [{name: "Launch Institute", act: "Market Courses", out: "Revenue", link: {l: "Courses", u: "#"}}] }
    ],
    finance: [
      { source: "NMM Clinical Fees", type: "Active", freq: "Daily (Patient Income)" },
      { source: "Jam Mechanics Rent", type: "Passive", freq: "Daily (4 Shifts)" },
      { source: "Institute Course Fees", type: "Active", freq: "Monthly" },
      { source: "Concert Hiring", type: "Active", freq: "Seasonal" }
    ]
  },
  english: {
    title: "Version 2: English Only",
    subtitle: "Best for Investors, Stakeholders, or Formal Proposals",
    execSummary: {
      intro: "Music Mechanics is a revolution in Bangladeshi healthcare and entertainment. It operates as the primary brand housing four specialized wings blending science, art, business, and education.",
      qualifications: [
        { label: "Clinical Authority", val: "Bachelor of Physiotherapy (BPT). Licensed Medical Professional with legal rights to treat.", link: { label: "License", url: "#" }, icon: <Activity className="text-emerald-400" /> },
        { label: "Specialized Credential", val: "NMTAP (Neurologic Music Therapy Allied Professional). 30 Hours Intensive.", link: { label: "NMT", url: "#" }, icon: <Brain className="text-pink-400" /> },
        { label: "Global Innovation", val: "Berklee College of Music: Music for Wellness Professional Certificate.", link: { label: "Berklee", url: "#" }, icon: <Globe className="text-blue-400" /> },
        { label: "Technical Mastery", val: "Apple Certified Pro (Logic Pro X). Ensures professional studio quality.", link: { label: "Apple", url: "#" }, icon: <Cpu className="text-gray-400" /> }
      ]
    },
    authority: {
      command: "Jeorge Sourav Roy, BPT, NMTAP (Founder, Purrfect Universe Ltd.)",
      planets: [
        { name: "Motion Mechanics", role: "Neurologic Rehab Specialist", sub: "NMT Allied Professional", color: "emerald", icon: <Activity /> },
        { name: "Music Mechanics", role: "Founder & Director", sub: "Studio Operations", color: "cyan", icon: <Music /> },
        { name: "NMM Institute BD", role: "Director", sub: "Educational Wing", color: "purple", icon: <GraduationCap /> }
      ]
    },
    pillars: [
      {
        id: "clinical",
        title: "Pillar 1: Clinical Wing",
        subtitle: "Neurologic Music Mechanics (NMM)",
        color: "emerald",
        aiFeature: "neuro",
        services: [
          { name: "Neuro-Sync", desc: "Target: Stroke & SCI. Protocol: Rhythmic Auditory Stimulation (RAS)." },
          { name: "Motor-Melody", desc: "Target: Hemiplegic Hands. Protocol: TIMP with electronic drums." },
          { name: "Sensory-Flow", desc: "Target: Chronic Pain. Protocol: MAR (Music-Assisted Relaxation)." },
          { name: "Rhythmic-Breath", desc: "Target: Respiratory weakness. Protocol: OMREX." }
        ]
      },
      {
        id: "commercial",
        title: "Pillar 2: Commercial Wing",
        subtitle: "Jam Mechanics - Passive Income Engine",
        color: "cyan",
        desc: "Professional-grade soundproof space. The 'All-Day' 4-Shift System.",
        shifts: [
          { name: "Morning", time: "06:00 - 10:00", price: "800 - 1000 BDT" },
          { name: "Midday", time: "10:00 - 14:00", price: "800 - 1000 BDT" },
          { name: "Afternoon", time: "14:00 - 18:00", price: "800 - 1000 BDT" },
          { name: "Evening", time: "18:00 - 22:00", price: "800 - 1000 BDT" }
        ]
      },
      {
        id: "creative",
        title: "Pillar 3: Creative Wing",
        subtitle: "The Sourav Legacy",
        color: "blue",
        aiFeature: "creative",
        desc: "Headquarters of the Artist.",
        points: [
          { title: "Originals Production", detail: "Via Logic Pro X." },
          { title: "The Brotherhood Band", detail: "Concert performance." }
        ]
      },
      {
        id: "education",
        title: "Pillar 4: Education Wing",
        subtitle: "NMM Institute BD",
        color: "purple",
        desc: "Educational Expansion.",
        courses: [
          { title: "Cert. Rhythmic Rehab Basics", target: "Jr Physios", fees: "3k-5k BDT", bangla: "2 Days" },
          { title: "Music for Stress Management", target: "Corporates", fees: "2k-3k BDT", bangla: "1 Day" },
          { title: "Logic Pro X for Therapy", target: "Musicians", fees: "5k-8k BDT", bangla: "4 Weeks" },
          { title: "Home-Based Rhythmic Care", target: "Families", fees: "1k BDT", bangla: "4 Hours" }
        ]
      }
    ],
    roadmap: [
      { phase: "PHASE 1", title: "The Credentialing", desc: "Foundations", steps: [{name: "NMT", act: "Train", out: "Lic", link: {l:"NMT",u:"#"}}, {name: "Berklee", act: "Study", out: "Cert", link: {l:"Berklee",u:"#"}}, {name: "Apple", act: "Exam", out: "Pro", link: {l:"Apple",u:"#"}}] },
      { phase: "PHASE 2", title: "Infrastructure", desc: "Build", gear: [{name: "Mac Studio", why: "Core", link: "#", icon: <Monitor/>}, {name: "Focusrite", why: "Audio", link: "#", icon: <Zap/>}, {name: "Yamaha", why: "Sound", link: "#", icon: <Speaker/>}, {name: "Drums", why: "Beat", link: "#", icon: <Music/>}, {name: "iPad", why: "Touch", link: "#", icon: <MousePointer2/>}], steps: [{name: "Studio", act: "Launch", out: "Cash", link: {l:"Studio",u:"#"}}] },
      { phase: "PHASE 3", title: "Clinical Launch", desc: "Go Live", steps: [{name: "Treat", act: "Patients", out: "$", link: {l:"Rx",u:"#"}}, {name: "Band", act: "Play", out: "Fame", link: {l:"Music",u:"#"}}] },
      { phase: "PHASE 4", title: "Education Expansion", desc: "Teach", steps: [{name: "Courses", act: "Launch", out: "$", link: {l:"Edu",u:"#"}}] }
    ],
    finance: [
      { source: "NMM Clinical Fees", type: "Active", freq: "Daily" },
      { source: "Jam Mechanics Rent", type: "Passive", freq: "Daily" },
      { source: "Institute Course Fees", type: "Active", freq: "Monthly" },
      { source: "Streaming Royalties", type: "Passive", freq: "Continuous" }
    ]
  },
  bangla: {
    title: "Version 3: Bangla Only (সহজ বাংলা)",
    subtitle: "Best for Local Staff, Family, or General Understanding",
    execSummary: {
      intro: "Music Mechanics একটি কমপ্লিট ইকোসিস্টেম। স্বাস্থ্যসেবা এবং বিনোদনের এক নতুন বিপ্লব।",
      qualifications: [
        { label: "ডাক্তারি ক্ষমতা (সম্পন্ন)", val: "BPT ডিগ্রি আছে, তাই আমি লিগ্যাল ডাক্তার।", link: { label: "লাইসেন্স", url: "#" }, icon: <Activity className="text-emerald-400" /> },
        { label: "স্পেশাল পাওয়ার (টার্গেট)", val: "NMTAP (৪ দিন)। প্যারালাইসিস রোগীদের মিউজিক থেরাপি দেওয়ার লাইসেন্স।", link: { label: "NMT", url: "#" }, icon: <Brain className="text-pink-400" /> },
        { label: "গ্লোবাল নলেজ (টার্গেট)", val: "Berklee (১২ সপ্তাহ)। মিউজিক ও হেলথ সার্টিফিকেশন।", link: { label: "বার্কলে", url: "#" }, icon: <Globe className="text-blue-400" /> },
        { label: "টেকনিক্যাল এক্সপার্ট (টার্গেট)", val: "Apple Logic Pro (২ মাস)। স্টুডিও এক্সপার্ট।", link: { label: "অ্যাপল", url: "#" }, icon: <Cpu className="text-gray-400" /> }
      ]
    },
    authority: {
      command: "জর্জে সৌরভ রায়, BPT, NMTAP (ফাউন্ডার, পারফেক্ট ইউনিভার্স)",
      planets: [
        { name: "Motion Mechanics", role: "নিউরো রিহ্যাব স্পেশালিস্ট", sub: "চিকিৎসা বিভাগ", color: "emerald", icon: <Activity /> },
        { name: "Music Mechanics", role: "ফাউন্ডার ও ডিরেক্টর", sub: "স্টুডিও ও ব্যবসা", color: "cyan", icon: <Music /> },
        { name: "NMM Institute BD", role: "ইন্সটিটিউট ডিরেক্টর", sub: "শিক্ষা বিভাগ", color: "purple", icon: <GraduationCap /> }
      ]
    },
    pillars: [
      {
        id: "clinical",
        title: "চিকিৎসা বিভাগ (Clinical Wing)",
        subtitle: "Neurologic Music Mechanics (NMM)",
        color: "emerald",
        aiFeature: "neuro",
        desc: "ফিজিও এবং মিউজিক মাইন্ডের মিলন।",
        services: [
          { name: "Neuro-Sync", desc: "স্ট্রোক বা প্যারালাইসিস রোগীদের হাঁটা।" },
          { name: "Motor-Melody", desc: "হাতের ব্যায়াম (ড্রামস দিয়ে)।" },
          { name: "Sensory-Flow", desc: "পেইন ম্যানেজমেন্ট (ব্যথা কমানো)।" },
          { name: "Rhythmic-Breath", desc: "শ্বাস-প্রশ্বাসের ব্যায়াম।" }
        ]
      },
      {
        id: "commercial",
        title: "ব্যবসা বিভাগ (Jam Mechanics)",
        subtitle: "স্টুডিও ভাড়া (Passive Income)",
        color: "cyan",
        desc: "প্রতিদিন ৪টি শিফট। সকাল ৬টা থেকে রাত ১০টা পর্যন্ত।",
        shifts: [
          { name: "সকাল", time: "০৬:০০ - ১০:০০", price: "৮০০ - ১০০০ টাকা" },
          { name: "দুপুর", time: "১০:০০ - ০২:০০", price: "৮০০ - ১০০০ টাকা" },
          { name: "বিকেল", time: "০২:০০ - ০৬:০০", price: "৮০০ - ১০০০ টাকা" },
          { name: "সন্ধ্যা", time: "০৬:০০ - ১০:০০", price: "৮০০ - ১০০০ টাকা" }
        ]
      },
      {
        id: "creative",
        title: "ক্রিয়েটিভ বিভাগ (Creative Wing)",
        subtitle: "Sourav Legacy",
        color: "blue",
        aiFeature: "creative",
        desc: "আর্টিস্টের হেডকোয়ার্টার।",
        points: [
          { title: "Sourav Originals", detail: "Logic Pro ব্যবহার করে নিজের গান তৈরি।" },
          { title: "The Brotherhood Band", detail: "কনসার্ট পারফর্মেন্স।" }
        ]
      },
      {
        id: "education",
        title: "শিক্ষা বিভাগ (NMM Institute)",
        subtitle: "৪ ধরণের কোর্স",
        color: "purple",
        desc: "শিক্ষা বিস্তার।",
        courses: [
          { title: "রিদিমিক রিহ্যাব বেসিকস", target: "ফিজিওথেরাপিস্ট", fees: "৩০০০-৫০০০ টাকা", bangla: "২ দিন" },
          { title: "স্ট্রেস ম্যানেজমেন্ট", target: "সবার জন্য", fees: "২০০০-৩০০০ টাকা", bangla: "১ দিন" },
          { title: "লজিক প্রো প্রোডাকশন", target: "মিউজিশিয়ান", fees: "৫০০০-৮০০০ টাকা", bangla: "৪ সপ্তাহ" },
          { title: "হোম-বেসড কেয়ার", target: "রোগীর পরিবার", fees: "১০০০ টাকা", bangla: "৪ ঘন্টা" }
        ]
      }
    ],
    roadmap: [
      { phase: "ফেইজ ১", title: "কোর্স এবং সার্টিফিকেশন", desc: "প্রস্তুতি", steps: [{name: "NMT", act: "ট্রেনিং", out: "লাইসেন্স", link: {l:"NMT",u:"#"}}, {name: "বার্কলে", act: "পড়ালেখা", out: "সার্টিফিকেট", link: {l:"Berklee",u:"#"}}, {name: "অ্যাপল", act: "এক্সাম", out: "প্রো", link: {l:"Apple",u:"#"}}] },
      { phase: "ফেইজ ২", title: "অ্যাপল ম্যাক স্টুডিও সেটআপ", desc: "সেটআপ", gear: [{name: "ম্যাক", why: "পাওয়ার", link: "#", icon: <Monitor/>}, {name: "ফোকাসরাইট", why: "সাউন্ড", link: "#", icon: <Zap/>}, {name: "ইয়ামাহা", why: "মনিটর", link: "#", icon: <Speaker/>}, {name: "ড্রামস", why: "বিট", link: "#", icon: <Music/>}, {name: "আইপ্যাড", why: "টচ", link: "#", icon: <MousePointer2/>}], steps: [{name: "স্টুডিও চালু", act: "শিফট ওপেন", out: "ইনকাম", link: {l:"বুকিং",u:"#"}}] },
      { phase: "ফেইজ ৩", title: "ক্লিনিক্যাল ও ব্যান্ডের শুরু", desc: "শুরু", steps: [{name: "রোগী দেখা", act: "থেরাপি", out: "টাকা", link: {l:"সার্ভিস",u:"#"}}, {name: "গান রিলিজ", act: "ব্যান্ড", out: "ব্র্যান্ড", link: {l:"গান",u:"#"}}] },
      { phase: "ফেইজ ৪", title: "শিক্ষা বিস্তার", desc: "গ্রোথ", steps: [{name: "কোর্স", act: "মার্কেটিং", out: "ফি", link: {l:"ভর্তি",u:"#"}}] }
    ],
    finance: [
      { source: "NMM ক্লিনিক্যাল ফিস", type: "একটিভ", freq: "প্রতিদিন" },
      { source: "Jam Mechanics ভাড়া", type: "প্যাসিভ", freq: "প্রতিদিন" },
      { source: "Institute কোর্স ফিস", type: "একটিভ", freq: "প্রতি মাসে" },
      { source: "অনলাইন রয়্যালটি", type: "প্যাসিভ", freq: "সবসময়" }
    ]
  }
};

// --- Logos ---
const PurrfectLogo = () => (
  <div className="w-12 h-12 relative flex items-center justify-center bg-slate-900 rounded-full border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
    <div className="absolute w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 opacity-80" />
    <div className="z-10 text-white font-bold text-xs tracking-tighter">PURR</div>
    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
  </div>
);

const MusicMechanicsLogo = () => (
  <div className="w-12 h-12 relative flex items-center justify-center bg-slate-900 rounded-lg border border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] transform rotate-3 hover:rotate-0 transition-all duration-300">
    <Music className="w-6 h-6 text-cyan-400 z-10" />
    <div className="absolute inset-0 border-2 border-dashed border-slate-600 rounded-lg animate-spin-slow" />
  </div>
);

const MotionMechanicsLogo = () => (
  <div className="w-10 h-10 relative flex items-center justify-center bg-emerald-950 rounded-full border border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]">
    <Activity className="w-5 h-5 text-emerald-400" />
  </div>
);

// --- Main Component ---

export default function MusicMechanicsCanvas() {
  const [activeVersion, setActiveVersion] = useState('mixed');
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiFeatureType, setAiFeatureType] = useState('neuro'); // 'neuro' or 'creative'

  const data = contentData[activeVersion];

  const getGradient = () => {
    switch(activeVersion) {
      case 'mixed': return 'from-slate-900 via-blue-950 to-slate-900';
      case 'english': return 'from-slate-950 via-slate-900 to-black';
      case 'bangla': return 'from-slate-900 via-emerald-950 to-slate-900';
      default: return 'from-slate-900 via-blue-900 to-black';
    }
  };

  const handleAiTrigger = (type) => {
    setAiFeatureType(type);
    setAiModalOpen(true);
    setAiResponse('');
    setAiPrompt('');
  };

  const generateGeminiResponse = async () => {
    if (!aiPrompt.trim()) return;
    setIsAiLoading(true);
    setAiResponse('');

    const systemPrompt = aiFeatureType === 'neuro' 
      ? "Act as a Neurologic Music Therapist (NMT). I will provide a patient condition. You will prescribe a specific 'Audio-Pharmaceutical' protocol including: 1. Recommended BPM (Beats Per Minute) or Frequency (Hz). 2. Best Instrument Texture (e.g., Cello, White Noise, Rhythmic Drums). 3. A brief clinical rationale based on NMT principles. Keep it concise, professional, and formatted clearly."
      : "Act as a Music Producer and Songwriter using Logic Pro X. I will provide a song vibe or theme. You will suggest: 1. A unique Chord Progression. 2. A specific sound design tip for Logic Pro X (e.g., using Alchemy or Sculpture). 3. A short 4-line chorus hook. Keep it creative and inspiring.";

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `User Input: ${aiPrompt}` }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] }
        })
      });

      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text || "System Error: Unable to generate prescription.";
      setAiResponse(text);
    } catch (error) {
      setAiResponse("Connection Error: Gemini Neural Link Offline.");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getGradient()} text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden relative`}>
      
      {/* AI MODAL */}
      {aiModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className={`w-full max-w-2xl bg-slate-900 border-2 ${aiFeatureType === 'neuro' ? 'border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.3)]' : 'border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.3)]'} rounded-2xl p-6 relative overflow-hidden`}>
            
            {/* Holographic BG */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${aiFeatureType === 'neuro' ? 'from-emerald-900 via-emerald-400 to-emerald-900' : 'from-blue-900 via-blue-400 to-blue-900'} animate-pulse`} />
            
            <button onClick={() => setAiModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X /></button>
            
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-3 rounded-full ${aiFeatureType === 'neuro' ? 'bg-emerald-900/50 text-emerald-400' : 'bg-blue-900/50 text-blue-400'}`}>
                {aiFeatureType === 'neuro' ? <Brain size={24} /> : <Sparkles size={24} />}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{aiFeatureType === 'neuro' ? 'AI Neuro-Architect' : 'The Digital Muse'}</h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest">{aiFeatureType === 'neuro' ? 'Powered by Gemini • Clinical Protocol Generator' : 'Powered by Gemini • Creative Block Breaker'}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  {aiFeatureType === 'neuro' ? 'Enter Patient Symptoms / Condition:' : 'Enter Song Vibe / Theme:'}
                </label>
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder={aiFeatureType === 'neuro' ? "e.g., Post-stroke gait freeze, High anxiety insomnia..." : "e.g., Dark Cyberpunk Rock, Melancholic Rain..."}
                    className="flex-1 bg-black/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    onKeyDown={(e) => e.key === 'Enter' && generateGeminiResponse()}
                  />
                  <button 
                    onClick={generateGeminiResponse}
                    disabled={isAiLoading || !aiPrompt}
                    className={`px-6 py-3 rounded-lg font-bold transition-all ${isAiLoading ? 'bg-slate-700 cursor-not-allowed' : aiFeatureType === 'neuro' ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
                  >
                    {isAiLoading ? <Loader2 className="animate-spin" /> : <ArrowRight />}
                  </button>
                </div>
              </div>

              {/* Output Area */}
              <div className="bg-black/40 border border-slate-800 rounded-xl p-6 min-h-[150px] max-h-[300px] overflow-y-auto">
                {isAiLoading ? (
                  <div className="flex flex-col items-center justify-center h-full space-y-3 text-slate-500">
                    <Bot className="animate-bounce w-8 h-8" />
                    <span className="text-xs animate-pulse">Analyzing Neural Patterns...</span>
                  </div>
                ) : aiResponse ? (
                  <div className="prose prose-invert prose-sm">
                    <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-slate-200">
                      {aiResponse}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-600 text-sm py-10">
                    Awaiting Input Data...
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <PurrfectLogo />
            <div className="h-8 w-px bg-slate-700 mx-2" />
            <MusicMechanicsLogo />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wider">
                MUSIC MECHANICS
              </h1>
              <p className="text-xs text-slate-400 tracking-widest uppercase">Master Blueprint v21.0</p>
            </div>
          </div>
          
          <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-700">
            {['mixed', 'english', 'bangla'].map((v) => (
              <button
                key={v}
                onClick={() => setActiveVersion(v)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeVersion === v 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="max-w-7xl mx-auto pt-28 pb-20 px-4 space-y-12">
        
        {/* Header Section */}
        <header className="text-center space-y-4 animate-fadeIn">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-cyan-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>SYSTEM ONLINE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-400">
            {data.title}
          </h2>
          <p className="text-slate-400 text-lg">{data.subtitle}</p>
        </header>

        {/* Executive Summary Grid */}
        <section className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors group">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="w-8 h-8 text-cyan-400 group-hover:animate-bounce" />
              <h3 className="text-2xl font-bold text-white">Executive Summary</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg mb-6 border-l-4 border-cyan-500 pl-4">
              {data.execSummary.intro}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.execSummary.qualifications.map((q, idx) => (
                <div key={idx} className="bg-black/40 p-4 rounded-xl border border-slate-800 hover:bg-slate-800/50 transition-all">
                  <div className="flex justify-between items-start mb-2">
                     <div className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-1">{q.label}</div>
                     {q.icon && <div className="opacity-80 scale-90">{q.icon}</div>}
                  </div>
                  <div className="text-white font-medium">{q.val}</div>
                  {q.bangla && <div className="text-slate-400 text-sm mt-2 font-noto">{q.bangla}</div>}
                  {q.link && <EvidenceLink label={q.link.label} url={q.link.url} />}
                </div>
              ))}
            </div>
          </div>
          
          {/* Authority Card */}
          <div className="md:col-span-4 space-y-4">
             <div className="bg-gradient-to-b from-slate-900 to-black border border-slate-700 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <User size={100} />
                </div>
                <h4 className="text-slate-400 text-sm uppercase tracking-widest mb-2">Central Command</h4>
                <div className="text-xl font-bold text-white mb-6">{data.authority.command}</div>
                
                <div className="space-y-3">
                  {data.authority.planets.map((planet, i) => (
                    <div key={i} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                      {planet.color === 'green' ? <MotionMechanicsLogo /> : 
                       planet.color === 'blue' ? <MusicMechanicsLogo /> : 
                       <div className="w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500 flex items-center justify-center"><GraduationCap size={18} className="text-purple-400"/></div>}
                      <div>
                        <div className={`font-bold text-${planet.color === 'green' ? 'emerald' : planet.color === 'blue' ? 'cyan' : 'purple'}-400`}>{planet.name}</div>
                        <div className="text-xs text-slate-300">{planet.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* The 4 Pillars */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center space-x-2">
             <Layers className="text-cyan-400" />
             <span>Operational Pillars</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {data.pillars.map((pillar) => (
              <div key={pillar.id} className={`bg-slate-900/80 border border-${pillar.color}-900/50 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all relative overflow-hidden group`}>
                 
                 {/* Feature specific glow */}
                 {pillar.aiFeature && (
                   <div className={`absolute -right-10 -top-10 w-40 h-40 ${pillar.aiFeature === 'neuro' ? 'bg-emerald-500/10' : 'bg-blue-500/10'} rounded-full blur-3xl animate-pulse`} />
                 )}

                 <div className="flex justify-between items-start mb-4 relative z-10">
                   <div>
                     <h4 className={`text-xl font-bold text-${pillar.color}-400`}>{pillar.title}</h4>
                     <p className={`text-${pillar.color}-200/60 text-sm`}>{pillar.subtitle}</p>
                   </div>
                   <div className={`text-${pillar.color}-500`}>
                     {pillar.id === 'clinical' ? <HeartPulse size={28} /> : 
                      pillar.id === 'commercial' ? <DollarSign size={28} /> : 
                      pillar.id === 'creative' ? <Mic size={28} /> : <GraduationCap size={28} />}
                   </div>
                 </div>

                 {/* GEMINI AI BUTTON */}
                 {pillar.aiFeature && (
                    <button 
                      onClick={() => handleAiTrigger(pillar.aiFeature)}
                      className={`w-full mb-6 flex items-center justify-center space-x-2 py-2 rounded-lg font-bold text-sm transition-all shadow-lg hover:scale-105 ${
                        pillar.aiFeature === 'neuro' 
                          ? 'bg-gradient-to-r from-emerald-900 to-emerald-700 border border-emerald-500 text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]' 
                          : 'bg-gradient-to-r from-blue-900 to-blue-700 border border-blue-500 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                      }`}
                    >
                      <Sparkles size={16} className="animate-spin-slow" />
                      <span>
                        {pillar.aiFeature === 'neuro' ? '✨ Launch AI Neuro-Architect' : '✨ Launch Digital Muse'}
                      </span>
                    </button>
                 )}

                 <div className="space-y-3 relative z-10">
                   {pillar.services && pillar.services.map((svc, i) => (
                     <div key={i} className={`p-3 rounded-lg bg-${pillar.color}-950/20 border border-${pillar.color}-900/30`}>
                       <div className="font-bold text-white text-sm">{svc.name}</div>
                       <div className="text-xs text-slate-400 mt-1">{svc.desc}</div>
                     </div>
                   ))}
                   {pillar.shifts && (
                     <div className="grid grid-cols-2 gap-2">
                       {pillar.shifts.map((shift, i) => (
                         <div key={i} className="text-center p-2 rounded bg-cyan-950/30 border border-cyan-900/30">
                           <div className="text-cyan-300 font-bold text-xs">{shift.name}</div>
                           <div className="text-[10px] text-slate-400">{shift.time}</div>
                         </div>
                       ))}
                     </div>
                   )}
                   {pillar.points && pillar.points.map((pt, i) => (
                     <div key={i} className="flex items-start space-x-2 text-slate-300 text-sm">
                       <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                       <span>{pt.title}: {pt.detail}</span>
                     </div>
                   ))}
                   {pillar.courses && pillar.courses.map((c, i) => (
                      <div key={i} className="flex justify-between text-sm border-b border-white/5 pb-1 mb-1">
                        <span className="text-slate-300">{c.title}</span>
                        <span className="text-orange-400 font-mono text-xs">{c.fees}</span>
                      </div>
                   ))}
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Section */}
        <section className="relative">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="text-blue-500" />
            <h3 className="text-2xl font-bold text-white">Strategic Roadmap</h3>
          </div>
          
          <div className="relative border-l-2 border-slate-700 ml-4 md:ml-6 space-y-8">
            {data.roadmap.map((phase, i) => (
              <div key={i} className="relative pl-8 md:pl-10 group">
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${i === 0 ? 'bg-cyan-500 border-cyan-300 shadow-[0_0_10px_cyan]' : 'bg-slate-900 border-slate-600'} group-hover:bg-blue-500 transition-colors`} />
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-2">
                   <span className="text-xs font-bold text-blue-400 px-2 py-1 bg-blue-900/30 rounded uppercase tracking-widest">{phase.phase}</span>
                   <h4 className="text-xl font-bold text-white mt-1 sm:mt-0">{phase.title}</h4>
                </div>
                
                <div className="bg-slate-900/40 p-4 rounded-lg border border-slate-800/50 mt-2">
                  <div className="flex flex-wrap gap-2">
                    {phase.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-slate-300 bg-black/30 px-3 py-1 rounded-full border border-slate-700/50">
                        <ArrowRight size={12} className="text-slate-500" />
                        <span>{step.name}</span>
                      </div>
                    ))}
                  </div>
                  {phase.gear && (
                    <div className="mt-4 grid grid-cols-5 gap-2">
                      {phase.gear.map((g, gi) => (
                        <div key={gi} className="bg-black/40 p-2 rounded border border-white/5 flex flex-col items-center justify-center text-center">
                          <div className="text-cyan-400 scale-75 mb-1">{g.icon}</div>
                          <div className="text-[9px] text-slate-400">{g.name}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Financials */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {data.finance.map((item, i) => (
             <div key={i} className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:-translate-y-1 transition-transform duration-300">
               <div className={`text-xs uppercase font-bold tracking-widest mb-2 ${item.type.includes('Active') || item.type.includes('একটিভ') ? 'text-green-400' : 'text-purple-400'}`}>
                 {item.type}
               </div>
               <div className="text-white font-bold text-lg mb-1">{item.source}</div>
               <div className="text-slate-400 text-sm">{item.freq}</div>
             </div>
           ))}
        </section>

      </main>
      
      {/* Footer */}
      <footer className="border-t border-slate-800 bg-black py-10 text-center">
         <div className="flex justify-center space-x-6 mb-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
           <PurrfectLogo />
           <MusicMechanicsLogo />
           <MotionMechanicsLogo />
         </div>
         <p className="text-slate-500 text-sm">© 2025 Purrfect Universe Ltd. All Rights Reserved.</p>
         <p className="text-slate-600 text-xs mt-2">Designed by Gemini Canvas Engine</p>
      </footer>
    </div>
  );
}
