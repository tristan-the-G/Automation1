'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Bot,
  Cpu,
  Sparkles,
  ArrowRight,
  Brain,
  Code2,
  Workflow,
  CircuitBoard,
  Rocket,
  Target,
  BarChart3,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-[#0A0A0A] to-[#0A0A0A]"></div>

      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <FloatingOrbs />

      <div className="relative z-10">
        <Navigation />

        <HeroSection mounted={mounted} />

        <ServicesSection />

        <TechStackSection />

        <ProcessSection />

        <StatsSection />

        <CTASection />

        <Footer />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-[#D4AF37] rounded-lg rotate-6 blur-sm"></div>
            <div className="relative bg-gradient-to-br from-[#D4AF37] to-[#FFEB3B] rounded-lg p-2 flex items-center justify-center">
              <CircuitBoard className="w-6 h-6 text-[#0A0A0A]" />
            </div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
            NeuralSync
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white/80 hover:text-[#D4AF37] transition-colors">Services</a>
          <a href="#tech" className="text-white/80 hover:text-[#D4AF37] transition-colors">Technology</a>
          <a href="#process" className="text-white/80 hover:text-[#D4AF37] transition-colors">Process</a>
          <Button className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] hover:from-[#FFEB3B] hover:to-[#D4AF37] text-[#0A0A0A] font-semibold">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection({ mounted }: { mounted: boolean }) {
  return (
    <section className="container mx-auto px-6 pt-20 pb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 hover:bg-[#D4AF37]/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Next-Gen AI Solutions
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Automate Your
            <span className="block bg-gradient-to-r from-[#D4AF37] via-[#FFEB3B] to-[#D4AF37] bg-clip-text text-transparent">
              Future with AI
            </span>
          </h1>

          <p className="text-xl text-white/70 leading-relaxed">
            Transform your business with cutting-edge AI automation. I build intelligent systems that work 24/7,
            scale infinitely, and deliver results beyond human capability.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] hover:from-[#FFEB3B] hover:to-[#D4AF37] text-[#0A0A0A] font-semibold text-lg px-8">
              Start Your Project
              <Rocket className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 text-lg px-8">
              View Case Studies
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div>
              <div className="text-3xl font-bold text-[#D4AF37]">10+</div>
              <div className="text-sm text-white/50">Projects Deployed</div>
            </div>
            <div className="h-12 w-px bg-white/10"></div>
            <div>
              <div className="text-3xl font-bold text-[#D4AF37]">98%</div>
              <div className="text-sm text-white/50">Client Satisfaction</div>
            </div>
            <div className="h-12 w-px bg-white/10"></div>
            <div>
              <div className="text-3xl font-bold text-[#D4AF37]">24/7</div>
              <div className="text-sm text-white/50">AI Operations</div>
            </div>
          </div>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFEB3B]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <ThreeDCube />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: 'AI Model Development',
      description: 'Custom machine learning models trained on your data, delivering insights and automation tailored to your business.',
      features: ['Neural Networks', 'Deep Learning', 'NLP Processing']
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'End-to-end workflow automation that eliminates repetitive tasks and scales your operations exponentially.',
      features: ['RPA Integration', 'API Orchestration', 'Smart Workflows']
    },
    {
      icon: Bot,
      title: 'Intelligent Chatbots',
      description: 'AI-powered conversational agents that understand context, learn from interactions, and provide human-like support.',
      features: ['24/7 Support', 'Multi-Language', 'Context Aware']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Harness the power of AI to forecast trends, optimize decisions, and stay ahead of the competition.',
      features: ['Data Mining', 'Forecasting', 'Real-time Insights']
    },
    {
      icon: Code2,
      title: 'Custom AI Solutions',
      description: 'Bespoke AI systems designed from the ground up to solve your unique business challenges.',
      features: ['Full Stack', 'Cloud Native', 'Scalable Architecture']
    },
    {
      icon: Target,
      title: 'AI Consulting',
      description: 'Strategic guidance on AI adoption, implementation roadmaps, and technology selection.',
      features: ['Strategy Design', 'Tech Audits', 'ROI Planning']
    }
  ];

  return (
    <section id="services" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
          My Services
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          AI-Powered Solutions for
          <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
            Every Challenge
          </span>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          From concept to deployment, I deliver AI solutions that transform businesses
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 backdrop-blur-sm p-6"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFEB3B]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <service.icon className="w-6 h-6 text-[#D4AF37]" />
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
              {service.title}
            </h3>

            <p className="text-white/70 mb-4 leading-relaxed">
              {service.description}
            </p>

            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-white/50">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-[#D4AF37]" />
                  {feature}
                </div>
              ))}
            </div>

            <Button variant="ghost" className="mt-4 text-[#D4AF37] hover:text-[#FFEB3B] hover:bg-[#D4AF37]/10 w-full group">
              Learn More
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

function TechStackSection() {
  const technologies = [
    { name: 'GPT 5', category: 'LLM' },
    { name: 'Grok 4.0', category: 'AI Model' },
    { name: 'Perplexity Pro', category: 'AI Search' },
    { name: 'Bolt', category: 'Development' },
    { name: 'N8N', category: 'Automation' },
    { name: 'Make', category: 'Workflow' },
    { name: 'Voiceflow', category: 'Conversational AI' },
    { name: 'Supabase', category: 'Database' },
  ];

  return (
    <section id="tech" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
          Technology Stack
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Built with
          <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
            Cutting-Edge Tech
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <Card
            key={index}
            className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center group hover:scale-105"
          >
            <Cpu className="w-8 h-8 text-[#D4AF37] mx-auto mb-3 group-hover:rotate-180 transition-transform duration-500" />
            <div className="font-bold text-white mb-1">{tech.name}</div>
            <div className="text-xs text-white/50">{tech.category}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'I dive deep into your business to identify the optimal automation opportunities and relevant AI use cases.'
    },
    {
      number: '02',
      title: 'Solution Design & Blueprint',
      description: 'I architect a tailored AI automation solution designed precisely to meet your specific goals and requirements.'
    },
    {
      number: '03',
      title: 'Development & Optimization',
      description: 'I build and refine the automation, applying industry-leading frameworks and current best practices for robust performance.'
    },
    {
      number: '04',
      title: 'Deployment & Growth',
      description: 'I ensure secure implementation and configure the solution to scale seamlessly as your business evolves.'
    }
  ];

  return (
    <section id="process" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
          My Process
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          From Idea to
          <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
            Implementation
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <Card className="relative bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFEB3B] rounded-full flex items-center justify-center mb-4 text-xl font-bold text-[#0A0A0A]">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center">
          <Zap className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <div className="text-4xl font-bold text-[#D4AF37] mb-2">10x</div>
          <div className="text-white/70">Productivity Increase</div>
        </Card>
        <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center">
          <Target className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <div className="text-4xl font-bold text-[#D4AF37] mb-2">85%</div>
          <div className="text-white/70">Cost Reduction</div>
        </Card>
        <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center">
          <Rocket className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <div className="text-4xl font-bold text-[#D4AF37] mb-2">2 Weeks</div>
          <div className="text-white/70">Average Deployment</div>
        </Card>
        <Card className="bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-6 text-center">
          <BarChart3 className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <div className="text-4xl font-bold text-[#D4AF37] mb-2">250%</div>
          <div className="text-white/70">ROI Average</div>
        </Card>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <Card className="relative overflow-hidden bg-white/5 border-white/10 p-12 text-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#D4AF37]">
            Ready to Automate Your Future?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already leveraging AI to transform their operations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] hover:from-[#FFEB3B] hover:to-[#D4AF37] text-[#0A0A0A] font-semibold text-lg px-8">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 text-lg px-8">
              View Pricing
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="container mx-auto px-6 py-12 border-t border-white/10">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <CircuitBoard className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-xl font-bold">NeuralSync</span>
          </div>
          <p className="text-white/60 text-sm">
            Building the future of business automation with AI
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">AI Development</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Automation</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Consulting</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Security</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
        © 2025 NeuralSync AI. All rights reserved.
      </div>
    </footer>
  );
}

function ThreeDCube() {
  return (
    <div className="relative w-64 h-64 animate-float">
      <div className="absolute inset-0 perspective-1000">
        <div className="relative w-full h-full animate-spin-slow preserve-3d">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 to-[#FFEB3B]/30 border border-[#D4AF37]/50 backdrop-blur-sm rounded-lg rotate-x-45 rotate-y-45"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-[#FFEB3B]/20 to-[#D4AF37]/20 border border-[#FFEB3B]/50 backdrop-blur-sm rounded-lg rotate-x-30 rotate-y-60"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFEB3B]/20 border border-[#D4AF37]/50 backdrop-blur-sm rounded-lg rotate-x-60 rotate-y-30"></div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <Bot className="w-20 h-20 text-[#D4AF37] animate-pulse" />
      </div>
    </div>
  );
}

function FloatingOrbs() {
  return (
    <>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-[#FFEB3B]/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
    </>
  );
}
