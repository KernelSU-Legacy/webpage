---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Home

hero:
  name: "KernelSU Legacy"
  text: "The advanced kernel-based root solution for Legacy Android Kernels"
  tagline: Focuses on kernel 3.18 - 5.4 (Non-GKI)
  image:
    src: /logo.png
    alt: "KernelSU Legacy"
  actions:
    - theme: brand
      text: Installation
      link: pages/installation
    - theme: alt
      text: Github
      link: https://github.com/KernelSU-Legacy/KernelSU-Legacy

features:
  - title: Legacy kernel support
    details: Optimized for Non-GKI kernels from 3.18 - 5.4 with enhanced compatibility
  - title: SuSFS Support
    details: Integrated SuSFS 1.x support to effectively hide kernel modifications from various detections
  - title: Dynamic module mount
    details: Includes both Magic Mount and OverlayFS, which can be switched from the settings with a single toggle
  - title: Modern Manager UI
    details: Redesigned Manager app with a modern look and streamlined controls for legacy devices
  - title: Module backup & restoration
    details: Easily backup and restore your modules, ensuring stability across kernel updates or accidental uninstalls
  - title: Auto-updates
    details: Manager app updates automatically with the latest releases from our legacy branch
  - title: Integrated SuSFS
    details: Get compatibility info and controls for SuSFS directly in the manager to hide KPROBES hooks
  - title: Hide hosts
    details: Hides hosts file modifications using app profile unmount, allowing ad blockers without detection
  - title: Bulk installation
    details: Install multiple modules at once in serial, saving time on fresh setups
  - title: Custom image size
    details: Customizable OverlayFS sparse image size to suit your needs, defaults to 6GB
  - title: SU Allowlist backup
    details: Backup and restore your root permission allowlist across different setups or devices
  - title: Optimized for Non-GKI
    details: Stripped of GKI overhead to provide the best performance for older, legacy kernel environments
