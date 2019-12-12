import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductContainer from "./containers/ProductContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./constants/MessageContainer";


function App() {
    return (
        <div>
            {/* Header */}
           <Header/>
            {/*end header*/}
            <main id="mainContainer">
                <div className="container">
                    {/* Products */}
                    <ProductContainer/>
                    {/* Message */}
                   <MessageContainer/>
                    {/* Cart */}
                    <CartContainer/>
                </div>
            </main>
            {/* Footer */}
            <Footer/>
        </div>

    );
}

export default App;
