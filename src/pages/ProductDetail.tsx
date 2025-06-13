
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import EcommerceNavigation from "@/components/EcommerceNavigation";
import { useCart, Product } from "@/contexts/CartContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Mock product data - in real app, fetch from API
  const product: Product = {
    id: parseInt(id || "1"),
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    image: "/placeholder.svg",
    description: "High-quality wireless headphones with advanced noise cancellation technology. Perfect for music lovers and professionals who need crystal clear audio quality.",
    category: "Electronics",
    rating: 4.5,
    inStock: true
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <EcommerceNavigation />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/products" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          <div>
            <Badge className="mb-4">{product.category}</Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.rating}/5)</span>
            </div>
            
            <p className="text-4xl font-bold text-green-600 mb-6">${product.price}</p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>
            
            <div className="flex items-center space-x-4">
              <Button 
                size="lg" 
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              <Button variant="outline" size="lg">
                Add to Wishlist
              </Button>
            </div>
            
            {product.inStock && (
              <p className="text-green-600 mt-4">✓ In Stock - Ready to ship</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
