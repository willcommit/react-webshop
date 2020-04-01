import React from 'react';

import logo from '../images/logo.png';
import { StyledHeader, StyledLogo } from '../styles/StyledHeader'

const Header = () => (

<StyledHeader>
    <div className="header-content">
        <StyledLogo src={logo} alt="furuno-logo"/>
    </div>
</StyledHeader>

)

export default Header;