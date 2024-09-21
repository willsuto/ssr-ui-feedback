import Link from 'next/link';

export default function FeedbackModal({ type }) {
  const messages = {
    correct: 'Nice.',
    incorrect: 'Not that one!'
  };

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs w-full mt-12"> 
        <h1 className="text-lg font-semibold text-center mb-4">{messages[type]}</h1>
        <div className="flex justify-center">
          <Link href="/" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
            Close
          </Link>
        </div>
      </div>
    </div>
  );
};
