

let product = [{
  image: "image/background.jpg"
   }]
  
let data = document.getElementById("main-top");
var html = "";

async function showAvatar() {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos");
    let user = await response.json();
    for await (const data of product) {
    html += `<div>
    <div class="main-top">
    <img class="main-top_background" src="${data.image}" width="100%", height="100%">
    </div>

  
  </div>`;
 }
data.innerHTML = html;
}
showAvatar();






let navbar = document.querySelector('.header-inner .header-menu')
let menu = document.querySelector('#menu')

menu.onclick = () => {
    navbar.classList.toggle('active');
}

let changeIcon = function(icon) {
icon.classList.toggle('fa-times')
}










  
  let products = [{
   
    title: 'About',
    sub_title: 'Speakers'
  
    
  }]
  
  var about = " ";
  products.forEach((card) => {

  about +=`<div class="about-inner" id="about">
  <div class="about-side">
    <div class="left-side">
      <h1 class="about-title">${card.title}</h1>
    </div>
    <div class="right-side">
      <p class="about-text">
        We invite you to join us for Datadog Summit Berlin on September 17, 2019. The summit is a one-day
        event focused on <b>you—our customers and community.</b>
        <br>
        <br>
        <br>
        At the Datadog Summit, you will meet and learn from fellow community members, contributors, and
        Datadog staff. You'll get the latest product updates, learn how your fellow community members are
        using Datadog to build cultures of observability, and participate in open discussions and guided training
        sessions. In the hands-on training, we'll walk through best practices for building better dashboards and
        alerts, developing custom agent integrations, and monitoring and instrumenting your containerized
        applications.
      </p>
    </div>
  </div>
  <div class="about-title title">${card.sub_title}</div>
</div>
  `;
});
document.getElementById("about").innerHTML = about;




let object = [{
   image: 'image/image3.jpg',
  title: 'Kirk Kaiser',
  text: 'Technical Evangelist,Datadog'
}]

var speakers = " ";
object.forEach((card) => {

  speakers +=`<div class="Speakers-inner">
  <div class="Speakers-side common-side">
    <div class="left-side side-left">
      <img src="${card.image}" alt="">
    </div>
    <div class="right-side side-right">
      <h4 class="sub-title">${card.title}</h4>
      
        <div class="sub-text">${card.text}</div>
        <br>
        <br>
        <p class="sub-textarea"><small>Bio:</small> Kirk Kaiser is a Developer Evangelist at Datadog, where he focuses on helping developers build more
        reliable, performant code with APM. Previously, he was the lead backend developer at Triller, scaling the
        app from zero to millions of users, and handling the traffic from being in the top 100 of iOS and Android
        stores at the same time. Kirk is also the author of a book teaching Python programming through art
        instead of print statements, called Make Art with Python.
      </p>
    </div>
  </div>
</div>
`;
});
document.getElementById("speakers").innerHTML = speakers;



let objects = [{
  image: 'image/image4.jpg',
  title: 'Meghan Jordan',
  text: 'Product Manager, Datadog'
}]

var green_one = " ";
objects.forEach((card) => {

  green_one +=` <div class="green-one-inner">
  <div class="green-one-side common-side">
    <div class="left-side side-left">
      <h4 class="sub-title">${card.title}</h4>
      
      <div class="sub-text">${card.text}</div>
      <br>
      <br>
      <p class="sub-textarea">
        <small>Bio:</small>
Meghan is a product manager focused on Datadog's alerting and reporting platform. When she's not
working with customers or calculating uptime, she's walking her dog around Brooklyn and tending to a
surprisingly thriving garden.
    </p>
</div>
    <div class="right-side side-right">
    <img src="${card.image}" alt="">
    </div>
  </div>
  </div>
`;
});
document.getElementById("green_one").innerHTML = green_one;



let subject = [{
  image: 'image/image5.jpg',
  title: 'Yury Petrov',
  text: 'Sr SRE, Google'
}]

var blue = " ";
subject.forEach((card) => {

  blue +=` <div class="blue-one-inner">
  <div class="blue-one-side common-side">
   <div class="left-side side-left">
   <img src="${card.image}" alt="">
   </div>
   <div class="right-side side-right">
     <h4 class="sub-title">${card.title}</h4>
     
     <div class="sub-text">${card.text}</div>
     <br>
     <br>
     <p class="sub-textarea">
       <small>Bio:</small>
       Yury is a Sr SRE, working at Google since 2016. Today he keeps the internal and Cloud Platform alerting
       systems reliable. His previous job at Google was to maintain the Developer Infrastructure.
   </p>
   </div>
  </div>
 </div> 
`;
});
document.getElementById("blue").innerHTML = blue;


let subjects = [
  
  {
  image: 'image/image6.jpg',
  title: 'Edd Payne',
  text: 'Devops Team Lead, Delivery Hero'
}


]

var green = " ";
subjects.forEach((card) => {

  green +=` <div class="green-inner">
  <div class="green-side common-side">
  <div class="left-side side-left">
    <h4 class="sub-title">${card.title}</h4>
    
    <div class="sub-text text-sub">${card.text}</div>
    <br>
    <br>
    <p class="sub-textarea textarea-sub-text">
      <small>Bio:</small>
      From a start of programming in BASIC on an Atari 800, Edd's career has taken him from London to Berlin
      via Barcelona - from running a Windows NT 4 domain on Samba, through running physical servers
      hosting e-commerce sites and tentative first steps with server configuration management using Puppet,
      to managing Kubernetes clusters using Terraform, leading teams managing food delivery platforms
      serving hundreds of thousands of customers a day, and becoming an evangelist for automation and
      simplifying processes where possible along the way.
  </p>
  </div>
  <div class="right-side side-right">
  <img src="${card.image}" alt="">
  </div>
 </div>
 </div>
`;
});
document.getElementById("green").innerHTML = green;



let texts = [{
 
}]

var only_text = " ";
texts.forEach((card) => {

  only_text +=`<div class="workshop-inner">
  <div class="workshop-content">
  <div class="workshop-body">
  <div class="about-title title title-blue">Workshop Information</div>
  <div class="sub-title sub-title-green">Workshop: Intro to Datadog</div>
    <div class="sub-text text-sub-text">Transform yourself from a monitoring novice to a Datadog expert with this two-part hands-on training led
      by the engineers who build, maintain, and support Datadog. In this first section we'll share best practices
      for building insightful dashboards and visualizations and tips for effective alerting. Attendees will leave
      with hands-on experience using these techniques that they can bring home to their own environments
      for more effective monitoring.</div>
  </div>
  

  <div class="workshop-body body-workshop">
  <div class="sub-title sub-title-green-yllow">Workshop: Hands on with Chaos Engineering</div>
  <div class="sub-text text-sub-text">As applications become more distributed and complex, so do our failure modes. In this workshop, you’ll
    learn how to embrace failure and learn the most from it. We’ll start with a look at how Datadog runs
    chaos experiments and game days—including who’s involved, how we plan, and the tests we run. Then
    we’ll get hands on with some interactive chaos experiments.</div>
 </div>
  <div class="workshop-body">
  <div class="sub-title sub-title-blue">Workshop: Modern Observability in Practice with Distributed Tracing</div>
  <div class="sub-text text-sub-text">In this hands on workshop, we'll instrument and fix a broken microservices web application using
    Datadog APM and distributed tracing. With the application now working as expected, we'll pinpoint a
    performance degradation and deploy updates that ensure it's running optimally.
    We’ll see how observability gives us immediate, actionable insight into problems with our distributed
    software systems regardless of our deployment methodology, language, or infrastructure decisions.
    Combined with metrics, logs, and synthetics, our traces will allow us to rapidly identify issues, deploy
    changes, and verify results in heterogeneous environments with confidence.
    We'll see how traces form the 'missing link' in getting the most out of your production software.</div>
 </div>
  <div class="workshop-body body-workshop">
  <div class="sub-title sub-title-black">Workshop: Reducing MTTR with Log Management</div>
  <div class="sub-text text-sub-text">Gaining insights into application behavior by combining metrics, tracing, and logs can help you reduce
    mean time to detection and resolution of operational incidents, allowing you to address issues before
    your users notice service impact. With the help of hands-on labs, this workshop will take attendees from
    beginner to expert in log management with Datadog. Participants will walk through best practices for log
    collection and processing, and then dive into scenarios that will build experience with troubleshooting
    and monitoring techniques. Attendees will leave with hands-on experience with logging, plus strategies
    that will provide insights into application behavior and user experiences.</div>
 </div>
</div>

  </div>
`;
});
document.getElementById("workshop").innerHTML = only_text;




var link = [{
  features:  [
        "Haus Ungarn",
        "Eingang neben TITUS, Karl-Liebknecht-Straβe 9, 10997",
        "Berlin, Germany"
       
      
  ],

  title: 'Location',
  sub_title: 'RSVP Form'
 

  
}



]


  

var item = " ";
link.forEach((card) => {

  item +=`  <div class="form-inner">
  <div class="form-content">
    <div class="location">
      <h2 class="fofm-location">${card.title}</h2>
      <ul class="form-list">
   ${card.features.map((features) => `<li>${features}</li>`).join('')}
      </ul>
    </div>
    <div class="side-form">
      <h2 class="fofm-location">${card.sub_title}</h2>
      <form action="">
        <div class="form-name">
        <label for="text">First Name:</label>
        <input type="text" class="input">
      </div>
        <div class="form-name">
        <label for="text">Last Name:</label>
        <input type="text" class="input">
      </div>
        <div class="form-name">
        <label for="text">Company:</label>
        <input type="text" class="input-text">
      </div>
        <div class="form-name">
        <label for="email">Email:</label>
        <input type="Email" class="input-email">
      </div>
      
      <div class="button">
      <button class="submit" type="submit">Submit</button>
    </div>
    </form>
    </div>
  </div>
 </div>
`;
});
document.getElementById("form").innerHTML = item;




var images = [{

 title: 'Resources',
 text: 'Explore Datadog on your own Learn about Datadog at your own pace with these on-demand resources.'

  
}
]


  

var resources = " ";
images.forEach((card) => {

  resources +=`   <div class="resources-inner">
  <div class="resources-content">
    
      <div class="resources-item-title">
    <h1 class="about-title title-about">${card.title}</h1>
    <div class="text-sub-text resources-text">${card.text}</div>
    </div>

  <div class="resources-item-image">
    <img src="image/image7.jpg" alt="" class="resources-image">
    <div class="resources-title-item">
      <div class="resources-title">Webinars</div>
      <div class="text-sub-text resources-sub-text">On-Demand Webinars<br>
        Brows our catalogue of on-<br>demand product introductions<br> and training.</div>
        <button class="button resources-button button-blue">Learn More</button>
  </div>
  </div>

  <div class="resources-item-image">
    <div class="resources-title-item">
      <div class="resources-title Ebook">E-Book</div>
      <div class="text-sub-text resources-sub-text">Monitoring Modern Infrastructure
        Build an effective framework for monitoring dynamic<br> infrastructure and applications</div>
        <button class="button resources-button button-green">Learn More</button>
      
  </div>
    <img src="image/image8.jpg" alt="" class="resources-image">
     
   
</div>
  <div class="resources-item-image">
    <img src="image/image9.jpg" alt="" class="resources-image">
    <div class="resources-title-item">
      <div class="resources-title learning">Learning</div>
      <div class="text-sub-text resources-sub-text">Learning Center<br>
        Take guided courses to learn<br> about Datadog products and<br> best practices</div>
        <button class="button resources-button button-violet">Learn More</button>
  </div>
  </div>
</div>
</div>
`;
});
document.getElementById("resources").innerHTML = resources;




let links = document.querySelectorAll(".menu-link > a");
for (let i = 0; i < links.length; i++ ) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"})
    }; 
}