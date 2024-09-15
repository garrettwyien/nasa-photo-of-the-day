import React from 'react';

const Nav = (props) => {
    // const left = '<<';
    // const right = '>>';
    return (
        <nav>
            {/* <a href="#">{left}</a> */}
            <a href="https://apod.nasa.gov/apod/archivepix.html"> Archive </a>
            <a href="https://apod.nasa.gov/apod/lib/apsubmit2015.html"> Submissions </a>
            <a href="https://apod.nasa.gov/apod/lib/aptree.html"> Index </a>
            <a href="https://antwrp.gsfc.nasa.gov/cgi-bin/apod/apod_search"> Search </a>
            <a href="https://apod.nasa.gov/apod/calendar/allyears.html"> Calendar </a>
            <a href="https://apod.nasa.gov/apod.rss">RSS</a>
            <a href="https://apod.nasa.gov/apod/lib/edlinks.html"> Education </a>
            <a href="https://apod.nasa.gov/apod/lib/about_apod.html"> About APOD </a>
            <a href="http://asterisk.apod.com/discuss_apod.php?date=210714"> Discuss </a>
            {/* <a href="#">{right}</a> */}
        </nav>
    );
};

export default Nav;