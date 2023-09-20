import Image from "next/image";
import { VscAccount } from "react-icons/vsc";

type ProductImageType = {
	src?: string | null;
	className?: string;
}

export default function ProductImage({ src, className=""}: ProductImageType ) {
	return (
			 <div
		      	className={`relative h-20 w-20 overflow-hidden rounded-full border-black border-1 border-solid ${className}`}
		     >
			      {src == null ? (
			        	<VscAccount className="h-full w-full" />
			      ) : (
			        	<Image src={src} alt="Product Image" quality={100} fill />
			      )}
		    </div>
	);
}