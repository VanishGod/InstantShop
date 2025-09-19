import { productList } from "@/app/utils/products";
import Carousel from "@/app/components/Carousel";

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productList.find((item) => item.id === Number(params.id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-400">
        <h1 className="text-red-500 text-2xl font-bold">Producto no encontrado</h1>
      </div>
    );
  }

  // Crear array de imágenes para el carousel
  const carouselImages = [
    {
      id: 1,
      src: product.img || "/default-image.jpep",
      alt: product.name
    },
    // Puedes agregar más imágenes aquí si el producto tiene más
    {
      id: 2,
      src: "/default-image-2.jpg",
      alt: `${product.name} - Vista 2`
    },
    {
      id: 3,
      src: "/default-image-3.jpg", 
      alt: `${product.name} - Vista 3`
    }
  ];

  return (
    <main className="min-h-screen bg-amber-400">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">

          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="bg-amber-700 rounded-xl p-4 lg:p-6">
              <Carousel 
                images={carouselImages}
                className="w-full aspect-square"
              />
            </div>
          </div>

          {/* Sección de información del producto */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                {product.desc}
              </p>

              <div className="space-y-3 mb-6">
                <p className="text-2xl font-semibold text-green-600">
                  Precio: ${product.price}
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Estado:</span> {product.status}
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Publicado el:</span> {product.date}
                </p>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Información del Vendedor</h2>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">Usuario:</span> {product.authorData[0].username}</p>
                  <p><span className="font-semibold">Email:</span> {product.authorData[0].email}</p>
                  <p><span className="font-semibold">Teléfono:</span> {product.authorData[0].phoneNumber}</p>
                </div>
              </div>

              <button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Contactar al Vendedor
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}