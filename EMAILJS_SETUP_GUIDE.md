# 📧 EmailJS Setup Guide - Get Your Contact Form Working!

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (free account - 200 emails/month)
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in your dashboard
2. Click **"Add New Service"**
3. Choose **Gmail** (or your preferred email)
4. Follow the authentication steps
5. **Copy your Service ID** (e.g., `service_8st7qhk`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Set up your template with these variables:

**Template Content:**
```
Subject: New Contact from {{from_name}} - {{subject}}

You have received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{reply_to}}
```

4. **Copy your Template ID** (e.g., `template_wqxp8cp`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find **Public Key** section
3. **Copy your Public Key** (e.g., `abc123xyz`)

### Step 5: Update Your Code
Replace these values in `client/src/pages/Contact/Contact.tsx`:

```typescript
const serviceID = 'YOUR_SERVICE_ID';     // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID';   // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';     // Replace with your Public Key
```

## 🔧 Example Configuration

```typescript
// Replace these with your actual values from EmailJS dashboard
const serviceID = 'service_8st7qhk';     // From Email Services
const templateID = 'template_wqxp8cp';   // From Email Templates
const publicKey = 'abc123xyz';           // From Account Settings
```

## ✅ Testing Your Setup

1. Save the file with your credentials
2. Run `npm start` to test locally
3. Fill out the contact form
4. Check your email inbox
5. Deploy with `npm run deploy`

## 🚨 Troubleshooting

### If emails aren't working:

1. **Check Service Status**: Make sure your EmailJS service is active
2. **Verify Template Variables**: Ensure template uses exact variable names
3. **Check Spam Folder**: Emails might go to spam initially
4. **Test in Browser Console**: Look for error messages
5. **Verify Credentials**: Double-check Service ID, Template ID, and Public Key

### Common Issues:

- **"User not found"**: Wrong Service ID
- **"Template not found"**: Wrong Template ID  
- **"Forbidden"**: Wrong Public Key
- **CORS errors**: Make sure you're testing on the deployed site

## 🎯 Alternative Quick Solution (Formspree)

If EmailJS doesn't work, try Formspree:

1. Go to **https://formspree.io/**
2. Create account and new form
3. Get your form endpoint
4. Replace the fetch URL in the code

## 📞 Need Help?

If you're still having issues:
1. The "Send Email Directly" button will always work as a fallback
2. Users can contact you via social media links
3. Your email (chandrahasareddy65@gmail.com) is displayed clearly

Your contact form will be fully functional once you complete the EmailJS setup!
