import { useEffect, useState } from 'react'
import { contactQuotes, emptyContactForm } from '../data/contact'
import { sendContactEmailNotification } from '../lib/sendContactNotification'
import { isSupabaseConfigured, supabase } from '../lib/supabase'

export function useContactForm() {
  const [contactForm, setContactForm] = useState(emptyContactForm)
  const [contactQuoteIndex, setContactQuoteIndex] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setContactQuoteIndex((current) => (current + 1) % contactQuotes.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  const updateContactField = (field) => (event) => {
    setSubmitStatus(null)
    setContactForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleContactClear = () => {
    setSubmitStatus(null)
    setContactForm(emptyContactForm)
  }

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    setSubmitStatus(null)

    const payload = {
      email: contactForm.email.trim(),
      message: contactForm.message.trim(),
      name: contactForm.name.trim(),
      subject: contactForm.subject.trim(),
    }

    if (!isSupabaseConfigured) {
      setSubmitStatus({
        text: 'Contact form is not configured yet. Restart the dev server after updating .env.local.',
        type: 'error',
      })
      return
    }

    setIsSubmitting(true)

    const { error } = await supabase.from('contact_messages').insert(payload)

    if (error) {
      setIsSubmitting(false)
      setSubmitStatus({
        text: 'Something went wrong. Please try again or email me directly.',
        type: 'error',
      })
      return
    }

    const emailResult = await sendContactEmailNotification(payload)

    setIsSubmitting(false)
    setContactForm(emptyContactForm)

    if (emailResult.delivered) {
      setSubmitStatus({
        text: 'Message sent. I will get back to you soon.',
        type: 'success',
      })
      return
    }

    if (emailResult.reason === 'missing_key') {
      setSubmitStatus({
        text: 'Message saved. Email alerts are not configured yet on the server.',
        type: 'success',
      })
      return
    }

    setSubmitStatus({
      text: 'Message saved, but the email alert failed. I will check Supabase for your message.',
      type: 'success',
    })
  }

  return {
    contactForm,
    contactQuoteIndex,
    handleContactClear,
    handleContactSubmit,
    isSubmitting,
    isSupabaseConfigured,
    submitStatus,
    updateContactField,
  }
}
