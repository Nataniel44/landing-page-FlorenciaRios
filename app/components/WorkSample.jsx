import Image from "next/image";

export default function WorkSample({ title, images }) {
  return (
    <article className="mb-8">
      <h3 className="text-3xl text-pink-300 mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={300}
              height={300}
              className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                {image.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
