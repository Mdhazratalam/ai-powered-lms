// import React, { useState } from "react";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeftLong } from "react-icons/fa6";

// const CareerCoach = () => {
//   const [resumeText, setResumeText] = useState("");
//   const [educationLevel, setEducationLevel] = useState("12th pass");
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     if (!resumeText.trim()) {
//       alert("Please paste your resume or describe your skills.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await axios.post(
//         `${serverUrl}/api/ai/career-coach`,
//         { resumeText, educationLevel },
//         { withCredentials: true }
//       );
//       setResult(res.data);
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-4 py-10 flex flex-col items-center">
//       <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 relative">
//         <FaArrowLeftLong
//           className="text-white w-6 h-6 cursor-pointer absolute left-4 top-4"
//           onClick={() => navigate("/")}
//         />

//         <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
//           AI Career Coach
//         </h1>
//         <p className="text-sm text-gray-300 text-center mb-6">
//           Paste your resume or describe your skills and projects.  
//           AI will suggest focus areas, career fields, and matching courses.
//         </p>

//         {/* Education Level */}
//         <div className="mb-4">
//           <label className="block text-sm mb-1 text-gray-300">
//             Education Level (example: "12th pass", "B.Tech CSE", "BCom", etc.)
//           </label>
//           <input
//             type="text"
//             value={educationLevel}
//             onChange={(e) => setEducationLevel(e.target.value)}
//             className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 text-sm focus:outline-none focus:border-[#CB99C7]"
//           />
//         </div>

//         {/* Resume Text */}
//         <div className="mb-4">
//           <label className="block text-sm mb-1 text-gray-300">
//             Resume / Profile Description
//           </label>
//           <textarea
//             rows={6}
//             value={resumeText}
//             onChange={(e) => setResumeText(e.target.value)}
//             className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 text-sm focus:outline-none focus:border-[#CB99C7]"
//             placeholder="Paste your resume here or write about your skills, projects, interests..."
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className="mt-2 w-full sm:w-auto px-6 py-2 rounded-full bg-[#CB99C7] text-black font-semibold text-sm hover:bg-[#e1aede] disabled:opacity-60"
//         >
//           {loading ? "Analyzing..." : "Ask AI Career Coach"}
//         </button>
//       </div>

//       {/* Result Section */}
//       {result && result.success && (
//         <div className="w-full max-w-5xl mt-10 space-y-6">
//           {/* Summary */}
//           {result.summary && (
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
//               <h2 className="text-lg font-semibold mb-2 text-[#CB99C7]">
//                 Career Summary
//               </h2>
//               <p className="text-sm text-gray-200 leading-relaxed">
//                 {result.summary}
//               </p>
//             </div>
//           )}

//           {/* Focus Areas */}
//           {result.focusAreas && result.focusAreas.length > 0 && (
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
//               <h2 className="text-lg font-semibold mb-2 text-[#CB99C7]">
//                 Focus Areas for You
//               </h2>
//               <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
//                 {result.focusAreas.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Suggested Fields */}
//           {result.suggestedFields && result.suggestedFields.length > 0 && (
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
//               <h2 className="text-lg font-semibold mb-2 text-[#CB99C7]">
//                 Suggested Career Fields
//               </h2>
//               <div className="flex flex-wrap gap-2 text-sm">
//                 {result.suggestedFields.map((field, idx) => (
//                   <span
//                     key={idx}
//                     className="px-3 py-1 rounded-full bg-gray-800 border border-gray-600"
//                   >
//                     {field}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Recommended Courses */}
//           {result.courses && result.courses.length > 0 && (
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
//               <h2 className="text-lg font-semibold mb-4 text-[#CB99C7]">
//                 Recommended Courses for You
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {result.courses.map((course) => (
//                   <div
//                     key={course._id}
//                     className="bg-white text-black p-4 rounded-xl cursor-pointer hover:shadow-lg hover:bg-gray-100 transition"
//                     onClick={() => navigate(`/viewcourse/${course._id}`)}
//                   >
//                     <h3 className="font-semibold text-sm mb-1">
//                       {course.title}
//                     </h3>
//                     <p className="text-xs text-gray-600">
//                       {course.category} • {course.level}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CareerCoach;
