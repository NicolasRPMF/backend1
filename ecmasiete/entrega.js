class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(productData) {
      const { title, description, price, thumbnail, code, stock } = productData;
      
      // Comprobar si el código ya existe
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        throw new Error("El código del producto ya existe");
      }
  
      const id = this.generateId();
      const newProduct = { id, title, description, price, thumbnail, code, stock };
      this.products.push(newProduct);
  
      return newProduct;
    }
  
    getProductById(productId) {
      const product = this.products.find(product => product.id === productId);
      if (!product) {
        throw new Error("Producto no encontrado");
      }
      return product;
    }
  
    generateId() {
      // Generar un ID único basado en el tiempo actual
      return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
    }
  }
  
  // Ejemplo de uso:
  const manager = new ProductManager();
  
  console.log(manager.getProducts()); // []
  
  const productData = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
  };
  
  const newProduct = manager.addProduct(productData);
  console.log(newProduct); // Nuevo producto agregado
  
  console.log(manager.getProducts()); // Producto recién agregado
  
  try {
    manager.addProduct(productData); // Intento agregar producto con código repetido
  } catch (error) {
    console.error(error.message); // Error: El código del producto ya existe
  }
  
  try {
    manager.getProductById("nonexistentId"); // Intento obtener un producto inexistente
  } catch (error) {
    console.error(error.message); // Error: Producto no encontrado
  }
  