import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useCallback, useRef, type ReactNode } from "react"
import { NavLink, useLocation } from "react-router-dom"

const ArrayToNavigate = [
    {
        name: 'Page One',
        link: '/page-one'
    },
    {
        name: 'Page Two',
        link: '/page-two'
    },
    {
        name: 'Page Three',
        link: '/page-three'
    }
]


const ROWS = 4
const COLUMNS = 16

const SpecificLayout = ({ children }: { children: ReactNode }) => {

    const transitionGridRef = useRef<HTMLDivElement | null>(null)
    const blocksRef = useRef<HTMLDivElement[]>([])
    const location = useLocation();

    const createTransitionGrid = useCallback(() => {
        if (!transitionGridRef.current) return
        const container = transitionGridRef.current
        container.innerHTML = ''
        blocksRef.current = []

        const singleBlockWidth = window.innerWidth / COLUMNS
        const singleBlockHeight = window.innerHeight / ROWS

        const orderedBlocks: HTMLDivElement[] = [];

        for (let row = 0; row < ROWS; row++) {
            const rowBlocks: HTMLDivElement[] = [];

            for (let col = 0; col < COLUMNS; col++) {
                const block = document.createElement("div");

                block.className = "transition__block";

                block.style.cssText = `
      width:${singleBlockWidth + 1}px;
      height:${singleBlockHeight + 1}px;
      left:${col * singleBlockWidth}px;
      top:${row * singleBlockHeight}px;
      transform-origin:${row % 2 === 0 ? "left" : "right"} center;
    `;

                container.appendChild(block);

                rowBlocks.push(block);
            }

            if (row % 2 === 0) {
                orderedBlocks.push(...rowBlocks);
            } else {
                orderedBlocks.push(...rowBlocks.reverse());
            }
        }

        blocksRef.current = orderedBlocks;

        gsap.set(blocksRef.current, {
            scaleX: 0,
        });

        gsap.set(blocksRef.current, { scaleX: 0 })
    }, [])

    useGSAP(
        () => {
            createTransitionGrid();

            const tl = gsap.timeline();

            tl.set(transitionGridRef.current, {
                autoAlpha: 1,
            })
                .to(blocksRef.current, {
                    scaleX: 1,
                    duration: 0.35,
                    ease: "power2.inOut",
                    stagger: {
                        each: 0.015,
                    },
                })
                .to(
                    blocksRef.current,
                    {
                        scaleX: 0,
                        duration: 0.35,
                        ease: "power2.inOut",
                        stagger: {
                            each: 0.015,
                            from: "end",
                        },
                    },
                    "+=0.2"
                )
                .set(transitionGridRef.current, {
                    autoAlpha: 0,
                });

            return () => {
                tl.kill();
            };
        },
        {
            dependencies: [location.pathname],
            revertOnUpdate: true,
        }
    );

    return (
        <div className="space-y-5">
            <div className="flex flex-wrap gap-5">
                {ArrayToNavigate.map((navItem) => {
                    const { link, name } = navItem
                    return (
                        <NavLink to={link} key={name} className="text-indigo-500 font-semibold hover:text-indigo-600 transition-all">{name}</NavLink>
                    )
                })}
            </div>
            <div ref={transitionGridRef} className="transition__grid" />
            {children}
        </div>
    )
}

export default SpecificLayout