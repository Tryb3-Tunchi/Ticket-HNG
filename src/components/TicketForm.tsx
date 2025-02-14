// import React, { useState, useEffect } from 'react';

// // Define a type for the ticket data
// interface Ticket {
//   fullName: string;
//   email: string;
//   avatar: string;
// }

// const TicketForm = () => {
//   const [fullName, setFullName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [avatar, setAvatar] = useState<string>('');
//   const [ticket, setTicket] = useState<Ticket | null>(null); // Explicitly define state type

//   // Form validation
//   const validateForm = () => {
//     return fullName && email && avatar && /^\S+@\S+\.\S+$/.test(email);
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateForm()) {
//       const ticketData: Ticket = { fullName, email, avatar }; // Define ticket data type
//       setTicket(ticketData);

//       // Persist form data to local storage
//       localStorage.setItem('ticketData', JSON.stringify(ticketData));
//     } else {
//       alert('Please fill in all fields correctly.');
//     }
//   };

//   // Handle input changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     if (name === 'fullName') setFullName(value);
//     if (name === 'email') setEmail(value);
//     if (name === 'avatar') setAvatar(value);
//   };

//   useEffect(() => {
//     const storedTicket = localStorage.getItem('ticketData');
//     if (storedTicket) {
//       setTicket(JSON.parse(storedTicket));
//     }
//   }, []);

//   return (
//     <div className="p-8 max-w-md mx-auto bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg">
//       <h1 className="text-3xl font-bold text-white text-center mb-6">Conference Ticket Generator</h1>

//       {!ticket ? (
//         <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
//           <div>
//             <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={fullName}
//               onChange={handleInputChange}
//               required
//               className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={handleInputChange}
//               required
//               className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
//             />
//           </div>

//           <div>
//             <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar URL</label>
//             <input
//               type="url"
//               id="avatar"
//               name="avatar"
//               value={avatar}
//               onChange={handleInputChange}
//               required
//               className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={!validateForm()}
//             className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
//           >
//             Generate Ticket
//           </button>
//         </form>
//       ) : (
//         <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold text-gray-700">Your Ticket</h2>
//           <div className="p-4 bg-gray-100 rounded-lg">
//             <p className="text-sm"><strong>Name:</strong> {ticket.fullName}</p>
//             <p className="text-sm"><strong>Email:</strong> {ticket.email}</p>
//             <div>
//               <strong>Avatar:</strong>
//               <img src={ticket.avatar} alt="Avatar" className="w-24 h-24 mt-2 rounded-full" />
//             </div>
//           </div>
//           <button
//             onClick={() => setTicket(null)}
//             className="mt-4 w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
//           >
//             Clear Ticket
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TicketForm;
