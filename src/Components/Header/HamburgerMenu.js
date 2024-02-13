// import React, { useState } from "react";
// import "./HamburgerMenu.css";
// import logo from "./../../image/logo.webp";
// import { IoClose } from "react-icons/io5";
// import { CiSearch } from "react-icons/ci";
// import { IoIosArrowDown } from "react-icons/io";
// import { Link } from "react-router-dom";
// import HamburgerMenuData from "./HamburgerMenuData";

// export default function HamburgerMenu() {
//   // برای بررسی باز یا بسته بودن ساید بار این استیت رو نوشتم
//   const [open, setOpen] = useState(false);
//   const [datas, setDatas] = useState(HamburgerMenuData);

//   return (
//     <div className="side-bar">
//       <div className="close-box">
//         <img src={logo} alt="logo" />
//         <IoClose size={25} />
//       </div>

//       <div className="search-box">
//         <input type="text" placeholder="جستجو" />
//         <CiSearch size={25} />
//       </div>

//       <div className={open ? "side-bar-item open" : "side-bar-item"}>
//         {datas.map((data) => (
//           <>
//             <div className="side-bar-title" onClick={() => setOpen(!open)}>
//               <span>{data.title}</span>
//               <IoIosArrowDown className="toggle-btn" />
//             </div>

//             <div className="side-bar-content">
//               {data.children.map((item, index) => (
//                 <Link key={index} className="link" to={item.path}>
//                   {item.title}
//                 </Link>
//               ))}
//             </div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "./HamburgerMenu.css";
// import logo from "./../../image/logo.webp";
// import { IoClose } from "react-icons/io5";
// import { CiSearch } from "react-icons/ci";
// import { IoIosArrowDown } from "react-icons/io";
// import { Link } from "react-router-dom";
// import HamburgerMenuData from "./HamburgerMenuData";

// export default function HamburgerMenu() {
//   // برای بررسی باز یا بسته بودن ساید بار این استیت رو نوشتم
//   const [datas, setDatas] = useState(HamburgerMenuData);
//   const [open, setOpen] = useState(Array(datas.length).fill(false));

//   const handleToggle = (dataIndex) => {
//     const newOpenState = [...open];
//     newOpenState[dataIndex] = !newOpenState[dataIndex];
//     setOpen(newOpenState);
//   };

//   return (
//     <div className="side-bar">
//       <div className="close-box">
//         <img src={logo} alt="logo" />
//         <IoClose size={25} />
//       </div>

//       <div className="search-box">
//         <input type="text" placeholder="جستجو" />
//         <CiSearch size={25} />
//       </div>

//       {open && (
//         <div className={open ? "side-bar-item open" : "side-bar-item"}>
//           {datas.map((data, dataIndex) => (
//             <div key={dataIndex}>
//               <div
//                 className="side-bar-title"
//                 onClick={() => handleToggle(dataIndex)}
//               >
//                 <span>{data.title}</span>
//                 <IoIosArrowDown className="toggle-btn" />
//               </div>

//               {open[dataIndex] && (
//                 <div className="side-bar-content">
//                   {data.children.map((item, index) => (
//                     <Link key={index} className="link" to={item.path}>
//                       {item.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import "./HamburgerMenu.css";
import logo from "./../../image/logo.webp";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import HamburgerMenuData from "./HamburgerMenuData";

export default function HamburgerMenu({ isOpen, onClose }) {
  // برای بررسی باز یا بسته بودن ساید بار این استیت رو نوشتم
  const [datas, setDatas] = useState(HamburgerMenuData);
  const [open, setOpen] = useState(Array(datas.length).fill(false));

  useEffect(() => {
    // اگر سایدبار بسته شده باشد، باز کردن همه گزینه‌ها را پاک کنید
    if (!isOpen) {
      setOpen(Array(datas.length).fill(false));
    }
  }, [isOpen, datas]);

  const handleToggle = (dataIndex) => {
    const newOpenState = [...open];
    newOpenState[dataIndex] = !newOpenState[dataIndex];
    setOpen(newOpenState);
  };

  const closeHandler = () => {
    setOpen(false);
    onClose();
  };

  return (
    <div className={`side-bar ${isOpen ? "open" : ""}`}>
      <div className="close-box">
        <img src={logo} alt="logo" />
        <IoClose size={25} onClick={closeHandler} />
      </div>

      <div className="search-box">
        <input type="text" placeholder="جستجو" />
        <CiSearch size={25} />
      </div>

      {open && (
        <div className={open ? "side-bar-item open" : "side-bar-item"}>
          {datas.map((data, dataIndex) => (
            <div key={dataIndex}>
              <div
                className="side-bar-title"
                onClick={() => handleToggle(dataIndex)}
              >
                <span>{data.title}</span>
                <IoIosArrowDown className="toggle-btn" />
              </div>

              {open[dataIndex] && (
                <div className="side-bar-content">
                  {data.children.map((item, index) => (
                    <Link key={index} className="link" to={item.path}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
