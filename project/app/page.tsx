'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Heart, Brain, Users, Menu, X } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeToContact: boolean;
};

// Define the errors type
type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'This field is required';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Thank you for your message. Dr. Blake will contact you soon!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agreeToContact: false
      });
      setErrors({});
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">Dr. Serena Blake</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-slate-600 hover:text-slate-800 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-800 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-slate-800 transition-colors">Services</button>
              <button onClick={() => scrollToSection('faq')} className="text-slate-600 hover:text-slate-800 transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-800 transition-colors">Contact</button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-2 text-slate-600 hover:text-slate-800">Home</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-slate-600 hover:text-slate-800">About</button>
                <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-slate-600 hover:text-slate-800">Services</button>
                <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 text-slate-600 hover:text-slate-800">FAQ</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-slate-600 hover:text-slate-800">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Find Your Path to
            <span className="text-blue-600 block">Healing & Growth</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Compassionate, evidence-based therapy to help you overcome anxiety, strengthen relationships, and heal from trauma
          </h2>
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg transform transition-all hover:scale-105"
          >
            Book a Free Consultation
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3717378/pexels-photo-3717378.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dr. Serena Blake - Clinical Psychologist"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Dr. Serena Blake</h2>
                <p className="text-xl text-blue-600 mb-6">PsyD, Clinical Psychologist</p>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                  <span className="text-slate-700">8 Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                  <span className="text-slate-700">500+ Sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                  <span className="text-slate-700">Licensed PsyD</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                  <span className="text-slate-700">Evidence-Based</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">How I Can Help</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Specialized therapy services tailored to your unique needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Anxiety & Stress Management */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <Brain className="w-16 h-16 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">Anxiety & Stress Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Learn effective strategies to manage anxiety, reduce stress, and regain control of your thoughts and emotions. Through cognitive-behavioral techniques and mindfulness practices, we'll work together to build your resilience and confidence.
                </p>
                <div className="mt-4 text-sm text-slate-500">
                  Individual sessions: $200
                </div>
              </CardContent>
            </Card>

            {/* Relationship Counseling */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-green-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">Relationship Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Strengthen your relationships through improved communication, conflict resolution, and deeper understanding. Whether you're working on romantic partnerships, family dynamics, or friendships, we'll focus on building healthier connections.
                </p>
                <div className="mt-4 text-sm text-slate-500">
                  Couples sessions: $240
                </div>
              </CardContent>
            </Card>

            {/* Trauma Recovery */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-slate-800">Trauma Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Heal from past traumatic experiences in a safe, supportive environment. Using evidence-based trauma therapies, we'll work at your pace to process difficult experiences and develop healthy coping mechanisms for lasting recovery.
                </p>
                <div className="mt-4 text-sm text-slate-500">
                  Individual sessions: $200
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">
              Common questions about therapy and my practice
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="insurance" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-blue-600">
                Do you accept insurance?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pt-4">
                No, but a superbill is provided for self-submission. This allows you to potentially receive reimbursement from your insurance provider for out-of-network benefits. I can help you understand this process and provide all necessary documentation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="online" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-blue-600">
                Are online sessions available?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pt-4">
                Yes—all virtual sessions are conducted via Zoom. I offer virtual sessions Monday, Wednesday, and Friday from 1 PM to 5 PM. Online therapy can be just as effective as in-person sessions and offers greater flexibility for your schedule.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cancellation" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-blue-600">
                What is your cancellation policy?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pt-4">
                24-hour notice is required for cancellations. This allows me to potentially offer the time slot to another client who may need it. Cancellations made less than 24 hours in advance may be subject to a fee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sessions" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-blue-600">
                How long are therapy sessions?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pt-4">
                Individual therapy sessions are 50 minutes, and couples sessions are 60 minutes. This allows sufficient time to explore issues in depth while maintaining a structured therapeutic framework.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="approach" className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-blue-600">
                What therapeutic approaches do you use?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pt-4">
                I use evidence-based approaches including cognitive-behavioral therapy (CBT), mindfulness-based interventions, and trauma-informed care. My approach is personalized to each client's unique needs and goals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-slate-600">
              Ready to take the first step? I'm here to help you on your journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-800">Address</p>
                      <p className="text-slate-600">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-800">Phone</p>
                      <p className="text-slate-600">(323) 555-0192</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-slate-800">Email</p>
                      <p className="text-slate-600">serena@blakepsychology.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-slate-800">In-Person Sessions</p>
                      <p className="text-slate-600">Tuesday & Thursday: 10 AM - 6 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-slate-800">Virtual Sessions</p>
                      <p className="text-slate-600">Monday, Wednesday & Friday: 1 PM - 5 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-700 font-medium">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`mt-1 ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-slate-700 font-medium">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`mt-1 ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="Your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`mt-1 ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700 font-medium">What brings you here? *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`mt-1 ${errors.message ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="Tell me a bit about what you're looking for..."
                    rows={4}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div>
                  <Label htmlFor="preferredTime" className="text-slate-700 font-medium">Preferred time to reach you *</Label>
                  <Input
                    id="preferredTime"
                    type="text"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                    className={`mt-1 ${errors.preferredTime ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="e.g., Weekday mornings, evenings after 6pm"
                  />
                  {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agree"
                    checked={formData.agreeToContact}
                    onCheckedChange={(checked) => setFormData({...formData, agreeToContact: !!checked})}
                    className={errors.agreeToContact ? 'border-red-500' : ''}
                  />
                  <Label htmlFor="agree" className="text-sm text-slate-700 leading-relaxed">
                    I agree to be contacted by Dr. Serena Blake regarding my inquiry. *
                  </Label>
                </div>
                {errors.agreeToContact && <p className="text-red-500 text-sm">{errors.agreeToContact}</p>}

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-lg transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dr. Serena Blake</h3>
              <p className="text-slate-300">
                Licensed Clinical Psychologist (PsyD)<br />
                Compassionate, evidence-based therapy in Los Angeles
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-slate-300 hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="block text-slate-300 hover:text-white transition-colors">Services</button>
                <button onClick={() => scrollToSection('faq')} className="block text-slate-300 hover:text-white transition-colors">FAQ</button>
                <button onClick={() => scrollToSection('contact')} className="block text-slate-300 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-slate-300">
                <p>(323) 555-0192</p>
                <p>serena@blakepsychology.com</p>
                <p>1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Dr. Serena Blake. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
