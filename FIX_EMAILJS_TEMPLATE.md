# 🔧 Fix EmailJS Template Configuration

## 🚨 Current Issue:
- Emails going to wrong recipients
- You're getting reply messages instead of contact submissions
- Users getting messages meant for you

## ✅ Solution: Update Your EmailJS Template

### Step 1: Go to EmailJS Dashboard
1. Visit **https://dashboard.emailjs.com/**
2. Log in to your account
3. Go to **Email Templates**
4. Click on your template: **template_swq2jv6**

### Step 2: Update Template Settings

**In the "Settings" tab:**
- **To Email**: `chandrahasareddy65@gmail.com` (your email)
- **To Name**: `Chandra Hasa Reddy`
- **From Email**: `{{from_email}}` (user's email)
- **From Name**: `{{from_name}}` (user's name)
- **Reply To**: `{{reply_to}}` (user's email)
- **Subject**: `New Portfolio Contact: {{subject}}`

### Step 3: Update Template Content

**Replace your current template with this:**

```
Subject: New Portfolio Contact: {{contact_subject}}

Hi {{to_name}},

You have received a new message from your portfolio website!

---
FROM: {{from_name}}
EMAIL: {{user_email}}
SUBJECT: {{contact_subject}}

MESSAGE:
{{contact_message}}
---

You can reply directly to this email to respond to {{from_name}}.

Best regards,
Portfolio Contact Form
```

### Step 4: Template Variables to Use

Make sure these variables are available in your template:
- `{{to_name}}` - Your name (Chandra Hasa Reddy)
- `{{to_email}}` - Your email (chandrahasareddy65@gmail.com)
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{reply_to}}` - User's email (for replies)
- `{{user_email}}` - User's email (display in content)
- `{{contact_subject}}` - User's subject
- `{{contact_message}}` - User's message

### Step 5: Test Configuration

**Email Flow Should Be:**
1. User fills form on your portfolio
2. **Email sent TO: chandrahasareddy65@gmail.com (YOU)**
3. **Email FROM: user's email address**
4. **You receive the contact form submission**
5. **You can reply directly to the user**

### Step 6: Save and Test

1. Save your template changes in EmailJS
2. Test the contact form on your portfolio
3. Check your Gmail inbox for the contact submission
4. Reply to test if it goes to the user correctly

## 🎯 Expected Result:

**What YOU should receive:**
```
To: chandrahasareddy65@gmail.com
From: user@example.com
Subject: New Portfolio Contact: Project Inquiry

Hi Chandra Hasa Reddy,

You have received a new message from your portfolio website!

---
FROM: John Doe
EMAIL: user@example.com  
SUBJECT: Project Inquiry

MESSAGE:
I'd like to discuss a project with you...
---

You can reply directly to this email to respond to John Doe.
```

**What happens when you reply:**
- Your reply goes directly to the user's email
- No confusion about who sent what
- Professional email communication

This will fix the email direction issue completely!
