import React from 'react'
import data from './products.json'

class ProductPage extends React.Component {
    constructor(){
        super()
        this.state = {
            products: data.Products
        }
    }

    handleOnChange = (event) => {
        let value = event.target.value;
        let newValue = [];
        event.preventDefault()
        if(value === '799'){
            let newProducts = data.Products.filter(product => product.Price <= 799);
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "999"){
            let newProducts = data.Products.filter(product => (product.Price >= 800 && product.Price <= 999));
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "1499"){
            let newProducts = data.Products.filter(product => (product.Price >= 1000 && product.Price <= 1499));
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "1500"){
            let newProducts = data.Products.filter(product => product.Price >= 1500);
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "default"){
            this.setState({products: data.Products })
        } return newValue
    }

    handleOnChangeBrand = (event) => {
        event.preventDefault();
        let value = event.target.value
        let newValue = [];

        if(value === 'Corsair'){
            let newProducts = data.Products.filter(product => product.brand === "Corsair");
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "Asus"){
            let newProducts = data.Products.filter(product => product.brand === "Asus");
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "Dell"){
            let newProducts = data.Products.filter(product => product.brand === "Dell");            
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "Zotac"){
            let newProducts = data.Products.filter(product => product.brand === "Zotac");            
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "HP"){
            let newProducts = data.Products.filter(product => product.brand === "HP");            
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "Alienware"){
            let newProducts = data.Products.filter(product => product.brand === "Alienware");            
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "IBUYPOWER"){
            let newProducts = data.Products.filter(product => product.brand === "IBUYPOWER");            
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "CyberPowerPC"){
            let newProducts = data.Products.filter(product => product.brand === "CyberPowerPC");            
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "SkyTech"){
            let newProducts = data.Products.filter(product => product.brand === "SkyTech");            
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "MSI"){
            let newProducts = data.Products.filter(product => product.brand === "MSI");            
            this.setState({products: newValue.concat(newProducts)})
        } else if (value === "default"){
            this.setState({products: data.Products })
        } return newValue
    }
    render(){
        return(
            <main>
                <h2 id="products_h2">All of our Pre-Builds!</h2>
                <div className="products">
                    <div class="filters">
                        <label htmlFor="PCs">Filter by price:</label>
                        <select name="PCs" id="PCs" onChange={this.handleOnChange}>
                            <option value="default">default</option>
                            <option value="799">$799 or less</option>
                            <option value="999">$800 to $999</option>
                            <option value="1499">$1000 to $1499</option>
                            <option value="1500">$1500 or more</option>
                        </select>
                        <label htmlFor="Brand">Filter by brand:</label>
                        <select name="Brand" id="Brand" onChange={this.handleOnChangeBrand}>
                            <option value="default">default</option>
                            <option value="Corsair">Corsair</option>
                            <option value="Asus">Asus</option>
                            <option value="Dell">Dell</option>
                            <option value="Zotac">Zotac</option>
                            <option value="HP">HP</option>
                            <option value="Alienware">Alienware</option>
                            <option value="IBUYPOWER">IBUYPOWER</option>
                            <option value="CyberPowerPC">CyberPowerPC</option>
                            <option value="SkyTech">SkyTech</option>
                            <option value="MSI">MSI</option>
                        </select>
                    </div>
                    <div className="productRows">
                        {this.state.products.map((card) => {
                            return(
                                <div className="card" key={card.key}>
                                    <img src={card.image} alt={card.name} className=""/>
                                    <h2>{card.name}</h2>
                                    <ul className="cardUl">
                                        <li >CPU: {card.CPU}</li>
                                        <li >GPU: {card.GPU}</li>
                                        <li >RAM: {card.RAM}</li>
                                        <li >Storage: {card.Storage}</li>
                                        <li >Price: ${card.Price}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        )
    }
}

export default ProductPage