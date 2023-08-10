"use client";

import { SyncLoader } from "react-spinners";

function loading() {
  return (
    <div className="fixed top-1/2 left-1/2">
      <SyncLoader />
    </div>
  );
}

export default loading;
