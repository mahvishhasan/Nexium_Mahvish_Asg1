import QuoteForm from "@components/ui/QuoteForm";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6"> Quote Generator</h1>
      <QuoteForm />
    </main>
  )
}
