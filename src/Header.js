import React from "react";

class Header extends React.Component{
    render(){
        return(<header className="container">
            <aside>
                <a href="index.html" className="logo">MySocial</a>
            </aside>
            <form action="search.html" className="search mainCol">
                <input type="text" placeholder="Search"/>
                <button className="searchIcon">
                    <img src="images/search.png" width="18" height="18" alt="searchIcon"/>
                </button>
            </form>
            <nav className="navigate aside">
                <a href="profile.html"><img width="26" height="26" src="images/avatar.png" alt="avatar"/></a>
                <a href="messages.html"><img width="26" height="26" src="images/messages.png" alt="messages"/></a>
                <a href="addFriend.html"><img width="26" height="26" src="images/friends.png" alt="friends"/></a>
            </nav>
        </header>)
    }
}

export default Header