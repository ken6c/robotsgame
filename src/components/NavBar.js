import React from 'react';

function NavBar({ howToPlay,gameRules,login,register,logout,userName }) {
    return (
        <div >
            <nav id="clnav" class=" flex justify-between">
                <ul class="flex ">
                    <li>
                        <a href={ howToPlay } >How To Play</a>
                    </li>
                    <li>
                        <a href={ gameRules } >Game Rules</a>
                    </li>
                </ul>

                <ul class="flex">
                    {/* <li>
                        <a href="" class="p-3">{ userName }</a>
                    </li>
                    <li>
                        <form action={ logout } method="post" class="p-3 inline">
                            <input type="submit" name="Logout" />
                        </form>

                    </li> */}
                    <li>
                    <a href={ login } >Login</a>
                    </li>
                    <li>
                        <a href={ register } >Register</a>
                    </li>                  
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;