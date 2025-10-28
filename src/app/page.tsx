"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Brain, CreditCard, Github, Globe, Layers, Linkedin, MessageCircle, Rocket, Sparkles, Star, Target, TrendingUp, Twitter, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Team", id: "team" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AIVenture"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="AI-Powered Solutions for Modern Business"
          description="Transform your operations with cutting-edge artificial intelligence technology designed to scale your business and drive innovation forward."
          tag="Revolutionary AI"
          tagIcon={Zap}
          buttons={[
            { text: "Start Free Trial", href: "https://signup.aiventure.com" },
            { text: "Learn More", href: "features" }
          ]}
          imageSrc="https://images.pexels.com/photos/17486100/pexels-photo-17486100.png?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="AI technology dashboard interface"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About AIVenture"
          description="We're pioneering the future of business intelligence through advanced AI solutions that empower companies to make data-driven decisions and achieve unprecedented growth."
          tag="Our Mission"
          tagIcon={Target}
          bulletPoints={[
            {
              title: "Advanced AI Models",
              description: "State-of-the-art machine learning algorithms trained on diverse datasets",
              icon: Brain
            },
            {
              title: "Real-time Analytics",
              description: "Instant insights and predictions to guide critical business decisions",
              icon: TrendingUp
            },
            {
              title: "Seamless Integration",
              description: "Easy-to-implement solutions that work with your existing systems",
              icon: Layers
            }
          ]}
          imageSrc="https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="AI automation technology"
          imagePosition="right"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Powerful AI Features"
          description="Discover the capabilities that make our AI platform the choice of forward-thinking businesses worldwide."
          tag="Features"
          tagIcon={Sparkles}
          features={[
            {
              id: "01",
              title: "Intelligent Automation",
              description: "Automate complex workflows with AI that learns and adapts to your business processes",
              imageSrc: "https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Automated workflow visualization"
            },
            {
              id: "02",
              title: "Predictive Analytics",
              description: "Forecast trends and outcomes with machine learning models trained on your data",
              imageSrc: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Analytics dashboard with predictions"
            },
            {
              id: "03",
              title: "Smart Integrations",
              description: "Connect seamlessly with popular tools and platforms through our AI-powered APIs",
              imageSrc: "https://images.pexels.com/photos/30547573/pexels-photo-30547573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "System integration network"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your AI Plan"
          description="Flexible pricing options designed to scale with your business needs and growth."
          tag="Pricing"
          tagIcon={CreditCard}
          plans={[
            {
              id: "starter",
              badge: "Starter Plan",
              badgeIcon: Rocket,
              price: "$49/mo",
              subtitle: "Perfect for small teams getting started",
              buttons: [
                { text: "Start Free Trial", href: "https://signup.aiventure.com" },
                { text: "Learn More", href: "features" }
              ],
              features: [
                "Up to 5 team members",
                "10,000 API calls/month",
                "Basic AI models",
                "Email support",
                "Dashboard analytics"
              ]
            },
            {
              id: "professional",
              badge: "Professional Plan",
              badgeIcon: Star,
              price: "$149/mo",
              subtitle: "Advanced features for growing businesses",
              buttons: [
                { text: "Get Started", href: "https://signup.aiventure.com/pro" },
                { text: "Contact Sales", href: "contact" }
              ],
              features: [
                "Up to 25 team members",
                "100,000 API calls/month",
                "Advanced AI models",
                "Priority support",
                "Custom integrations",
                "Advanced analytics"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The brilliant minds behind AIVenture's revolutionary AI technology and business solutions."
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "CEO & Founder",
              description: "Former AI research director at Google. PhD in Machine Learning from Stanford. 15 years experience in AI and tech leadership.",
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/sarahchen" },
                { icon: Twitter, url: "https://twitter.com/sarahchen" }
              ]
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "CTO",
              description: "Former principal engineer at Microsoft Azure AI. Expert in distributed systems and machine learning infrastructure.",
              imageSrc: "https://images.pexels.com/photos/6266979/pexels-photo-6266979.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Rodriguez portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/marcusrodriguez" },
                { icon: Github, url: "https://github.com/marcusrodriguez" }
              ]
            },
            {
              id: "3",
              name: "Emily Thompson",
              role: "Head of Design",
              description: "Award-winning UX designer with 10 years creating intuitive AI interfaces. Former design lead at Stripe and Airbnb.",
              imageSrc: "https://images.pexels.com/photos/17279854/pexels-photo-17279854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Thompson portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/emilythompson" },
                { icon: Globe, url: "https://emilythompson.design" }
              ]
            },
            {
              id: "4",
              name: "David Kim",
              role: "Senior AI Engineer",
              description: "PhD in Computer Science from MIT. Specializes in natural language processing and computer vision applications.",
              imageSrc: "https://images.pexels.com/photos/1181332/pexels-photo-1181332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/davidkim" },
                { icon: Github, url: "https://github.com/davidkim" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="See how leading companies are transforming their operations with AIVenture's AI solutions."
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Walsh",
              role: "VP of Operations",
              company: "TechFlow Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Walsh portrait"
            },
            {
              id: "2",
              name: "Robert Chang",
              role: "CEO",
              company: "DataSync Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Chang portrait"
            },
            {
              id: "3",
              name: "Lisa Martinez",
              role: "Head of Analytics",
              company: "InnovateNow",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7414008/pexels-photo-7414008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Martinez portrait"
            },
            {
              id: "4",
              name: "Michael Foster",
              role: "CTO",
              company: "NextGen Systems",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Foster portrait"
            },
            {
              id: "5",
              name: "Amanda Liu",
              role: "Product Director",
              company: "ScaleTech",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Amanda Liu portrait"
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest AI Insights"
          description="Stay updated with the latest trends, insights, and breakthroughs in artificial intelligence."
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "AI Trends",
              title: "The Future of AI in Business",
              excerpt: "Exploring how artificial intelligence will reshape industries and create new opportunities for growth.",
              imageSrc: "https://images.pexels.com/photos/17486100/pexels-photo-17486100.png?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "AI technology visualization",
              authorName: "Sarah Chen",
              authorAvatar: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "Jan 15, 2025"
            },
            {
              id: "2",
              category: "Automation",
              title: "Streamlining Operations with AI",
              excerpt: "Practical strategies for implementing AI automation to reduce costs and improve efficiency.",
              imageSrc: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Business automation process",
              authorName: "Marcus Rodriguez",
              authorAvatar: "https://images.pexels.com/photos/6266979/pexels-photo-6266979.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "Jan 12, 2025"
            },
            {
              id: "3",
              category: "Machine Learning",
              title: "Building Intelligent Systems",
              excerpt: "A deep dive into machine learning architectures that power modern AI applications.",
              imageSrc: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Machine learning algorithms",
              authorName: "David Kim",
              authorAvatar: "https://images.pexels.com/photos/1181332/pexels-photo-1181332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "Jan 10, 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get Started with AI Today"
          description="Ready to transform your business with AI? Contact our team to learn how AIVenture can help you achieve your goals."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Work Email", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: true },
            { name: "role", type: "text", placeholder: "Job Title", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your AI needs and goals...",
            rows: 4,
            required: true
          }}
          buttonText="Schedule Demo"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "API Docs", href: "https://docs.aiventure.com" },
                { label: "Integrations", href: "https://aiventure.com/integrations" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Team", href: "team" },
                { label: "Blog", href: "blog" },
                { label: "Careers", href: "https://aiventure.com/careers" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "https://help.aiventure.com" },
                { label: "Contact", href: "contact" },
                { label: "Status", href: "https://status.aiventure.com" }
              ]
            }
          ]}
          copyrightText="© 2025 AIVenture. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}