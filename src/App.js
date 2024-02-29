import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Details from "./pages/Details";

function App() {
  const [cart, setCart] = useState([]);
  const [phonesData, setPhonesData] = useState([
    {
      id: 1,
      title: 'iPhone 13 Pro Max',
      images: ['https://login.kg/image/cache/catalog/new/Phones/Apple/IPhone%2013/Pro/1-1200x800.jpg'],
      category: { name: 'Apple' },
      description: 'Качественный смартфон от Apple',
      price: 79990,
      history: '',
    },
    {
      id: 2,
      title: 'Samsung Galaxy S21',
      images: ['https://login.kg/image/cache/catalog/new/Phones/Samsung/S21%20FE/1-1200x800.jpg'],
      category: { name: 'Samsung' },
      description: 'Флагманский смартфон от Samsung',
      price: 69990,
      history: '',
    },
    {
      id: 3,
      title: 'iPhone 14 Pro Max',
      images: ['https://softech.kg/image/cache/63ccea961faf68e3d9e4b6f1e4d845c8.jpg'],
      category: { name: 'Samsung' },
      description: 'Качественный смартфон от Samsung',
      price: 69990,
      history:'',
    },
    {
      id: 4,
      title: 'iPhone 12 Pro Max',
      images: ['https://static.tildacdn.com/tild6233-3364-4830-b231-386435323030/apple-iphone-12-pro-.jpg'],
      category: { name: 'Iphone' },
      description: 'Качественный смартфон от Apple',
      price: 39990,
      history:'',
    },
    {
      id: 5,
      title: 'Samsung G-y s24 ultra',
      images: ['https://login.kg/image/cache/catalog/new/Phones/Samsung/S24%20Ultra/1-500x400.jpg'],
      category: { name: 'Samsung' },
      description: 'Качественный смартфон от Samsung',
      price: 52990,
      history:'',
    },
    {
      id: 6,
      title: 'Xiaomi Poco X6',
      images: ['https://login.kg/image/cache/catalog/new/Phones/Xiaomi/Poco%20X6/1-1200x800.jpg'],
      category: { name: 'Samsung' },
      description: 'Качественный смартфон от Poco',
      price: 69990,
      history:'',
    },
    {
      id: 7,
      title: 'iPhone 15 Pro Max',
      images: ['https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__en-IN_ad326452-186a-484a-99a4-82dc80c280fb_823x.jpg?v=1694759404'],
      category: { name: 'Samsung' },
      description: 'Качественный смартфон от Apple',
      price: 135990,
      history:'',
    },
    {
      id: 8,
      title: 'Redmi Note 13 Pro',
      images: ['https://www.gadget.kg/upload/catalog/67/item_6631/84bc47f1e840d1c60322a1bfe034a480.jpg'],
      category: { name: 'Xiaomi' },
      description: 'Качественный смартфон от Xiaomi',
      price: 23990,
      history:'',
    },
    {
      id: 9,
      title: 'Redmi Note 12',
      images: ['https://mistore.kg/wp-content/uploads/2023/09/1678783690-719015-gray-11-1.jpg'],
      category: { name: 'Xiaomi' },
      description: 'Качественный смартфон от Xiaomi',
      price: 12990,
      history:'',
    },
    {
      id: 10,
      title: 'iPhone 11',
      images: ['https://www.myphone.kg/files/media/7/7691.jpg'],
      category: { name: 'Apple' },
      description: 'Качественный смартфон от Apple',
      price: 14990,
      history:'',
    },
    {
      id: 11,
      title: 'iPhone 12',
      images: ['https://login.kg/image/cache/catalog/new/Phones/Apple/iPhone%2012/1-500x400.jpg'],
      category: { name: 'Apple' },
      description: 'Качественный смартфон от Apple',
      price: 17990,
      history:'',
    },
    {
      id: 12,
      title: 'iPhone 13 Pro ',
      images: ['https://login.kg/image/cache/catalog/new/Phones/Apple/IPhone%2013/Pro/4-500x400.jpg'],
      category: { name: 'Apple' },
      description: 'Качественный смартфон от Apple',
      price: 37990,
      history:'',
    },
    {
      id: 13,
      title: 'Redmi Note 11 Pro',
      images: ['https://telefon.kg/image/cache/catalog/new/Phones/Xiaomi/Redmi%20Note%2011%205G/1-500x400.jpg'],
      category: { name: 'Xiaomi' },
      description: 'Качественный смартфон от Xiaomi',
      price: 22990,
      history:'',
    },
    {
      id: 14,
      title: 'Samsung G-y s24 ultra',
      images: ['https://login.kg/image/cache/catalog/new/Phones/Samsung/S24%20Ultra/1-500x400.jpg'],
      category: { name: 'Samsung' },
      description: 'Качественный смартфон от Samsung',
      price: 51990,
      history:'',
    },
    {
      id: 15,
      title: 'Redmi Note 12',
      images: ['https://mistore.kg/wp-content/uploads/2023/09/1678783690-719015-gray-11-1.jpg'],
      category: { name: 'Xiaomi' },
      description: 'Качественный смартфон от Xiaomi',
      price: 12990,
      history:'',
    },
    {
      id: 16,
      title: 'iPhone 15 Pro Max',
      images: ['https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__en-IN_ad326452-186a-484a-99a4-82dc80c280fb_823x.jpg?v=1694759404'],
      category: { name: 'Apple' },
      description: 'Качественный смартфон от Apple',
      price: 135990,
      history:'',
    },
    {
      id: 17,
      title: 'iPhone 14 Pro Max',
      images: ['https://softech.kg/image/cache/63ccea961faf68e3d9e4b6f1e4d845c8.jpg'],
      category: { name: 'Apple' },
      description: 'Качественный смартфон от Apple',
      price: 75990,
      history:'',
    },
    {
      id: 18,
      title: 'iPhone 12 Pro Max',
      images: ['https://g-store.com.ua/image/cache/catalog/allprodvar/17176-1200x1200.png'],
      category: { name: 'Apple' },
      description: 'Качественный смартфон от Apple',
      price: 35990,
      history:'',
    },
    {
      id: 19,
      title: 'Samsung Galaxy s20 ',
      images: ['https://object.pscloud.io/cms/cms/Photo/img_0_77_2990_8_1.jpg'],
      category: { name: 'Samsung' },
      description: 'Качественный смартфон от Samsung',
      price: 18990,
      history:'',
    },
    {
      id: 20,
      title: 'iPhone 13 Pro ',
      images: ['https://login.kg/image/cache/catalog/new/Phones/Apple/IPhone%2013/Pro/4-500x400.jpg'],
      category: { name: 'Apple' },
      description: 'Качественный смартфон от Apple',
      price: 37990,
      history:'',
    },
    {
      id: 21,
      title: 'iPhone 11 Pro Max ',
      images: ['https://object.pscloud.io/cms/cms/Photo/img_0_77_2161_1.jpg'],
      category: { name: 'Apple' },
      description: 'Качественный смартфон от Apple',
      price: 17990,
      history:'',
    },
    
  ]);

  function addCart(obj) {
    setCart(prevCart => {
      const idx = prevCart.findIndex((item) => item.id === obj.id);
      if (idx === -1) {
        return [...prevCart, { ...obj, count: 1 }];
      } else {
        const updatedCart = prevCart.map((item, index) => {
          if (index === idx) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        return updatedCart;
      }
    });
  }

  function searchPhones(query) {
    
    const results = phonesData.filter((phone) =>
      phone.title.toLowerCase().includes(query.toLowerCase())
    );
    return results; 
  }

  return (
    <BrowserRouter>
      <Header cart={cart} phonesData={phonesData} searchPhones={searchPhones} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog phonesData={phonesData} addCart={addCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/details/:id" element={<Details phonesData={phonesData} addCart={addCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
