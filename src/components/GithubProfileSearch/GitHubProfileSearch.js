import React,{useState, useEffect} from "react";
import './style.css';


export default function GitHubProfileSearch() {

    const [userData, setUserData] = useState({});
    const [createdDate, setCreatedDate] = useState('')
    const [userInputValue, setUserInputValue] = useState('');

    function getUserInfoFunc() {
        fetch(`https://api.github.com/users/${userInputValue}`)
            .then(res => res.json())
            .then(data => {
                setCreatedDate(Date(data.created_at));
                setUserData(data);
                console.log(data);
            })
    }

    return(
        <div>
            <div>
                <input value={userInputValue} onChange={(e) => {setUserInputValue(e.target.value)}} name="userInput"/>
                <button onClick={getUserInfoFunc}>Search</button>
            </div>
            {userData.id > 0 && 
                <div className="githubProfileContainer">
                    <div><img className="imageHolder" width={"200px"} height={"200px"} src={userData.avatar_url}/></div>
                    <div><a href={userData.html_url} title="Profile Link">{userData.login}</a></div>
                    <div>User Joined On: {createdDate}</div>
                    <div>Public Repos: {userData.public_repos}</div>
                    <div>Followers: {userData.followers}</div>
                    <div>Following: {userData.following}</div>
                </div>}
        </div>
    )
}