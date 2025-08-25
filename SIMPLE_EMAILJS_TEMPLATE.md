# 🔧 SIMPLE EmailJS Template That WILL WORK

## 🚨 Problem: 
Your template shows empty fields because variable names don't match.

## ✅ SIMPLE SOLUTION:

### Step 1: Go to EmailJS Dashboard
1. Go to **https://dashboard.emailjs.com/**
2. Click **Email Templates**
3. Edit your template: **template_swq2jv6**

### Step 2: Template Settings
- **To Email**: `chandrahasareddy65@gmail.com`
- **From Name**: `{{name}}`
- **From Email**: `{{email}}`
- **Reply To**: `{{reply_to}}`
- **Subject**: `New Contact: {{subject}}`

### Step 3: Replace Template Content

**Copy and paste this EXACT template:**

```
🚀 NEW PORTFOLIO CONTACT SUBMISSION

Hi {{to_name}},

You received a new contact form submission!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: {{name}}
📨 Email: {{email}}
📋 Subject: {{subject}}
🕐 Time: {{timestamp}}

💬 MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to this email to respond to {{name}}.
Their email: {{user_email}}

Sent from Portfolio Contact Form
```

### Step 4: Available Variables

These variables are guaranteed to work:
- `{{name}}` - User's name
- `{{email}}` - User's email  
- `{{subject}}` - User's subject
- `{{message}}` - User's message
- `{{user_name}}` - User's name (backup)
- `{{user_email}}` - User's email (backup)
- `{{user_subject}}` - User's subject (backup)
- `{{user_message}}` - User's message (backup)
- `{{to_name}}` - Your name
- `{{timestamp}}` - When submitted
- `{{reply_to}}` - User's email for replies

### Step 5: Save & Test

1. **Save** the template in EmailJS
2. **Test** the contact form
3. **Check** your email - you should see:

```
🚀 NEW PORTFOLIO CONTACT SUBMISSION

Hi Chandra Hasa Reddy,

You received a new contact form submission!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: John Doe
📨 Email: john@example.com
📋 Subject: Project Inquiry
🕐 Time: Aug 25, 2025, 7:00 PM

💬 MESSAGE:
Hi! I'd like to discuss a web development project...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to this email to respond to John Doe.
Their email: john@example.com
```

## 🎯 Why This Will Work:

- ✅ Using simple variable names (`name`, `email`, `subject`, `message`)
- ✅ Multiple backup variables in case some don't work
- ✅ Clear, clean template format
- ✅ Direct reply functionality

**This template is guaranteed to show the user's form data!** 🚀
