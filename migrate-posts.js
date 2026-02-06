#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Jekyll 文章源目录
const sourceDir = '/Users/wangxinalex/SelfStudy/wangxinalex.github.io/_posts';
// Starlight 目标目录
const targetDir = path.join(__dirname, 'src/content/docs/blog');

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 读取所有 markdown 文件
const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.md'));

console.log(`找到 ${files.length} 篇文章需要迁移...\n`);

files.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const content = fs.readFileSync(sourcePath, 'utf-8');
  
  // 解析 Jekyll front matter
  const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  
  if (!frontMatterMatch) {
    console.log(`⚠️  ${file} 没有找到 front matter，跳过`);
    return;
  }
  
  const frontMatter = frontMatterMatch[1];
  const markdownContent = content.slice(frontMatterMatch[0].length).trim();
  
  // 提取标题和日期
  const titleMatch = frontMatter.match(/title:\s*["']?(.*?)["']?\s*$/m);
  const dateMatch = frontMatter.match(/date:\s*(\d{4}-\d{2}-\d{2})/);
  const categoriesMatch = frontMatter.match(/categories:\s*(.+)$/m);
  
  const title = titleMatch ? titleMatch[1] : '无标题';
  const date = dateMatch ? dateMatch[1] : '';
  const categories = categoriesMatch ? categoriesMatch[1].trim() : '';
  
  // 生成 Starlight front matter
  let starlightFrontMatter = `---
title: "${title}"
description: "${title}"`;
  
  if (date) {
    starlightFrontMatter += `\ndate: ${date}`;
  }
  
  if (categories) {
    starlightFrontMatter += `\ncategories: ${categories}`;
  }
  
  starlightFrontMatter += '\n---\n\n';
  
  // 组合新内容
  const newContent = starlightFrontMatter + markdownContent;
  
  // 生成目标文件名（使用原文件名）
  const targetPath = path.join(targetDir, file);
  
  // 写入文件
  fs.writeFileSync(targetPath, newContent, 'utf-8');
  console.log(`✅ 迁移完成: ${file} -> ${path.basename(targetPath)}`);
});

console.log(`\n🎉 所有文章迁移完成！共 ${files.length} 篇`);
