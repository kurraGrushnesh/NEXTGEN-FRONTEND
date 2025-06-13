
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EcommerceNavigation from "@/components/EcommerceNavigation";
import { useCart, Product } from "@/contexts/CartContext";
import { toast } from "sonner";

const Products = () => {
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");

  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 99.99,
      image: "/placeholder.svg",
      description: "High-quality wireless headphones with noise cancellation",
      category: "Electronics",
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "/placeholder.svg",
      description: "Advanced smartwatch with health monitoring",
      category: "Electronics",
      rating: 4.3,
      inStock: true
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 79.99,
      image: "/placeholder.svg",
      description: "Comfortable running shoes for daily exercise",
      category: "Sports",
      rating: 4.7,
      inStock: false
    },
    {
      id: 4,
      name: "Coffee Maker",
      price: 149.99,
      image: "/placeholder.svg",
      description: "Automatic coffee maker with programmable timer",
      category: "Home",
      rating: 4.2,
      inStock: true
    },
    {
      id: 5,
      name: "Laptop Backpack",
      price: 49.99,
      image: "/placeholder.svg",
      description: "Water-resistant laptop backpack with multiple compartments",
      category: "Accessories",
      rating: 4.4,
      inStock: true
    },
    {
      id: 6,
      name: "Yoga Mat",
      price: 29.99,
      image: "/placeholder.svg",
      description: "Non-slip yoga mat for home workouts",
      category: "Sports",
      rating: 4.6,
      inStock: true
    }
  ];

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products
    .filter(product => filterCategory === "all" || product.category === filterCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <EcommerceNavigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Products</h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {!product.inStock && (
                  <Badge className="absolute top-2 right-2 bg-red-500">
                    Out of Stock
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{product.category}</Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">${product.price}</span>
                  <div className="flex gap-2">
                    <Link to={`/product/${product.id}`}>
                      <Button variant="outline" size="sm">View</Button>
                    </Link>
                    <Button 
                      size="sm" 
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
