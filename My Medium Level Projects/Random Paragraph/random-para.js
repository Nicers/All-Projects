const textArray = [
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur ex odio officia consequatur vel dolorem eligendi exercitationem eius! Aliquam ipsam temporibus numquam nesciunt rerum quidem voluptates nobis iure, suscipit quasi quas voluptatibus distinctio deserunt quo assumenda omnis possimus a quis.',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat consequatur sed excepturi, non alias deleniti et modi laudantium ipsam neque nesciunt doloremque, autem officia perferendis cum beatae earum maxime eum illo sit amet ea? Nostrum deserunt illum ad. Ab, nemo!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur, aut labore iusto a doloribus, praesentium architecto sit non perferendis velit quae quasi minus ut, rem repellendus expedita voluptas magni. In iusto error quis reiciendis aspernatur eaque, eveniet provident rem.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto repudiandae temporibus quas, vero nam consequuntur, expedita accusamus libero consequatur obcaecati alias minus et. Numquam est in earum, consequatur id voluptatibus illum incidunt pariatur animi quasi deserunt aspernatur praesentium neque?',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat distinctio nihil possimus laboriosam optio cum voluptas illum alias officiis quas aliquam dignissimos dolores quos, maxime dolore nostrum corrupti delectus unde nemo corporis praesentium in pariatur! Incidunt fugit repudiandae dolor laudantium.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eligendi doloremque dolorem nemo iste in molestias praesentium obcaecati laboriosam vero. Ratione quidem, dolorum quaerat quos officiis repellendus sed esse asperiores recusandae omnis dicta inventore earum ullam fugiat, accusantium, nisi expedita.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit fuga ut impedit maxime odit sequi voluptates aperiam ex corporis, iure quidem ea tempora, voluptatibus recusandae quisquam quod inventore! Animi ipsam dolorem similique est nostrum veniam velit quasi eligendi praesentium!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa maiores deleniti voluptates adipisci repellat laudantium quo harum fugit voluptatem? Corporis dolorem quasi tenetur reprehenderit sequi impedit expedita! Sequi officia pariatur consectetur unde vel commodi labore quod ducimus velit voluptatum?',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quaerat molestiae qui quis sint explicabo reprehenderit sequi obcaecati earum quod adipisci aspernatur atque, inventore magni sit culpa tempore nesciunt impedit unde hic veniam. Fugiat officia doloribus quibusdam, commodi delectus vero.',
];

const t=document.querySelector("#item");
const randP = document.querySelector("#data");

const generate = () => {
    if(isNaN(t.value) || t.value<0 || t.value>9){
        const rand = Math.floor(Math.random() * textArray.length);
        randP.innerHTML= `<p> ${textArray[rand]} <\p>`;
    }
    else{
        const data=textArray.slice(0, t.value);
        const para= data.map(
            (d) => {
                return `<p> ${d}<\p><br><br><br>`;
            }
        )
        randP.innerHTML = para.join("");
    }
}