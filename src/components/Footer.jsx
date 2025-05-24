// // // export default function Footer() {
// // //     return (
// // //         <footer className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-5">
// // //             <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
// // //                 <h1 className="text-2xl font-bold italic mb-4 md:mb-0">
// // //                     Portfolio
// // //                 </h1>
// // //                 <p className="text-sm text-center md:text-right">
// // //                     © 2025 My Website. All rights reserved.
// // //                 </p>
// // //             </div>
// // //         </footer>
// // //     );
// // // }


// // export default function Footer() {
// //     return (
// //         <footer className="bg-gradient-to-r from-purple-400 to-blue-700 text-white py-5">
// //             <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
// //                 <div className="text-center md:text-left mb-4 md:mb-0">
// //                     <h1 className="text-2xl font-bold italic">Portfolio</h1>
                    
// //                 </div>
// //                 <p className="text-sm mt-1">📧 email@example.com</p>
// //                     <p className="text-sm">📞 +91 12345 67890</p>
// //                 <div>

// //                 </div>

// //                 <p className="text-sm text-center md:text-right">
// //                     © 2025 My Website. All rights reserved.
// //                 </p>
// //             </div>
// //         </footer>
// //     );
// // }




// export default function Footer() {
//     return (
//         <footer className="bg-gradient-to-r from-purple-400 to-blue-700 text-white py-6">
//             <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                
//                 {/* Logo or Site Name */}
//                 <div className="text-center md:text-left">
//                     <h1 className="text-2xl font-bold italic">Portfolio</h1>
//                 </div>

//                 {/* Contact Info */}
//                 <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
//                     <div className="flex items-center gap-2">
//                         <span role="img" aria-label="email">📧</span>
//                         <span>email@example.com</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <span role="img" aria-label="phone">📞</span>
//                         <span>+91 12345 67890</span>
//                     </div>
//                 </div>

//                 {/* Copyright */}
//                 <div className="text-center md:text-right text-sm">
//                     © 2025 My Website. All rights reserved.
//                 </div>
//             </div>
//         </footer>
//     );
// }



import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-400 to-blue-700 text-white py-6">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                
                {/* Site Name / Logo */}
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold italic">Portfolio</h1>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
                    <a
                        href="mailto:email@example.com"
                        className="flex items-center gap-2 hover:text-gray-200 transition"
                    >
                        <FaEnvelope className="text-lg" />
                        aditiguin29@gmail.com
                    </a>
                    <a
                        href="tel:+911234567890"
                        className="flex items-center gap-2 hover:text-gray-200 transition"
                    >
                        <FaPhone className="text-lg transform rotate-90" />
                        7209710749
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right text-sm">
                    © 2025 My Website. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
