import React, { useState, useEffect } from 'react';
import { TfiAngleDoubleDown } from 'react-icons/tfi';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';

// 类型限制
interface SliderProps {
  images: string[]; // 轮播图图片数组
  title?: string; // 轮播图标题，可选
  image: string; // 当前轮播图的图片
  url?: string; // 轮播图链接地址，可选
}

const Slider: React.FC<SliderProps> = ({ images, title, image, url }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0); // 当前轮播图索引

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1)); // 切换到下一张轮播图
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1)); // 切换到上一张轮播图
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index); // 切换到指定索引的轮播图
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 每3秒切换一次轮播图

    return () => {
      clearInterval(interval); // 清除定时器
    };
  }, []);

  return (
    <div className='relative'>
      <button className='absolute left-4 top-1/2 z-10 -translate-y-1/2 transform text-background1' onClick={prevSlide}>
        <FaChevronLeft className='sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl' /> {/* 左箭头图标，大小为48像素 */}
      </button>
      <button
        className='absolute right-4 top-1/2 z-10 -translate-y-1/2 transform text-background1 sm:text-base md:text-lg lg:text-xl xl:text-2xl'
        onClick={nextSlide}
      >
        <FaChevronRight className='sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl' />
        {/* 右箭头图标，大小为48像素 */}
      </button>
      <img
        className='sm:h-205 md:h-205 lg:h-496 w-full object-cover xl:h-screen'
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />
      {/* 当前轮播的图片 */}
      <div className='absolute bottom-4 right-4 flex space-x-2'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-primary1' : 'bg-secondary1'}`}
            onClick={() => goToSlide(index)} // 添加点击事件处理程序
          ></div>
        ))}
      </div>
      <div className='absolute bottom-0 left-1/2 mb-6 -translate-x-1/2 transform'>
        <TfiAngleDoubleDown className='hidden animate-bounce text-5xl text-background1 xl:block' />
      </div>
    </div>
  );
};

export default Slider;
