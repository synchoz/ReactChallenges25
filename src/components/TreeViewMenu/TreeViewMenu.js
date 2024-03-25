import React, {useState} from "react";
import './styles/style.css';

const data = [
                {
                    "title": "Home",
                    "id": "1"
                },
                {
                    "title": "Profile",
                    "id": "2",
                    "open": false,
                    "children": [
                        {
                            "title": "Details",
                            "id": "3",
                            "open": false,
                            "children": [
                                {
                                    "title": "Location",
                                    "id": "4",
                                    "open": false,
                                    "children": [
                                        {
                                            "title": "City",
                                            "id": "5"
                                        }
                                    ]
                                }
                                
                            ]
                            
                        }
                    ]
                },
                {
                    "title": "Settings",
                    "id": "6",
                    "open": false,
                    "children": [
                        {
                            "title": "Account",
                            "id": "7"
                        },
                        {
                            "title": "Security",
                            "id": "8",
                            "open": false,
                            "children": [
                                {
                                    "title": "Login",
                                    "id": "9"
                                },
                                {
                                    "title": "Register",
                                    "id": "10",
                                    "open": false,
                                    "children": [
                                        {
                                            "title": "Random Data",
                                            "id": "11"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
]


export default function TreeViewMenu() {
    

    return (
        <div className="wrapper">
            <RecursiveComponent array={data}/>
        </div>
    )
}

function openCloseChildren(array, itemId, triggerReRender) {
    for (const key in array) {
        if(array[key].id == itemId) {
            array[key].open = !array[key].open;
            triggerReRender();
            return;
        }
        if(array[key].children?.length > 0) {
            openCloseChildren(array[key].children, itemId, triggerReRender)
        }
    }
}

const RecursiveComponent = ({ array, isChild = false }) => {
    const [, forceUpdate] = useState();

    const triggerReRender = () => {
        forceUpdate(s => !s); // Toggling state value to force re-render
    };
    return (
    <>
        {array.map((item) => (
            <React.Fragment key={item.id}> 
                <div className="d-flex-row">
                    {item.title}
                    {item.children && item.children.length > 0 && 
                        <div className="toggleSign" onClick={() => openCloseChildren(array, item.id, triggerReRender)}> 
                            {!item.open ? '+' : '-'} 
                        </div>
                    }
                </div>
                {item.children && item.children.length > 0 && (
                    <div className={!item.open ? 'leftSpacing closedChild': 'leftSpacing'}>
                        <RecursiveComponent array={item.children} isChild={true} />
                    </div>
                )}
            </React.Fragment>
        ))}
    </>
    );
};