import React from "react";

function StoreItem(){
    return(
        <a href="#" class="list-group-item list-group-item-action active" data-bs-toggle="list"  role="tab" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Store Name</h5>
                <small>Distance</small>
                <small>Hours</small>
            </div>
            <p class="mb-1">Total Price</p>
            <small>And some small print.</small>
        </a>
    )
}

export default StoreItem