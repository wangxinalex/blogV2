// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '我的博客',
			description: '使用 Astro + Starlight 搭建的轻量级博客',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/wangxinalex' }],
			sidebar: [
				{
					label: '首页',
					items: [
						{ label: '关于', slug: 'index' },
					],
				},
				{
					label: '博客文章',
					autogenerate: { directory: 'blog' },
				},
			],
			// 启用最后更新时间
			lastUpdated: true,
			// 默认语言设置为简体中文
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
		}),
	],
	// 设置输出为静态站点
	output: 'static',
	// 设置网站 URL（部署时可以替换为实际域名）
	// site: 'https://your-blog.pages.dev',
});
