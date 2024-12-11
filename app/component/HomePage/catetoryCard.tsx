import Image from "next/image";

interface CategoryProp {
    title: string;
    image: string;
}

export default function CategoryCard({ title, image }: CategoryProp) {
    return (
        <div className="w-full flex flex-col border border-Button py-5 gap-4 justify-center items-center text-black hover:bg-Secondary2 group">
            {/* Wrap the image with a div for boundary styling */}
            <div className="p-2 border border-transparent rounded-full group-hover:border-white">
                <Image
                    src={image}
                    alt={title}
                    width={56}
                    height={56}
                    className="group-hover:text-white"
                />
            </div>
            <h1 className="text-black group-hover:text-white">{title}</h1>
        </div>
    );
}
