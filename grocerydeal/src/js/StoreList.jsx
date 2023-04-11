import React from "react";
import '../scss/StoreList.css'
import StoreItem from "./StoreItem";

function StoreList() {
    let stores = [];

    return (
        <div class="StoreList list-group" id="list-tab" role="tablist">
            
            <a href="#" class="list-group-item list-group-item-action" data-bs-toggle="list"  role="tab">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-body-secondary">3 days ago</small>
                </div>
                <p class="mb-1">Some placeholder content in a paragraph.</p>
                <small class="text-body-secondary">And some muted small print.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action" data-bs-toggle="list"  role="tab">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-body-secondary">3 days ago</small>
                </div>
                <p class="mb-1">Some placeholder content in a paragraph.</p>
                <small class="text-body-secondary">And some muted small print.</small>
            </a>
        </div>
    )
}
/* function addStore(){
    return(

    )
} */
export default StoreList