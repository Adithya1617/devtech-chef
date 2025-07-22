// src/app/career/page.tsx

export default function CareerPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Join Our Team</h1>
      <p className="text-lg text-gray-600 text-center mb-6 max-w-xl">
        We're always looking for passionate individuals to join our mission at DevTech Chef.
        If you're excited to work in a dynamic team, send your resume to{' '}
        <a href="mailto:careers@devtechchef.com" className="text-blue-600 underline">
          careers@devtechchef.com
        </a>
        .
      </p>
    </div>
  );
}
