


    import React, { useRef } from 'react';
    import emailjs from 'emailjs-com';

    export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
        'service_yhh7pov',      
        'template_mb7tayi',     
        form.current,
        ZQ9yG1Jr0ZIAFVVv5      
        )
        .then(
        () => {
            alert('Message sent successfully!');
        },
        (error) => {
            alert('Failed to send message. Error: ' + error.text);
        }
        );

        e.target.reset();
    };

    return (
        <section   id="contact"
        data-aos='fade-up'
        data-aos-delay='300'
        className=' scroll-mt-[60px] min-h-screen flex items-center justify-center p-6 bg-black'
        >
        <article className='shadow-lg rounded-lg bg-[#111] max-w-xl w-full p-8'>
            <header className='mb-6 text-center'>
            <h2 className='text-4xl font-bold text-white'>Contact Us</h2>
            </header>

            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
            <div>
                <label htmlFor='name' className='block text-gray-300 font-medium mb-2'>Name</label>
                <input
                type='text'
                name='name'
                id='name'
                placeholder='Your name'
                className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none'
                required
                />
            </div>

            <div>
                <label htmlFor='email' className='block text-gray-300 font-medium mb-2'>Email</label>
                <input
                type='email'
                name='email'
                id='email'
                placeholder='Your email'
                className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none'
                required
                />
            </div>

            <div>
                <label htmlFor='message' className='block text-gray-300 font-medium mb-2'>Message</label>
                <textarea
                id='message'
                name='message'
                placeholder='Your message'
                className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none'
                required
                ></textarea>
            </div>

            <button
                type='submit'
                className='w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'
            >
                Send Message
            </button>
            </form>
        </article>
        </section>
    );
    }
