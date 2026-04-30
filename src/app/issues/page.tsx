import Link from 'next/link';
import { IssueListQuery } from '@/components/issues/IssueListQuery';
import { routes } from '@/lib/routes';

export const metadata = { title: 'Issues — Issue Tracker' };

export default function IssuesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-[#26263a] px-4 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#f06292] shadow-[0_0_10px_rgba(240,98,146,0.7)]" />
            <Link
              href={routes.issues.list}
              className="font-[family-name:var(--font-syne)] text-sm font-700 uppercase tracking-widest text-[#e4e4f4] hover:text-[#f06292] transition-colors"
            >
              Issues
            </Link>
          </div>
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
