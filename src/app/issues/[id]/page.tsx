import Link from 'next/link';
import { IssueDetailQuery } from '@/components/issue-detail/IssueDetailQuery';
import { routes } from '@/lib/routes';

interface IssuePageProps {
  params: Promise<{ id: string }>;
}

export default async function IssuePage({ params }: IssuePageProps) {
  const { id } = await params;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-[#26263a] px-4 py-4">
        <div className="mx-auto flex max-w-4xl items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#f06292] shadow-[0_0_10px_rgba(240,98,146,0.7)]" />
          <Link
            href={routes.issues.list}
            className="font-[family-name:var(--font-syne)] text-sm font-700 uppercase tracking-widest text-[#7070a0] hover:text-[#f06292] transition-colors"
          >
            ← Issues
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <IssueDetailQuery issueId={id} />
      </main>
    </div>
  );
}
