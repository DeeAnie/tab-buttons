import style from './style.css';
import avatar from './img/avatar.png';

const section = document.createElement("section");
section.className = "section about-section";

const title = document.createElement("div");
title.className = "title";

const h2 = document.createElement("h2");
h2.innerText = "about";

const aboutCenter = document.createElement("div");
aboutCenter.className = "about-center section-center";

const article = document.createElement("article");
article.className = "about-img";
document.querySelector(".about-img").innerHTML = `
<img
src="${avatar}"/>`;

const articleAbout = document.createElement("article");
articleAbout.className = "about";

const btnContainer = document.createElement("div");
btnContainer.className = "btn-container";

const tabBtn1 = document.createElement("button");
tabBtn1.className = "tab-btn active";
tabBtn1.innerText = "About Us";

const tabBtn2 = document.createElement("button");
tabBtn2.className = "tab-btn";
tabBtn2.innerText = "Our Mission";

const tabBtn3 = document.createElement("button");
tabBtn3.className = "tab-btn";
tabBtn3.innerText = "Our Goals";

const aboutContent = document.createElement("div");
aboutContent.className = "about-content";

const contentAbout = document.createElement("div");
contentAbout.className = "content active";

const h4About = document.createElement("h4");
h4About.innerText = "About Us";

const pAbout = document.createElement("p");
pAbout.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit Repellat quasi adipisci id maiores sequi non harum repudiandae molestiae. Tenetur iste consequatur maiores doloribus, provident ea officia quam velit perspiciatis, fugiat, architecto magni fugit saepe. Perferendis cupiditate architecto sed ab adipisci excepturi molestias modi veniam quae?";

const  contentMission = document.createElement("div");
contentMission.className = "content";

const h4Mission = document.createElement("h4");
h4Mission.innerText = "Our Mission";


const pMission = document.createElement("p");
pMission.innerText = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea cupiditate temporibus, velit optio reprehenderit nesciunt nostrum nemo dolorum fuga atque omnis odit pariatur? Qui accusamus odio commodi nihil distinctio inventore, ratione cupiditate reprehenderit? Recusandae labore soluta, reiciendis nam ab aut necessitatibus quo exercitationem esse magni aspernatur porro quod praesentium perferendis!";


const contentGoals = document.createElement("div");
contentGoals.className = "content";

const h4Goals = document.createElement("h4");
h4Goals.innerText = "Our Goals";

const pGoals = document.createElement("p");
pGoals.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea placeat dolorum cumque dolorem incidunt dolor autem raesentium similique dolore natus quaerat ad adipisci accusamus aperiam veritatis, vitae labore voluptatem, in odio atque iste, omnis voluptatibus molestias? Dolore, illo similique.";


document.body.appendChild(section);
section.appendChild(title);
title.appendChild(h2);
section.appendChild(aboutCenter);
aboutCenter.appendChild(article);
aboutCenter.appendChild(articleAbout);
articleAbout.appendChild(btnContainer);
btnContainer.appendChild(tabBtn1);
btnContainer.appendChild(tabBtn2);
btnContainer.appendChild(tabBtn3);
articleAbout.appendChild(aboutContent);
aboutContent.appendChild(contentAbout);
contentAbout.appendChild(h4About);
contentAbout.appendChild(pAbout);
aboutContent.appendChild(contentMission);
contentMission.appendChild(h4Mission);
contentMission.appendChild(pMission);
aboutContent.appendChild(contentGoals);
contentGoals.appendChild(h4Goals);
contentGoals.appendChild(pGoals);












