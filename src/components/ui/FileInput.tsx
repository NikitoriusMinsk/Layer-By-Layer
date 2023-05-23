import Image from "next/image";
import { DragEvent, useRef, useState } from "react";

interface FileInputProps {
	text: string;
	textDrag: string;
	alt: string;
}

export const FileInput: React.FC<FileInputProps> = (props) => {
	const { text, alt, textDrag } = props;
	const [fileCount, setFileCount] = useState<number | undefined>(0);
	const [draggedOver, setDraggedOver] = useState(false);
	const ref = useRef<HTMLInputElement>(null);

	function handleDrop(e: DragEvent<HTMLLabelElement>) {
		e.preventDefault();
		if (e.dataTransfer.items) {
			// Use DataTransfer interface to access the file(s)
			ref.current!.files = e.dataTransfer.files;
			setFileCount(e.dataTransfer.files.length);
		}
	}

	function handleDragOver(e: DragEvent<HTMLLabelElement>) {
		e.preventDefault();
	}

	return (
		<label
			data-name="file"
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			onDragEnter={() => setDraggedOver(true)}
			onDragLeave={() => setDraggedOver(false)}
			onDropCapture={() => setDraggedOver(false)}
			data-count={fileCount ?? 0}
		>
			<input
				ref={ref}
				type="file"
				name="file"
				onChange={(e) => setFileCount(e.target.files?.length)}
				multiple
			/>
			<Image
				src={
					draggedOver
						? "/images/contact/file-drag.svg"
						: "/images/contact/file-upload.svg"
				}
				alt={alt}
				height={48}
				width={48}
				style={{ pointerEvents: "none" }}
			/>
			<text style={{ pointerEvents: "none" }}>{draggedOver ? textDrag : text}</text>
		</label>
	);
};
