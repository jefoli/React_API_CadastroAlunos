import React from "react";
import { FaHome, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from "./styled";

import { Link } from "react-router-dom";

export default function Header(){
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24}/>
      </Link>
      <Link to="/register">
        <FaSignOutAlt size={24}/>
      </Link>
      <Link to="/login">
        <FaUserAlt size={24}/>
      </Link>
    </Nav>
  );
}
