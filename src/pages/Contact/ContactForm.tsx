'use client'

import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { TextMorph } from '../../components/motion-ui/TextMorph'
import { sendMessage } from '../../services/telegram'

type Inputs = {
	tgUsername: string
	question: string
}

const EnhancedContactForm: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<Inputs>()
	const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		await sendMessage(data.question, data.tgUsername)

		reset()
		setIsSubmitSuccessful(true)
		setTimeout(() => setIsSubmitSuccessful(false), 3000)
	}

	return (
		<div className="relative w-full max-w-md mx-auto overflow-hidden">
			<motion.form
				onSubmit={handleSubmit(onSubmit)}
				className="relative z-10 flex flex-col gap-4 p-6 bg-neutral-800/40 rounded-3xl border border-white/10 backdrop-blur-md shadow-lg"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<TextMorph className="text-2xl font-bold text-white mb-4">
					Contact with Me
				</TextMorph>
				<div>
					<label
						htmlFor="tgUsername"
						className="block text-sm font-medium text-zinc-300 mb-1"
					>
						Your Telegram username
					</label>
					<input
						className="w-full bg-neutral-700/40 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-inner text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
						id="tgUsername"
						{...register('tgUsername', { required: 'Username is required' })}
						placeholder="@username"
					/>
					{errors.tgUsername && (
						<p className="mt-1 text-xs text-red-400">
							{errors.tgUsername.message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor="question"
						className="block text-sm font-medium text-zinc-300 mb-1"
					>
						Your question
					</label>
					<textarea
						className="w-full bg-neutral-700/40 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-inner text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none h-32"
						id="question"
						{...register('question', { required: 'Question is required' })}
						placeholder="Type your question here..."
					/>
					{errors.question && (
						<p className="mt-1 text-xs text-red-400">
							{errors.question.message}
						</p>
					)}
				</div>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="mt-4 bg-purple-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
					type="submit"
					disabled={isSubmitting}
				>
					<TextMorph>{isSubmitting ? 'Sending...' : 'Send Message'}</TextMorph>
				</motion.button>
			</motion.form>
			<AnimatePresence>
				{isSubmitSuccessful && (
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.5 }}
						className="absolute inset-0 flex items-center justify-center backdrop-blur-md z-20 rounded-3xl"
					>
						<div className="relative z-10 flex flex-col items-center">
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									type: 'spring',
									stiffness: 260,
									damping: 20,
									delay: 0.3,
								}}
								className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mb-4"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<motion.path
										initial={{ pathLength: 0 }}
										animate={{ pathLength: 1 }}
										transition={{ duration: 0.5, delay: 0.5 }}
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</motion.div>
							<TextMorph className="text-white text-xl font-semibold text-center">
								Message sent successfully!
							</TextMorph>
							<TextMorph className="text-white/70 text-sm mt-2 text-center">
								We'll get back to you soon
							</TextMorph>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default EnhancedContactForm
