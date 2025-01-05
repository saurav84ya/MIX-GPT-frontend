import React from "react";

export default function Home() {
  return (
    <div>
      <div class="flex relative  ">
        <div class="  w-[300px] xl:relative absolute bg-red-500">Fixed Width Item</div>

        <div class="flex-1  bg-blue-500">Flexible Item</div>
      </div>
    </div>
  );
}
