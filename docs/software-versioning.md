---
sidebar_position: 17
---

# Software Versioning

## My Take on Versioning Standards in Software Development

Semantic Versioning, or SemVer as it's often called, is my go-to versioning system to prevent compatibility issues in software projects. It's all about a set of simple rules that dictate how versions are incremented based on the changes made to the software. I find it super useful because it helps make the version number itself a tool that communicates changes to everyone involved—developers, operators, and users.

## Core Principles of SemVer

Here’s the breakdown of the SemVer format: MAJOR.MINOR.PATCH. Each part has a specific meaning:

- MAJOR version – I bump this up when I make big changes that might break compatibility.
- MINOR version – This goes up when I add new features that are still compatible with older versions.
- PATCH version – Increment this for backwards-compatible bug fixes that correct errors without affecting the API or existing functionalities.

### Special Labels

Additional labels for pre-release and build metadata are available:

- Pre-releases: Tagged with a hyphen, like 1.0.0-alpha.1, for versions that are not yet ready for prime time.
- Build metadata: Appended with a plus sign, like 1.0.0+20230401, mainly for metadata that doesn't affect version precedence


## When to Update Versions

Here is my rule thumb:

- Major Release (MAJOR.x.x): Only when there are breaking changes. Think of it as a major overhaul. 🍻
- Minor Release (x.MINOR.x): For adding new features that don’t disrupt existing functionality—safe to upgrade without headaches.
- Patch Release (x.x.PATCH): Routine bug fixes. Typically safe and advisable to implement right away for smoother operation.

## Quick Reference

1. My go-to pocket notes for double checking: [SemVer Docs](https://semver.org/).
