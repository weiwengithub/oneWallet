'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white/10 dark:bg-white/10 light:bg-white/80 border-white/20 dark:border-white/20 light:border-slate-300 text-white dark:text-white light:text-slate-800 placeholder:text-gray-400 dark:placeholder:text-gray-400 light:placeholder:text-slate-500 focus:border-blue-400 rounded-xl"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('email')}</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white/10 dark:bg-white/10 light:bg-white/80 border-white/20 dark:border-white/20 light:border-slate-300 text-white dark:text-white light:text-slate-800 placeholder:text-gray-400 dark:placeholder:text-gray-400 light:placeholder:text-slate-500 focus:border-blue-400 rounded-xl"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="bg-white/10 dark:bg-white/10 light:bg-white/80 border-white/20 dark:border-white/20 light:border-slate-300 text-white dark:text-white light:text-slate-800 placeholder:text-gray-400 dark:placeholder:text-gray-400 light:placeholder:text-slate-500 focus:border-blue-400 rounded-xl"
          placeholder="What's this about?"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">{t('message')}</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 bg-white/10 dark:bg-white/10 light:bg-white/80 border border-white/20 dark:border-white/20 light:border-slate-300 rounded-xl text-white dark:text-white light:text-slate-800 placeholder:text-gray-400 dark:placeholder:text-gray-400 light:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
          placeholder="Tell us how we can help..."
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {t('send')}
      </Button>
    </form>
  );
}
