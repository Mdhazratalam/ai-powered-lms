// import React, { useState, useMemo } from "react";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
// import "reactflow/dist/style.css";

// const CareerWorkflow = () => {
//   const [resumeText, setResumeText] = useState("");
//   const [educationLevel, setEducationLevel] = useState("12th pass");
//   const [targetRole, setTargetRole] = useState("Frontend Developer");

//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState(null);

//   const navigate = useNavigate();

//   const handleGenerate = async () => {
//     if (!resumeText.trim()) {
//       alert("Please paste your resume or describe your skills.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await axios.post(
//         `${serverUrl}/api/ai/career-workflow`,
//         { resumeText, educationLevel, targetRole },
//         { withCredentials: true }
//       );

//       setData(res.data);
//     } catch (error) {
//   console.error(error);
//   if (error.response && error.response.data && !error.response.data.success) {
//     alert(error.response.data.summary || "AI temporarily unavailable.");
//   } else {
//     alert("Something went wrong. Please try again.");
//   }
// } finally {
//   setLoading(false);
// }
//   };

//   // React Flow nodes & edges
//   const { nodes, edges } = useMemo(() => {
//     if (!data || !data.roadmap) return { nodes: [], edges: [] };

//     const baseX = 0;
//     const baseY = 0;
//     const gapX = 260;

//     const nodes = data.roadmap.map((week, index) => ({
//       id: week.id || `week-${index + 1}`,
//       position: { x: baseX + index * gapX, y: baseY },
//       data: {
//         label: week.title,
//         description: week.description,
//         tasks: week.tasks || [],
//         weekNumber: index + 1,
//       },
//       style: {
//         padding: 10,
//         borderRadius: 12,
//         border: "1px solid #ddd",
//         background: "#ffffff",
//         width: 220,
//       },
//     }));

//     const edges = data.roadmap
//       .slice(1)
//       .map((week, index) => ({
//         id: `e-${data.roadmap[index].id}-${week.id}`,
//         source: data.roadmap[index].id || `week-${index + 1}`,
//         target: week.id || `week-${index + 2}`,
//         type: "smoothstep",
//       }));

//     return { nodes, edges };
//   }, [data]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-4 py-8 flex flex-col items-center">
//       <div className="w-full max-w-5xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 relative">
//         <FaArrowLeftLong
//           className="text-white w-6 h-6 cursor-pointer absolute left-4 top-4"
//           onClick={() => navigate("/")}
//         />

//         <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
//           AI Career Workflow
//         </h1>
//         <p className="text-sm text-gray-300 text-center mb-6">
//           Paste your resume or profile. AI will generate focus areas, suggested
//           fields, and a 10–12 week roadmap with recommended courses.
//         </p>

//         {/* Top inputs */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-xs mb-1 text-gray-300">
//               Education Level
//             </label>
//             <input
//               type="text"
//               value={educationLevel}
//               onChange={(e) => setEducationLevel(e.target.value)}
//               className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 text-sm focus:outline-none focus:border-[#CB99C7]"
//               placeholder='e.g. "12th pass", "B.Tech CSE"'
//             />
//           </div>
//           <div>
//             <label className="block text-xs mb-1 text-gray-300">
//               Target Role
//             </label>
//             <input
//               type="text"
//               value={targetRole}
//               onChange={(e) => setTargetRole(e.target.value)}
//               className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 text-sm focus:outline-none focus:border-[#CB99C7]"
//               placeholder='e.g. "Frontend Developer", "Data Analyst"'
//             />
//           </div>
//         </div>

//         {/* Resume textarea */}
//         <div className="mb-4">
//           <label className="block text-xs mb-1 text-gray-300">
//             Resume / Profile Description
//           </label>
//           <textarea
//             rows={6}
//             value={resumeText}
//             onChange={(e) => setResumeText(e.target.value)}
//             className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 text-sm focus:outline-none focus:border-[#CB99C7]"
//             placeholder="Paste your resume content here or describe your skills, projects, and interests..."
//           />
//         </div>

//         <button
//           onClick={handleGenerate}
//           disabled={loading}
//           className="w-full sm:w-auto px-6 py-2 rounded-full bg-[#CB99C7] text-black font-semibold text-sm hover:bg-[#e1aede] disabled:opacity-60"
//         >
//           {loading ? "Generating Workflow..." : "Generate Workflow"}
//         </button>
//       </div>

//       {/* Summary / Focus / Fields */}
//       {data && data.success && (
//         <div className="w-full max-w-6xl mt-8 space-y-6">
//           {data.summary && (
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
//               <h2 className="text-lg font-semibold mb-2 text-[#CB99C7]">
//                 Career Summary
//               </h2>
//               <p className="text-sm text-gray-200 leading-relaxed">
//                 {data.summary}
//               </p>
//             </div>
//           )}

//           {data.focusAreas && data.focusAreas.length > 0 && (
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
//               <h2 className="text-lg font-semibold mb-2 text-[#CB99C7]">
//                 Focus Areas for You
//               </h2>
//               <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
//                 {data.focusAreas.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {data.suggestedFields && data.suggestedFields.length > 0 && (
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
//               <h2 className="text-lg font-semibold mb-2 text-[#CB99C7]">
//                 Suggested Career Fields
//               </h2>
//               <div className="flex flex-wrap gap-2 text-sm">
//                 {data.suggestedFields.map((field, idx) => (
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

//           {/* React Flow Diagram */}
//           {nodes.length > 0 && (
//             <div className="bg-white rounded-2xl p-4 h-[400px]">
//               <h2 className="text-lg font-semibold mb-2 text-black">
//                 {data?.targetRole || targetRole} – Roadmap
//               </h2>
//               <div className="w-full h-[340px] bg-gray-50 rounded-xl">
//                 <ReactFlow nodes={nodes} edges={edges} fitView>
//                   <MiniMap />
//                   <Controls />
//                   <Background gap={16} color="#eee" />
//                 </ReactFlow>
//               </div>
//             </div>
//           )}

//           {/* Recommended Courses */}
//           {data.courses && data.courses.length > 0 && (
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
//               <h2 className="text-lg font-semibold mb-4 text-[#CB99C7]">
//                 Recommended Courses from LMS
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {data.courses.map((course) => (
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

// export default CareerWorkflow;
