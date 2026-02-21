# Installation

## Easy Integration
Copy, paste and run! Easy integration CLI commands

>[!note]
>Run the following commands in the kernel source code root directory according to your needs.

### KernelSU Legacy
::: code-group
```sh [v1.1.1 (Recommended)]
curl -LSs "https://raw.githubusercontent.com/KernelSU-Legacy/KernelSU-Legacy/v1.1.1/kernel/setup.sh" | bash -
```

```sh [v3-legacy (Alpha)]
curl -LSs "https://raw.githubusercontent.com/KernelSU-Legacy/KernelSU-Legacy/v3-legacy-susfs/kernel/setup.sh" | bash -
```

```sh [Specific tag/branch]
curl -LSs "https://raw.githubusercontent.com/KernelSU-Legacy/KernelSU-Legacy/v3-legacy-susfs/kernel/setup.sh" | bash -s <tag-or-branch>
```
:::

## Manual Integration

If you prefer manual integration, you can clone the repository and symlink the `kernel` directory to your kernel source:

1. Clone the repository:
   ```sh
   git clone https://github.com/KernelSU-Legacy/KernelSU-Legacy
   ```
2. Symlink the kernel directory:
   ```sh
   ln -sf /path/to/KernelSU-Legacy/kernel /path/to/your/kernel/drivers/kernelsu
   ```
3. Add `obj-y += kernelsu/` to `drivers/Makefile`.
4. Add `source "drivers/kernelsu/Kconfig"` to `drivers/Kconfig`.
