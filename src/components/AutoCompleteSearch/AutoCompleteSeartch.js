import React, {useEffect, useState} from "react";
import './style.css';


export default function AutoCompleteSearch() {
    const [currentUserSearch, setCurrentUserSearch] = useState('');
    const [fetchedData, setFetchedData] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        
        if(fetchedData.length == 0) {
            fetch('https://dummyjson.com/users?limit=5&skip=10&select=firstName')
            .then(res => res.json())
            .then(data => {
                setFetchedData(data.users);
                setFilteredUsers(data.users);
            });
        }
            const filteredResult = fetchedData.filter((item) => {
                return item.firstName.toLowerCase().includes(currentUserSearch.toLocaleLowerCase()) > 0 && currentUserSearch !== ''
            });
            setFilteredUsers(currentUserSearch == '' ? fetchedData : filteredResult);
    },[currentUserSearch])


    return(
        <div className="autoContainer">
            <input 
                className="autoComplete" 
                value={currentUserSearch} 
                onChange={(e) => {setCurrentUserSearch(e.target.value)}} 
                autoComplete="off" 
                placeholder="Search Users Here..." 
            />
            <div className="autoCompleteItems">
                {filteredUsers.map((item, index) => (
                    <div key={index} onClick={(e) => {setCurrentUserSearch(e.target.innerText)}}>{item.firstName}</div>
                ))}
            </div>
        </div>
    )
    
}