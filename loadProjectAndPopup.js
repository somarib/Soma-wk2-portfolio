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
        
    }



}
