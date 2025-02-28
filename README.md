![GitHub Actions](https://github.com/amf585/qa-automation-demo-form/actions/workflows/playwright-tests.yml/badge.svg)
[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/SmBu5JcHLqNVF27uq2HyKN/75r55xLRYyCDzXR2jp6rEM/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/SmBu5JcHLqNVF27uq2HyKN/75r55xLRYyCDzXR2jp6rEM/tree/main)

This is a demo project with a simple defect submission form with some automated Playwright tests.
The goal for me was to demonstrate Playwright QA automation via CircleCI & Github Actions Workflow.

I generated (and slightly tweaked) the code for the `DefectForm.tsx` via Vercel's v0 AI tool. This tool can be used to generate Shadcn/tailwind, etc. code for projects. For this project my focus was on setting up automation, so I decided to use AI tools to help spin up the app for me. :)

![image](https://github.com/user-attachments/assets/78c20e17-1f24-425c-b9b5-f0abbc6f9abf)

### circleCI
For an example of a circleCI config file check out: `.circleci/config.yml`
Note - To build via circleCI you must first set up a (free or paid) circleCI account, then you can link your Github and start building!

![image](https://github.com/user-attachments/assets/d0f864ff-a3ca-4707-8da8-6085e47dcd20)

### Github Action Workflow
For an example of a Github Action Workflow config file check out: `.github/workflows/playwright-tests.yml`
Once you add this config to your project, commit & push you can see your workflow in the "Actions" tab of your github dashboard

![image](https://github.com/user-attachments/assets/3499472f-7910-42ff-9602-b5a0941a0a63)



