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
      <header className="border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
        <div className="mx-auto flex max-w-4xl items-center gap-3">
          <Link
            href={routes.issues.list}
            className="text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
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
