import React from 'react';

const Faq = ({faq}) => {
    const {question, answer}= faq;

    return (
        <div>

            <div className='w-11/12 mx-auto my-8 bg-zinc-50 p-3 rounded-md'>
                <details>
                    <summary className='text-xl font-bold mb-4 text-amber-500'>{question}</summary>
                    <p className='px-6 font-bold my-2'>{answer}</p>
                </details>
            </div>

        </div>
    );
};

export default Faq;