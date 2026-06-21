export async function sendContactEmailNotification({ name, email, message, subject }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return { delivered: false, reason: 'missing_key' }
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      botcheck: false,
      email,
      from_name: `${name} (Portfolio)`,
      message: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      replyto: email,
      subject: `[Portfolio] ${subject}`,
    }),
  })

  const data = await response.json()

  if (!response.ok || !data.success) {
    return {
      delivered: false,
      reason: data.message ?? 'email_failed',
    }
  }

  return { delivered: true }
}
