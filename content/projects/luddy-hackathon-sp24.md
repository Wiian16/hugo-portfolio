---
date: 2024-04-14T12:55:58-05:00
description: "A PDF-splitting tool using OCR, built for the first Luddy Hacks hackathon"
image: "/images/projects/luddy-hacks.webp" 
imageAlt: "Luddy Hacks Logo"
tags: ["Hackathon", "TypeScript", "JavaScript", "Electron", "Node.js", "OCR"]
title: "Luddy Hackathon Spring 2024"
type: "post"
draft: true
---

In April 2024, I competed in my first hackathon, [Luddy Hacks](https://luddy.indiana.edu/student-life/hackathon.html), 
hosted at Indiana University's Luddy School of Informatics, Computing, and Engineering. This was also the first time
working with my current team, and I'm proud to say we won our case!

Our project is a standalone tool that uses OCR to intelligently split large PDF documents based on keyword-based rules 
provided via a config file. While the prompt only required a command-line utility, we went further and built a full UI
using [Electron](https://www.electronjs.org/) that included a config generator with a live preview.  

The app includes features for: 
- Saving and reusing config files
- Creating new configs with work triggers and visual bounding boxes
- Previewing search areas on any page before processing
- Packaging into a single executable with no external dependencies

I focused primarily on the backend features of handling PDF reading, splitting, and saving. I also helped coordinate our efforts by
stepping into a leadership role early on the get our team moving quickly and efficiently. 

This was an incredible learning experience and a fast paced deep dive into real-world development with JavaScript
and TypeScript. Though we don't have plans to expand the tool, I'm proud of what we accomplished under pressure.

# Links

- [GitHub Repo](https://github.com/ArchBTW-LuddyHackathonTeam/LuddyHackathonSP24/)
- [Video Demo](https://www.youtube.com/watch?v=0LMjHqMpo8E)
