# Research Notes

## LMS Platform Comparison

| Platform | Cost | Best For | Limitations |
|----------|------|----------|-------------|
| **Skilljar** | $30k–$100k/yr | Enterprise B2B SaaS | Expensive, overkill for small creators |
| **Teachable** | $39–$199/mo | Solo creators | Transaction fees, limited customisation |
| **Moodle** | Free (self-hosted) | Institutions | Requires server management |
| **WordPress + Tutor LMS** | Free plugin | Budget-conscious | Hosting costs, maintenance |
| **Custom (This Project)** | ~$3–5/mo | POC / MVP | Requires dev time |

## Why Fly.io for Hosting

- Generous free tier (3 shared-cpu-1x VMs)
- Auto-stop machines = near-zero idle cost
- Docker-based deployment = reproducible builds
- Built-in load balancing and TLS

## Why Claude for AI Tutor

- Best-in-class reasoning for educational content
- API supports system prompts (perfect for contextual tutoring)
- Competitive pricing vs. GPT-4
