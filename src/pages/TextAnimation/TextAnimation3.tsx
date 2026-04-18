import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useRef } from 'react'

const TextAnimation3 = () => {

    const textDiv1 = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const chars = SplitText.create(textDiv1.current, {
            type: 'lines'
        })
        chars.lines.forEach((character) => {
            gsap.fromTo(character, { opacity: 0.3 }, {
                opacity: 1, scrollTrigger: {
                    trigger: character,
                    start: 'top 80%',
                    end: '+=10',
                    scrub: 1
                }
            })
        })
    })


    return (
        <div className="min-h-screen bg-slate-700 my-20 py-20">
            <h1 className="text-slate-200 text-lg leading-12" ref={textDiv1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolor natus animi repellat eos inventore labore nisi voluptates! Totam ipsum at mollitia sequi dolor, magnam optio assumenda facilis temporibus eaque cupiditate dignissimos illo soluta molestias quisquam odit eligendi repellat. Quaerat corporis qui accusamus. Repudiandae odio modi voluptates deleniti iusto, numquam illum? Non, tempore aspernatur fuga error tempora doloribus voluptatum quia sapiente esse recusandae excepturi incidunt quas sint et culpa totam quibusdam nisi? Eum hic repudiandae blanditiis! Consectetur voluptatibus eligendi sequi earum suscipit expedita perspiciatis maxime praesentium quibusdam est, deserunt voluptatem quia, aperiam quo fugit repudiandae magni fuga culpa placeat aliquam quis saepe? Ut quod aut beatae error magnam sunt excepturi temporibus. Unde quia iusto amet aliquid delectus, placeat velit tempora numquam inventore omnis pariatur, voluptate voluptas laborum mollitia temporibus quod maiores perspiciatis ipsam sunt. Explicabo dolorem molestiae illum deleniti harum sint sapiente sunt reprehenderit ullam numquam dolorum, nulla consectetur voluptatum ad obcaecati aliquid at, placeat, consequatur architecto tempora ex? Quis eum autem beatae quibusdam quasi et magnam debitis laborum consequuntur dicta. Quo incidunt, enim autem ut recusandae ipsum accusantium velit vero ad voluptates aspernatur illum exercitationem nobis, quia ea, labore dicta dolore facere rem! Voluptatum quasi consequatur sed dicta laborum cum quos quam mollitia, repellendus officia pariatur rerum! Obcaecati, aspernatur delectus accusantium vero exercitationem enim quae at? Obcaecati laborum rem odio voluptatum quasi sed quod quos ab reiciendis voluptates voluptatem suscipit beatae perferendis recusandae facilis, facere cupiditate in, impedit, minus soluta iste! Reprehenderit necessitatibus expedita, ipsum est aspernatur sit voluptates obcaecati eaque id culpa corporis possimus nihil ratione aliquid quaerat, voluptatibus sequi? Veniam laboriosam ex molestias, assumenda quidem reprehenderit nemo illum! Quidem reprehenderit accusantium quibusdam at consequuntur porro pariatur rerum ad minima quisquam quis sit blanditiis, inventore sequi velit perferendis quam voluptatem? Obcaecati vero reiciendis nostrum sint hic. Quo pariatur fugiat modi aspernatur sequi labore commodi quisquam aliquam, unde, ab tempora eius culpa doloremque numquam voluptatum rem error exercitationem amet deleniti a eos repudiandae doloribus! Accusantium, repellendus iste porro facere, nam officia sapiente obcaecati impedit, officiis libero facilis unde! Dolor in non veritatis hic consequuntur ducimus unde sint qui, impedit quibusdam, molestias delectus inventore architecto fugit fuga aspernatur eveniet quam, illo numquam dicta mollitia. Deleniti modi, rem, perferendis provident facilis aspernatur officiis sequi vel voluptatem possimus ut! Architecto aperiam aliquid magnam cum voluptatum exercitationem. Repudiandae illo deleniti ab atque, corporis, nisi, maiores vel dignissimos architecto cumque animi reprehenderit saepe minus error ad dicta esse libero possimus! Nihil, dolorum. Veritatis porro id officiis, repellat unde magnam odio aut illum exercitationem, dolore soluta praesentium, recusandae ipsam magni quis laborum consequatur nemo maiores cum eaque? Distinctio, rem pariatur cum a libero animi alias. Magni vitae dolore repellat distinctio ipsam provident nam ad sit saepe deleniti asperiores, corrupti magnam perferendis id dolor amet nobis, harum enim optio sequi sapiente animi natus! At vitae libero labore provident numquam quas cumque debitis adipisci distinctio vero, eveniet architecto, aliquam alias suscipit nihil hic, magnam et. Saepe, sed? Unde, nisi laudantium sunt inventore molestias quod ex maiores illum eveniet, quidem quasi officiis minima! Nostrum soluta dolores rem a non harum, eos itaque quibusdam cumque hic illum labore voluptate corporis ipsum ullam facere vitae est natus nisi praesentium eligendi, accusamus doloremque quis. Accusantium adipisci eaque veritatis officia ullam atque? Quo saepe, rerum possimus sit accusamus quasi eligendi non. Esse, accusamus in debitis sint animi fugiat iure quam, culpa sequi amet quod repudiandae alias dicta incidunt ut nihil quis laborum .</h1>
        </div>

    )
}

export default TextAnimation3