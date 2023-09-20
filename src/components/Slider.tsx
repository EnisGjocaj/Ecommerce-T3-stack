import Image from "next/image";

type SliderTypes = {
	imageUrl?: string | null;
	text?: string;
}

export default function Slider({ imageUrl, text }: SliderTypes) {
    return (
        <div className="text-center p-2 mx-8 my-2 rounded-lg">
            <div className="h-48 w-40 mx-auto relative hover:scale-110 transition-transform">
                {imageUrl == null ? (
                    <h1>No img</h1>
                ) : (
                    <div className="h-full w-full relative overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt="Category Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-start justify-center">
                            <h2 className="text-white font-semibold text-xl mt-4">{text}</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


