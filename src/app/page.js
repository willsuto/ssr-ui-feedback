import Link from 'next/link';
import FeedbackModal from '@/app/components/FeedbackModal.jsx';

export default function Home({searchParams}) {
  const feedback = searchParams?.fb;

  return (
    <div className="flex items-center justify-center h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-12 items-center">
        <Link href='/?fb=correct'>Click this one.</Link>
        <Link href='/?fb=incorrect'>Definitely don&apos;t click this one.</Link>
        {feedback !== undefined && <FeedbackModal type={feedback}/>}
      </main>
    </div>
  );
}
