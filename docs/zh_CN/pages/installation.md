# 安装

## 快捷集成
复制、粘贴并运行！简单的命令行集成命令。

>[!note]
>根据您的需求，在内核源码根目录运行以下命令。

### KernelSU Legacy
::: code-group
```sh [v1.1.1 (推荐)]
curl -LSs "https://raw.githubusercontent.com/KernelSU-Legacy/KernelSU-Legacy/v1.1.1/kernel/setup.sh" | bash -
```

```sh [v3-legacy (Alpha 预览版)]
curl -LSs "https://raw.githubusercontent.com/KernelSU-Legacy/KernelSU-Legacy/v3-legacy-susfs/kernel/setup.sh" | bash -
```

```sh [特定 标签/分支]
curl -LSs "https://raw.githubusercontent.com/KernelSU-Legacy/KernelSU-Legacy/v3-legacy-susfs/kernel/setup.sh" | bash -s <tag-or-branch>
```
:::

## 手动集成

如果您更喜欢手动集成，可以克隆仓库并将 `kernel` 目录软链接到您的内核源码中：

1. 克隆仓库：
   ```sh
   git clone https://github.com/KernelSU-Legacy/KernelSU-Legacy
   ```
2. 建立软链接：
   ```sh
   ln -sf /path/to/KernelSU-Legacy/kernel /path/to/your/kernel/drivers/kernelsu
   ```
3. 在 `drivers/Makefile` 中添加 `obj-y += kernelsu/`。
4. 在 `drivers/Kconfig` 中添加 `source "drivers/kernelsu/Kconfig"`。
