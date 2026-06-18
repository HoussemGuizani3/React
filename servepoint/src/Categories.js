import './categories.css';
import arrow_leftIcon from './images/arrow_left.png';
import arrow_rightIcon from './images/arrow_right.png';
import burgerImg from './images/burger.jpeg';
import pizzaImg from './images/pizza.jpeg';
import jusImg from './images/jus.jpeg';
import kouscousImg from './images/kouskous.jpeg';
import rouzImg from './images/rouz.jpeg';
import seefoodImg from './images/seefood.jpeg';
import sushiImg from './images/sushi.jpeg';
import tajinmarocoImg from './images/tajinmaroco.jpeg';
import cocaImg from './images/coca.jpeg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. استيراد الـ useNavigate

export const Categories = () => {
    const navigate = useNavigate(); // 2. تعريف الـ hook

    const FOOD_DRINK_DATA = [
        { id: 1, image: burgerImg, title: "Double Cheese Burger", category: "Food", price: "12.500 DT" },
        { id: 2, image: pizzaImg, title: "Pizza Margherita", category: "Food", price: "15.000 DT" },
        { id: 3, image: jusImg, title: "Virgin Mojito", category: "Drink", price: "6.500 DT" },
        { id: 4, image: kouscousImg, title: "Kouskous", category: "Food", price: "3.200 DT" },
        { id: 5, image: rouzImg, title: "Rouz", category: "Food", price: "10.000 DT" },
        { id: 6, image: seefoodImg, title: "SeeFood", category: "Food", price: "2.500 DT" },
        { id: 7, image: sushiImg, title: "Sushi Mix", category: "Food", price: "24.000 DT" },
        { id: 8, image: tajinmarocoImg, title: "Tajin Maroco", category: "Food", price: "8.500 DT" },
        { id: 9, image: cocaImg, title: "Coca Cola", category: "Drink", price: "3.500 DT" },
        { id: 10, image: burgerImg, title: "Double Cheese Burger", category: "Food", price: "12.500 DT" },
        { id: 11, image: pizzaImg, title: "Pizza Margherita", category: "Food", price: "15.000 DT" },
        { id: 12, image: jusImg, title: "Virgin Mojito", category: "Drink", price: "6.500 DT" },
        { id: 13, image: burgerImg, title: "Double Cheese Burger", category: "Food", price: "12.500 DT" },
        { id: 14, image: pizzaImg, title: "Pizza Margherita", category: "Food", price: "15.000 DT" },
        { id: 15, image: jusImg, title: "Virgin Mojito", category: "Drink", price: "6.500 DT" },
    ];

    const [valueInput, setValueInput] = useState("");

    // 3. دالة عند الضغط على الـ Card تأخذنا لصفحة التفاصيل بناءً على الـ id
    const handleCardClick = (id) => {
        navigate(`/category-details/${id}`);
    };

    const menucategories = () => {
        return FOOD_DRINK_DATA.map((item) => (
            
            <div className="card" key={item.id} onClick={() => handleCardClick(item.id)}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <span>{item.price}</span>
            </div>
        ));
    }

    const displayValueInput = (e) => {
        setValueInput(e.target.value);
    }

    const filterCategories = (item) => {
        return item.category.toLowerCase().includes(valueInput.toLowerCase()) ||
            item.title.toLowerCase().includes(valueInput.toLowerCase());

    }

    const GetDisplayResult = () => {
        if (valueInput !== '') {
            const filtered = FOOD_DRINK_DATA.filter(filterCategories);
            return filtered.map((item) => (
            
                <div className="card" key={item.id} onClick={() => handleCardClick(item.id)}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    <span>{item.price}</span>
                </div>
            ));
        } else {
            return menucategories();
        }
    }

    return (
        <div className="categories">
            <div className="categories-container">
                <div className="categories-header_left">
                    <div className="categories-header-left_left">
                        <button onClick={() => navigate(-1)} className="back-btn">
                            <img src={arrow_leftIcon} alt="" />
                            <h3>Food & Drinks</h3>
                        </button>

                    </div>
                    <div className="categories-header-left_right">
                        <button className="back-btn"> 
                            <img src={arrow_rightIcon} alt="" />
                            <h3>Categories</h3>
                        </button>

                    </div>
                </div>
                <div className="categories-header_right">
                    <input value={valueInput} type="text" placeholder="Search..." onChange={displayValueInput} />
                </div>
            </div>
            <div className="categories-content">
                <h3>Categories</h3>
                <div className="categories-content_header">
                    
                    <GetDisplayResult />
                </div>
            </div>
        </div>
    );
}