import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const images = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        alt: "Mountain landscape",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        alt: "Lake surrounded by mountains",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1494526585095-c41746248156",
        alt: "Modern architecture",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
        alt: "City skyline at night",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        alt: "Forest pathway",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        alt: "Ocean waves",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        alt: "Green hills",
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        alt: "Dense forest",
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        alt: "Snowy mountain peak",
    },
];


const ScrollerAnimation = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.defaults({
            scroller: ".scroller",
        });

        const sections = gsap.utils.toArray<HTMLElement>("section");

        sections.forEach((section, index) => {
            const wrapper = section.querySelector<HTMLElement>(".wrapper");

            if (!wrapper) return;

            gsap.fromTo(
                wrapper,
                {
                    x: () => {
                        const distance = wrapper.scrollWidth - section.offsetWidth;

                        return index % 2 === 0 ? section.offsetWidth : -distance;
                    },
                },
                {
                    x: () => {
                        const distance = wrapper.scrollWidth - section.offsetWidth;

                        return index % 2 === 0 ? -distance : 0;
                    },
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 110%",
                        end: "bottom 15%",
                        scrub: 0.5,
                        invalidateOnRefresh: true,
                        // markers: true,
                    },
                }
            );
        });

        // Wait until all images are loaded
        const imgs = Array.from(document.images);

        Promise.all(
            imgs.map(
                (img) =>
                    img.complete
                        ? Promise.resolve()
                        : new Promise<void>((resolve) => {
                            img.onload = () => resolve();
                            img.onerror = () => resolve();
                        })
            )
        ).then(() => {
            ScrollTrigger.refresh();
        });
    }, []);

    return (
        <div className="scroller h-screen overflow-auto text-[12vw] overflow-x-hidden bg-slate-200">
            <h1>ScrollTrigger Directional Movement</h1>
            <section className="h-fit">
                <div className="flex text-[16vh] font-medium overflow-auto whitespace-nowrap">
                    Keep Smiling
                </div>
            </section>

            {Array.from({ length: 4 }).map((_, key) => {
                return (
                    <section key={key}>
                        <div className="wrapper flex text-[16vh] font-medium">
                            {images.map((item) => {
                                return (
                                    <img key={item.id} src={item.src} className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer" />
                                )
                            })}
                        </div>
                    </section>
                )
            })}

            <section className="h-fit">
                <div className="flex text-[16vh] font-medium overflow-auto whitespace-nowrap">
                    Life is Beautiful thing
                </div>
            </section>
            {Array.from({ length: 4 }).map((_, key) => {
                return (
                    <section key={key}>
                        <div className="wrapper flex text-[16vh] font-medium">
                            {images.map((item) => {
                                return (
                                    <img key={item.id} src={item.src} className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer" />
                                )
                            })}
                        </div>
                    </section>
                )
            })}

            <section className="h-fit">
                <div className="flex text-[16vh] font-medium overflow-auto whitespace-nowrap">
                    So Enjoy Every Moment......
                </div>
            </section>

            <footer className="h-1/2">
                Uplashed Images...
            </footer>

        </div>
    )
}

export default ScrollerAnimation