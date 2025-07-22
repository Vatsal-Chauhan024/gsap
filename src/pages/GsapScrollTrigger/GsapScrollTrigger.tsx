import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const GsapScrollTrigger = () => {
    const scrollRefDiv = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        if (scrollRefDiv.current) {
            const boxes = gsap.utils.toArray(scrollRefDiv.current.children) as HTMLElement[]

            boxes.forEach((box) => {
                gsap.to(box, {
                    x: 100 * (boxes.indexOf(box) + 50),
                    rotation: 360,
                    borderRadius: '100%',
                    scale: 1.5,
                    scrollTrigger: {
                        trigger: box,
                        start: 'bottom bottom',
                        end: 'top 20%',
                        scrub: true,
                    },
                    ease: 'power1.in'
                })
            })
        }
    }, { scope: scrollRefDiv })

    return (
        <div className="flex flex-col gap-5 p-20">
            <p className="p-5 text-slate-600 text-sm font-medium mb-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore enim dolorum, voluptatum non a aliquam quidem quaerat harum id quas debitis, laboriosam exercitationem rerum repellendus quasi magni repudiandae mollitia eveniet laudantium cumque in quam itaque. Nihil distinctio praesentium cum quos, obcaecati ab temporibus voluptates nisi officiis, fugit vitae, quasi nulla quod vel ipsum sequi! Sed labore distinctio sequi temporibus non laboriosam eius itaque, veritatis quaerat delectus nihil dolorem dolores culpa! Rerum maxime, nulla quibusdam ipsam quaerat laborum expedita modi vitae deserunt ratione ea, dicta vero velit facere minima impedit? Nesciunt, assumenda ipsum? Pariatur fuga beatae voluptate obcaecati dolor sed recusandae harum odio maxime fugiat quasi at cupiditate voluptatibus quis nemo distinctio magnam assumenda, veritatis doloremque corrupti in a. Praesentium omnis asperiores doloremque, eligendi, qui libero cumque nemo perspiciatis, error labore doloribus architecto delectus nam. Dolorem voluptatum eum, ab voluptate expedita perspiciatis magnam nobis quos consectetur illo recusandae beatae optio enim vitae consequuntur facilis officiis sint rerum iste sit. Iusto molestias quis sapiente, deserunt, cumque est, adipisci eveniet vel optio placeat quidem itaque autem! Deserunt ipsa rerum velit quibusdam provident quia, cupiditate consequuntur, qui veritatis necessitatibus voluptatibus fuga fugiat, dolorem doloremque incidunt sunt temporibus? Corrupti officiis vitae illum autem similique iusto aliquid maiores, hic, beatae laudantium possimus iure ex illo suscipit labore nisi quos molestiae blanditiis quod libero recusandae. Repellat aliquid corrupti quae ut officia reiciendis et distinctio totam quidem, ducimus facilis fugit velit eius dolorum tempora natus adipisci provident ex ipsa molestiae. Nisi, labore maxime voluptatem eaque neque quae asperiores sapiente expedita consectetur sint aspernatur omnis. Vero voluptatem officiis necessitatibus accusamus cumque? Dolorem quaerat inventore, reiciendis tenetur, expedita excepturi iste eius suscipit dicta adipisci qui rerum eum temporibus culpa maxime optio nesciunt numquam tempore. Officia tempora amet iusto officiis sunt perspiciatis repellendus dolor consequuntur eum! Quae libero itaque molestiae deleniti?</p>

            <div className="flex gap-5 py-10" ref={scrollRefDiv}>
                <div className="w-20 h-20 rounded-md bg-indigo-500" />
                <div className="w-20 h-20 rounded-md bg-orange-500" />
            </div>


            <section className="my-96">
                <h1 className="text-2xl font-bold uppercase">Section Two</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas in perspiciatis ex, blanditiis totam enim nobis optio distinctio. Doloribus corporis quos, quasi doloremque architecto obcaecati odio suscipit accusamus fugit vitae quibusdam saepe blanditiis perferendis ducimus molestias libero quis placeat porro. Minus, eos, tenetur, quasi voluptate necessitatibus repellat totam eaque odit sint aut eligendi iusto libero ducimus et. Accusantium repellat corrupti distinctio numquam non animi! Assumenda provident nam temporibus, repellendus ipsam voluptatem. Sapiente dolore minima dignissimos ut in est vel laudantium quae. Vitae voluptatum repellat distinctio, voluptatem laboriosam nisi veritatis debitis provident porro quisquam sequi sint consectetur incidunt, veniam a, voluptate sed! Architecto libero vel corporis eaque, illum ex quae facere quia ipsa reiciendis voluptatibus facilis alias autem totam reprehenderit sed, tempora dolorem necessitatibus velit. Ut a vitae libero blanditiis asperiores repellat, consequuntur nostrum! Iusto quasi quibusdam qui adipisci esse error possimus, recusandae saepe iure, vel velit non maxime enim, cumque reiciendis sit. Incidunt ipsam cumque, architecto excepturi iusto unde atque doloremque. Incidunt illum delectus quos tenetur placeat labore vel officia repellendus harum officiis. Maiores, optio expedita! Optio quasi qui quo, architecto minus cum nam veritatis doloribus explicabo dolores, impedit pariatur obcaecati amet? Ipsum optio laboriosam ab culpa aut in.</p>
            </section>
        </div>
    )
}

export default GsapScrollTrigger