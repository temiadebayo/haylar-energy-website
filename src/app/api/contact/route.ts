import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM system
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        message: 'Thank you for your message. We will get back to you within 24 hours.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}