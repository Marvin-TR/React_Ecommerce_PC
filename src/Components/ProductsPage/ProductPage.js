import React from 'react'
import data from './products.json'

class ProductPage extends React.Component {
    constructor(){
        super()
        this.state = {
            products: data.Products,
            staticProducts: data.Products,
            price: "default",
            brand: "default"
        }
    }

    filter = () => {
        console.log(this.state)
        let newValue = [];
        if(this.state.price === '799' && this.state.brand !== "default"){
            let newProducts = data.Products.filter(product => {
                return product.Price <= 799 && product.brand === this.state.brand
            });
            this.setState({products: newValue.concat(newProducts)})
        } else if (this.state.price === "999" && this.state.brand !== "default"){
            let newProducts = data.Products.filter(product => (product.Price >= 800 && product.Price <= 999 && product.brand === this.state.brand));
            this.setState({products: newValue.concat(newProducts)})
        } else if (this.state.price === "1499" && this.state.brand !== "default"){
            let newProducts = data.Products.filter(product => (product.Price >= 1000 && product.Price <= 1499 && product.brand === this.state.brand));
            this.setState({products: newValue.concat(newProducts)})
        } else if (this.state.price === "1500" && this.state.brand !== "default"){
            let newProducts = data.Products.filter(product => product.Price >= 1500 && product.brand === this.state.brand);
            this.setState({products: newValue.concat(newProducts)})
        } else if (this.state.price === "default" && this.state.brand !== "default"){
            let newProducts = data.Products.filter(product => {
                return product.brand === this.state.brand
            })
            this.setState({products: newProducts})
        } else if(this.state.price === '799' && this.state.brand === "default"){
            let newProducts = data.Products.filter(product => {
                return product.Price <= 799 
            });
            this.setState({products: newValue.concat(newProducts)})
        } else if (this.state.price === "999" && this.state.brand === "default"){
            let newProducts = data.Products.filter(product => (product.Price >= 800 && product.Price <= 999));
            this.setState({products: newValue.concat(newProducts)})
        } else if (this.state.price === "1499" && this.state.brand === "default"){
            let newProducts = data.Products.filter(product => (product.Price >= 1000 && product.Price <= 1499));
            this.setState({products: newValue.concat(newProducts)})
        } else if (this.state.price === "1500" && this.state.brand === "default"){
            let newProducts = data.Products.filter(product => product.Price >= 1500);
            this.setState({products: newValue.concat(newProducts)})
        } else if (this.state.price === "default" && this.state.brand === "default"){
            this.setState({products: data.products})
        }
}

    handleOnChange = async (event, type) => {
        let value = event.target.value;

        event.preventDefault()
        let emptyObject = {}
        emptyObject[type] = await value
        await this.setState(emptyObject)
        this.filter();
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
                        <select name="PCs" id="PCs" onChange={(event) => {this.handleOnChange(event, "price")}}>
                            <option value="default">default</option>
                            <option value="799">$799 or less</option>
                            <option value="999">$800 to $999</option>
                            <option value="1499">$1000 to $1499</option>
                            <option value="1500">$1500 or more</option>
                        </select>
                        <label htmlFor="Brand">Filter by brand:</label>
                        <select name="Brand" id="Brand" onChange={(event) => {this.handleOnChange(event, "brand")}}>
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