"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Shield, Brain, Heart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Haven AI Your Companion for
            <span className="text-primary block">Mental Wellness</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Experience compassionate, confidential therapy conversations powered
            by advanced AI. Available 24/7, whenever you need support.
          </p>
          <Button size="lg" className="mr-4">
            <MessageCircle className="mr-2 h-5 w-5" />
            <Link href="/chat">Start Chatting</Link>
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Haven AI Therapy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">100% Confidential</h3>
              <p className="text-muted-foreground">
                Your conversations are private and secure. We prioritize your
                privacy and data protection.
              </p>
            </Card>
            <Card className="p-6">
              <Brain className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Advanced AI</h3>
              <p className="text-muted-foreground">
                Powered by state-of-the-art AI technology to provide meaningful
                therapeutic conversations.
              </p>
            </Card>
            <Card className="p-6">
              <Heart className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Access therapeutic support anytime, anywhere. We&apos;re here
                whenever you need us.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of others who have found comfort and support through
            our AI therapy platform.
          </p>
          <Button type="submit" size="lg" asChild>
            <Link href="/chat">Begin Your Session</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
