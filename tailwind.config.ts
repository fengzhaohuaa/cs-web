import type { Config } from 'tailwindcss';

import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '780px',
      lg: '1024px',
      xl: '1280px',
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    fontFamily: {
      sans: [
        'Roboto',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'PingFang',
        '"Noto Sans"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        /*<alpha-value>可以调节透明度如bg-text/80,则将其透明度改为80%*/
        /*主题的配色基于以下五种颜色，可改变其透明度进行变种*/
        text1: 'rgb(var(--color-text) / <alpha-value>)', //字体色
        background1: 'rgb(var(--color-background) / <alpha-value>)', //背景色
        primary1: 'rgb(var(--color-primary) / <alpha-value>)', //主题色
        secondary1: 'rgb(var(--color-secondary) / <alpha-value>)', //次要色
        accent1: 'rgb(var(--color-accent) / <alpha-value>)', //提示色
      },
      spacing: {
        4.5: '18px',
        5.5: '22px',
        6.5: '26px',
        7.5: '30px',
        8.5: '34px',
        9.5: '38px',
        10.5: '42px',
        11.5: '46px',
        12.5: '50px',
        13: '52px',
        13.5: '54px',
        14.5: '58px',
        15: '60px',
        15.5: '62px',
        17: '68px',
        18: '72px',
        19: '76px',
        21: '84px',
        22: '88px',
        23: '92px',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
