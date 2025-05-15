import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Evaluator | Streamline Your Project Reviews</title>
        <meta name="description" content="An efficient project evaluation system by Aditya Gupta" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
        {/* Hero Section */}
        <section className="hero min-h-[70vh]">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-primary">
                Streamline Your Project Evaluations
              </h1>
              <p className="py-6 text-xl text-secondary">
                An efficient system for managing and evaluating projects, created by Aditya Gupta.
                Simplify your review process with our intuitive platform.
              </p>
              <div className="flex gap-4 justify-center">
                <a href="/admin" className="btn btn-primary btn-lg">
                  Admin Dashboard
                </a>
                <a href="/submit" className="btn btn-secondary btn-lg">
                  Submit Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature Cards remain the same */}
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4 text-primary">📊</div>
                  <h3 className="card-title text-secondary">Comprehensive Evaluation</h3>
                  <p className="text-neutral">Detailed assessment metrics for thorough project reviews</p>
                </div>
              </div>
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4 text-primary">⚡</div>
                  <h3 className="card-title text-secondary">Efficient Workflow</h3>
                  <p className="text-neutral">Streamlined process to save time and increase productivity</p>
                </div>
              </div>
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4 text-primary">🔒</div>
                  <h3 className="card-title text-secondary">Secure Access</h3>
                  <p className="text-neutral">Protected admin panel for authorized evaluators only</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-content">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Join hundreds of users who streamline their project evaluations with our platform</p>
            <div className="flex gap-4 justify-center">
              <a href="/admin" className="btn btn-accent btn-lg">
                Admin Dashboard
              </a>
              <a href="/submit" className="btn btn-secondary btn-lg">
                Submit Project
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}