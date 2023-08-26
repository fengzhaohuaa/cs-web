'use client';
{/*样式引入尝试*/}
import { Image, Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@nextui-org/react';
import React from 'react';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
export default function Home() {
  return (
    <>
      <div className='h-20'></div>
      <NewsCard />
      <div className='h-20'></div>
      <Slider />
      <Footer />
      <div className='flex h-screen items-center justify-center'>
        <Card className='max-w-[400px]'>
          <CardHeader className='flex gap-3'>
            <Image
              alt='nextui logo'
              height={40}
              radius='sm'
              src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
              width={40}
            />
            <div className='flex flex-col'>
              <p className='text-md'>NextUI</p>
              <p className='text-small text-default-500'>nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className='text-text1'>Make beautiful websites regardless of your design experience.</p>
            <p className='text-background1'>Make beautiful websites regardless of your design experience.</p>
            <p className='text-primary1'>Make beautiful websites regardless of your design experience.</p>
            <p className='text-secondary1'>Make beautiful websites regardless of your design experience.</p>
            <p className='text-accent1'>Make beautiful websites regardless of your design experience.</p>
            <button className='rounded bg-text1 px-4 py-2 font-bold text-background1'>text颜色</button>
            <button className='rounded bg-background1 px-4 py-2 font-bold text-text1'>背景颜色</button>
            <button className='rounded bg-primary1 px-4 py-2 font-bold text-background1'>主题颜色</button>
            <button className='rounded bg-secondary1 px-4 py-2 font-bold text-text1'>次要颜色</button>
            <button className='rounded bg-accent1 px-4 py-2 font-bold text-background1'>提示颜色</button>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href='https://github.com/nextui-org/nextui'>
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
