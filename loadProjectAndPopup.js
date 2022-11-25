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

    for (let i = 0; i < projectArray.length; i++) {
        if (projectArray[i].ID === id) {


            // Head Section
            const modalHeaderSection = document.createElement('section');
            modalHeaderSection.className = 'modal-header-section';
            const modalCncelContDiv = document.createElement('div');
            modalCncelContDiv.className = 'modal-cncel-cont';
            const textDiv = document.createElement('div');
            textDiv.className = 'modal-header-text';
            const h1 = document.createElement('h1');
            h1.innerHTML = `Multi-Post Story for: ${projectArray[i].ID}`;
            textDiv.appendChild(h1);
            const cancelDiv = document.createElement('div');
            cancelDiv.className = 'modal-cncel';
            const cancela = document.createElement('a');
            cancela.className = 'mbmenu-li-a';
            cancela.addEventListener('click', closeModal);
            const cancelImg = document.createElement('img');
            cancelImg.className = 'mbmenu-li-a';
            cancelImg.src = 'image/close-Icon.png';
            cancelImg.alt = 'close icon';
            cancelImg.id = 'button';
            cancela.appendChild(cancelImg);
            cancelDiv.appendChild(cancela);
            modalCncelContDiv.appendChild(textDiv);
            modalCncelContDiv.appendChild(cancelDiv);
            modalHeaderSection.appendChild(modalCncelContDiv);

            //Img section
            const imgSection = document.createElement('section');
            imgSection.className = 'modal-image-section';
            const imgDiv = document.createElement('div');
            imgDiv.className = 'modal-image-cont';
            const spanMobileImage = document.createElement('span');
            spanMobileImage.classList = 'modal-mobile-project-image';
            spanMobileImage.id = 'show-prooject-image-mobile';
            const projectImg = document.createElement('img');
            projectImg.src = 'image/modal-mobile-Snapshoot-Portfolio .png';
            projectImg.alt = 'project image';
            spanMobileImage.appendChild(projectImg);
            imgDiv.appendChild(spanMobileImage);
            const spanDesktopImage = document.createElement('span');
            spanDesktopImage.classList = 'modal-desktop-project-image';
            spanDesktopImage.id = 'show-prooject-image-desktop';
            const projectDesktopImg = document.createElement('img');
            projectDesktopImg.classList = 'desktop-project-image';
            projectDesktopImg.src = 'image/modal-dktp-Snapshoot-Portfolio.png';
            projectDesktopImg.alt = 'project image';
            spanDesktopImage.appendChild(projectDesktopImg);
            imgDiv.appendChild(spanDesktopImage);
            imgSection.appendChild(imgDiv);

            // Project description Section
      const descriptionSection = document.createElement('section');
      descriptionSection.className = 'modal-project-description-section';

      const descriptionDiv = document.createElement('div');
      descriptionDiv.className = 'modal-description';
      const descriptionP = document.createElement('p');
      descriptionP.innerHTML = projectArray[i].Description;

      descriptionDiv.appendChild(descriptionP);

      const techDiv = document.createElement('div');
      techDiv.className = 'modal-tech';
      const ul = document.createElement('ul');
      ul.className = 'modal-tech-ul';

      const modalTech = ['html', 'Ruby', 'css'];
      for (let i = 0; i < modalTech.length; i ++) {
        const li = document.createElement('li');
        const lia = document.createElement('a');
        lia.href = '#';
        lia.innerHTML = modalTech[i];
        li.appendChild(lia);
        ul.appendChild(li);
      }
      techDiv.appendChild(ul);

      descriptionSection.appendChild(descriptionDiv);
      descriptionSection.appendChild(techDiv);
            
            // Live and Source Section
      const liveSourceSection = document.createElement('section');
      liveSourceSection.className = 'live-and-source-section';

      const liveSourceContDiv = document.createElement('div');
      liveSourceContDiv.className = 'live-and-source-cont';

      const livedemoDiv = document.createElement('div');
      livedemoDiv.className = 'live-demo';
      const livebutton = document.createElement('button');
      livebutton.className = 'btn-live';
      const livetextSpan = 
livebutton.appendChild(livetextSpan);
      livebutton.appendChild(liveimgSpan);

      const anchbtnLive = document.createElement('a');
      anchbtnLive.classList = 'btn-live-a';
      anchbtnLive.href = projectArray[i].See_Live;

      anchbtnLive.appendChild(livebutton);

      livedemoDiv.appendChild(anchbtnLive);

      const sourcecodeDiv = document.createElement('div');
      sourcecodeDiv.className = 'source-code';

      const sourcebutton = document.createElement('button');
      sourcebutton.className = 'btn-source';
      const sourcetextSpan = document.createElement('span');
      sourcetextSpan.className = 'span-source-text';
      sourcetextSpan.innerHTML = 'See Source';
      const sourceimgSpan = document.createElement('span');
      sourceimgSpan.className = 'span-source-image';
      const sourceImg = document.createElement('img');
      sourceImg.src = 'image/modal-dsktp-Icon -GitHub.png';
      sourceImg.alt = 'source icon';
      sourceimgSpan.appendChild(sourceImg);

      const anchbtnSource = document.createElement('a');
      anchbtnSource.classList = 'btn-source-a';
      anchbtnSource.href = projectArray[i].See_Source;

      sourcebutton.appendChild(sourcetextSpan);
      sourcebutton.appendChild(sourceimgSpan);

      anchbtnSource.appendChild(sourcebutton);

      sourcecodeDiv.appendChild(anchbtnSource);

      liveSourceContDiv.appendChild(livedemoDiv);
      liveSourceContDiv.appendChild(sourcecodeDiv);

      liveSourceSection.appendChild(liveSourceContDiv);

      modalInnerContDiv.appendChild(modalHeaderSection);
      modalInnerContDiv.appendChild(imgSection);
      modalInnerContDiv.appendChild(descriptionSection);
      modalInnerContDiv.appendChild(liveSourceSection);

      article.appendChild(modalInnerContDiv);
            
        }
    }
}

let closeModal = () => {
    document.querySelector('.modal-section-mbm').innerHTML = '';
    document.getElementById('mb-modal-hide-show').style.display = 'none';
  };

  let addClickEventToSeeproject = () => {
    document.querySelectorAll('.seeproject').forEach((item) => {
      item.addEventListener('click', () => {
        alert('clicked');
        if (true) {
          const { id } = item;
          popUp(id);
          document.getElementById('mb-modal-hide-show').style.display = 'block';
        }
      });
    });
  };
