// import React from 'react';

// function Sidebar({ onCategorySelect, selectedCategory }) {
//   const categories = ['All', 'System Units', 'Desktop PCs', 'Workstations', 'Gaming PCs', 
//     'Mini PCs', 'Monitors', 'Computer Accessories', 'All-in-One Computers', 
//     'Laptops', 'Macs', 'Customized PCs'];

//   const handleCategoryClick = (category) => {
//     console.log('Category clicked:', category);
//     if (typeof onCategorySelect !== 'function') {
//       console.error('onCategorySelect is not a function:', onCategorySelect);
//       return;
//     }
//     onCategorySelect(category);
//   };

//   return (
//     <aside className="w-64">
//       <ul>
//         {categories.map((category, index) => (
//           <li
//             key={index}
//             onClick={() => handleCategoryClick(category)}
//             className={`cursor-pointer p-4 hover:bg-gray-200 ${selectedCategory === category ? 'bg-gray-300' : ''}`}
//           >
//             {category}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }

// export default Sidebar;