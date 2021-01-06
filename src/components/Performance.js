import React from 'react';

function Performance({ point=10,win=5,lost=2,follower=7 }) {
    return (
        <div id="performance" >
            <div className=" flex justify-between ">
                <ul className="flex">
                    <li>
                        <a href={ win } >Win: { win }</a>
                    </li>
                    <li>
                        <a href={ lost } >Lost: { lost }</a>
                    </li>
                    <li>
                        <a href={ follower } >Follower: { follower }</a>
                    </li>
                </ul>
                <ul className="flex items-center">
                    <li>
                        <a href={ win } >Score:{ point }</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Performance;