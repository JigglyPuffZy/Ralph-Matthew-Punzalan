import { useEffect, useState } from 'react'
import { contactQuotes, emptyContactForm } from '../data/contact'
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

    const { name, email, subject, message } = contactForm

    if (!isSupabaseConfigured) {
      const mailSubject = encodeURIComponent(subject || 'Portfolio Contact')
      const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
      window.location.href = `mailto:ralphmatthewpunzalan23@gmail.com?subject=${mailSubject}&body=${mailBody}`
      return
    }

    setIsSubmitting(true)

    const { error } = await supabase.from('contact_messages').insert({
      email: email.trim(),
      message: message.trim(),
      name: name.trim(),
      subject: subject.trim(),
    })

    setIsSubmitting(false)

    if (error) {
      setSubmitStatus({
        text: 'Something went wrong. Please try again or email me directly.',
        type: 'error',
      })
      return
    }

    setContactForm(emptyContactForm)
    setSubmitStatus({
      text: 'Message sent. I will get back to you soon.',
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
