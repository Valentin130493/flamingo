import Link from 'next/link';
import { IssueListQuery } from '@/components/issues/IssueListQuery';
import { routes } from '@/lib/routes';

export const metadata = { title: 'Issues — Issue Tracker' };

export default function IssuesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href={routes.issues.list} className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Issues
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-4xl">
          <IssueListQuery />
        </div>
      </main>
    </div>
  );
}
