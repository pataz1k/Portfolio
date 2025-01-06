import { Spotlight } from '../motion-ui/Spotlight'

export function SpotlightBackground() {
	return (
		<>
			<Spotlight
				className="from-purple-500 via-purple-600 to-purple-400 blur-2xl dark:from-purple-900 dark:via-purple-500 dark:to-purple-900"
				size={128}
			/>
			<div className="absolute inset-0">
				<svg className="h-full w-full">
					<defs>
						<pattern
							id="grid-pattern"
							width="8"
							height="8"
							patternUnits="userSpaceOnUse"
						>
							<path
								xmlns="http://www.w3.org/2000/svg"
								d="M0 4H4M4 4V0M4 4H8M4 4V8"
								stroke="currentColor"
								strokeOpacity="0.3"
								className="stroke-white dark:stroke-black"
							/>
							<rect
								x="3"
								y="3"
								width="2"
								height="2"
								fill="currentColor"
								fillOpacity="0.25"
								className="fill-white dark:fill-black"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid-pattern)" />
				</svg>
			</div>
		</>
	)
}
