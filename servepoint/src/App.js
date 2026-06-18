import './App.css';
// 1. استيراد المكونات الخاصة بالراوتر
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu';
import { Dashboard } from './Dashboard';
import { Categories } from './Categories.js';
import { CategoryDetails } from './CategoryDetails.js';
import { Signup } from './Signup.js';

function App() {
  return (
    // 2. تغليف التطبيق بالـ Router لتمكين الـ الروابط والتنقل
    <Router>
      <div className="App" style={{ display: 'flex', direction: 'left' }}>

        {/* المنيو ثابت في جنب الصفحة */}
        <Menu />

        {/* الجزء الخاص بالمحتوى المتغير */}
        <div className="main-content" style={{ flex: 1 }}>
          {/* الداش بورد يبقى ثابت الفوق */}
            

          {/* 3. هنا نحدد المسارات الديناميكية */}
          <Routes>
            {/* الرابط الرئيسي يعرض صفحة الكاتيكوري */}
            

            {/*  هذي اللي ناقصاك: رابط الداش بورد  */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categorie" element={<Categories />} />
            <Route path="/signup" element={<Signup />} />

            {/* رابط التفاصيل يقرأ الـ id ويعرض صفحة تفاصيل الأكلة */}
            <Route path="/category-details/:id" element={<CategoryDetails />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;