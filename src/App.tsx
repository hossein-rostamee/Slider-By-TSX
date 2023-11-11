import React, { Component, FC } from 'react';
import makeId from './makeId';
import { SlideShow } from './SlideShow'
import { config } from './config';

export interface Category {
  link: string
  name: string
}

export interface SlideProps {
  id: number
  title: string
  excerpt: string
  category: Category
  date: string
  link: string
  imgSrc: string
}

interface AppState {
  slides: SlideProps[]
  activeSlide: number
}

export class Slider extends Component< {}, AppState > {
  state = {
    slides : [
      {
        id : makeId(),
        title : "تنفر- ماجراهای خانواده ی ایموجی",
        excerpt : "زمانی که کودکی به مادرش می گوید من ازت متنفرم، به راستی، مادر چه کاری باید انجام بدهد؟ پاسخ این سوال را در این کلیپ ملاحظه می کنید. در این کلیپ سعی شده تا با شبیه سازی موقعیتهای واقعی به مادران نهایت کمک گردد و برای آنها موقعیت های آموزشی و یادگیری به صورت عینی ترسیم تا بهتر بدانند که در برخورد با چنین مشکلاتی، راهکارهای علمی آن چیست.",
        category : { 
          link : "https://dantoo.org/post/1058/%D8%AA%D9%86%D9%81%D8%B1-%D9%85%D8%A7%D8%AC%D8%B1%D8%A7%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%D9%87-%DB%8C-%D8%A7%DB%8C%D9%85%D9%88%D8%AC%DB%8C/" ,
          name : "خانواده ایموجی ها"
        },
        date: "سه شنبه ۶ فروردین‌ماه ۱۳۹۸",
        link: "https://dantoo.org/post/1058/%D8%AA%D9%86%D9%81%D8%B1-%D9%85%D8%A7%D8%AC%D8%B1%D8%A7%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%D9%87-%DB%8C-%D8%A7%DB%8C%D9%85%D9%88%D8%AC%DB%8C",
<<<<<<< HEAD
        imgSrc: require ( ' /src/image/1.jpg' )
=======
        imgSrc: require ( './image/1.jpg' )
>>>>>>> b535bd6 (revised commit)
      },
      {
        id : makeId(),
        title : "تنفر- ماجراهای خانواده ی ایموجی",
        excerpt : "زمانی که کودکی به مادرش می گوید من ازت متنفرم، به راستی، مادر چه کاری باید انجام بدهد؟ پاسخ این سوال را در این کلیپ ملاحظه می کنید. در این کلیپ سعی شده تا با شبیه سازی موقعیتهای واقعی به مادران نهایت کمک گردد و برای آنها موقعیت های آموزشی و یادگیری به صورت عینی ترسیم تا بهتر بدانند که در برخورد با چنین مشکلاتی، راهکارهای علمی آن چیست.",
        category : { 
          link : "https://dantoo.org/post/1058/%D8%AA%D9%86%D9%81%D8%B1-%D9%85%D8%A7%D8%AC%D8%B1%D8%A7%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%D9%87-%DB%8C-%D8%A7%DB%8C%D9%85%D9%88%D8%AC%DB%8C/" ,
          name : "خانواده ایموجی ها"
        },
        date: "سه شنبه ۶ فروردین‌ماه ۱۳۹۸",
        link: "https://dantoo.org/post/1058/%D8%AA%D9%86%D9%81%D8%B1-%D9%85%D8%A7%D8%AC%D8%B1%D8%A7%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%D9%87-%DB%8C-%D8%A7%DB%8C%D9%85%D9%88%D8%AC%DB%8C",
<<<<<<< HEAD
        imgSrc: require ( " /src/image/2.jpeg" )
=======
        imgSrc: require ( "./image/2.jpeg" )
>>>>>>> b535bd6 (revised commit)
      },
      {
        id : makeId(),
        title : "تنفر- ماجراهای خانواده ی ایموجی",
        excerpt : "زمانی که کودکی به مادرش می گوید من ازت ",
        category : { 
          link : "https://dantoo.org/post/1058/%D8%AA%D9%86%D9%81%D8%B1-%D9%85%D8%A7%D8%AC%D8%B1%D8%A7%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%D9%87-%DB%8C-%D8%A7%DB%8C%D9%85%D9%88%D8%AC%DB%8C/" ,
          name : "خانواده ایموجی ها"
        },
        date: "سه شنبه ۶ فروردین‌ماه ۱۳۹۸",
        link: "https://dantoo.org/post/1058/%D8%AA%D9%86%D9%81%D8%B1-%D9%85%D8%A7%D8%AC%D8%B1%D8%A7%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%D9%87-%DB%8C-%D8%A7%DB%8C%D9%85%D9%88%D8%AC%DB%8C",
<<<<<<< HEAD
        imgSrc: require( " /src/image/3.png" ) 
=======
        imgSrc: require( "./image/3.png" ) 
>>>>>>> b535bd6 (revised commit)
      },
      {
        id : makeId(),
        title : "تنفر- ماجراهای خانواده ی ایموجی",
        excerpt : "زمانی که کودکی به مادرش می گوید من ازت متنفرم، به راستی، مادر چه کاری باید انجام بدهد؟ پاسخ این سوال را در این کلیپ ملاحظه می کنید. در این کلیپ سعی شده تا با شبیه سازی موقعیتهای واقعی به مادران نهایت کمک گردد و برای آنها موقعیت های آموزشی و یادگیری به صورت عینی ترسیم تا بهتر بدانند که در برخورد با چنین مشکلاتی، راهکارهای علمی آن چیست.",
        category : { 
          link : "https://dantoo.org/post/1058/%D8%AA%D9%86%D9%81%D8%B1-%D9%85%D8%A7%D8%AC%D8%B1%D8%A7%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%D9%87-%DB%8C-%D8%A7%DB%8C%D9%85%D9%88%D8%AC%DB%8C/" ,
          name : "خانواده ایموجی ها"
        },
        date: "سه شنبه ۶ فروردین‌ماه ۱۳۹۸",
        link: "https://dantoo.org/post/1058/%D8%AA%D9%86%D9%81%D8%B1-%D9%85%D8%A7%D8%AC%D8%B1%D8%A7%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%D9%87-%DB%8C-%D8%A7%DB%8C%D9%85%D9%88%D8%AC%DB%8C",
<<<<<<< HEAD
        imgSrc: require( " /src/image/4.jpeg" )
=======
        imgSrc: require( "./image/4.jpeg" )
>>>>>>> b535bd6 (revised commit)
      },
      {
        id : makeId(),
        title : "تنفر- ماجراهای خانواده ی ایموجی",
        excerpt : "زمانی که کودکی به مادرش می گوید من ازت متنفرم، به راستی، مادر چه کاری باید انجام بدهد؟ پاسخ این سوال را در این کلیپ ملاحظه می کنید. در این کلیپ سعی شده تا با شبیه سازی موقعیتهای واقعی به مادران نهایت کمک گردد و برای آنها موقعیت های آموزشی و یادگیری به صورت عینی ترسیم تا بهتر بدانند که در برخورد با چنین مشکلاتی، راهکارهای علمی آن چیست.",
        category : { 
          link : "https://dantoo.org/post/1058/%D8%AA%D9%86%D9%81%D8%B1-%D9%85%D8%A7%D8%AC%D8%B1%D8%A7%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%D9%87-%DB%8C-%D8%A7%DB%8C%D9%85%D9%88%D8%AC%DB%8C/" ,
          name : "خانواده ایموجی ها"
        },
        date: "سه شنبه ۶ فروردین‌ماه ۱۳۹۸",
        link: "https://dantoo.org/post/1058/%D8%AA%D9%86%D9%81%D8%B1-%D9%85%D8%A7%D8%AC%D8%B1%D8%A7%D9%87%D8%A7%DB%8C-%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%D9%87-%DB%8C-%D8%A7%DB%8C%D9%85%D9%88%D8%AC%DB%8C",
<<<<<<< HEAD
        imgSrc: require( " /src/image/5.jpg" )
=======
        imgSrc: require( "./image/5.jpg" )
>>>>>>> b535bd6 (revised commit)
      },
    ],
    activeSlide: 0
  }

  nextSlide = () => {
    this.setState( (prevState: any) => ({
      activeSlide : prevState.activeSlide + 1
    }) )
  }

  prevSlide = () => {
    this.setState( (prevState: any) => ({
      activeSlide : prevState.activeSlide - 1
    }) )
  }

  render(){
    return <SlideShow slides = { this.state.slides }
                      activeSlide = { this.state.activeSlide }
                      nextSlide = { this.nextSlide }
                      prevSlide = { this.prevSlide }
                      />
  }
} 


