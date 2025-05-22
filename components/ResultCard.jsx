
// export default function ResultCard({ result }) {
//   if (!result) return null;

//   // Create a normalized scoring pattern map for easy lookup
//   const scoringPatternMap = {};
//   result.evaluation_criteria.scoring_pattern.forEach(item => {
//     const normalizedKey = item.component.trim().toLowerCase().replace(/\s+/g, ' ');
//     scoringPatternMap[normalizedKey] = item.max_score;
//   });

//   if (result.analysis.status === "rejected") {
//     return (
//       <div className="space-y-6">
//         <div className="p-6 bg-white rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-4">Project Rejected</h2>
          
//           <div className="text-4xl font-bold mb-2 text-red-600">
//             0/100
//           </div>
          
//           <div className="bg-red-50 p-4 rounded border border-red-200">
//             <h3 className="font-semibold text-red-800 mb-2">Rejection Reasons:</h3>
//             <ul className="list-disc pl-5 space-y-1">
//               {result.analysis.reasons.map((reason, index) => (
//                 <li key={index} className="text-red-700">{reason}</li>
//               ))}
//             </ul>
            
//             {result.analysis.error_locations && result.analysis.error_locations.length > 0 && (
//               <div className="mt-3">
//                 <h3 className="font-semibold text-red-800 mb-1">Error Locations:</h3>
//                 <ul className="list-disc pl-5 space-y-1">
//                   {result.analysis.error_locations.map((location, index) => (
//                     <li key={index} className="text-red-700">{location}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <div className="p-6 bg-white rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-4">Overall Evaluation</h2>
        
//         <div className="flex items-center mb-4">
//           <div className="text-4xl font-bold mr-4">
//             {result.analysis.score}/100
//           </div>
//           <div>
//             <div className="w-full bg-gray-200 rounded-full h-4">
//               <div
//                 className="bg-blue-600 h-4 rounded-full"
//                 style={{ width: `${result.analysis.score}%` }}
//               ></div>
//             </div>
//             <p className="mt-1 text-sm text-gray-600">
//               {result.analysis.overall_feedback}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="p-6 bg-white rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-4">Component Breakdown</h2>
        
//         {result.analysis.component_evaluations?.map((component, index) => {
//           // Normalize component name for comparison
//           const normalizedComponentName = component.component.trim().toLowerCase().replace(/\s+/g, ' ');
//           const maxScore = scoringPatternMap[normalizedComponentName] || 
//                          result.evaluation_criteria.scoring_pattern[index]?.max_score || 
//                          '?';

//           return (
//             <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="font-medium">{component.component}</h3>
//                 <span className="font-bold">
//                   {component.score}/{maxScore}
//                 </span>
//               </div>
//               <p className="text-sm text-gray-600 mb-1">
//                 <strong>Feedback:</strong> {component.feedback}
//               </p>
//               {component.suggestions && (
//                 <p className="text-sm text-gray-600">
//                   <strong>Suggestions:</strong> {component.suggestions}
//                 </p>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }







// 'use client';

// import { useState } from 'react';

// export default function ResultCard({ result }) {
//   if (!result) return null;

//   // Create a normalized scoring pattern map for easy lookup
//   const scoringPatternMap = {};
//   result.evaluation_criteria.scoring_pattern.forEach(item => {
//     const normalizedKey = item.component.trim().toLowerCase().replace(/\s+/g, ' ');
//     scoringPatternMap[normalizedKey] = item.max_score;
//   });

//   const [expandedComponents, setExpandedComponents] = useState({});
//   const [retrievedCode, setRetrievedCode] = useState({});
//   const [loadingCodes, setLoadingCodes] = useState({});

//   const toggleComponent = async (componentName) => {
//     setExpandedComponents(prev => ({
//       ...prev,
//       [componentName]: !prev[componentName]
//     }));

//     // Fetch code if not already loaded and component is being expanded
//     if (!retrievedCode[componentName] && !expandedComponents[componentName]) {
//       try {
//         setLoadingCodes(prev => ({ ...prev, [componentName]: true }));
//         const response = await fetch(
//           `https://official-ta-project-eval-backend.onrender.com/retrieved-code/${encodeURIComponent(componentName)}`
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setRetrievedCode(prev => ({
//             ...prev,
//             [componentName]: data
//           }));
//         }
//       } catch (error) {
//         console.error(`Error fetching code for ${componentName}:`, error);
//       } finally {
//         setLoadingCodes(prev => ({ ...prev, [componentName]: false }));
//       }
//     }
//   };

//   if (result.analysis.status === "rejected") {
//     return (
//       <div className="space-y-6">
//         <div className="p-6 bg-white rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-4">Project Rejected</h2>
          
//           <div className="text-4xl font-bold mb-2 text-red-600">
//             0/100
//           </div>
          
//           <div className="bg-red-50 p-4 rounded border border-red-200">
//             <h3 className="font-semibold text-red-800 mb-2">Rejection Reasons:</h3>
//             <ul className="list-disc pl-5 space-y-1">
//               {result.analysis.reasons.map((reason, index) => (
//                 <li key={index} className="text-red-700">{reason}</li>
//               ))}
//             </ul>
            
//             {result.analysis.error_locations && result.analysis.error_locations.length > 0 && (
//               <div className="mt-3">
//                 <h3 className="font-semibold text-red-800 mb-1">Error Locations:</h3>
//                 <ul className="list-disc pl-5 space-y-1">
//                   {result.analysis.error_locations.map((location, index) => (
//                     <li key={index} className="text-red-700">{location}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <div className="p-6 bg-white rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-4">Overall Evaluation</h2>
        
//         <div className="flex items-center mb-4">
//           <div className="text-4xl font-bold mr-4">
//             {result.analysis.score}/100
//           </div>
//           <div>
//             <div className="w-full bg-gray-200 rounded-full h-4">
//               <div
//                 className="bg-blue-600 h-4 rounded-full"
//                 style={{ width: `${result.analysis.score}%` }}
//               ></div>
//             </div>
//             <p className="mt-1 text-sm text-gray-600">
//               {result.analysis.overall_feedback}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="p-6 bg-white rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-4">Component Breakdown</h2>
        
//         {result.analysis.component_evaluations?.map((component, index) => {
//           // Normalize component name for comparison
//           const normalizedComponentName = component.component.trim().toLowerCase().replace(/\s+/g, ' ');
//           const maxScore = scoringPatternMap[normalizedComponentName] || 
//                          result.evaluation_criteria.scoring_pattern[index]?.max_score || 
//                          '?';

//           return (
//             <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="font-medium">{component.component}</h3>
//                 <span className="font-bold">
//                   {component.score}/{maxScore}
//                 </span>
//               </div>
//               <button
//                 onClick={() => toggleComponent(component.component)}
//                 className="text-sm text-blue-600 hover:text-blue-800 mb-2"
//               >
//                 {expandedComponents[component.component] ? 'Hide Code' : 'Show Relevant Code'}
//               </button>
              
//               {expandedComponents[component.component] && (
//                 <div className="mt-2 bg-gray-50 p-3 rounded border border-gray-200">
//                   {loadingCodes[component.component] ? (
//                     <p>Loading code...</p>
//                   ) : retrievedCode[component.component] ? (
//                     <div>
//                       <h4 className="font-medium mb-2">Relevant Files:</h4>
//                       <ul className="list-disc pl-5 mb-3">
//                         {retrievedCode[component.component].relevant_files.map((file, i) => (
//                           <li key={i}>{file}</li>
//                         ))}
//                       </ul>
                      
//                       <h4 className="font-medium mb-2">Code Contents:</h4>
//                       {Object.entries(retrievedCode[component.component].code_contents).map(([file, content]) => (
//                         <div key={file} className="mb-4">
//                           <h5 className="font-medium text-sm mb-1">{file}</h5>
//                           <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
//                             {content}
//                           </pre>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p>No code available for this component</p>
//                   )}
//                 </div>
//               )}
              
//               <p className="text-sm text-gray-600 mb-1">
//                 <strong>Feedback:</strong> {component.feedback}
//               </p>
//               {component.suggestions && (
//                 <p className="text-sm text-gray-600">
//                   <strong>Suggestions:</strong> {component.suggestions}
//                 </p>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }









'use client';

import { useState } from 'react';

export default function ResultCard({ result }) {
  if (!result) return null;

  // Create a normalized scoring pattern map for easy lookup
  const scoringPatternMap = {};
  result.evaluation_criteria.scoring_pattern.forEach(item => {
    const normalizedKey = item.component.trim().toLowerCase().replace(/\s+/g, ' ');
    scoringPatternMap[normalizedKey] = item.max_score;
  });

  const [expandedComponents, setExpandedComponents] = useState({});
  const [retrievedCode, setRetrievedCode] = useState({});
  const [loadingCodes, setLoadingCodes] = useState({});

  const toggleComponent = async (componentName) => {
    setExpandedComponents(prev => ({
      ...prev,
      [componentName]: !prev[componentName]
    }));

    if (!retrievedCode[componentName] && !expandedComponents[componentName]) {
      try {
        setLoadingCodes(prev => ({ ...prev, [componentName]: true }));
        const response = await fetch(
          `https://official-ta-project-eval-backend.onrender.com/retrieved-code/${encodeURIComponent(componentName)}`
        );
        if (response.ok) {
          const data = await response.json();
          setRetrievedCode(prev => ({
            ...prev,
            [componentName]: data
          }));
        }
      } catch (error) {
        console.error(`Error fetching code for ${componentName}:`, error);
      } finally {
        setLoadingCodes(prev => ({ ...prev, [componentName]: false }));
      }
    }
  };

  const renderBulletedText = (text) => {
    if (!text) return null;
    
    // Split by lines that start with '-' or '*' or other bullet indicators
    const lines = text.split('\n').filter(line => line.trim());
    
    return (
      <ul className="list-disc pl-5 space-y-1">
        {lines.map((line, index) => (
          <li key={index}>{line.replace(/^[-*]\s*/, '').trim()}</li>
        ))}
      </ul>
    );
  };

  if (result.analysis.status === "rejected") {
    return (
      <div className="space-y-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Project Rejected</h2>
          
          <div className="text-4xl font-bold mb-2 text-red-600">
            0/100
          </div>
          
          <div className="bg-red-50 p-4 rounded border border-red-200">
            <h3 className="font-semibold text-red-800 mb-2">Rejection Reasons:</h3>
            {renderBulletedText(result.analysis.reasons.join('\n'))}
            
            {result.analysis.error_locations && result.analysis.error_locations.length > 0 && (
              <div className="mt-3">
                <h3 className="font-semibold text-red-800 mb-1">Error Locations:</h3>
                {renderBulletedText(result.analysis.error_locations.join('\n'))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Overall Evaluation</h2>
        
        <div className="flex items-center mb-4">
          <div className="text-4xl font-bold mr-4">
            {result.analysis.score}/100
          </div>
          <div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${result.analysis.score}%` }}
              ></div>
            </div>
            <div className="mt-1 text-sm text-gray-600">
              {renderBulletedText(result.analysis.overall_feedback)}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Component Breakdown</h2>
        
        {result.analysis.component_evaluations?.map((component, index) => {
          const normalizedComponentName = component.component.trim().toLowerCase().replace(/\s+/g, ' ');
          const maxScore = scoringPatternMap[normalizedComponentName] || 
                         result.evaluation_criteria.scoring_pattern[index]?.max_score || 
                         '?';

          return (
            <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{component.component}</h3>
                <span className="font-bold">
                  {component.score}/{maxScore}
                </span>
              </div>
              <button
                onClick={() => toggleComponent(component.component)}
                className="text-sm text-blue-600 hover:text-blue-800 mb-2"
              >
                {expandedComponents[component.component] ? 'Hide Code' : 'Show Relevant Code'}
              </button>
              
              {expandedComponents[component.component] && (
                <div className="mt-2 bg-gray-50 p-3 rounded border border-gray-200">
                  {loadingCodes[component.component] ? (
                    <p>Loading code...</p>
                  ) : retrievedCode[component.component] ? (
                    <div>
                      <h4 className="font-medium mb-2">Relevant Files:</h4>
                      <ul className="list-disc pl-5 mb-3">
                        {retrievedCode[component.component].relevant_files.map((file, i) => (
                          <li key={i}>{file}</li>
                        ))}
                      </ul>
                      
                      <h4 className="font-medium mb-2">Code Contents:</h4>
                      {Object.entries(retrievedCode[component.component].code_contents).map(([file, content]) => (
                        <div key={file} className="mb-4">
                          <h5 className="font-medium text-sm mb-1">{file}</h5>
                          <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
                            {content}
                          </pre>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No code available for this component</p>
                  )}
                </div>
              )}
              
              <div className="text-sm text-gray-600 mb-1">
                <strong>Feedback:</strong> 
                {renderBulletedText(component.feedback)}
              </div>
              {component.suggestions && (
                <div className="text-sm text-gray-600">
                  <strong>Suggestions:</strong>
                  {renderBulletedText(component.suggestions)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}