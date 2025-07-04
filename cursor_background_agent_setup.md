# Cursor Background Agent Setup: Mobile-to-Desktop Workflow

## Quick Setup (5 minutes)

### Step 1: Enable Background Agents on Your Work Laptop

1. **Open Cursor Settings**:
   - `Cmd/Ctrl + ,` → Settings
   - Navigate to **Beta** section
   - Enable **"Background Agents"** ✅

2. **Authenticate GitHub**:
   - Settings → **GitHub Integration**
   - Click **"Connect GitHub Account"**
   - Authorize Cursor to create PRs and branches

3. **Verify Setup**:
   - Look for **cloud icon** in your chat interface
   - Or press `Cmd/Ctrl + E` to test Background Agent panel

### Step 2: Test with Your Current Chat

In your existing work laptop chat, try this right now:

```
"Start a Background Agent to analyze our mobile responsive design. 
Here's what I need you to do:
1. Review our current CSS breakpoints
2. Create a plan to fix mobile layout issues
3. Wait for my mobile screenshots to implement fixes
4. Provide a shareable link so I can continue this from mobile"
```

### Step 3: Access from Mobile/Web

1. **Get the Agent URL**:
   - Background Agent will provide a shareable link
   - Format: `cursor.com/agents/[unique-agent-id]`

2. **Mobile Browser Access**:
   - Open any browser on your phone
   - Go to `cursor.com/agents`
   - Find your active agent
   - Bookmark for quick access

3. **Install as PWA** (Optional but Recommended):
   - Visit `cursor.com/agents` on mobile
   - Browser menu → "Add to Home Screen"
   - Creates native app experience

## Complete Mobile-to-Desktop Workflow

### Scenario: You find a mobile bug while testing

#### 1. **On Mobile** (30 seconds):
```
1. Take screenshot of bug
2. Open cursor.com/agents (or PWA)
3. Find your project's Background Agent
4. Upload screenshot with prompt:
   "Mobile bug found: [image]
   Device: iPhone 15, Safari
   Issue: Button overlap at 375px
   Fix the responsive CSS for this component"
```

#### 2. **Agent Works** (Background):
```
- Analyzes screenshot
- Reviews codebase context
- Identifies CSS media query issues
- Creates fix implementation
- Generates PR with changes
```

#### 3. **Back at Laptop** (When you return):
```
1. Open original Cursor chat
2. See Background Agent progress
3. Review proposed changes
4. Give feedback: "The fix looks good, but also make the text smaller on mobile"
5. Agent continues with your feedback
6. Merge when satisfied
```

## Advanced Features

### Multi-Agent Workflow
Run multiple Background Agents simultaneously:
- **Agent 1**: Fix mobile CSS issues
- **Agent 2**: Optimize mobile performance  
- **Agent 3**: Add mobile-specific features

### Team Collaboration
- Share agent URLs with teammates
- Everyone can see progress and add input
- Agents create PRs for team review

### Mobile Features
- **Real-time monitoring**: Watch agent progress
- **Follow-up instructions**: Add context as you test
- **Screenshot uploads**: Multiple images per task
- **Voice input**: Use mobile voice-to-text for prompts

## Important Notes

### Costs
- **Background Agents use "Max Mode"** - premium model usage
- Can be expensive for complex tasks
- Monitor usage in Dashboard → Usage Analytics

### Best Practices
- **Be specific** in mobile prompts: include device, browser, exact issue
- **Use agent for focused tasks**: "Fix this specific component" vs "Rewrite entire app"
- **Provide context**: "This connects to our existing desktop chat about responsive design"

### Limitations
- Background Agents work best with **well-structured codebases**
- Requires **GitHub repository** (public or private)
- Some features require **Cursor Pro subscription**

## Quick Test Checklist

Before you step away from your laptop:

- ✅ Background Agents enabled in Beta settings
- ✅ GitHub connected and authenticated  
- ✅ Test agent started from existing chat
- ✅ Agent shareable URL received
- ✅ Mobile access to cursor.com/agents verified
- ✅ PWA installed (optional)

## Troubleshooting

### Can't see Background Agents option:
- Update Cursor to version 1.0+
- Check subscription level (may require Pro)
- Restart Cursor after enabling Beta features

### Agent not connecting to existing chat:
- Make sure agent was started FROM your existing chat
- Verify GitHub repo is connected to your project
- Check that agent has access to same repository

### Mobile site not loading:
- Try cursor.com/agents directly
- Clear browser cache
- Ensure stable internet connection
- Try different mobile browser

## Next Steps

1. **Set up now** while at your work laptop
2. **Test the workflow** with a simple task
3. **Bookmark mobile access** for quick use
4. **Try it on your next mobile testing session**

This setup transforms mobile bug discovery into immediate development progress, even when you're away from your workstation!