let elBody = document.body
let elsection = document.createElement('section');
let elDiv_1 = document.createElement('div');
let elImg = document.createElement('img');
let elTitle = document.createElement('h3');
let eltext_1 = document.createElement('p');
let elDiv_2 = document.createElement('div')
let eltext_2 = document.createElement('p')
let eltext_3 = document.createElement('p');
let eltext4 = document.createElement('p');
let elLink = document.createElement('p');



elBody.style.display = 'flex';
elBody.style.justifyContent = 'center';
elBody.style.alignItems = 'center';
elBody.style.width = '100%';
elBody.style.height = '100vh';
elImg.style.width = '150px';
elImg.style.height = '150px';
elImg.style.objectFit = 'cover';
elsection.style.textAlign = 'center';

elTitle.style.cssText = `
color: rgba(0, 0, 0, 0.80);
font-family: Catamaran;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

eltext_1.style.cssText = `
color: #909090;
font-family: Catamaran;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 20px;
`

eltext_2.style.cssText = `
color: #505050;
font-family: Catamaran;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
width: 350px;
`

eltext_3.style.cssText = `
color: #505050;
font-family: Catamaran;
font-size: 17px;
font-style: normal;
font-weight: 500;
line-height: normal;
width: 350px;
text-align: center;
`


eltext4.style.cssText = `
color: #505050;
font-family: Catamaran;
font-size: 17px;
font-style: normal;
font-weight: 500;
line-height: normal;
width: 350px;
text-align: center;
`

elLink.style.cssText = `
color: rgba(80, 80, 80, 0.50);
text-align: center;
font-family: Montserrat;
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -1.6px;
text-decoration-line: underline;
`





elImg.src = './img/asd.png'
elTitle.textContent = 'The Grand Creator!'
eltext4.textContent = 'Cheers.'
elLink.textContent = 'www.ehsan.cc'
eltext_3.textContent = 'You can follow me in social media and contact me for collaboration.'
eltext_1.textContent = '22 / Male'
eltext_2.textContent = 'Hey there, stranger! I’m Ehsan. A creative UX Designer working from home. I hope this pack of user persona profiles and personality cards prove useful for you and your users.'


elBody.append(elsection);
elsection.append(elDiv_1);
elsection.append(elImg);
elsection.append(elTitle);
elsection.append(eltext_1);
elsection.append(elDiv_2);
elsection.append(eltext_2);
elsection.append(eltext_3);
elsection.append(eltext4);
elsection.append(elLink);