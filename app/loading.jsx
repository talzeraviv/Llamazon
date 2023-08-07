"use client";

import React from "react";
import { SyncLoader } from "react-spinners";

function loading() {
  return (
    <div>
      <SyncLoader />;
    </div>
  );
}

export default loading;
