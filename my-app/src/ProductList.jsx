export const ProductList = () => {
    const product = [
        { id: 1, name: "Laptop", price: 999.99, inStock: true },
        { id: 2, name: "Smartphone", price: 699.99, inStock: false },
        { id: 3, name: "Tablet", price: 499.99, inStock: true },
    ];

    const ProductElements = product.map((product) => {
        return (<div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
        </div>)
    });

    return <div>
        <h2>Product List Component</h2>
        {ProductElements}
    </div>
}