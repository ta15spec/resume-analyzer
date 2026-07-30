 import ResumeUploader from "./components/ResumeUploader";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-6xl font-extrabold text-center">
          AI Resume Analyzer
        </h1>

        <p className="text-center text-gray-300 mt-6 text-xl">
          Upload your resume and receive ATS score, AI suggestions,
          company-wise analysis and job recommendations.
        </p>

        <div className="mt-16">
          <ResumeUploader />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold">ATS Score</h3>
            <p className="mt-4 text-gray-400">
              Analyze resume compatibility.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold">AI Suggestions</h3>
            <p className="mt-4 text-gray-400">
              Improve your resume instantly.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold">Job Recommendations</h3>
            <p className="mt-4 text-gray-400">
              Discover the best matching roles.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}