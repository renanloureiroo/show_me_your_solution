import Image from "next/image";
import { useSession } from "next-auth/react";
import { CircleNotch } from "phosphor-react";

interface AvatarProps {
	width?: number;
	height?: number;
  size?: number;
}

export const Avatar = ({ width, height, size }: AvatarProps) => {
	
	const { data: session, status } = useSession();

	return (
		<div className="flex items-center justify-center p-1">
			{status === "loading" ? (
				<CircleNotch size={size!} className="animate-spin text-white" />
			) : (
				<Image
					className="rounded-full"
					src={session?.user?.image!}
					alt="Avatar"
					width={width!}
					height={height!}
					layout="intrinsic"
				/>
			)}
		</div>
	);
};
