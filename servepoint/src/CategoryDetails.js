import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import arrow_leftIcon from './images/arrow_left.png';
import './categorydetails.css';


export const CategoryDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const SUB_MENU_DATA = {
        "1": [
            { id: 101, name: "Cheese Burger", desc: "170g", price: "12.500 DT" },
            { id: 102, name: "Classic Burger", desc: "200g", price: "10.000 DT" },
            { id: 103, name: "Double Beef Swiss", desc: "250g", price: "16.800 DT" },
        ],
        "2": [
            { id: 201, name: "Pizza Margherita", desc: "Moyenne", price: "15.000 DT" },
            { id: 202, name: "Pizza Thon", desc: "Moyenne", price: "18.500 DT" },
        ]
    };


    const currentSubMenu = SUB_MENU_DATA[id] || [];
    const [valueInputName, setvalueInputName] = useState('');
    const [valueInputdesc, setvalueInputdesc] = useState('');
    const [valueInputPrice, setvalueInputPrice] = useState('');

    const [displayValueName, setdisplayValueName] = useState('');
    const [displayValueDesc, setdisplayValueDesc] = useState('');
    const [displayValuePrice, setdisplayValuePrice] = useState('');

    const [isValid, setIsValid] = useState(false);
    const [activeCardId, setActiveCardId] = useState(null);

    const displayValueInputName = (itemId, e) => {
        setvalueInputName({ id: itemId, text: e.target.value });
    }

    const displayValueInputDesc = (itemId, e) => {
        setvalueInputdesc({ id: itemId, text: e.target.value });
    }

    const displayValueInputPrice = (itemId, e) => {
        setvalueInputPrice({ id: itemId, text: e.target.value });
    }

  
    const Move = (itemId, e) => {
        console.log('move');
        e.stopPropagation();

        if (valueInputName.id === itemId) setdisplayValueName(valueInputName);
        if (valueInputdesc.id === itemId) setdisplayValueDesc(valueInputdesc);
        if (valueInputPrice.id === itemId) setdisplayValuePrice(valueInputPrice);
        setIsValid(true);
        setActiveCardId(null);
    }

    const buttonMove = (item) => {
        return (
            <div className="inputs-container" onClick={(e) => e.stopPropagation()}>
                <input defaultValue={item.name} type="text" onChange={(e) => displayValueInputName(item.id, e)} />
                <input defaultValue={item.desc} type="text" onChange={(e) => displayValueInputDesc(item.id, e)} />
                <input defaultValue={item.price} type="text" onChange={(e) => displayValueInputPrice(item.id, e)} />
            </div>
        );
    }


    return (
        <div className="category-details">
            <button onClick={() => navigate(-1)} className="back-btn">
                <img src={arrow_leftIcon} alt="back" />
                <span>Return</span>
            </button>

            <h2>Available options</h2>

            <div className="sub-menu-list" >
                {currentSubMenu.length > 0 ? (
                    currentSubMenu.map((item) => (
                        <div key={item.id} className="sub-card" onClick={() => setActiveCardId(item.id)}>
                            <div className="sub-card-info">
                                <h4>{displayValueName.id === item.id ? displayValueName.text : item.name}</h4>
                                <p>{displayValueDesc.id === item.id ? displayValueDesc.text : item.desc}</p>
                            </div>
                            <span className="price">{displayValuePrice.id === item.id ? displayValuePrice.text : item.price}</span>
                            <div>
                                <button onClick={(e) => e.stopPropagation()}>Add</button>
                                <button onClick={(e) => Move(item.id, e)}>Move</button>
                                <button onClick={(e) => e.stopPropagation()}>Delete</button>
                            </div>
                            {activeCardId === item.id && buttonMove(item)}

                        </div>
                    ))
                ) : (
                    <p className="no-data">Sorry, no details are currently available for this section.</p>
                )}
            </div>

        </div>
    );
};
/*

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import arrow_leftIcon from './images/arrow_left.png';
import './categorydetails.css';

export const CategoryDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const SUB_MENU_DATA = {
        "1": [
            { id: 101, name: "Cheese Burger", desc: "170g", price: "12.500 DT" },
            { id: 102, name: "Classic Burger", desc: "200g", price: "10.000 DT" },
            { id: 103, name: "Double Beef Swiss", desc: "250g", price: "16.800 DT" },
        ],
        "2": [
            { id: 201, name: "Pizza Margherita", desc: "Moyenne", price: "15.000 DT" },
            { id: 202, name: "Pizza Thon", desc: "Moyenne", price: "18.500 DT" },
        ]
    };

    // في عوض الـ useEffect، حط القيمة هكة طول في الـ useState
    const [menuItems, setMenuItems] = useState(SUB_MENU_DATA[id] || []);

    const handleInputChange = (itemId, field, newValue) => {
        // 1. نعملوا نسخة جديدة من القائمة الحالية (بش ما نمسوش الـ state الأصلية مباشرة)  (Shallow Copy)
        const nextItems = [...menuItems];

        // 2. نلوجو على الترتيب (Index) متع الأيتم اللي نحبو نعدلوه وسط القائمة
        const index = nextItems.findIndex(item => item.id === itemId);

        // 3. إذا لفيناه، نعدلو الحقل (الاسم، الوصف أو السعر) مباشرة
        if (index !== -1) {
            nextItems[index][field] = newValue;
        }

        // 4. نحدثوا الـ state بالقائمة الجديدة
        setMenuItems(nextItems);
    };

    const Move = (itemId) => {
        // هوني تجم تعمل اللي تحب بالـ item المعددل
        const updatedItem = menuItems.find(item => item.id === itemId);
        console.log('Item moved:', updatedItem);
    };

    return (
        <div className="category-details" key={id}>
            <button onClick={() => navigate(-1)} className="back-btn">
                <img src={arrow_leftIcon} alt="back" />
                <span>Return</span>
            </button>

            <h2>Available options</h2>

            <div className="sub-menu-list">
                {menuItems.length > 0 ? (
                    menuItems.map((item) => (
                        <div key={item.id} className="sub-card" >
                            <div className="sub-card-info">
                               
                                <h4>{item.name}</h4>
                                <p>{item.desc}</p>
                            </div>
                            <span className="price">{item.price}</span>

                            <div>
                                <button>Add</button>
                                <button onClick={() => Move(item.id)}>Move</button>
                                <button>Delete</button>
                            </div>

                            <div>
                               
                                <input
                                    value={item.name}
                                    type="text"
                                    name="name"
                                    onChange={(e) => handleInputChange(item.id, 'name', e.target.value)}
                                />
                                <input
                                    value={item.desc}
                                    type="text"
                                    name="desc"
                                    onChange={(e) => handleInputChange(item.id, 'desc', e.target.value)}
                                />
                                <input
                                    value={item.price}
                                    type="text"
                                    name="price"
                                    onChange={(e) => handleInputChange(item.id, 'price', e.target.value)}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-data">Sorry, no details are currently available for this section.</p>
                )}
            </div>
        </div>
    );
};



import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import arrow_leftIcon from './images/arrow_left.png';
import './categorydetails.css';

export const CategoryDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const SUB_MENU_DATA = {
        "1": [
            { id: 101, name: "Cheese Burger", desc: "170g", price: "12.500 DT" },
            { id: 102, name: "Classic Burger", desc: "200g", price: "10.000 DT" },
            { id: 103, name: "Double Beef Swiss", desc: "250g", price: "16.800 DT" },
        ],
        "2": [
            { id: 201, name: "Pizza Margherita", desc: "Moyenne", price: "15.000 DT" },
            { id: 202, name: "Pizza Thon", desc: "Moyenne", price: "18.500 DT" },
        ]
    };

    const currentSubMenu = SUB_MENU_DATA[id] || [];
    
    const [valueInputName, setvalueInputName] = useState({ id: null, text: '' });
    const [valueInputdesc, setvalueInputdesc] = useState({ id: null, text: '' });
    const [valueInputPrice, setvalueInputPrice] = useState({ id: null, text: '' });

    const [displayValueName, setdisplayValueName] = useState({ id: null, text: '' });
    const [displayValueDesc, setdisplayValueDesc] = useState({ id: null, text: '' });
    const [displayValuePrice, setdisplayValuePrice] = useState({ id: null, text: '' });

    const [isValid, setIsValid] = useState('false');
    
    // state جديدة تخبّي الـ id متع الكارد اللي كليكينا عليها باش يظهرولها الـ inputs
    const [activeCardId, setActiveCardId] = useState(null);

    const displayValueInputName = (itemId, e) => {
        setvalueInputName({ id: itemId, text: e.target.value });
    }

    const displayValueInputDesc = (itemId, e) => {
        setvalueInputdesc({ id: itemId, text: e.target.value });
    }

    const displayValueInputPrice = (itemId, e) => {
        setvalueInputPrice({ id: itemId, text: e.target.value });
    }

    const Move = (itemId, e) => {
        e.stopPropagation(); // تمنع الكارد باش ما تتسكرش
        console.log('move');
        if (valueInputName.id === itemId) setdisplayValueName(valueInputName);
        if (valueInputdesc.id === itemId) setdisplayValueDesc(valueInputdesc);
        if (valueInputPrice.id === itemId) setdisplayValuePrice(valueInputPrice);
        setIsValid(true);
        setActiveCardId(null); // اختياري: تسكر الـ inputs بعد الـ Move
    }

    // الـ تصليح هوني: نحينا الـ map الزايدة وخليناها ترجع الـ HTML طول مع إيقاف انتشار الضغطة
    const buttonMove = (item) => {
        return (
            <div className="inputs-container" onClick={(e) => e.stopPropagation()}>
                <input defaultValue={item.name} type="text" onChange={(e) => displayValueInputName(item.id, e)} />
                <input defaultValue={item.desc} type="text" onChange={(e) => displayValueInputDesc(item.id, e)} />
                <input defaultValue={item.price} type="text" onChange={(e) => displayValueInputPrice(item.id, e)} />
            </div>
        );
    }

    return (
        <div className="category-details">
            <button onClick={() => navigate(-1)} className="back-btn">
                <img src={arrow_leftIcon} alt="back" />
                <span>Return</span>
            </button>

            <h2>Available options</h2>

            <div className="sub-menu-list" > 
                {currentSubMenu.length > 0 ? (
                    currentSubMenu.map((item) => (
                        <div 
                            key={item.id} 
                            className="sub-card" 
                            onClick={() => setActiveCardId(item.id)} // كيف نكليكيو هوني يتحل الـ input الخاص بـ هوني
                        >
                            <div className="sub-card-info">
                                <h4>{displayValueName.id === item.id ? displayValueName.text : item.name}</h4>
                                <p>{displayValueDesc.id === item.id ? displayValueDesc.text : item.desc}</p>
                            </div>
                            <span className="price">{displayValuePrice.id === item.id ? displayValuePrice.text : item.price}</span>
                            
                            <div>
                                <button onClick={(e) => e.stopPropagation()}>Add</button>
                                <button onClick={(e) => Move(item.id, e)}>Move</button>
                                <button onClick={(e) => e.stopPropagation()}>Delete</button>
                            </div>

                            {activeCardId === item.id && buttonMove(item)}
                        </div>
                    ))
                ) : (
                    <p className="no-data">Sorry, no details are currently available for this section.</p>
                )}
            </div>
        </div>
    );
};
*/