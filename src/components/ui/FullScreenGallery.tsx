import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { motion } from 'motion/react'
import { FC, useCallback, useEffect, useState } from 'react'
import { cn } from '../../lib/utils'

interface FullScreenGalleryProps {
	images: string[]
	active: string
	onClose: () => void
}

const FullScreenGallery: FC<FullScreenGalleryProps> = ({
	images,
	active,
	onClose,
}) => {
	const [activeImage, setActiveImage] = useState<string>(active)

	const handleNextImage = useCallback(() => {
		const imageIndex = images.indexOf(activeImage)
		if (imageIndex === images.length - 1) {
			setActiveImage(images[0])
		} else {
			setActiveImage(images[imageIndex + 1])
		}
	}, [images, activeImage])

	const handlePrevImage = useCallback(() => {
		const imageIndex = images.indexOf(activeImage)
		if (imageIndex === 0) {
			setActiveImage(images[images.length - 1])
		} else {
			setActiveImage(images[imageIndex - 1])
		}
	}, [images, activeImage])

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			} else if (event.key === 'ArrowRight') {
				handleNextImage()
			} else if (event.key === 'ArrowLeft') {
				handlePrevImage()
			}
		},
		[onClose, handleNextImage, handlePrevImage]
	)

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [handleKeyDown])

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="fixed inset-0 bg-opacity-90 flex items-center justify-center z-50 "
			tabIndex={0}
		>
			<motion.img
				key={activeImage}
				src={activeImage}
				alt="fullscreen image"
				className="max-h-full max-w-full object-contain"
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.8, opacity: 0 }}
				transition={{ duration: 0.3 }}
			/>
			<button
				onClick={onClose}
				className="absolute top-4 right-4 text-white text-2xl"
				aria-label="Close fullscreen"
			>
				<X className="hover:text-red-500 transition-colors" />
			</button>

			{images.length >= 2 && (
				<>
					<motion.button
						whileTap={{ transform: 'translateX(8px)' }}
						className="absolute right-5 top-[50%] text-white text-2xl"
						onClick={handleNextImage}
					>
						<ArrowRight className="hover:text-blue-500 transition-colors size-8" />
					</motion.button>
					<motion.button
						className="absolute left-5 top-[50%] text-white text-2xl"
						onClick={handlePrevImage}
						whileTap={{ transform: 'translateX(-8px)' }}
					>
						<ArrowLeft className="hover:text-blue-500 transition-colors size-8" />
					</motion.button>
				</>
			)}
		</motion.div>
	)
}

export default FullScreenGallery
