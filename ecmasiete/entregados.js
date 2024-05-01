class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const id = Math.random().toString(36).substr(2, 9); // Generar ID único
      const newProduct = { id, title, description, price, thumbnail, code, stock };
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        throw new Error('Producto no encontrado');
      }
      return product;
    }
  
    updateProduct(id, updatedFields) {
      const productIndex = this.products.findIndex(product => product.id === id);
      if (productIndex === -1) {
        throw new Error('Producto no encontrado');
      }
      this.products[productIndex] = { ...this.products[productIndex], ...updatedFields };
      return this.products[productIndex];
    }
  
    deleteProduct(id) {
      const initialLength = this.products.length;
      this.products = this.products.filter(product => product.id !== id);
      if (this.products.length === initialLength) {
        throw new Error('Producto no encontrado');
      }
    }
  }
  
  const manager = new ProductManager();
  console.log(manager.getProducts()); // []
  
  const newProduct = manager.addProduct(
    'producto prueba',
    'Este es un producto prueba',
    200,
    'Sin imagen',
    'abc123',
    25
  );
  console.log(newProduct); // Objeto del producto recién agregado
  
  console.log(manager.getProducts()); // mostrar el producto agregado
  
  const productId = newProduct.id;
  console.log(manager.getProductById(productId)); //producto agregado
  
  const updatedProduct = manager.updateProduct(productId, { price: 250 }); // Actualizar el precio 
  console.log(updatedProduct); // producto con el precio actualizado
  
  try {
    manager.deleteProduct(productId); 
    console.log('Producto eliminado correctamente');
  } catch (error) {
    console.error(error.message); 
  }
  