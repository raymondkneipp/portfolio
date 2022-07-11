import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { IoAlertCircle, IoCheckmark, IoSend } from 'react-icons/io5/index.js';
import { AiOutlineLoading3Quarters } from 'react-icons/ai/index.js';

const ContactForm: React.FC = () => {
	const form = useRef();
	const [status, setStatus] = useState('idle');

	const handleSubmit = (e) => {
		e.preventDefault();

		setStatus('loading');

		emailjs
			.sendForm(
				'service_utpk41s',
				'template_fj6l48l',
				form.current,
				'EkS05CKAu86EamUZd'
			)
			.then((res) => {
				form.current.reset();

				setStatus('success');
			})
			.catch((error) => {
				setStatus('error');
			});
	};

	return (
		<form
			className="space-y-3 max-w-lg flex flex-col mx-auto"
			onSubmit={handleSubmit}
			ref={form}
		>
			<label htmlFor="email" className="text-cyan-500">
				Email
			</label>
			<input
				type="email"
				required={true}
				id="email"
				name="email"
				disabled={status !== 'idle'}
				className="flex-1 bg-transparent placeholder:text-cyan-500/50 text-cyan-500 focus:outline-none p-3 block border-2 border-cyan-500/20 focus:border-cyan-500 rounded-lg max-w-none disabled:cursor-not-allowed"
				placeholder="Email Address"
			/>
			<label htmlFor="message" className="text-cyan-500">
				Message
			</label>
			<textarea
				id="message"
				required={true}
				minLength={10}
				name="message"
				disabled={status !== 'idle'}
				className="flex-1 bg-transparent placeholder:text-cyan-500/50 text-cyan-500 focus:outline-none p-3 block border-2 border-cyan-500/20 focus:border-cyan-500 rounded-lg max-w-none resize-none disabled:cursor-not-allowed"
				rows="4"
				placeholder="Your message"
			></textarea>
			<button
				type="submit"
				disabled={status !== 'idle'}
				value="Send Message"
				className="font-bold text-zinc-900 bg-cyan-500 px-6 py-3 hover:bg-cyan-400 transition rounded-lg cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 flex items-center justify-center disabled:bg-cyan-600 disabled:cursor-not-allowed"
			>
				{status === 'loading' && (
					<>
						<span className="animate-spin">
							<AiOutlineLoading3Quarters size={24} />
						</span>
						<span className="ml-3">Loading</span>
					</>
				)}
				{status === 'idle' && (
					<>
						<IoSend size={24} />
						<span className="ml-3">Send</span>
					</>
				)}
				{status === 'success' && (
					<>
						<IoCheckmark size={24} />
						<span className="ml-3">Message Sent</span>
					</>
				)}
				{status === 'error' && (
					<>
						<IoAlertCircle size={24} />
						<span className="ml-3">Try Again</span>
					</>
				)}
			</button>
		</form>
	);
};

export default ContactForm;
