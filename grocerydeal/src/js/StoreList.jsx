import React from 'react';
import '../scss/StoreList.css'
import StoreItem from "./StoreItem";
import stores from '../assets/data/grocery-stores.json'

function StoreList() {
    

    const makeList = () => {
        return stores.map((store) => {
            console.log(store.groceryStoreId);
            return <StoreItem storeName={store.groceryStoreName} hours={store.hoursOfOperation} storeId={store.groceryStoreId} />
        })
    }


    return (
        <div className="StoreList list-group" role="tablist">
            
            {makeList()}
        </div>
    );
}

export default StoreList