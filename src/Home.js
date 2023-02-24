import React from 'react'
import DisplayPosts from './DisplayPosts';
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar';
import SideFooter from './SideFooter';

function Home() {
  return (
    <div className="container p-4">
        <div className="row">
          <div className="col-lg-3">
            <LeftSidebar />
          </div>
          <div className="col-lg-5">
            <DisplayPosts />
          </div>
          <div className="col-lg-4 ">
            <RightSidebar />
            <SideFooter/>
          </div>
        </div>
    </div>
  );
}

export default Home