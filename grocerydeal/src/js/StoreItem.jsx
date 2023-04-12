import React from "react";

function StoreItem(prop){
    return(
        <a href="#" id={prop.storeId} class="list-group-item list-group-item-action" data-bs-toggle="list"  role="tab" aria-current="false">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{prop.storeName}</h5>
                <small>total price</small>
            </div>
            
            <p class="mb-1">small text</p>
            <small>{prop.hours}</small>
        </a>
    )
}


export default StoreItem