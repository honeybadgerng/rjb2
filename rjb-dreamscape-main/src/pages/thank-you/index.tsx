import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center space-y-6">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
        <h1 className="text-3xl font-bold">Thank You!</h1>
        <p className="text-muted-foreground">
          Your message has been sent successfully. We’ll get back to you
          shortly.
        </p>
        <Link to="/" className="inline-block mt-4 text-primary underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
