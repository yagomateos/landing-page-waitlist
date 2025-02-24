"use server"

export async function addToWaitlist(prevState: any, formData: FormData) {
  const email = formData.get("email")

  // Here you would typically save the email to your database
  // For this example, we'll just log it
  console.log(`Added to waitlist: ${email}`)

  // In a real application, you'd want to handle errors and validate the email

  return `Thank you for joining our waitlist! We'll keep you updated.`
}

