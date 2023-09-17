---
title: Applying Product Thinking to your Design System
date: '2023-09-13'
tags:
  - Front end
  - Design systems
description: 'When building a design system, it can be easy to let your inner perfectionist take over and try to cover every situation, especially when referencing established design systems. A better approach is to treat it as a product that grows and evolves with your users because its value ultimately lies in the problems it solves and the needs it meets.'
featured: true
---

You are building out your design system, maybe as an engineer, maybe as a designer, maybe as a hybrid role. You finally got buy-in from the higher ups. Success! You have a few simple components fleshed out, more in Figma than in code, but it’s progressing on both fronts. Maybe you have a simple Storybook set up.

Where do you go from here? You start looking at other design systems for inspiration: Material, Ant, Polaris, Lightning. You admire how thorough and meticulous these design systems are. You spend more time than probably necessary exploring color palettes, motion guidelines, layout principles, and component patterns. You start taking notes on all the component variants and props.

Then, you start thinking you need to do all of this for your own design system. Your inner perfectionist comes out. You start feeling overwhelmed by the sheer volume of work you need to make your design system perfect, to match the level of the notable design systems in the ecosystem.

You freak out and shut your laptop and go get some ice cream.

Can you relate?

While it can be valuable to anticipate all the possible edge cases and flesh out all the possible variants and use cases of a component, it’s also important to not lose sight of the goal. A design system will never be complete and perfect. It is product that’s only valuable as the problems it solves. It will grow over time as your users and needs change. Treat your design system as a product, and apply product thinking principles when building out your design system, especially one that is internal to your company.

In this post, I’ll share product thinking principles that I follow when building out a design system and interweave examples from my own experience building out an internal design system at Gem.

## 📋 Prioritization

There are a million things you could be doing for your design system. Some are impactful, many are not. To prioritize what to work on, focus on the problems you are solving. This will vary across companies, but here are a few strategies:

- Talk to your users. Shadow them. Understand their pain points. What are they frustrated with? What consumes more time than needed? What could make their lives easier? Running a survey is a great way to achieve this. One benefit of working on a design system is that your users are generally internal, e.g. engineers and designers, so they are easier to access than your product’s users.
- Run audits. A package I like to use is `react-scanner` which combs through your codebase and gives you numbers on component usage. Components that are used more frequently are probably worth more time and energy.
- Align with the product/business. Is there a new component that would be beneficial for a major feature release that would help unblock new sales? Are customers reporting usability issues for a certain product area? Even though design system work is generally internal, it is important to not lose sight of the business goals of the company.

Example: When we surveyed other engineers, a lot of them ran into issues working with our existing Table component based on Bootstrap. The component API wasn’t intuitive (it was a mega component with 30+ props), there were a lot of CSS overrides and hacks needed, and some features were missing or buggy. This was one of the most commonly commented on components and it was also used fairly frequently across our product, so we prioritized reworking it.

## 🛠️ Component MVPs

Perfection is the enemy of progress. When building a new component, it doesn’t need to be perfect from the get-go. It doesn’t need to address every behavior and edge case. Related to the prioritization point above, start with the most common use cases, the problems this new component will solve. This may arise during the prioritization process, or there might be some more work needed here to understand how this component will fit into the product.

For example, if the new component will replace an existing component, do an audit of existing usages and see how it’s used. If it’s a component that will be incorporated into an upcoming feature, take the time to understand that feature.

Once you have addressed the common use cases, don’t be afraid to ship and then iterate.

Example: When we were building out a Table component, we identified a bunch of features, referencing existing use cases as well as other libraries, then prioritized them into must-haves and nice-to-haves. We focused on the must-haves and launched an MVP version that was in turn used in an upcoming feature.

## 🙋‍♀️ Feedback and Iteration

After launching a component MVP, be sure to monitor for bugs, either from automated tooling or from user reports. Also, ensure there are channels to give feedback and ask questions.

Depending on the bugs/feedback you get, iterate on your component. Address the bugs, make improvements, and work on follow up tasks, i.e. features that are useful but maybe not as critical such that they would block the launch. As these are launched, ensure they are released in a backwards compatible way.

Depending on the component, the feedback loop may vary. If the component won’t be used _right away_, ensure there’s enough time on your schedule to collect feedback and come back to this component if needed.

Example: We have a Slack channel where people can leave feedback, report bugs, and ask questions. Depending on the severity, we fix right away or triage into an Asana board for the future. The specific tooling may vary based on your company, but I like Slack because it’s very low friction for users. I don’t want the reporting process to get in the way of learning about issues.

## 🐕 Dogfooding

Dogfooding is a techie term for when a company uses their own product, e.g. Notion internally uses Notion to organize their documents. As a design system engineer, you may not be directly building product, but you can still dogfood your own design system. This approach will help you build empathy for your users and it can also help you identify improvements and find bugs. Dogfooding your design system can take many shapes, e.g. pair programming with a product engineer, working on a new feature in a hackathon, improving a part of the product that currently isn’t being worked on, etc.

Example: I mentioned that I had been working on a new `Table` component for our design system. There was a table on our homepage that we wanted to migrate, but the product teams have not had the bandwidth to prioritize. I decided to migrate it myself as an opportunity to dogfood my own product, proactively identify potential issues before it gets to the users, and also leave a code example in the codebase so that other engineers could easily reference it.

## 📈 Measure Progress

Just like any other product, metrics play a vital role in understanding the success of your design system. Component usage and adoption is a straightforward place to start. I mentioned the `react-scanner` in the Prioritization section, which statically analyzes your codebase and gives metrics on component usage. Tracking usage over time can give you visibility into potential issues as well. For example, if a component isn’t being used as often as expected, its component API may be clunky or it may have more bugs

As part of measuring progress, you’ll likely produce charts in your company’s preferred data tooling. Make these accessible to other stakeholders! This helps continually reinforce the value of your design system.

Example: We have a reoccurring cron job that runs `react-scanner`, reformats the output, and sends the cleaned up data into Honeycomb, which we then use to build dashboards that measure component usage over time. We do this for our design system components to measure adoption as well as deprecated Bootstrap components to track migration progress. For example, when we were migrating off the Bootstrap `FormControl` component to an internal text field component, the chart for `FormControl` plateaued while the chart for the new text field component start seeing adoption. This told us that the component we had built was meeting our user’s needs and they didn’t need to reach for the deprecated component anymore.

## Summary

When building a design system, it's important to treat it as a product that grows and evolves with your users. Prioritize the problems you are solving, focus on the most common use cases, and build mechanisms for feedback and iteration. Dogfooding your own design system can help you build empathy for your users and identify improvements and bugs. Measure progress with component usage and adoption metrics, and make this data accessible to other stakeholders to continually reinforce the value of your design system.
