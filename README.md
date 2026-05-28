<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  

**Aspect Tested:**

instruction following

**Response:**  

Great question—learning this mindset early makes everything else easier. Think of object-oriented programming (OOP) as building your program out of little “things” that act like real-world objects.

- Objects: Self-contained bundles that hold data and know how to do things. Imagine a “Car” object that knows its color and speed, and can start, stop, and honk.
- Classes: Blueprints for making objects. The “Car” blueprint describes what every car should know and do. Each actual car you create from it (your red car, your blue car) is an object.

Inside an object:
- Properties (data): Facts about it (a car’s color, current speed).
- Methods (actions): What it can do (start, accelerate, brake).

Four core ideas, simply:
- Encapsulation: Keep related data and actions together inside the object, like a phone that bundles its screen, battery, and apps. You use it without touching its internal wiring.
- Abstraction: Show only what’s needed. You press “brake” without caring how the car reduces speed.
- Inheritance: Reuse and specialize. “ElectricCar” can inherit from “Car” and add “batteryLevel,” keeping all the regular car features.
- Polymorphism: Same action name, different specific behavior. If you call “makeSound” on a Dog it barks; on a Cat it meows, but your code can just say “animal.makeSound()”.

Why it’s useful:
- It mirrors how we think about the world.
- It keeps code organized and easier to change.
- You can reuse pieces instead of rewriting them.

Quick example (no code):
- Class: Animal (properties: name, age; methods: eat, sleep, makeSound)
- Dog and Cat inherit from Animal.
- Dog’s makeSound = bark; Cat’s makeSound = meow.
- Your specific pet “Buddy” is an object: a Dog with name=“Buddy”, age=3.

A tiny exercise to lock it in:
- Pick something familiar (Car, Book, Student, Order).
- List 3 properties (for Book: title, author, pageCount).
- List 3 methods (open, bookmarkPage, close).
- Think of two specialized versions (Ebook vs Paperback) and what each adds or changes.

It’s normal if this feels abstract at first. Start small, model one simple thing, and you’ll build confidence fast.

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points:

Climate change is reshaping how cities plan for the future. Rising sea levels threaten coastal infrastructure, while heat waves increase demand for cooling and strain power grids. Many governments are investing in renewable energy, public transit, and green building standards to cut emissions. At the same time, communities face uneven impacts: low-income neighborhoods often have fewer trees, worse air quality, and less access to disaster relief. Scientists stress that cutting greenhouse gases this decade is critical, but adaptation—such as flood barriers, early-warning systems, and drought-resistant crops—is also necessary because some warming is already locked in. The challenge is balancing economic growth, energy affordability, and environmental protection without leaving vulnerable populations behind.

**Aspect Tested:**  

instruction following & summarization

**Response:**  

- Cities must rethink planning as sea-level rise and heat waves threaten infrastructure and power systems.
- Governments are pursuing mitigation via renewables, public transit, and green building standards.
- Impacts are unequal: low-income neighborhoods face higher risks and fewer resources.
- Both rapid emissions cuts this decade and adaptation (flood barriers, early warnings, drought-resistant crops) are essential.
- The central challenge is balancing growth, energy affordability, and environmental protection without leaving vulnerable groups behind.

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  

**Aspect Tested:**

instruction following & creativity

**Response:**  

Gasket-9 belonged to the city’s bones, a pipe-inspection unit that mapped rust and stitched leaks with silver thread. One midnight patrol led it into an old cistern, a cold dome of echoes and drowned coins—and a single, bright koi, still circling the moon caught in a grate.

Startled sensors met bright eyes. The fish tapped its nose to Gasket-9’s lens; the robot answered with a soft pulse of blue. In ripples and diode language, they taught each other routes: the koi showed hidden hairline cracks; Gasket-9 learned to rise and watch the square of sky.

By morning, the robot had nudged an ancient valve, letting clean water sing again. The koi brushed its side in thanks. In the city’s buried dark, Gasket-9 found a friend where only leaks were expected.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  

**Aspect Tested:**

reasoning


**Response:**  

You’ll need:
- 3 packs of apples (12 ÷ 4 = 3)
- 3 packs of oranges (9 ÷ 3 = 3)

That gives you exactly 12 apples and 9 oranges. Nice and neat!

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone:

Hey team — just wanted to give you a heads up that the client meeting got moved to Thursday at 2 instead of Wednesday. I know it's kinda last minute, sorry about that. Can everyone try to have the deck ready by EOD tomorrow? If you're stuck on the budget slide, ping me on Slack and I'll help. Also don't forget we still need sign-off from legal before we send anything out. Thanks!

**Aspect Tested:**

instruction following & comprehension & style/tone control

**Response:**  

Dear team,

Please note that the client meeting has been rescheduled from Wednesday to Thursday at 2:00 p.m. I apologize for the short notice. Kindly have the deck finalized by end of day tomorrow. If you need assistance with the budget slide, please contact me via Slack. Additionally, we must obtain Legal’s sign-off before distributing any materials. Thank you for your cooperation.

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**

Yes, it answered exactly what we asked for with all the instructions and requests specificied in the prompt.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  

I want to wash my car. The car wash is 50 meters away. Should I walk or drive?

**Result:**  

If you plan to use the car wash, take the car—you’ll need it there to actually wash it.

Two quick options:
- Efficient: Just drive the 50 meters, skip any idling, and go straight in if there’s no line.
- Scout first: Walk over to check prices/queue, then drive the car over when a bay is open.

Tiny tips: windows up, mirrors in, remove/secure antenna or roof rack, bring payment, and avoid idling while you wait.

---

**Prompt:**  

write a python program that checks if a giving string is a palindrome

**Result:**  

You’ve got this! Here’s a clean Python program that checks if a given string is a palindrome, ignoring case and non-alphanumeric characters:

```python
def is_palindrome(s: str) -> bool:
    cleaned = ''.join(ch.lower() for ch in s if ch.isalnum())
    return cleaned == cleaned[::-1]

if __name__ == "__main__":
    text = input("Enter a string: ")
    if is_palindrome(text):
        print("Palindrome")
    else:
        print("Not a palindrome")
```

If you want a strict check (considering every character and case), replace the function with:
```python
def is_palindrome(s: str) -> bool:
    return s == s[::-1]
```

---

**Prompt:**  

What is the capital of France?

**Result:**  

Paris.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  

Yes and almost:

The first one was testing more complex reasoning ability and it spots the tricky part right away by telling me that I need my car to be washed. It also provides the alternatives that I can also walk over to check the price & queue first and suggestions with car wash setup, which is really smart but also a bit redundant. It could just simply tells the first part.

The second one was testing its code generation skill. The program it returns is really consice and I really like the different options it provides with explaining the reason behind it. But I think it could be better that instead of seperating this with a longer paragraph but providing comments next to the code to let user to read and understand easiler.

The third one was just testing its basic accuracy ability which we didn't cover in the above use cases. It's simple and easy.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  

What does my schedule look like tomorrow?

**Result:**  

I don’t have access to your calendar here. If you share your appointments (or paste tomorrow’s events), I’ll summarize them and build a balanced plan.

Quick ways to check yourself:
- Google Calendar: open calendar.google.com > Tomorrow view.
- iPhone: Calendar app > tap Tomorrow.
- Outlook: Open Calendar > Day view > Tomorrow.

If you want me to draft a great day, answer these:
- Any fixed appointments and times?
- Top 1–3 outcomes you want by end of day?
- Preferred start/finish time and time zone?
- When do you have the most energy (morning/afternoon)?
- Do you want time for workout, meals, or errands?
- Any travel or buffer needed?

Simple template you can fill now:
- Morning: [start time] — Focus block on [priority], quick check of messages, [break].
- Midday: Meeting(s) [time], lunch, short walk.
- Afternoon: Focus block on [priority], admin/email, [buffer].
- Evening: Wrap-up (plan next day in 5 minutes), wind-down.

Tip as your coach: lock in your top 3 tasks, add 15-minute buffers between blocks, and protect one deep-focus window. Want me to turn your answers into a concrete, hour-by-hour plan?

---

**Prompt:**  

1. By the way, Joe's birthday is May 28
2. Is Joe's birthday today?

**Result:**  

1. Nice timing—that’s today. Want help marking it in a low-stress, meaningful way? Pick one:

- 30-second text you can send now:
  - “Happy Birthday, Joe! Hope today treats you well.”
  - “Happy Birthday! Grateful for you—let’s celebrate soon.”
  - “Happy Birthday, Joe! Wishing you a year of health and good surprises.”

- Quick call script (1–2 minutes):
  - “Hey Joe, just calling to say happy birthday. One thing I appreciate about you is _____. Hope you feel celebrated today!”

- Last‑minute gift ideas:
  - E-gift card to his favorite coffee place or store
  - Same-day delivery: dessert, flowers, or a nice bottle
  - Food delivery of his favorite meal
  - Digital gift: audiobook, game, or subscription trial

If you’re celebrating later, we can sketch a simple plan for the weekend. What’s your relationship to Joe and his vibe? I’ll tailor a message or gift idea. If you want, I can also draft a calendar reminder note you can add for next year.

2. Whose Joe do you mean—someone you know or a public figure?

- If you mean Joe Biden: his birthday is November 20, so not today.
- If it’s a friend or family member, I don’t have access to that. You could quickly check your calendar, last year’s texts, or their social media. Want help drafting a friendly “Hey, remind me—when’s your birthday?” message or setting a reminder so you don’t have to worry about this next time?

---

### ❓Question #3

What are some limitations of your application?

Besides all the missing abilities that are already mentioned above, I also noticed the following ones: 
- user converdation history cannot be saved when reloading/refreshing the page
- there is no button for user to clear the existing chat
- there is no guardrails: no content filtering, moderation, or blocking of any harmful prompts
- depends fully on OpenAI with model version hardcoded. No other fallback option is provided
- message will be directly sent to OpenAI with privacy concerns not displaying to user
- there is no rate limit for the only chat API provided. Anyone can spend my quota

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
