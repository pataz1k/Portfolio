import axios from 'axios'

// Получаем токен и ID чата из переменных окружения
const token = import.meta.env.VITE_BOT_TOKEN
const chatId = import.meta.env.VITE_CHAT_ID

/**
 * Отправляет сообщение в Telegram-чат через Telegram Bot API.
 * @param text - Текст сообщения.
 * @param username - Имя пользователя, отправившего сообщение.
 */
export const sendMessage = async (
	text: string,
	username: string
): Promise<void> => {
	// Формируем текст сообщения с использованием MarkdownV2
	const message = `
*New question from portfolio*
_${text}_
from *${username}*
`

	const url = `https://api.telegram.org/bot${token}/sendMessage`

	try {
		// Отправляем запрос на Telegram API
		const response = await axios.post(url, {
			chat_id: chatId,
			text: message,
			parse_mode: 'MarkdownV2', // Указываем режим форматирования текста
		})

		console.log('Message sent:', response.data)
	} catch (error) {
		console.error('Error sending message:', error)
	}
}
