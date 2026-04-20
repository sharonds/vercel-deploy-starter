export default function Home() {
  const greeting = process.env.GREETING ?? "Hello from localhost!"
  const vercelEnv = process.env.VERCEL_ENV ?? "local"
  const branchUrl = process.env.VERCEL_BRANCH_URL ?? null

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 font-mono">
      <h1 className="text-3xl font-bold">{greeting}</h1>

      <div className="rounded border border-gray-200 p-4 text-sm space-y-2 w-full max-w-md">
        <p>
          <span className="text-gray-400">environment:</span>{" "}
          <span className="font-bold">{vercelEnv}</span>
        </p>
        {branchUrl && (
          <p>
            <span className="text-gray-400">branch url:</span>{" "}
            <span className="font-bold">{branchUrl}</span>
          </p>
        )}
        <p className="text-gray-400 text-xs mt-4">
          Set GREETING in Vercel dashboard → Project Settings → Environment Variables
        </p>
      </div>

      <p className="text-gray-400 text-sm">
        👉{" "}
        <a
          href="https://github.com/sharonds/vercel-deploy-starter"
          className="underline"
        >
          View source on GitHub
        </a>
      </p>
    </main>
  )
}
