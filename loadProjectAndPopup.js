const projectArray = [
    {
        ID: 'display-project1',
        Name: 'Multi-Post Story 1',
        Description:
            ' Porject 1 Description: A daily selection of privately personalized reads'
            + ';'
            + ' no accounts or sign-ups required.'
            + "has been the industry's standard dummy text ever since the 1500s,"
            + 'when an unknown printer took a standard dummy text.',
        Featured_image: 'image/Img-Placeholder.png',
        Technologies: ['CSS', 'html', 'bootstrap', 'Ruby'],
        See_Live: 'https://somarib.github.io/',
        See_Source: 'https://github.com/somarib/Soma-wk2-portfolio',
      },
    {
    ID: 'display-project2',
    Name: 'Multi-Post Story 2',
    Description:
        ' Porject 2 Description: A daily selection of privately personalized reads'
        + ';'
        + ' no accounts or sign-ups required.'
        + "has been the industry's standard dummy text ever since the 1500s,"
        + 'when an unknown printer took a standard dummy text.',
    Featured_image: 'image/Img-Placeholder.png',
    Technologies: ['CSS', 'html', 'bootstrap', 'Ruby'],
    See_Live: 'https://somarib.github.io/',
    See_Source: 'https://github.com/somarib/Soma-wk2-portfolio',
  },
    {
    ID: 'display-project3',
    Name: 'Multi-Post Story 3',
    Description:
        ' Porject 3 Description: A daily selection of privately personalized reads'
        + ';'
        + ' no accounts or sign-ups required.'
        + "has been the industry's standard dummy text ever since the 1500s,"
        + 'when an unknown printer took a standard dummy text.',
    Featured_image: 'image/Img-Placeholder.png',
    Technologies: ['CSS', 'html', 'bootstrap', 'Ruby'],
    See_Live: 'https://somarib.github.io/',
    See_Source: 'https://github.com/somarib/Soma-wk2-portfolio',
  },
    {
    ID: 'display-project4',
    Name: 'Multi-Post Story 4',
    Description:
        ' Porject 4 Description: A daily selection of privately personalized reads'
        + ';'
        + ' no accounts or sign-ups required.'
        + "has been the industry's standard dummy text ever since the 1500s,"
        + 'when an unknown printer took a standard dummy text.',
    Featured_image: 'image/Img-Placeholder.png',
    Technologies: ['CSS', 'html', 'bootstrap', 'Ruby'],
    See_Live: 'https://somarib.github.io/',
    See_Source: 'https://github.com/somarib/Soma-wk2-portfolio',
  }
];

const createProject = () => {
    const article = document.querySelector('#work-list-article');
    let div = document.createElement('div');
    div.className = 'wl-inner-cont';
    article.appendChild(div);

    const h1 = document.createElement('h1');
    h1.innerHTML = 'MY RECENT WORK';
    h1.id = 'my-work';
    h1.className = 'my-work';
    const img = document.createElement('img');
    img.src = 'image/work-divider.png';
    img.className = 'img-workDivider';
    img.alt = 'divider image';

    const section = document.createElement('section');
    section.append(h1, img);
    div = document.querySelector('.wl-inner-cont');
    div.appendChild(section);

    for (let i = 0; i < projectArray.length; i++) {
        const projectsection = document.createElement('section');
    projectsection.className = projectArray[i].ID + ' flex';

    const placeholderdiv = document.createElement('div');
    placeholderdiv.className = 'placeholder-div';
    const placeholderparagraph = document.createElement('p');
    const placeholderimg = document.createElement('img');
    placeholderimg.src = 'image/Img-Placeholder.png';
    placeholderimg.alt = 'image of project';
    placeholderimg.className = 'ph-image';
    placeholderparagraph.appendChild(placeholderimg);
    placeholderdiv.appendChild(placeholderparagraph);
    projectsection.appendChild(placeholderdiv);

    const projecttextnavdiv = document.createElement('div');
    projecttextnavdiv.className = 'project-text-nav flex';
    const h2 = document.createElement('h2');
    h2.className = 'hh2';
    h2.innerHTML = projectArray[i].Name;
    const projectparagraph = document.createElement('p');
    projectparagraph.className = 'flex-item holdtext';
    projectparagraph.innerHTML = projectArray[i].Description;
        
     const ul = document.createElement('ul');
    ul.className = 'flex-item navlang-flex flex';
    ul.id = 'pn_flex';
    let a = document.createElement('a');
    let li = document.createElement('li');
    const tech = ['CSS', 'html', 'bootstrap', 'Ruby'];
    for (let i = 0; i < tech.length; i++) {
      a = document.createElement('a');
      a.href = '#';
      a.className = 'subflex-item artag';
      a.innerHTML = tech[i];
      li = document.createElement('li');
      li.appendChild(a);
      ul.appendChild(li);
    }

    const seeprojectul = document.createElement('ul');
    seeprojectul.className = 'seep';
    const seeprojectli = document.createElement('li');
    const seeprojecta = document.createElement('a');
    seeprojecta.classList = 'subflex-item seeproject';
    seeprojecta.id = projectArray[i].ID;
    seeprojecta.innerHTML = 'See Project';
    seeprojectli.appendChild(seeprojecta);
    seeprojectul.appendChild(seeprojectli);

    projecttextnavdiv.appendChild(h2);
    projecttextnavdiv.appendChild(projectparagraph);
    projecttextnavdiv.appendChild(ul);
    projecttextnavdiv.appendChild(seeprojectul);
    projectsection.appendChild(projecttextnavdiv);

    document.querySelector('.wl-inner-cont').appendChild(projectsection);


    }
    addClickEventToSeeproject();



}

const popUp = (id) => {
    let article = document.createElement('article');
    article = document.querySelector('.modal-section-mbm');
    const modalInnerContDiv = document.createElement('div');
    modalInnerContDiv.className = 'modal-inner-cont-mbm';


}
