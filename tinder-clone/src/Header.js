import React from 'react';
import "./header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from  '@material-ui/icons/Forum';

function header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon  fontSize="large" className="header_icon" />
            </IconButton>

            <img
            className="header_logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-768x432.png" 
            alt="" >
            </img>

            <IconButton>
                <ForumIcon fontSize="large" className="header_icon"  />
            </IconButton>
        </div>

    )
}

export default header 
