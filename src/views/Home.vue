<script setup>
import { onMounted , watchEffect , ref } from 'vue';
import { useWindowSize } from 'vue-window-size';
import Ten from '../assets/10.vue';
import Eleven from '../assets/11.vue';

const { width , height } = useWindowSize()

const callbackWindowPictureLeft = (entries) => {
    entries.forEach(({ target , isIntersecting}) => {
      if (isIntersecting) {
        target.classList.remove('invisible');
      return target.classList.add('swing-in-left-bck');
    } 
    })
}

const callbackWindowPictureRight = (entries) => {
    entries.forEach(({ target , isIntersecting}) => {
      if (isIntersecting) {
        target.classList.remove('invisible');
      return target.classList.add('swing-in-right-bck');
    } 
    })
}
const callbackText = (entries) => {
    entries.forEach(({ target , isIntersecting}) => {
      if (isIntersecting) {
        target.classList.remove('invisible');
      return target.classList.add('scale-up-hor-left');
    } 
    })
}

const callbackTextName = (entries) => {
    entries.forEach(({ target , isIntersecting}) => {
      if (isIntersecting) {
        target.classList.remove('invisible');
      return target.classList.add('scale-up-ver-bottom');
    } 
    })
}

const callbackTextVenue = (entries) => {
    entries.forEach(({ target , isIntersecting}) => {
      if (isIntersecting) {
        target.classList.remove('invisible');
      return target.classList.add('tracking-in-expand');
    } 
    })
}
const callbackVenuePicLeft = (entries) => {
    entries.forEach(({ target , isIntersecting}) => {
      if (isIntersecting) {
        target.classList.remove('invisible');
      return target.classList.add('tilt-in-fwd-tl');
    } 
    })
}
const callbackVenuePicRight = (entries) => {
    entries.forEach(({ target , isIntersecting}) => {
      if (isIntersecting) {
        target.classList.remove('invisible');
      return target.classList.add('tilt-in-fwd-tr');
    } 
    })
}
const callbackVenueTextLeft = (entries) => {
    entries.forEach(({ target , isIntersecting}) => {
      if (isIntersecting) {
        target.classList.remove('invisible');
      return target.classList.add('fade-in-left');
    } 
    })
}
const callbackVenueTextRight = (entries) => {
    entries.forEach(({ target , isIntersecting}) => {
      if (isIntersecting) {
        target.classList.remove('invisible');
      return target.classList.add('fade-in-right');
    } 
    })
}
const callbackVenueLine = (entries) => {
    entries.forEach(({ target , isIntersecting}) => {
      if (isIntersecting) {
        target.classList.remove('invisible');
      return target.classList.add('scale-up-ver-top');
    } 
    })
}
const callbackScheduleLine = (entries) => {
    entries.forEach(({ target , isIntersecting}) => {
      if (isIntersecting) {
        target.classList.remove('invisible');
      return target.classList.add('scale-up-hor-center');
    } 
    })
}
const callbackScheduleList = (entries) => {
    entries.forEach(({ target , isIntersecting}) => {
      if (isIntersecting) {
        target.classList.remove('invisible');
      return target.classList.add('fade-in-bottom');
    } 
    })
}



const observerNumber2 = new IntersectionObserver(callbackWindowPictureLeft,{
    threshold: 0.25
})

const observerNumber3 = new IntersectionObserver(callbackWindowPictureRight,{
    threshold: 0.25
})

const observerNumber4 = new IntersectionObserver(callbackText, {
  threshold: 0.25
});

const observerNumber5 = new IntersectionObserver(callbackTextName, {
  threshold: 0.5
});

const observerNumber6 = new IntersectionObserver(callbackTextVenue, {
  threshold: 0.5
});

const observerNumber7 = new IntersectionObserver(callbackVenuePicLeft, {
  threshold: 0.25
});
const observerNumber8 = new IntersectionObserver(callbackVenuePicRight, {
  threshold: 0.25
});
const observerNumber9 = new IntersectionObserver(callbackVenueTextLeft, {
  threshold: 0.25
});
const observerNumber10 = new IntersectionObserver(callbackVenueTextRight, {
  threshold: 0.25
});
const observerNumber11 = new IntersectionObserver(callbackVenueLine, {
  threshold: 0.25
});
const observerNumber12 = new IntersectionObserver(callbackScheduleLine, {
  threshold: 0.25
});
const observerNumber13 = new IntersectionObserver(callbackScheduleList, {
  threshold: 0.25
});


onMounted(() => {
    
    document.querySelectorAll(".esan1").forEach(el => observerNumber2.observe(el));
    document.querySelectorAll(".esan2").forEach(el => observerNumber3.observe(el));
    document.querySelectorAll(".title-text").forEach(el => observerNumber4.observe(el));
    document.querySelectorAll(".name-text").forEach(el => observerNumber5.observe(el));
    document.querySelectorAll(".venue").forEach(el => observerNumber6.observe(el));
    document.querySelectorAll(".venue-pic-left").forEach(el => observerNumber7.observe(el));
    document.querySelectorAll(".venue-pic-right").forEach(el => observerNumber8.observe(el));
    document.querySelectorAll(".venue-text-left").forEach(el => observerNumber9.observe(el));
    document.querySelectorAll(".venue-text-right").forEach(el => observerNumber10.observe(el));
    document.querySelectorAll(".venue-line").forEach(el => observerNumber11.observe(el));
    document.querySelectorAll(".schedule-line").forEach(el => observerNumber12.observe(el));
    document.querySelectorAll(".schedule-list").forEach(el => observerNumber13.observe(el));

})
const parallaxTarget = ref(null)
const parallaxTrigger = ref(null)
const timeline = ref(null)
watchEffect(()=>{
  timeline?.value?.kill()
  gsap.registerPlugin(ScrollTrigger);
    const y = width.value * 0.1
    const setY = gsap.quickSetter(parallaxTarget.value, "y" , "px")
    timeline.value = gsap.timeline({
      scrollTrigger: {
      trigger: parallaxTrigger.value,
      scrub: true,
      start: "top bottom",
      end: "bottom top",
      onUpdate : (e) => {
        setY(e.progress * y)
      }
     }
    })
})

const parallaxPictureTarget = ref(null)
const timelineSecond = ref(null)
watchEffect(()=>{
  timelineSecond?.value?.kill()
  gsap.registerPlugin(ScrollTrigger);
    const y = width.value * -0.075
    const setY = gsap.quickSetter(parallaxPictureTarget.value, "y" , "px")
    timelineSecond.value = gsap.timeline({
      scrollTrigger: {
      trigger: parallaxPictureTarget.value,
      scrub: true,
      start: "top bottom",
      end: "bottom top",
      onUpdate : (e) => {
        setY(e.progress * y)
      }
     }
    })

     
})

const parallaxTitleTarget = ref(null)
const timelineThird = ref(null)
watchEffect(()=>{
  timelineThird?.value?.kill()
  gsap.registerPlugin(ScrollTrigger);
    const y = width.value * -0.1
    const setY = gsap.quickSetter(parallaxTitleTarget.value, "y" , "px")
    timelineThird.value = gsap.timeline({
      scrollTrigger: {
      trigger: parallaxTitleTarget.value,
      scrub: true,
      start: "top bottom",
      end: "bottom top",
      onUpdate : (e) => {
        setY(e.progress * y)
      }
     }
    })

     
})




</script>
<template>
        

        <div class=" h-[100vh] bg-slate-100 flex justify-center items-center  relative -z-20">
          <div class=" font-baskervville fixed top-4 right-4 z-20">10 / 11</div>
          <div class="flex flex-col text-6xl text-lime-950 title-header" >
            <div class="font-baskervville name-text ">Bride &</div>
            <div class="font-baskervville name-text">Groom</div>
            <div class="font-baskervville name-text text-xl text-center">November 10 , 2024</div>
          </div>
          <div class="w-[60vw] h-[20vw]  absolute right-0 bottom-0 schedule-list invisible -z-10" >
                  <img src="../../public/mt.png" class="object-cover  w-full" ref="parallaxTitleTarget">
                </div>
        </div>

        <div class="h-[100vh]  bg-slate-100 flex justify-center items-center section relative z-0 test" ref="parallaxTrigger">
          <div class="flex text-7xl text-lime-950 gap-4 h-full max-md:items-center z-10"  ref="parallaxTarget" >

            <div class="flex flex-col gap-4 w-[40vw] container-card">
              <div class="flex font-baskervville title-text invisible text-[5vw]">
                The Date 
              </div>
              <div class="flex justify-center bg-white shadow-2xl esan1 max-h-[70%] invisible " >
                <div class="m-[2vw] h-[75%] overflow-hidden w-full">
                  <img src="../../public/sp1.png" class="object-cover w-full">
                </div>
                
              </div>
            </div>

            <div class="flex flex-col gap-4 w-[40vw] container-card">
              <div class="flex justify-center bg-white shadow-2xl esan2  max-h-[70%] invisible">
                <div class="m-[2vw] h-[75%] overflow-hidden w-full">
                  <img src="../../public/sp2.png" class="object-cover  w-full">
                </div>
              </div>
              <div class="flex text-sm font-baskervville indent-12 title-text invisible">
                Once in a while, right in the middle of an ordinary life, love gives us a fairy tale. Come celebrate as Bride and Groom begin their happily ever after.
                   
              </div>
            </div>
            
           
          </div>
          <Ten   class="w-[30vw] h-auto  absolute -z-10 bottom-1/4 left-0" style="filter: drop-shadow(0px 0px .5px #000000);"/>
          <Eleven class="w-[30vw] h-auto  absolute -z-10 top-1/4 right-0" style="filter: drop-shadow(0px 0px .5px #000000);"/>
          
        </div>

        <div class="h-auto bg-slate-100 flex justify-center section">
          <div class="flex flex-col text-3xl text-lime-950 m-4 ">
            <div class="font-baskervville font-semibold text-center venue invisible">Mai Bok</div>
            <div class="font-baskervville font-semibold text-center venue invisible">Ja Bok,</div>
            <div class="font-baskervville font-semibold text-center venue invisible">Tum mai</div>
            <div class="font-baskervville bg-lime-950 gap-4 venue-line w-[0.1rem] h-20 mx-auto mt-4 invisible"></div>
          <div class="mt-12 venue-text-left invisible">
            <div class="font-baskervville text-xs text-gray-400">The Venue</div>
            <div class="font-baskervville text-base font-semibold">Soi Klong Li Tawan-OK 71 , Klong Si ,</div>
            <div class="font-baskervville text-base font-semibold"> 12120 Klong Luang , Pathum Thani, 12120</div>
          </div>
          <div class="m-12 venue-text-right invisible">
            <div class="font-baskervville text-xs font-normal text-end"> We encourage carpooling to reduce parking congestion and environmental impact.</div>
            <div class="font-baskervville text-xs font-normal text-end">  If you would like to carpool, please let us know, and we can help coordinate rides with other guests.</div>
          </div>
          
            <div class="venue-pic-container m-4 w-[70vw] grid  grid-cols-3 grid-rows-3 mx-auto">
              <div class=" col-start-1 col-span-2  row-start-1 row-span-2 venue-pic-left invisible"   >
                <img src="../../public/sp3.png" class="object-cover w-full h-full shadow-2xl" >
              </div>
              <div class=" col-start-2 row-start-2 col-span-2 row-span-2 venue-pic-right invisible">
                <img src="../../public/sp4.png" class="object-cover w-full  h-full shadow-2xl" ref="parallaxPictureTarget">
              </div>
            </div>

          </div>
        </div>

        <div class=" h-auto   bg-slate-100 flex justify-center items-center section p-4 ">
          <div class="flex flex-col justify-center items-center text-[6vw] text-lime-950 ">
            <div class="font-baskervville m-12 mb-4 gap-4 flex flex-col justify-center items-center text-3xl font-semibold italic invisible schedule-list">Schedule</div>
            <div class="font-baskervville m-12 mt-0 gap-4 flex flex-col justify-center items-center text-[1.5vw] text-center w-[60vw] invisible schedule-list">Below is the schedule for our wedding day, including the ceremony, reception, and other key events. Please make sure to arrive on time so you don't miss any of the festivities. We look forward to celebrating with you!</div>
            <div class="font-baskervville bg-lime-950 gap-4 w-[4vw] h-[.2rem] mx-auto mt-4 invisible schedule-line"></div>   
          </div> 
        </div>

        <ul class="relative w-full h-[60vw] bg-slate-100 section ">
              <li class="top-[0vw] left-[25vw] absolute invisible schedule-list">
                <div class="font-baskervville text-[1.25vw] text-gray-400 italic">6.00 AM</div>
                <div class="font-sriracha text-[2vw]">กินข้าว</div>
                <div class="font-baskervville text-[.5vw] w-[10vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illum soluta explicabo sit asperiores fuga , consectetur omnis?</div>
              </li>
              <li class="top-[10vw] left-[45vw] absolute invisible schedule-list">
                <div class="font-baskervville text-[1.25vw] text-gray-400 italic">7.00 AM</div>
                <div class="font-sriracha text-[2vw]">ดำน้ำ</div>
                <div class="font-baskervville text-[.5vw] w-[10vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illum soluta explicabo sit asperiores fuga , consectetur omnis?</div>

              </li>
              <li class="top-[20vw] left-[65vw] absolute invisible schedule-list">
                <div class="font-baskervville text-[1.25vw] text-gray-400 italic">10.00 AM</div>
                <div class="font-sriracha text-[2vw]">ปลูกต้นไม้</div>
                <div class="font-baskervville text-[.5vw] w-[10vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illum soluta explicabo sit asperiores fuga , consectetur omnis?</div>

              </li>
              <li class="top-[30vw] left-[45vw] absolute invisible schedule-list">
                <div class="font-baskervville text-[1.25vw] text-gray-400 italic">11.00 AM</div>
                <div class="font-sriracha text-[2vw]">หัวข้อ 1</div>
                <div class="font-baskervville text-[.5vw] w-[10vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illum soluta explicabo sit asperiores fuga , consectetur omnis?</div>

              </li>
              <li class="top-[40vw] left-[25vw] absolute invisible schedule-list">
                <div class="font-baskervville text-[1.25vw] text-gray-400 italic">12.30 AM</div>
                <div class="font-sriracha text-[2vw]">หัว</div>
                <div class="font-baskervville text-[.5vw] w-[10vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illum soluta explicabo sit asperiores fuga , consectetur omnis?</div>

              </li>
            </ul>

       
</template>
<style scoped>

ul {
    display: block;
    list-style: none;
}

.observable {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 32px;
  transition: background-color 0.5s ease;
}

.venue-pic-container{
  perspective: 1000px;

}


.observable.in-sight {
  background-color: whitesmoke;
}

.scale-up-ver-bottom {
	  animation: scale-up-ver-bottom 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.container-card{
  perspective: 2000px;
  
}
.swing-in-left-bck {
  
	animation: swing-in-left-bck 1.5s ease-out both;
}
.swing-in-right-bck {
	animation: swing-in-right-bck 2.3s ease-out both;
}

.scale-up-hor-left {
	animation: scale-up-hor-left 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.scale-up-ver-bottom {
	animation: scale-up-ver-bottom 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;
}

.kenburns-top {
	animation: kenburns-top 5s ease-out reverse both;
}

.tracking-in-expand {
	animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

.tilt-in-fwd-tl {
	animation: tilt-in-fwd-tl 1.2s cubic-bezier(0.445, 0.050, 0.550, 0.950) both;
}

.tilt-in-fwd-tr {
	animation: tilt-in-fwd-tr 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.fade-in-left {
	animation: fade-in-left 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.fade-in-right {
	animation: fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.scale-up-ver-top {
	        animation: scale-up-ver-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.scale-up-hor-center {
	animation: scale-up-hor-center 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.fade-in-bottom {
	animation: fade-in-bottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@keyframes fade-in-bottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes scale-up-hor-center {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

@keyframes scale-up-ver-top {
  0% {
    transform: scaleY(0);
    transform-origin: 100% 0%;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 100% 0%;
  }
}


@keyframes fade-in-right {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}


@keyframes fade-in-left {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}


@keyframes tilt-in-fwd-tr {
  0% {
    transform: rotateY(20deg) rotateX(35deg) translate(200px, -200px) skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}

@keyframes tilt-in-fwd-tl {
  0% {
    transform: rotateY(-20deg) rotateX(35deg) translate(-200px, -200px) skew(35deg, -10deg);
    opacity: 0;
  }
  
  100% {
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}

@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

@keyframes kenburns-top {
  0% {
    transform: scale(1) translateY(0);
    transform-origin: 50% 16%;
  }
  100% {
    transform: scale(1.25) translateY(-15px);
    transform-origin: top;
  }
}

@keyframes scale-up-hor-left {
  0% {
            transform: scaleX(0.4);
            transform-origin: 0% 0%;
  }
  100% {
            transform: scaleX(1);
            transform-origin: 0% 0%;
  }
}
@keyframes swing-in-right-bck {
  0% {
    transform: rotateY(70deg);
    transform-origin: right;
    opacity: 0;
  }

  100% {
    transform: rotateY(0);
    transform-origin: right;
    opacity: 1;
  }
}


@keyframes swing-in-left-bck {
  0% {
    transform: rotateY(-70deg);
    transform-origin: left;
    opacity: 0;
  }
 
  100% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
}


@keyframes scale-up-ver-bottom {
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
  }
}


.square {
  animation-name: rotateAnimation;
  animation-duration: 1s; /* Firefox requires this to apply the animation */
  animation-direction: ease;
  animation-delay: 1s;
  animation-timeline: scroll(block nearest);
}

@keyframes rotateAnimation {
  0% {
    transform: translateY(0em);
  }
  100% {
    transform: translateY(-100em);
  }
}

</style>