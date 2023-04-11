import React from "react";

function StoreItem(storeName, distance, hours, totalPrice,smallPrint, storeId){
    return(
        <a href="#" id={storeId} class="list-group-item list-group-item-action active" data-bs-toggle="list"  role="tab" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{storeName}</h5>
                <small>{distance}</small>
                <small>{hours}</small>
            </div>
            <p class="mb-1">{totalPrice}</p>
            <small>{smallPrint}</small>
        </a>
    )
}

export default StoreItem