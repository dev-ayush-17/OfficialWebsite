// ============================================================
// Blog Posts Data
// ============================================================

import type { BlogPost } from '@/lib/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'building-web3-dapps-from-scratch',
    title: 'Building Web3 DApps from Scratch: A Beginner\'s Guide',
    excerpt:
      'A comprehensive walkthrough of building your first decentralized application using Solidity, Hardhat, and React. From smart contracts to frontend integration.',
    content: `
## Introduction

Web3 development is no longer a niche skill — it's becoming essential for modern developers. In this guide, we'll walk through building a complete decentralized application (DApp) from the ground up.

## Prerequisites

- Solid understanding of JavaScript/TypeScript
- Basic knowledge of React
- MetaMask wallet installed
- Node.js v18+ installed

## Setting Up the Development Environment

First, let's set up our project with Hardhat, one of the most popular Ethereum development frameworks:

\`\`\`bash
mkdir my-dapp && cd my-dapp
npx hardhat init
\`\`\`

## Writing Your First Smart Contract

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    uint256 private storedValue;

    event ValueChanged(uint256 newValue);

    function set(uint256 value) public {
        storedValue = value;
        emit ValueChanged(value);
    }

    function get() public view returns (uint256) {
        return storedValue;
    }
}
\`\`\`

## Connecting the Frontend

With our contract deployed, we can now connect it to a React frontend using ethers.js. The key is to create a provider that connects to the user's MetaMask wallet.

## Conclusion

Building DApps combines traditional web development skills with blockchain-specific knowledge. Start small, iterate, and don't be afraid to experiment. The Web3 ecosystem is incredibly welcoming to newcomers.
    `,
    author: {
      name: 'Kavya Reddy',
      avatar: '/images/team/placeholder-6.png',
      role: 'Blockchain Team Lead',
    },
    date: '2025-04-15',
    tags: ['Web3', 'Blockchain', 'Solidity', 'Tutorial'],
    coverImage: '/images/events/hackathon.png',
    readTime: 12,
    featured: true,
  },
  {
    slug: 'mastering-react-server-components',
    title: 'Mastering React Server Components in Next.js',
    excerpt:
      'Deep dive into React Server Components — understanding the mental model, performance benefits, and practical patterns for building faster web apps.',
    content: `
## What Are React Server Components?

React Server Components (RSC) represent a fundamental shift in how we think about rendering. They allow components to run exclusively on the server, sending only the rendered output to the client.

## The Mental Model

Think of Server Components as templates that execute on the server. They can directly access databases, file systems, and other server-side resources without creating API endpoints.

## When to Use Server vs Client Components

**Use Server Components when:**
- Fetching data from a database
- Accessing server-only resources
- Keeping sensitive data on the server

**Use Client Components when:**
- Adding interactivity (onClick, onChange)
- Using React hooks (useState, useEffect)
- Using browser-only APIs

## Practical Patterns

The most effective pattern is to keep your page-level components as Server Components and push client interactivity to the leaf nodes of your component tree.

## Conclusion

Server Components aren't just an optimization — they're a new way of thinking about web applications. Embrace the server-first mindset and your apps will be faster, simpler, and more secure.
    `,
    author: {
      name: 'Arjun Mehta',
      avatar: '/images/team/placeholder-1.png',
      role: 'Web Dev Team Lead',
    },
    date: '2025-03-28',
    tags: ['React', 'Next.js', 'Web Dev', 'Performance'],
    coverImage: '/images/hero/about-illustration.png',
    readTime: 8,
  },
  {
    slug: 'getting-started-with-generative-ai',
    title: 'Getting Started with Generative AI: From Prompts to Production',
    excerpt:
      'Everything you need to know to start building with generative AI. Covers prompt engineering, API integration, RAG pipelines, and deploying AI features.',
    content: `
## The Generative AI Landscape

2024–2025 has been the breakout era for generative AI. From ChatGPT to Claude, Gemini to open-source models like LLaMA — the tools available to developers have never been more powerful.

## Prompt Engineering Fundamentals

The quality of your AI output is directly proportional to the quality of your prompts. Here are key techniques:

1. **Be Specific**: Instead of "Write about dogs", try "Write a 200-word blog post about the health benefits of owning a Golden Retriever"
2. **Provide Context**: Give the model relevant background information
3. **Use Examples**: Few-shot prompting dramatically improves results
4. **Iterate**: Refine your prompts based on outputs

## Building a RAG Pipeline

Retrieval Augmented Generation (RAG) is the most practical pattern for building AI applications:

1. Index your documents into a vector database
2. When a user asks a question, retrieve relevant chunks
3. Pass the retrieved context along with the question to the LLM
4. Return the grounded response

## Deploying AI Features

When deploying AI to production, consider: latency, cost, rate limiting, error handling, and fallback strategies.

## Conclusion

Generative AI is not magic — it's a powerful tool that, when used thoughtfully, can create incredible user experiences. Start building today.
    `,
    author: {
      name: 'Rishi Verma',
      avatar: '/images/team/placeholder-9.png',
      role: 'Gen AI Team Lead',
    },
    date: '2025-05-10',
    tags: ['AI', 'Gen AI', 'LLM', 'Tutorial'],
    coverImage: '/images/events/hackathon.png',
    readTime: 10,
    featured: true,
  },
  {
    slug: 'kaggle-competition-playbook',
    title: 'The Kaggle Competition Playbook: Tips from NIT Patna\'s ML Team',
    excerpt:
      'Battle-tested strategies for performing well in Kaggle competitions — from feature engineering to ensemble methods and avoiding common pitfalls.',
    content: `
## Why Kaggle Competitions Matter

Kaggle competitions are the proving ground for ML practitioners. They teach you skills that textbooks can't — dealing with messy data, optimizing for real metrics, and working under constraints.

## Our Approach

1. **Understand the Data**: Spend 30% of your time on EDA
2. **Baseline First**: Get a simple model working before trying fancy approaches
3. **Feature Engineering**: This is where competitions are won
4. **Validation Strategy**: Your local CV must correlate with the leaderboard
5. **Ensemble**: Combine diverse models for the final submission

## Common Mistakes

- Overfitting to the public leaderboard
- Not reading the competition rules carefully
- Ignoring data leakage in feature engineering
- Spending too much time on hyperparameter tuning vs feature engineering

## Conclusion

Kaggle is a marathon, not a sprint. Consistency, curiosity, and collaboration will take you further than any single technique.
    `,
    author: {
      name: 'Deepak Nair',
      avatar: '/images/team/placeholder-12.png',
      role: 'ML Team Lead',
    },
    date: '2025-02-14',
    tags: ['ML', 'Data Science', 'Kaggle', 'Tips'],
    coverImage: '/images/hero/about-illustration.png',
    readTime: 7,
  },
];
