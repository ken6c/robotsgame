import React from 'react';

function Performance({ point=10,win=5,lost=2 }) {
    return (
        <div id="performance" >
            <div class=" flex justify-between ">
                <ul class="flex">
                    <li>
                        <a href={ win } >Win: { win }</a>
                    </li>
                    <li>
                        <a href={ lost } >Lost: { lost }</a>
                    </li>
                </ul>
                <ul class="flex items-center">
                    <li>
                        <a href={ win } >Score:{ point }</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Performance;